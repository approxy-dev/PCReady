import { require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { Panel, StatusPill, cn } from "./primitives-DoEGU8Cj.mjs";
import { Check, Circle, Download, LoaderCircle, RotateCcw, X } from "../_libs/lucide-react.mjs";
import { queueItems } from "./pcready-CTieZak7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/InstallationQueue-BnxdnqjB.js
var import_jsx_runtime = require_jsx_runtime();
function StageIcon({ status }) {
	if (status === "Installed") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
		className: "h-3.5 w-3.5 text-success",
		"aria-hidden": "true"
	});
	if (status === "Downloading") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
		className: "h-3.5 w-3.5 text-graphite",
		"aria-hidden": "true"
	});
	if (status === "Installing") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
		className: "h-3.5 w-3.5 text-graphite",
		"aria-hidden": "true"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, {
		className: "h-3.5 w-3.5 text-silver-soft",
		"aria-hidden": "true"
	});
}
function InstallationQueue({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		className: cn("overflow-hidden", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-b border-border bg-sidebar px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold text-foreground",
				children: "Installation Queue"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1 rounded-md border border-border bg-surface px-2 py-1 text-[11px] font-medium text-graphite",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {
						className: "h-3 w-3",
						"aria-hidden": "true"
					}), " Retry"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1 rounded-md border border-border bg-surface px-2 py-1 text-[11px] font-medium text-graphite",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
						className: "h-3 w-3",
						"aria-hidden": "true"
					}), " Cancel"]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "divide-y divide-border",
			children: queueItems.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StageIcon, { status: q.status }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-0 flex-1 truncate text-sm font-medium text-foreground",
							children: q.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, { status: q.status }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-10 shrink-0 text-right font-mono text-[11px] text-muted-foreground",
							children: q.progress > 0 && q.progress < 100 ? `${q.progress}%` : ""
						})
					]
				}), q.progress > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted",
					role: "progressbar",
					"aria-valuenow": q.progress,
					"aria-valuemin": 0,
					"aria-valuemax": 100,
					"aria-label": `${q.name} progress`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("h-full rounded-full transition-[width] duration-1000 ease-out", q.status === "Installed" ? "bg-success" : "bg-graphite"),
						style: { width: `${q.progress}%` }
					})
				}) : null]
			}, q.name))
		})]
	});
}
var stages = [
	"Queued",
	"Downloading",
	"Verifying",
	"Installing",
	"Installed"
];
function StateMachine() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-card p-5 shadow-panel",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold text-foreground",
				children: "Installation state machine"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-4 space-y-2",
				children: stages.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "w-6 shrink-0 font-mono text-[11px] text-muted-foreground",
						children: String(i + 1).padStart(2, "0")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("flex-1 rounded-lg border px-3 py-2 text-sm font-medium", i === stages.length - 1 ? "border-success/30 bg-success/10 text-success" : "border-border bg-surface text-foreground"),
						children: s
					})]
				}, s))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex flex-wrap gap-2 border-t border-border pt-4",
				children: [
					"Retry",
					"Cancel",
					"Failed",
					"Skipped"
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, { status: s }, s))
			})
		]
	});
}
//#endregion
export { InstallationQueue, StateMachine };
