import { require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { Panel, Reveal, SectionHeading } from "./primitives-DoEGU8Cj.mjs";
import { PageHeader, Section } from "./PageShell-CGwDFtNr.mjs";
import { CircleCheck, Compass, MousePointerClick, Rocket, WifiOff } from "../_libs/lucide-react.mjs";
import { CTASection } from "./CTASection-ByljgCNl.mjs";
import { InstallationQueue, StateMachine } from "./InstallationQueue-BnxdnqjB.mjs";
import { DashboardPreview } from "./DashboardPreview-M4mZ0zZz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/how-it-works-Dw3-wfS5.js
var import_jsx_runtime = require_jsx_runtime();
var steps = [
	{
		icon: Compass,
		n: "01",
		t: "Discover",
		d: "Find the software you need in the curated catalog or with WinGet search."
	},
	{
		icon: MousePointerClick,
		n: "02",
		t: "Select",
		d: "Choose individual apps or a complete profile for your role."
	},
	{
		icon: Rocket,
		n: "03",
		t: "Install",
		d: "PCReady downloads, verifies, and installs each application in order."
	},
	{
		icon: CircleCheck,
		n: "04",
		t: "Ready",
		d: "Finish with a configured, productive PC and a full activity log."
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
function HowItWorksPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "How it works",
			title: "Select. Install. Done.",
			subtitle: "PCReady turns a fresh Windows installation into a working environment with a single, observable pipeline."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
			children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 70,
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-mono text-xs text-muted-foreground",
							children: s.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 text-base font-bold tracking-tight text-foreground",
							children: s.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: s.d
						})
					]
				})
			}, s.n))
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface py-16 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-[1320px] px-5 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Pipeline",
					title: "Every App Follows the Same Path",
					subtitle: "Queued, downloading, verifying, installing, installed — with retry, cancel, failed, and skipped handling."
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
			eyebrow: "Dashboard",
			title: "Your PC Setup at a Glance",
			subtitle: "System information, counts, active profile, and quick actions in one console."
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: 80,
			className: "mt-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardPreview, {})
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface py-16 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-[1320px] px-5 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Resilience",
					title: "Designed for Imperfect Networks"
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
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { HowItWorksPage as component };
