import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { Container, buttonClass, cn } from "./primitives-DoEGU8Cj.mjs";
import { SITE_URL, downloadArtifact } from "./site-Bvq3kyV4.mjs";
import { Menu, X } from "../_libs/lucide-react.mjs";
import { DownloadButton } from "./DownloadButton-Dm8B2847.mjs";
import { QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BAV5caSI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DOaFboTv.css";
function PCReadyMark({ className, tone = "light" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "/images/pcready-mark.png",
		alt: "PCReady logo",
		"aria-hidden": "true",
		className: cn("shrink-0 object-contain", tone === "dark" && "brightness-90", className)
	});
}
var links = [
	{
		label: "Features",
		to: "/features"
	},
	{
		label: "App Catalog",
		to: "/catalog"
	},
	{
		label: "Profiles",
		to: "/profiles"
	},
	{
		label: "How It Works",
		to: "/how-it-works"
	},
	{
		label: "Documentation",
		to: "/documentation"
	}
];
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("sticky top-0 z-50 border-b bg-surface/90 backdrop-blur-sm transition-shadow", scrolled ? "border-border shadow-panel" : "border-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "flex h-16 items-center justify-between gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2.5",
					"aria-label": "PCReady home",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PCReadyMark, { className: "h-8 w-8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[17px] font-bold tracking-tight text-foreground",
						children: "PCReady"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Main",
					className: "hidden items-center gap-1 lg:flex",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-hover hover:text-foreground",
						activeProps: { className: "bg-nav-active text-foreground" },
						children: l.label
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-2 lg:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/features",
						className: buttonClass({
							variant: "secondary",
							size: "sm"
						}),
						children: "Explore Features"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DownloadButton, { size: "sm" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: buttonClass({
						variant: "secondary",
						size: "sm",
						className: "lg:hidden"
					}),
					"aria-expanded": open,
					"aria-controls": "mobile-nav",
					"aria-label": open ? "Close menu" : "Open menu",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "mobile-nav",
			className: "border-t border-border bg-surface lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "flex flex-col gap-1 py-4",
				children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					onClick: () => setOpen(false),
					className: "rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-hover",
					activeProps: { className: "bg-nav-active" },
					children: l.label
				}, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-col gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DownloadButton, {
						size: "lg",
						className: "w-full"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/features",
						onClick: () => setOpen(false),
						className: buttonClass({
							variant: "secondary",
							className: "w-full"
						}),
						children: "Explore Features"
					})]
				})]
			})
		}) : null]
	});
}
var groups = [{
	title: "Product",
	links: [
		{
			label: "Features",
			to: "/features"
		},
		{
			label: "App Catalog",
			to: "/catalog"
		},
		{
			label: "Profiles",
			to: "/profiles"
		},
		{
			label: "How It Works",
			to: "/how-it-works"
		}
	]
}, {
	title: "Resources",
	links: [
		{
			label: "Documentation",
			to: "/documentation"
		},
		{
			label: "Privacy",
			to: "/privacy"
		},
		{
			label: "Terms",
			to: "/terms"
		}
	]
}];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-[#2E3033] text-[#E5E4E2]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PCReadyMark, {
								className: "h-8 w-8",
								tone: "dark"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[17px] font-bold tracking-tight text-white",
								children: "PCReady"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-[#A7A9AC]",
							children: "Fresh PC. Ready Faster."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-sm text-sm leading-relaxed text-[#A7A9AC]",
							children: "A Windows desktop application for rebuilding your software environment after a fresh installation."
						})
					] }), groups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": g.title,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A7A9AC]",
							children: g.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2.5",
							children: g.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: l.to,
								className: "text-sm text-[#E5E4E2] transition-colors hover:text-white",
								children: l.label
							}) }, l.to))
						})]
					}, g.title))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 flex flex-col gap-3 border-t border-[#53565A] pt-6 text-xs text-[#A7A9AC] sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" PCReady. All rights reserved."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-x-4 gap-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: downloadArtifact.href,
							download: downloadArtifact.file,
							rel: "noopener",
							className: "font-semibold text-[#E5E4E2] transition-colors hover:text-white",
							children: "Download PCReady"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono",
							children: "Windows 10 · Windows 11 · x64 · ARM64"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-xs leading-relaxed text-[#8b8d91]",
					children: [
						"PCReady does not promote cracked, pirated, or unlicensed software. You are responsible for obtaining valid licences for the software you install. See our",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/terms",
							className: "text-[#A7A9AC] underline underline-offset-2 hover:text-white",
							children: "Terms of Use"
						}),
						" ",
						"for details."
					]
				})
			]
		})
	});
}
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
var Route$8 = createRootRouteWithContext()({
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
					href: "/images/pcready-mark.png"
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
	const { queryClient } = Route$8.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
			]
		})
	});
}
var $$splitComponentImporter$7 = () => import("./routes-C78xUv4w.mjs");
var title$7 = "PCReady — Fresh PC. Ready Faster.";
var description$7 = "PCReady rebuilds your Windows software environment in minutes: 336 curated apps across 23 categories, 5 setup profiles, automated installation, WinGet and direct installers.";
var Route$7 = createFileRoute("/")({
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
var $$splitComponentImporter$6 = () => import("./catalog-BS04xd6Z.mjs");
var title$6 = "App Catalog — PCReady";
var description$6 = "Browse 336 curated Windows applications across 23 categories, with publisher, version, category, and installed state.";
var Route$6 = createFileRoute("/catalog")({
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
var $$splitComponentImporter$5 = () => import("./documentation-DEakQlSi.mjs");
var title$5 = "Documentation — PCReady";
var description$5 = "PCReady documentation: getting started, profiles, installation states, settings, logging, and the technical architecture behind the application.";
var Route$5 = createFileRoute("/documentation")({
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
var $$splitComponentImporter$4 = () => import("./features-T3Q-YQfV.mjs");
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
var $$splitComponentImporter$3 = () => import("./how-it-works-Dw3-wfS5.mjs");
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
var $$splitComponentImporter$1 = () => import("./profiles-CtNuVJnG.mjs");
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
var $$splitComponentImporter = () => import("./terms-8t5YIhW5.mjs");
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
	IndexRoute: Route$7.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$8
	}),
	CatalogRoute: Route$6.update({
		id: "/catalog",
		path: "/catalog",
		getParentRoute: () => Route$8
	}),
	DocumentationRoute: Route$5.update({
		id: "/documentation",
		path: "/documentation",
		getParentRoute: () => Route$8
	}),
	FeaturesRoute: Route$4.update({
		id: "/features",
		path: "/features",
		getParentRoute: () => Route$8
	}),
	HowItWorksRoute: Route$3.update({
		id: "/how-it-works",
		path: "/how-it-works",
		getParentRoute: () => Route$8
	}),
	PrivacyRoute: Route$2.update({
		id: "/privacy",
		path: "/privacy",
		getParentRoute: () => Route$8
	}),
	ProfilesRoute: Route$1.update({
		id: "/profiles",
		path: "/profiles",
		getParentRoute: () => Route$8
	}),
	TermsRoute: Route.update({
		id: "/terms",
		path: "/terms",
		getParentRoute: () => Route$8
	})
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
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
