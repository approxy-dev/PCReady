import { require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { buttonClass } from "./primitives-DoEGU8Cj.mjs";
import { Download } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/DownloadButton-BRoxT8i6.js
var import_jsx_runtime = require_jsx_runtime();
function DownloadButton({ variant = "primary", size = "md", className, label = "Download PCReady" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/download",
		className: buttonClass({
			variant,
			size,
			className
		}),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
				className: "h-4 w-4",
				"aria-hidden": "true"
			}),
			" ",
			label
		]
	});
}
//#endregion
export { DownloadButton };
