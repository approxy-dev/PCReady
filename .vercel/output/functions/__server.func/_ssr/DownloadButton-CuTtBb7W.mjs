import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { cn } from "./primitives-DoEGU8Cj.mjs";
import { downloadArtifact } from "./site-BekfItER.mjs";
import { CircleCheck, Download, RefreshCw } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/DownloadButton-CuTtBb7W.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function startDownload(file) {
	const a = document.createElement("a");
	a.href = `/downloads/${file}`;
	a.download = file;
	a.rel = "noopener";
	document.body.appendChild(a);
	a.click();
	a.remove();
}
function DownloadButton({ variant = "primary", size = "md", className, label = "Download PCReady", thankYouClassName, restartClassName = "text-graphite" }) {
	const [downloaded, setDownloaded] = (0, import_react.useState)(false);
	const [attempts, setAttempts] = (0, import_react.useState)(0);
	const handleDownload = () => {
		startDownload(downloadArtifact.file);
		setDownloaded(true);
		setAttempts((n) => n + 1);
	};
	if (downloaded) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("inline-flex flex-col items-center justify-center gap-1 text-center sm:flex-row sm:items-center sm:gap-3", thankYouClassName),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "inline-flex items-center gap-2 text-sm font-semibold text-success",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
				className: "h-4 w-4",
				"aria-hidden": "true"
			}), " Thank you for downloading PCReady!"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: handleDownload,
			className: cn("inline-flex items-center gap-1.5 text-xs font-semibold underline-offset-2 hover:underline", restartClassName),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
				className: "h-3 w-3",
				"aria-hidden": "true"
			}), "Click here to restart the download if it hasn't started"]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: handleDownload,
		className: cn("inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-graphite px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-graphite-hover active:bg-graphite-pressed", size === "sm" && "h-9 px-3.5", size === "lg" && "h-12 px-6 text-[15px]", variant === "secondary" && "border border-border bg-surface text-graphite hover:bg-hover active:bg-nav-active", variant === "ghost" && "bg-transparent text-graphite hover:bg-hover", className),
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
