import { require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { SITE_URL } from "./site-D7s06t8h.mjs";
import { QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-kjuKp9UR.js
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DUB1KL5v.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: ({ matches }) => {
		const pathname = matches[matches.length - 1]?.pathname;
		const pageUrl = pathname === "/" || !pathname ? SITE_URL : `${SITE_URL}${pathname}`;
		return {
			meta: [
				{ charSet: "utf-8" },
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1"
				},
				{ title: "PCReady — Fresh PC. Ready Faster." },
				{
					name: "description",
					content: "PCReady rebuilds your Windows software environment in minutes: 336 curated apps across 23 categories, 5 setup profiles, automated installation, WinGet and direct installers."
				},
				{
					name: "author",
					content: "PCReady"
				},
				...[{
					httpEquiv: "Content-Security-Policy",
					content: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'"
				}, {
					name: "referrer",
					content: "strict-origin-when-cross-origin"
				}],
				{
					property: "og:site_name",
					content: "PCReady"
				},
				{
					property: "og:title",
					content: "PCReady — Fresh PC. Ready Faster."
				},
				{
					property: "og:description",
					content: "A Windows desktop application for rebuilding your software environment after a fresh installation."
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					property: "og:url",
					content: pageUrl
				},
				{
					property: "og:image",
					content: `${SITE_URL}/images/pcready-og.png`
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				},
				{
					name: "twitter:title",
					content: "PCReady — Fresh PC. Ready Faster."
				},
				{
					name: "twitter:description",
					content: "Rebuild your Windows software environment in minutes."
				}
			],
			links: [
				{
					rel: "stylesheet",
					href: styles_default
				},
				{
					rel: "icon",
					href: "/favicon.ico",
					type: "image/x-icon"
				},
				{
					rel: "apple-touch-icon",
					href: "/images/pcready-og.png"
				},
				{
					rel: "canonical",
					href: pageUrl
				}
			]
		};
	},
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$8 = () => import("./routes-D2ddwJkw.mjs");
var title$8 = "PCReady — Fresh PC. Ready Faster.";
var description$8 = "PCReady rebuilds your Windows software environment in minutes: 336 curated apps across 23 categories, 5 setup profiles, automated installation, WinGet and direct installers.";
var Route$8 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: title$8 },
		{
			name: "description",
			content: description$8
		},
		{
			property: "og:title",
			content: title$8
		},
		{
			property: "og:description",
			content: description$8
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./catalog-BSZYmlFd.mjs");
var title$7 = "App Catalog — PCReady";
var description$7 = "Browse 336 curated Windows applications across 23 categories, with publisher, version, category, and installed state.";
var Route$7 = createFileRoute("/catalog")({
	head: () => ({ meta: [
		{ title: title$7 },
		{
			name: "description",
			content: description$7
		},
		{
			property: "og:title",
			content: title$7
		},
		{
			property: "og:description",
			content: description$7
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./documentation-CKvLMy7h.mjs");
var title$6 = "Documentation — PCReady";
var description$6 = "PCReady documentation: getting started, profiles, installation states, settings, logging, and the technical architecture behind the application.";
var Route$6 = createFileRoute("/documentation")({
	head: () => ({ meta: [
		{ title: title$6 },
		{
			name: "description",
			content: description$6
		},
		{
			property: "og:title",
			content: title$6
		},
		{
			property: "og:description",
			content: description$6
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./download-wLHm1Fns.mjs");
var title$5 = "Download PCReady — Free Windows Setup Tool";
var description$5 = "Download PCReady, the free Windows desktop application for rebuilding your software environment on Windows 10 and Windows 11 (x64 and ARM64).";
var Route$5 = createFileRoute("/download")({
	head: () => ({ meta: [
		{ title: title$5 },
		{
			name: "description",
			content: description$5
		},
		{
			property: "og:title",
			content: title$5
		},
		{
			property: "og:description",
			content: description$5
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./features-lAylaY_2.mjs");
var title$4 = "Features — PCReady";
var description$4 = "Curated app catalog, WinGet search, setup profiles, automated installation queue, installed-app detection, and a hardened download manager.";
var Route$4 = createFileRoute("/features")({
	head: () => ({ meta: [
		{ title: title$4 },
		{
			name: "description",
			content: description$4
		},
		{
			property: "og:title",
			content: title$4
		},
		{
			property: "og:description",
			content: description$4
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./how-it-works-0HL9VWVc.mjs");
var title$3 = "How It Works — PCReady";
var description$3 = "Discover, select, install, ready: how PCReady queues, downloads, verifies, and installs Windows applications after a fresh install.";
var Route$3 = createFileRoute("/how-it-works")({
	head: () => ({ meta: [
		{ title: title$3 },
		{
			name: "description",
			content: description$3
		},
		{
			property: "og:title",
			content: title$3
		},
		{
			property: "og:description",
			content: description$3
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./privacy-CtEkXpzb.mjs");
var title$2 = "Privacy — PCReady";
var description$2 = "How PCReady handles local data: settings and logs are stored on your own machine and sensitive credentials are never logged.";
var Route$2 = createFileRoute("/privacy")({
	head: () => ({ meta: [
		{ title: title$2 },
		{
			name: "description",
			content: description$2
		},
		{
			property: "og:title",
			content: title$2
		},
		{
			property: "og:description",
			content: description$2
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./profiles-CfyagMk7.mjs");
var title$1 = "Setup Profiles — PCReady";
var description$1 = "Install complete Windows software environments with 5 built-in PCReady profiles — Student, Gamer, Mobile Developer, Data / Python, Technician — or build a custom profile and install only what is missing.";
var Route$1 = createFileRoute("/profiles")({
	head: () => ({ meta: [
		{ title: title$1 },
		{
			name: "description",
			content: description$1
		},
		{
			property: "og:title",
			content: title$1
		},
		{
			property: "og:description",
			content: description$1
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./terms-BeBqT6vT.mjs");
var title = "Terms — PCReady";
var description = "Terms of use for PCReady, a free Windows desktop application for preparing software environments after a fresh installation.";
var Route = createFileRoute("/terms")({
	head: () => ({ meta: [
		{ title },
		{
			name: "description",
			content: description
		},
		{
			property: "og:title",
			content: title
		},
		{
			property: "og:description",
			content: description
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$8.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$9
	}),
	CatalogRoute: Route$7.update({
		id: "/catalog",
		path: "/catalog",
		getParentRoute: () => Route$9
	}),
	DocumentationRoute: Route$6.update({
		id: "/documentation",
		path: "/documentation",
		getParentRoute: () => Route$9
	}),
	DownloadRoute: Route$5.update({
		id: "/download",
		path: "/download",
		getParentRoute: () => Route$9
	}),
	FeaturesRoute: Route$4.update({
		id: "/features",
		path: "/features",
		getParentRoute: () => Route$9
	}),
	HowItWorksRoute: Route$3.update({
		id: "/how-it-works",
		path: "/how-it-works",
		getParentRoute: () => Route$9
	}),
	PrivacyRoute: Route$2.update({
		id: "/privacy",
		path: "/privacy",
		getParentRoute: () => Route$9
	}),
	ProfilesRoute: Route$1.update({
		id: "/profiles",
		path: "/profiles",
		getParentRoute: () => Route$9
	}),
	TermsRoute: Route.update({
		id: "/terms",
		path: "/terms",
		getParentRoute: () => Route$9
	})
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
