import { require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { Panel, Reveal } from "./primitives-DoEGU8Cj.mjs";
import { PageHeader, Section } from "./PageShell-CGwDFtNr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-CtEkXpzb.js
var import_jsx_runtime = require_jsx_runtime();
var points = [
	{
		t: "Local-first data",
		d: "Settings, the cached catalog, and logs are stored locally on the machine running PCReady."
	},
	{
		t: "No credential logging",
		d: "Sensitive credentials are never written to logs or diagnostic output."
	},
	{
		t: "Network activity",
		d: "PCReady contacts package sources and vendor download endpoints only to fetch catalog data and installers."
	},
	{
		t: "Your control",
		d: "Download directory, catalog source, proxy, and retry behaviour are all configurable."
	}
];
function PrivacyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Privacy",
		title: "Your Setup Stays on Your PC",
		subtitle: "PCReady is a desktop application. Its data lives on the machine you run it on."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 sm:grid-cols-2",
		children: points.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: i % 2 * 70,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "h-full p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-base font-bold tracking-tight text-foreground",
					children: p.t
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted-foreground",
					children: p.d
				})]
			})
		}, p.t))
	}) })] });
}
//#endregion
export { PrivacyPage as component };
