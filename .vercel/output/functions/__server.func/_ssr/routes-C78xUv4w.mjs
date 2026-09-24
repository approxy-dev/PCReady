import { require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { AppGlyph, Container, Label, Panel, Reveal, SectionHeading, StatusPill, TechBadge, buttonClass, cn } from "./primitives-DoEGU8Cj.mjs";
import { catalogApps, categories, profiles } from "./catalog-BlcIYwM1.mjs";
import { legalDisclaimer } from "./site-Bvq3kyV4.mjs";
import { CircleCheck, Compass, FileCheckCorner, FileSpreadsheet, FileText, Gauge, HardDrive, Layers, LayoutGrid, ListChecks, Lock, Monitor, MousePointerClick, Network, Package, Rocket, RotateCcw, ScanSearch, Search, Settings, ShieldCheck, WifiOff } from "../_libs/lucide-react.mjs";
import { DownloadButton } from "./DownloadButton-Dm8B2847.mjs";
import { AppCard, FeatureCard, LogViewer, ProfileCard, SecurityFeature, StatCard, SystemToolCard } from "./cards-DjD47K7y.mjs";
import { CTASection } from "./CTASection-ByljgCNl.mjs";
import { FAQAccordion } from "./FAQAccordion-BNR4qNY5.mjs";
import { LegalNotice } from "./LegalNotice-CaOEav1m.mjs";
import { InstallationQueue, StateMachine } from "./InstallationQueue-BnxdnqjB.mjs";
import { DashboardPreview } from "./DashboardPreview-M4mZ0zZz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C78xUv4w.js
var import_jsx_runtime = require_jsx_runtime();
var nav = [
	{
		label: "Dashboard",
		icon: LayoutGrid,
		active: true
	},
	{
		label: "App Catalog",
		icon: Package
	},
	{
		label: "WinGet Search",
		icon: Search
	},
	{
		label: "Profiles",
		icon: ShieldCheck
	},
	{
		label: "Windows Tools",
		icon: Monitor
	},
	{
		label: "Logs",
		icon: FileText
	},
	{
		label: "Settings",
		icon: Settings
	}
];
var apps = [
	{
		name: "Visual Studio Code",
		publisher: "Microsoft",
		version: "1.96",
		state: "Installed"
	},
	{
		name: "Google Chrome",
		publisher: "Google LLC",
		version: "132.0",
		state: "Available"
	},
	{
		name: "7-Zip",
		publisher: "Igor Pavlov",
		version: "24.09",
		state: "Available"
	},
	{
		name: "Git",
		publisher: "Git for Windows",
		version: "2.47.1",
		state: "Installed"
	}
];
function ProductPreview({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("overflow-hidden rounded-2xl border border-border bg-surface shadow-lift", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-b border-border bg-sidebar px-4 py-2.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs font-semibold tracking-tight text-foreground",
				children: "PCReady — Setup Console"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				"aria-hidden": "true",
				className: "flex items-center gap-3 text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-[1.5px] w-3 bg-silver-soft" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-2.5 w-2.5 border border-silver-soft" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "relative block h-2.5 w-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-0 top-1/2 h-[1.5px] rotate-45 bg-silver-soft" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-0 top-1/2 h-[1.5px] -rotate-45 bg-silver-soft" })]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-[132px_1fr] sm:grid-cols-[168px_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "border-r border-border bg-sidebar p-2.5",
				children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("mb-0.5 flex items-center gap-2 rounded-md px-2 py-2 text-[11px] font-medium", n.active ? "bg-nav-active text-foreground" : "text-muted-foreground"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(n.icon, {
						className: "h-3.5 w-3.5",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate",
						children: n.label
					})]
				}, n.label))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-3.5 sm:p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-3 gap-2.5",
						children: [
							{
								k: "Installed",
								v: "184"
							},
							{
								k: "Available",
								v: "152"
							},
							{
								k: "Pending",
								v: "12"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-card px-3 py-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground",
								children: s.k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-lg font-bold tabular-nums text-foreground",
								children: s.v
							})]
						}, s.k))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3.5 rounded-xl border border-border bg-card p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold text-foreground",
								children: "Installation Queue"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[10px] text-muted-foreground",
								children: "3 of 5"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2.5 space-y-2",
							children: [{
								n: "Visual Studio Code",
								s: "Installing",
								p: 72
							}, {
								n: "Google Chrome",
								s: "Downloading",
								p: 41
							}].map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-[11px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate font-medium text-foreground",
									children: q.n
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "ml-2 shrink-0 font-mono text-muted-foreground",
									children: [
										q.s,
										" ",
										q.p,
										"%"
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 h-1.5 w-full overflow-hidden rounded-full bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full rounded-full bg-graphite transition-[width] duration-700",
									style: { width: `${q.p}%` }
								})
							})] }, q.n))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3.5 space-y-2",
						children: apps.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5 rounded-xl border border-border bg-card px-3 py-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppGlyph, {
									name: a.name,
									size: "sm"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-[11px] font-semibold text-foreground",
										children: a.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "truncate font-mono text-[10px] text-muted-foreground",
										children: [
											a.publisher,
											" · ",
											a.version
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, {
									status: a.state,
									className: "hidden sm:inline-flex"
								})
							]
						}, a.name))
					})
				]
			})]
		})]
	});
}
var trustRow = [
	"336+ Curated Apps",
	"5 Setup Profiles",
	"Automated Installation",
	"WinGet + Direct Installers"
];
var identity = [
	{
		icon: Compass,
		title: "Discover",
		text: "Find the software you need."
	},
	{
		icon: MousePointerClick,
		title: "Select",
		text: "Choose individual apps or complete profiles."
	},
	{
		icon: Rocket,
		title: "Install",
		text: "Automatically download and install applications."
	},
	{
		icon: CircleCheck,
		title: "Ready",
		text: "Finish with a configured, productive PC."
	}
];
var principles = [
	{
		icon: Lock,
		title: "Secure Downloads",
		description: "HTTPS validation and safe download handling for every source."
	},
	{
		icon: FileCheckCorner,
		title: "File Verification",
		description: "SHA-256 verification protects against corrupted downloads."
	},
	{
		icon: ShieldCheck,
		title: "Safe Installation",
		description: "Controlled installer execution and validated arguments."
	},
	{
		icon: HardDrive,
		title: "Disk Protection",
		description: "Checks available space before large downloads begin."
	},
	{
		icon: RotateCcw,
		title: "Retry & Recovery",
		description: "Automatic retry handling for temporary failures."
	},
	{
		icon: Network,
		title: "Graceful Degradation",
		description: "Works even when some Windows services or network sources are unavailable."
	}
];
var settingsCards = [
	{
		k: "Download Directory",
		v: "%USERPROFILE%\\Downloads\\PCReady"
	},
	{
		k: "Concurrent Downloads",
		v: "3"
	},
	{
		k: "Retry Count",
		v: "5"
	},
	{
		k: "Timeout",
		v: "120s"
	},
	{
		k: "Proxy",
		v: "System default"
	},
	{
		k: "Catalog Source",
		v: "Curated + WinGet"
	},
	{
		k: "Theme",
		v: "Silver / Graphite"
	}
];
var fallbacks = [
	{
		from: "No WinGet",
		to: "Direct installers"
	},
	{
		from: "No network",
		to: "Cached catalog"
	},
	{
		from: "Unavailable icon",
		to: "Fallback icon"
	},
	{
		from: "Temporary failure",
		to: "Retry"
	}
];
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative overflow-hidden border-b border-border bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "grid items-center gap-12 py-14 lg:grid-cols-[1fr_1.05fr] lg:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Windows setup & software deployment" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-balance-tight mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl xl:text-6xl",
						children: "Fresh PC. Ready Faster."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: "Rebuild your Windows software environment in minutes. Browse essential applications, choose a setup profile, and let PCReady handle downloading, verification, and installation."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DownloadButton, {
							size: "lg",
							className: "w-full sm:w-auto"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/features",
							className: buttonClass({
								variant: "secondary",
								size: "lg",
								className: "w-full sm:w-auto"
							}),
							children: "Explore PCReady"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6",
						children: trustRow.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2 text-[13px] font-semibold text-graphite",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								className: "h-1.5 w-1.5 rounded-full bg-silver-soft"
							}), t]
						}, t))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductPreview, {})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "identity-title",
			className: "py-20 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "PC → Software → Setup → Ready",
				title: "One PC. One Setup. Everything Ready.",
				subtitle: "PCReady brings the most important parts of a fresh Windows setup into one application."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: identity.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
						hover: true,
						className: "h-full p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "metal-sheen inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
									className: "h-5 w-5 text-graphite",
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-base font-bold tracking-tight text-foreground",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: s.text
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 font-mono text-[11px] text-muted-foreground",
								children: ["Step ", String(i + 1).padStart(2, "0")]
							})
						]
					})
				}, s.title))
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "features-title",
			className: "border-y border-border bg-surface py-20 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Feature overview",
					title: "Everything You Need to Prepare a PC",
					subtitle: "A curated catalog, package search, profiles, automated installation, detection, and a hardened download manager."
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-4 lg:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							className: "lg:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FeatureCard, {
								icon: Package,
								title: "App Catalog",
								description: "Browse 336 curated applications across 23 categories, from browsers and development tools to security and gaming.",
								className: "h-full",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-3 sm:grid-cols-2",
									children: catalogApps.slice(0, 4).map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppCard, { app: a }, a.name))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-4 flex flex-wrap gap-1.5",
									children: [categories.slice(0, 10).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "rounded-md border border-border bg-surface px-2 py-1 text-[11px] font-medium text-graphite",
										children: c
									}, c)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "rounded-md border border-border bg-surface px-2 py-1 text-[11px] font-medium text-muted-foreground",
										children: [
											"+",
											categories.length - 10,
											" more"
										]
									})]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 80,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
								icon: Search,
								title: "WinGet Search",
								description: "Search thousands of additional Windows packages using WinGet, directly inside PCReady.",
								className: "h-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border border-border bg-surface p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 border-b border-border pb-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
											className: "h-3.5 w-3.5 text-muted-foreground",
											"aria-hidden": "true"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground",
											children: "Search applications..."
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-2 space-y-1.5",
										children: [
											"Google Chrome",
											"Microsoft Visual Studio Code",
											"7-Zip",
											"Git",
											"VLC",
											"Discord"
										].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center justify-between rounded-md px-2 py-1.5 text-xs font-medium text-foreground hover:bg-hover",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "truncate",
												children: n
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "ml-2 shrink-0 font-mono text-[10px] text-muted-foreground",
												children: "winget"
											})]
										}, n))
									})]
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FeatureCard, {
							icon: Layers,
							title: "Profiles",
							description: "Install complete software environments with predefined profiles, and skip anything already present.",
							className: "h-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "flex flex-wrap gap-1.5",
								children: profiles.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "rounded-md border border-border bg-surface px-2 py-1 text-[11px] font-medium text-graphite",
									children: p.name
								}, p.name))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 inline-flex items-center gap-2 rounded-md border border-success/30 bg-success/10 px-2.5 py-1.5 text-[11px] font-semibold text-success",
								children: "Install missing only"
							})]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 80,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
								icon: ScanSearch,
								title: "Smart Installed-App Detection",
								description: "PCReady combines Windows package information and system detection to determine which applications are already installed.",
								className: "h-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2",
									children: [
										"Installed",
										"Available",
										"Pending"
									].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, { status: s }, s))
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 160,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
								icon: Gauge,
								title: "Hardened Download Manager",
								description: "Reliability and security engineering built into every transfer.",
								className: "h-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "grid gap-1.5 font-mono text-[11px] text-muted-foreground",
									children: [
										"HTTPS-only downloads",
										"SHA-256 verification",
										"Retry handling",
										"Timeout control",
										"Disk-space checks",
										"Concurrent download control",
										"Proxy support",
										"Safe filenames",
										"Path-traversal protection"
									].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["· ", x] }, x))
								})
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 grid items-start gap-6 lg:grid-cols-[1.15fr_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							id: "features-title",
							className: "text-2xl font-bold tracking-tight text-foreground sm:text-3xl",
							children: "Automated Installation Queue"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base",
							children: "Every application moves through a predictable pipeline with live progress, retry, cancel, and clear failure states."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstallationQueue, {})
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 100,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateMachine, {})
					})]
				})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "tools-title",
			className: "py-20 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "System tools",
				title: "Beyond Application Installation",
				subtitle: "PCReady also includes tools for preparing Windows and Office environments."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SystemToolCard, {
					icon: Monitor,
					title: "Windows Media",
					description: "Select and prepare the Windows build you need for a clean installation.",
					items: [
						"Windows version selection",
						"Windows 11",
						"Windows 10",
						"LTSC",
						"Server",
						"ARM64 variants",
						"Download management",
						"Direct-link resolution",
						"Verification guidance"
					],
					cta: "Explore Windows Tools"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SystemToolCard, {
						icon: FileSpreadsheet,
						title: "Office Deployment",
						description: "Prepare Microsoft Office environments for online or offline deployment.",
						items: [
							"Microsoft 365",
							"Office 2024",
							"Office 2021",
							"Office 2019",
							"Office 2016",
							"Office 2013",
							"Online deployment",
							"Offline deployment"
						],
						cta: "Explore Office Tools"
					})
				})]
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "idm-title",
			className: "border-y border-border bg-surface py-16 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "grid items-center gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Integration" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "idm-title",
						className: "mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl",
						children: "Smarter Downloads with IDM"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base",
						children: "PCReady can detect and integrate with Internet Download Manager for supported large downloads, handing the transfer off so IDM manages segmentation and resume."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
						className: "p-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "space-y-2",
							children: [
								"PCReady",
								"Detect IDM",
								"Hand off download",
								"IDM manages transfer"
							].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-6 shrink-0 font-mono text-[11px] text-muted-foreground",
									children: String(i + 1).padStart(2, "0")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex-1 rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium text-foreground",
									children: s
								})]
							}, s))
						})
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "mx-auto max-w-4xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalNotice, {
					className: "sm:p-8",
					children: legalDisclaimer.body
				})
			}) })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "dashboard-title",
			className: "py-20 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Dashboard",
					title: "Your PC Setup at a Glance",
					subtitle: "Installed, available, and pending applications, the active profile, and quick actions in one console."
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					className: "mt-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardPreview, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							value: "336",
							label: "Curated applications",
							hint: "23 categories"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 60,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
								value: "5",
								label: "Built-in setup profiles",
								hint: "+ custom"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 120,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
								value: "6K+",
								label: "WinGet packages searchable",
								hint: "beyond the catalog"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 180,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
								value: "SHA-256",
								label: "Download verification",
								hint: "per file"
							})
						})
					]
				})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "install-title",
			className: "border-y border-border bg-surface py-20 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Installation experience",
					title: "Select. Install. Done.",
					subtitle: "Three steps between a fresh Windows installation and a productive PC."
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-4 lg:grid-cols-3",
					children: [
						{
							n: "01",
							t: "Choose your apps",
							d: "Pick from the catalog or load a profile."
						},
						{
							n: "02",
							t: "Start installation",
							d: "PCReady queues everything in order."
						},
						{
							n: "03",
							t: "PCReady handles the rest",
							d: "Download, verify, install, and report."
						}
					].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
							hover: true,
							className: "h-full p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-3xl font-bold text-silver",
									children: s.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 text-lg font-bold tracking-tight text-foreground",
									children: s.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: s.d
								})
							]
						})
					}, s.n))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					className: "mx-auto mt-8 max-w-3xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstallationQueue, {})
				})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "trust-title",
			className: "py-20 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Reliability & safety",
				title: "Built for Real PC Setup Work",
				subtitle: "Engineering principles that keep downloads and installers predictable on real machines."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
				children: principles.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 3 * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SecurityFeature, {
						icon: p.icon,
						title: p.title,
						description: p.description
					})
				}, p.title))
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "logs-title",
			className: "border-y border-border bg-surface py-16 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "grid items-center gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Logging & diagnostics" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "logs-title",
						className: "mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl",
						children: "Know What Happened"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base",
						children: "PCReady writes structured logs for every download, verification step, and installer launch, so failures are easy to trace."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground shadow-panel",
						children: "Logs are stored locally and sensitive credentials are never logged."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogViewer, {})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "settings-title",
			className: "py-20 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Settings & customization",
				title: "Tuned to Your Machine",
				subtitle: "Configure how PCReady downloads and installs. Settings are persisted locally."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: settingsCards.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 4 * 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
						hover: true,
						className: "flex h-full items-start gap-3 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {
							className: "mt-0.5 h-4 w-4 shrink-0 text-graphite",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-foreground",
								children: s.k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 truncate font-mono text-[11px] text-muted-foreground",
								children: s.v
							})]
						})]
					})
				}, s.k))
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "offline-title",
			className: "border-y border-border bg-surface py-16 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Resilience",
				title: "Designed for Imperfect Networks",
				subtitle: "PCReady degrades gracefully instead of failing when a source or service is unavailable."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: fallbacks.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
						className: "h-full p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-2 text-sm font-semibold text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WifiOff, {
									className: "h-3.5 w-3.5 text-muted-foreground",
									"aria-hidden": "true"
								}), f.from]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								"aria-hidden": "true",
								className: "mt-2 font-mono text-xs text-silver-soft",
								children: "↓"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium text-graphite",
								children: f.to
							})
						]
					})
				}, f.from))
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "catalog-title",
			className: "py-20 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Catalog & profiles",
					title: "Applications and Environments, Ready to Deploy",
					subtitle: "Browse the curated catalog or install a complete environment in one operation."
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-4 lg:grid-cols-3",
					children: profiles.slice(0, 3).map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileCard, { profile: p })
					}, p.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/catalog",
						className: buttonClass({
							variant: "secondary",
							className: "w-full sm:w-auto"
						}),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), " Browse App Catalog"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/profiles",
						className: buttonClass({
							variant: "secondary",
							className: "w-full sm:w-auto"
						}),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListChecks, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), " View All Profiles"]
					})]
				})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "arch-title",
			className: "border-y border-border bg-surface py-16 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Technical architecture",
				title: "Built with Modern Windows Technology"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 80,
				className: "mt-8 flex flex-wrap justify-center gap-2",
				children: [
					".NET 8",
					"WPF",
					"MVVM",
					"CommunityToolkit.Mvvm",
					"WinGet",
					"PowerShell",
					"SHA-256"
				].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechBadge, { children: t }, t))
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "faq-title",
			className: "py-20 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "FAQ",
				title: "Questions About PCReady"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 80,
				className: "mx-auto mt-10 max-w-3xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQAccordion, {})
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { Index as component };
