import { require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { Panel, Reveal, SectionHeading, TechBadge } from "./primitives-DoEGU8Cj.mjs";
import { PageHeader, Section } from "./PageShell-CGwDFtNr.mjs";
import { legalDisclaimer } from "./site-BekfItER.mjs";
import { Settings } from "../_libs/lucide-react.mjs";
import { LogViewer } from "./cards-BF9IeBaG.mjs";
import { CTASection } from "./CTASection-CTVQcWOJ.mjs";
import { FAQAccordion } from "./FAQAccordion-BNR4qNY5.mjs";
import { LegalNotice } from "./LegalNotice-CaOEav1m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/documentation-CPQ-2xBn.js
var import_jsx_runtime = require_jsx_runtime();
var architectureTitle = "Built with Modern Windows Technology";
var settingsCards = [
	{
		k: "Download Directory",
		v: "Where installers are stored before execution."
	},
	{
		k: "Concurrent Downloads",
		v: "How many transfers run at the same time."
	},
	{
		k: "Retry Count",
		v: "Automatic attempts after a temporary failure."
	},
	{
		k: "Timeout",
		v: "Maximum wait time per request."
	},
	{
		k: "Proxy",
		v: "System or custom proxy configuration."
	},
	{
		k: "Catalog Source",
		v: "Curated catalog, WinGet, or both."
	},
	{
		k: "Theme",
		v: "Silver / graphite application appearance."
	}
];
var guides = [
	{
		t: "Getting started",
		d: "Install PCReady, let it scan the system, then pick a profile or individual applications."
	},
	{
		t: "Working with profiles",
		d: "Profiles bundle applications per role. Install missing only skips anything already present."
	},
	{
		t: "Installation states",
		d: "Queued → Downloading → Verifying → Installing → Installed, with retry, cancel, failed, and skipped."
	},
	{
		t: "Windows & Office tools",
		d: "Select a Windows build or Office release and prepare online or offline deployment."
	},
	{
		t: "IDM integration",
		d: "When Internet Download Manager is detected, supported large downloads are handed off to IDM."
	},
	{
		t: "Troubleshooting",
		d: "Check the local log for the failing step, then retry the item or change the catalog source."
	}
];
function DocumentationPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Documentation",
			title: "Everything About Running PCReady",
			subtitle: "Reference material for setup, profiles, installation behaviour, settings, and diagnostics."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: guides.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i % 3 * 70,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					hover: true,
					className: "h-full p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-bold tracking-tight text-foreground",
						children: g.t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: g.d
					})]
				})
			}, g.t))
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface py-16 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-[1320px] px-5 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Settings",
					title: "Configuration Reference",
					subtitle: "Settings are persisted locally on the machine running PCReady."
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
					children: settingsCards.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i % 3 * 60,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
							className: "flex h-full items-start gap-3 p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {
								className: "mt-0.5 h-4 w-4 shrink-0 text-graphite",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-foreground",
								children: s.k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs leading-relaxed text-muted-foreground",
								children: s.v
							})] })]
						})
					}, s.k))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-10 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				align: "left",
				eyebrow: "Logging & diagnostics",
				title: "Know What Happened",
				subtitle: "Logs are stored locally and sensitive credentials are never logged."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 80,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogViewer, {})
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface py-16 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-[1320px] px-5 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Technical architecture",
					title: architectureTitle
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 70,
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
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			className: "mx-auto max-w-4xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalNotice, { children: legalDisclaimer.body })
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "FAQ",
			title: "Frequently Asked Questions"
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: 70,
			className: "mx-auto mt-10 max-w-3xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQAccordion, {})
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { DocumentationPage as component };
