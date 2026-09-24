// Statically prerendered (SSG): TanStack Start's prerender pass writes one
// index.html per route during `vite build`, and nitro emits the SSG output
// under .output/public — deploy ONLY that directory anywhere (GitHub Pages,
// Netlify, Cloudflare Pages, a VPS, a CDN static bucket). No Node server is
// required at runtime.
//
// NB: do NOT set `nitro: { preset: "static" }`. With the Vite (rolldown)
// builder, static presets skip emitting the server bundle that TanStack
// Start's own prerenderer fetches pages from, which breaks the prerender
// step. Leave the nitro default preset at cloudflare-module and deploy
// `.output/public`.
import { basename, extname, join, relative, resolve, sep } from "node:path";
import { access, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import {
  defineConfig,
  type Plugin,
  type PluginOption,
  type ResolvedConfig,
  type UserConfig,
} from "vite";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";

const NITRO_SERVER_ENTRY = "index.mjs";
const NITRO_DEFAULT_SERVER_DIR = ".output/server";
const DEFAULT_SERVER_ENTRY_NAME = "server";
const TSS_PRERENDERING_ENV = "TSS_PRERENDERING";
const PRERENDER_PREVIEW_HOST = "127.0.0.1";
const SHIM_MARKER = "// Generated for the prerender preview server.";

const exists = async (candidate: string) => {
  try {
    await access(candidate);
    return true;
  } catch {
    return false;
  }
};

// The preview server TanStack starts during prerender imports
// `<serverOutDir>/<entryName>.js` and calls `fetch`. Nitro emits its own
// handler as `.output/server/index.mjs`, so bridge the two with a small shim
// written after the app build and removed again once prerender is done.
function prerenderPreviewShim(state: { file?: string }) {
  let root = process.cwd();
  let serverEntryName = DEFAULT_SERVER_ENTRY_NAME;
  return {
    name: "pcready-prerender-preview-shim",
    apply: "build",
    config(userConfig: UserConfig) {
      const ssrBuild = userConfig.environments?.["ssr"]?.build;
      const input = ssrBuild?.rolldownOptions?.input ?? ssrBuild?.rollupOptions?.input;
      if (typeof input === "string") serverEntryName = input;
    },
    configResolved(config: ResolvedConfig) {
      root = config.root;
    },
    buildApp: {
      order: "post",
      handler: async () => {
        let entryDir;
        for (const candidate of [NITRO_DEFAULT_SERVER_DIR, join("dist", "server")]) {
          if (await exists(join(resolve(root, candidate), NITRO_SERVER_ENTRY))) {
            entryDir = resolve(root, candidate);
            break;
          }
        }
        if (!entryDir) {
          return;
        }
        const shimDir = resolve(root, join("dist", "server"));
        const entryName =
          basename(serverEntryName, extname(serverEntryName)) || DEFAULT_SERVER_ENTRY_NAME;
        const target = join(shimDir, `${entryName}.js`);
        const occupant = await readFile(target, "utf8").catch(() => undefined);
        if (occupant !== undefined && !occupant.startsWith(SHIM_MARKER)) {
          return;
        }
        let vars: Record<string, unknown> = {};
        try {
          const wrangler = JSON.parse(await readFile(join(entryDir, "wrangler.json"), "utf8")) as {
            vars?: unknown;
          };
          if (wrangler.vars && typeof wrangler.vars === "object" && !Array.isArray(wrangler.vars))
            vars = wrangler.vars as Record<string, unknown>;
        } catch {
          vars = {};
        }
        const specifier = relative(shimDir, join(entryDir, NITRO_SERVER_ENTRY))
          .split(sep)
          .join("/");
        await mkdir(shimDir, { recursive: true });
        await writeFile(
          target,
          `${SHIM_MARKER}
import server from "${specifier.startsWith(".") ? specifier : `./${specifier}`}";

const env = ${JSON.stringify(vars)};
const ctx = { waitUntil() {}, passThroughOnException() {}, props: {} };

export default {
  fetch(request) {
    // srvx's NodeRequest exposes \`ip\` as a getter-only accessor and nitro's
    // cloudflare module handler assigns to it; shadow it with a writable one.
    Object.defineProperty(request, "ip", { value: undefined, writable: true, configurable: true });
    return server.fetch(request, env, ctx);
  },
};
`,
        );
        state.file = target;
      },
    },
  } as Plugin;
}

function prerenderPreviewShimCleanup(state: { file?: string }) {
  return {
    name: "pcready-prerender-preview-shim-cleanup",
    apply: "build",
    enforce: "post",
    buildApp: {
      order: "post",
      handler: async () => {
        if (state.file) {
          await rm(state.file, { force: true });
          delete state.file;
        }
      },
    },
  } as Plugin;
}

export default defineConfig(async (env) => {
  const { command } = env;
  const shimState: { file?: string } = {};

  const plugins: PluginOption[] = [
    tailwindcss(),
    ...tanstackStart({
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
      // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
      server: { entry: "server" },
      // Pre-render every route to static HTML at build time.
      prerender: {
        enabled: true,
        autoSubfolderIndex: true,
        crawlLinks: true,
        // /downloads/* are real release binaries (exe/zip) served from the static public dir,
        // not routes — don't let the link crawler try to fetch them.
        filter: ({ path }: { path: string }) => !path.startsWith("/downloads/"),
      },
    }),
  ];

  if (command === "build") {
    plugins.push(
      nitro({ defaultPreset: "cloudflare-module" }),
      prerenderPreviewShim(shimState),
      prerenderPreviewShimCleanup(shimState),
    );
  }

  plugins.push(viteReact());

  const config: Record<string, unknown> = {
    css: { transformer: "lightningcss" },
    resolve: {
      alias: { "@": `${process.cwd()}/src` },
      tsconfigPaths: true,
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    optimizeDeps: {
      include: [
        "react",
        "react-dom",
        "react-dom/client",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
      ],
      ignoreOutdatedRequests: true,
    },
    server: { host: "::", port: 8080 },
    plugins,
  };

  if (env.isPreview && process.env[TSS_PRERENDERING_ENV] === "true") {
    Object.assign(config, { preview: { host: PRERENDER_PREVIEW_HOST, port: 0 } });
  }

  return config;
});
