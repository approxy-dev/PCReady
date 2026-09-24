import { require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { Reveal, SectionHeading, StatusPill } from "./primitives-DoEGU8Cj.mjs";
import { PageHeader, Section } from "./PageShell-CGwDFtNr.mjs";
import { profiles } from "./catalog-BlcIYwM1.mjs";
import { FileCheckCorner, FileSpreadsheet, Gauge, HardDrive, Layers, Lock, Monitor, Network, Package, RotateCcw, ScanSearch, Search, ShieldCheck } from "../_libs/lucide-react.mjs";
import { FeatureCard, LogViewer, SecurityFeature, SystemToolCard } from "./cards-DjD47K7y.mjs";
import { CTASection } from "./CTASection-ByljgCNl.mjs";
import { InstallationQueue, StateMachine } from "./InstallationQueue-BnxdnqjB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/features-T3Q-YQfV.js
var import_jsx_runtime = require_jsx_runtime();
var principles = [
	{
		icon: Lock,
		title: "Secure Downloads",
		description: "HTTPS validation and safe download handling."
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
		description: "Checks available space before large downloads."
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
function FeaturesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Features",
			title: "Everything You Need to Prepare a PC",
			subtitle: "PCReady covers discovery, selection, installation, verification, system tools, and diagnostics for a fresh Windows machine."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
					icon: Package,
					title: "App Catalog",
					description: "336 curated applications across 23 categories, each with its WinGet package ID and category for fast browsing and search.",
					className: "h-full"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
						icon: Search,
						title: "WinGet Search",
						description: "Search thousands of additional Windows packages using WinGet without leaving the application.",
						className: "h-full"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 140,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
						icon: Layers,
						title: "Profiles",
						description: "Install complete software environments from predefined profiles with install-missing-only behaviour.",
						className: "h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex flex-wrap gap-1.5",
							children: profiles.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-md border border-border bg-surface px-2 py-1 text-[11px] font-medium text-graphite",
								children: p.name
							}, p.name))
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
					icon: ScanSearch,
					title: "Smart Installed-App Detection",
					description: "Windows package information plus system detection determine what is already on the machine.",
					className: "h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: [
							"Installed",
							"Available",
							"Pending"
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, { status: s }, s))
					})
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 70,
					className: "lg:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
						icon: Gauge,
						title: "Hardened Download Manager",
						description: "Every transfer is validated, verified, and recoverable.",
						className: "h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "grid gap-1.5 font-mono text-[11px] text-muted-foreground sm:grid-cols-2",
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
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface py-16 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-[1320px] px-5 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Installation",
					title: "Automated Installation Queue",
					subtitle: "A predictable pipeline from queued to installed, with retry, cancel, failed, and skipped states."
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid items-start gap-6 lg:grid-cols-[1.15fr_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstallationQueue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateMachine, {})
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "System tools",
			title: "Beyond Application Installation",
			subtitle: "PCReady also includes tools for preparing Windows and Office environments."
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 grid gap-4 lg:grid-cols-2",
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
				delay: 80,
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
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface py-16 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-[1320px] px-5 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Reliability & safety",
					title: "Built for Real PC Setup Work"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
					children: principles.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i % 3 * 70,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SecurityFeature, {
							icon: p.icon,
							title: p.title,
							description: p.description
						})
					}, p.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-10 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				align: "left",
				eyebrow: "Logging & diagnostics",
				title: "Know What Happened",
				subtitle: "Structured, timestamped logs for downloads, verification, and installer execution. Logs are stored locally and sensitive credentials are never logged."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 80,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogViewer, {})
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { FeaturesPage as component };
