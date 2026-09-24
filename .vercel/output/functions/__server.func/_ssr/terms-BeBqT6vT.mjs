import { require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { Panel, Reveal } from "./primitives-DoEGU8Cj.mjs";
import { PageHeader, Section } from "./PageShell-CGwDFtNr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-BeBqT6vT.js
var import_jsx_runtime = require_jsx_runtime();
var points = [
	{
		t: "Free desktop application",
		d: "PCReady is provided free of charge for preparing Windows systems."
	},
	{
		t: "Third-party software",
		d: "Applications installed through PCReady remain subject to their own vendor licences and terms."
	},
	{
		t: "Windows and Office media",
		d: "Windows and Office tools are informational and assume you hold valid licences for the software you deploy."
	},
	{
		t: "No warranty",
		d: "PCReady is provided as is. You remain responsible for the changes you apply to your system."
	}
];
function TermsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Terms",
		title: "Terms of Use",
		subtitle: "Plain terms for using PCReady and the software it helps you install."
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
export { TermsPage as component };
