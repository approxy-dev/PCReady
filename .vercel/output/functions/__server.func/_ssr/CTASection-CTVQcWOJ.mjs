import { require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Container, Reveal, buttonClass } from "./primitives-DoEGU8Cj.mjs";
import { FileText } from "../_libs/lucide-react.mjs";
import { DownloadButton } from "./DownloadButton-CuTtBb7W.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CTASection-CTVQcWOJ.js
var import_jsx_runtime = require_jsx_runtime();
function CTASection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-labelledby": "cta-title",
		className: "py-20 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "overflow-hidden rounded-3xl border border-border bg-[#2E3033] px-6 py-14 text-center shadow-lift sm:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A7A9AC]",
					children: "Free desktop application"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "cta-title",
					className: "text-balance-tight mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl",
					children: "Get Your PC Ready"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#E5E4E2]",
					children: "Install the applications you need, skip the ones you don't, and rebuild your Windows environment faster."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col justify-center gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DownloadButton, {
						size: "lg",
						className: "w-full bg-white text-[#2E3033] hover:bg-[#E5E4E2] sm:w-auto",
						thankYouClassName: "text-white",
						restartClassName: "text-[#E5E4E2]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/documentation",
						className: buttonClass({
							size: "lg",
							className: "w-full border border-[#53565A] bg-transparent text-[#E5E4E2] hover:bg-[#3A3D40] sm:w-auto"
						}),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), " View Documentation"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 flex flex-wrap justify-center gap-2",
					children: [
						"Windows 10",
						"Windows 11",
						"x64",
						"ARM64"
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-md border border-[#53565A] px-3 py-1.5 font-mono text-[11px] text-[#E5E4E2]",
						children: c
					}, c))
				})
			]
		}) })
	});
}
//#endregion
export { CTASection };
