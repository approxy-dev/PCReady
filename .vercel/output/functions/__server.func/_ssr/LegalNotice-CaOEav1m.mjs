import { require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { cn } from "./primitives-DoEGU8Cj.mjs";
import { ShieldAlert } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LegalNotice-CaOEav1m.js
var import_jsx_runtime = require_jsx_runtime();
function LegalNotice({ title = "Responsible Use Notice", className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
		"aria-label": title,
		className: cn("rounded-xl border border-warning/30 bg-warning/10 p-5 sm:p-6", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, {
				className: "mt-0.5 h-5 w-5 shrink-0 text-warning",
				"aria-hidden": "true"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-bold tracking-tight text-foreground",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1.5 text-[13px] leading-relaxed text-muted-foreground",
					children
				})]
			})]
		})
	});
}
//#endregion
export { LegalNotice };
