import { require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { Container, Label } from "./primitives-DoEGU8Cj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageShell-CGwDFtNr.js
var import_jsx_runtime = require_jsx_runtime();
function PageHeader({ eyebrow, title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "py-14 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: eyebrow }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-balance-tight mt-3 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
					children: subtitle
				})
			]
		})
	});
}
function Section({ children, className, labelledBy }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-labelledby": labelledBy,
		className: className ?? "py-16 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children })
	});
}
//#endregion
export { PageHeader, Section };
