# PCReady — Website

Marketing and documentation site for **PCReady — Fresh PC. Ready Faster.**, a Windows
desktop application that rebuilds your software environment after a fresh install.

Built with [TanStack Start](https://tanstack.com/start) (SSR), React 19, Vite 8,
and Tailwind CSS v4.

The site is **statically prerendered (SSG)** at build time, so the output can be hosted
anywhere — GitHub Pages, Netlify, Cloudflare Pages, Vercel, or a plain web server.

---

## Development

Requires Node.js 20+ (npm is the package manager).

```sh
npm install
npm run dev      # local dev server with HMR
```

## Checks

```sh
npm run typecheck   # tsc --noEmit
npm run lint        # eslint
npm run format      # prettier --write
```

## Build & preview

```sh
npm run build       # statically prerenders all routes + copies public/ to .output/public
npm run preview     # serve the production build locally
```

## Deploying

1. Set your production origin before deploying (it feeds `sitemap.xml` and `og:` tags):

   ```sh
   # e.g. locally or in your CI environment
   VITE_SITE_URL=https://your-domain.example npm run build
   ```

   If you skip this, the fallback `https://pcready.app` is used — update the default in
   `src/lib/site.ts` if you don't set the env var.

2. `npm run build` produces the deployable static site under **`.output/public`**.

3. Deploy that directory to any static host:

   | Host             | Notes                                                                                               |
   | ---------------- | --------------------------------------------------------------------------------------------------- |
   | Cloudflare Pages | Direct upload folder `.output/public`                                                               |
   | Netlify          | Build command `npm run build`, publish dir `.output/public`                                         |
   | Vercel           | Same build; static output.                                                                          |
   | GitHub Pages     | Run the build in CI and publish `.output/public` as an artifact (build output dirs are gitignored). |
   | Any VPS / CDN    | Copy `.output/public` to your web root.                                                             |

> The release binary is committed under `public/downloads/` (`PCReady.exe`, self-contained
> portable build ~161 MB, plus `VERSION.txt`) on purpose so every download button can serve it
> directly without external hosting. Any 404/hash mismatch is avoided because the file ships
> with the site.

## Security headers

The site ships two layers of hardening:

- **CSP + Referrer-Policy `<meta>` tags** are injected at prerender time into every page
  (`src/routes/__root.tsx`, production builds only). The CSP allows `'unsafe-inline'`
  scripts/styles because TanStack Start's prerendered HTML needs them.
- **`public/_headers`** (Cloudflare Pages / Netlify format) carries HSTS, `nosniff`,
  `X-Frame-Options`, `Permissions-Policy`, and COOP/CORP. It is merged into
  `.output/public/_headers` during the build (nitro appends its `/assets/*` cache rule).
  GitHub Pages and plain VPS servers ignore `_headers` — if you want those headers there,
  configure them in your web server (nginx/Caddy) or platform settings instead.

## Keeping site data in sync with the app

Site data is generated from the app repo's `app_catalog.json` (single source of truth —
336 apps across 23 categories, plus the 5 built-in profiles from `ProfileManager.cs`).

```sh
# from this repo, pointing at the app repo's catalog:
node scripts/generate-catalog.mjs "E:\allinone - Copy (2)\src\AllInOne\app_catalog.json"
```

After re-running it you must **regenerate the download checksums** if the release files
under `public/downloads/` change:

```powershell
Get-ChildItem public/downloads -File | ForEach-Object {
  "{0}  {1}" -f (Get-FileHash $_.FullName -Algorithm SHA256).Hash.ToLower(), $_.Name
} | Sort-Object | Set-Content public/downloads/SHA256SUMS.txt
```

Then update the matching `sha256` + `sizeBytes` fields in `src/lib/site.ts`.

## Routes

| URL              | File                           |
| ---------------- | ------------------------------ |
| `/`              | `src/routes/index.tsx`         |
| `/features`      | `src/routes/features.tsx`      |
| `/catalog`       | `src/routes/catalog.tsx`       |
| `/profiles`      | `src/routes/profiles.tsx`      |
| `/how-it-works`  | `src/routes/how-it-works.tsx`  |
| `/documentation` | `src/routes/documentation.tsx` |
| `/download`      | `src/routes/download.tsx`      |
| `/privacy`       | `src/routes/privacy.tsx`       |
| `/terms`         | `src/routes/terms.tsx`         |

## Project structure

- `src/data/catalog.ts` — auto-generated app catalog + profiles (see "Keeping site data in sync").
- `src/data/pcready.ts` — hand-written site content (FAQ, queue mock).
- `src/lib/site.ts` — site constants: `SITE_URL`, download artifact metadata + checksums.
- `scripts/generate-catalog.mjs` — catalog/profile generator.
- `public/downloads/` — self-contained portable release (`PCReady.exe` + `VERSION.txt`), served directly by every download button.
