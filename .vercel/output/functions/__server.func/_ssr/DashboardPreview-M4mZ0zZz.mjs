import { require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { cn } from "./primitives-DoEGU8Cj.mjs";
import { FileSpreadsheet, FileText, FolderOpen, Layers, LayoutGrid, Monitor, Package, Rocket, Search, Settings, ShieldCheck } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/DashboardPreview-M4mZ0zZz.js
var import_jsx_runtime = require_jsx_runtime();
var nav = [
	{
		label: "Dashboard",
		icon: LayoutGrid,
		active: true
	},
	{
		label: "App Catalog",
		icon: Package
	},
	{
		label: "WinGet Search",
		icon: Search
	},
	{
		label: "Profiles",
		icon: ShieldCheck
	},
	{
		label: "Windows Media",
		icon: Monitor
	},
	{
		label: "Office Deployment",
		icon: FileSpreadsheet
	},
	{
		label: "Logs",
		icon: FileText
	},
	{
		label: "Settings",
		icon: Settings
	}
];
var stats = [
	{
		k: "Installed",
		v: "184",
		tone: "success"
	},
	{
		k: "Available",
		v: "152",
		tone: "muted"
	},
	{
		k: "Pending",
		v: "12",
		tone: "warning"
	},
	{
		k: "Current Profile",
		v: "Technician",
		tone: "muted"
	}
];
var actions = [
	{
		label: "Install Essentials",
		icon: Rocket
	},
	{
		label: "Browse Apps",
		icon: FolderOpen
	},
	{
		label: "Choose Profile",
		icon: Layers
	},
	{
		label: "Windows Tools",
		icon: Monitor
	},
	{
		label: "Office Tools",
		icon: FileSpreadsheet
	}
];
function DashboardPreview({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("overflow-hidden rounded-2xl border border-border bg-surface shadow-lift", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-b border-border bg-sidebar px-4 py-2.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs font-semibold text-foreground",
				children: "PCReady"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[10px] text-muted-foreground",
				children: "Windows 11 Pro · x64"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 sm:grid-cols-[190px_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "hidden border-r border-border bg-sidebar p-3 sm:block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-2 pb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground",
					children: "Navigation"
				}), nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("mb-0.5 flex items-center gap-2 rounded-md px-2 py-2 text-xs font-medium", n.active ? "bg-nav-active text-foreground" : "text-muted-foreground"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(n.icon, {
						className: "h-3.5 w-3.5",
						"aria-hidden": "true"
					}), n.label]
				}, n.label))]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-4 sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-end justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-bold tracking-tight text-foreground",
							children: "System Overview"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] text-muted-foreground",
							children: "Windows 11 Pro · x64 · WinGet detected"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-md border border-border bg-nav-active px-2.5 py-1 text-[11px] font-semibold text-graphite",
							children: "Profile: Technician"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4",
						children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-card p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground",
								children: s.k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn("mt-1 truncate text-xl font-bold tabular-nums tracking-tight", s.tone === "success" && "text-success", s.tone === "warning" && "text-warning", s.tone === "muted" && "text-foreground"),
								children: s.v
							})]
						}, s.k))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground",
						children: "Quick Actions"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: actions.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-semibold text-graphite shadow-panel",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(a.icon, {
								className: "h-3.5 w-3.5",
								"aria-hidden": "true"
							}), a.label]
						}, a.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 rounded-xl border border-border bg-card p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold text-foreground",
								children: "Active operation"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[10px] text-muted-foreground",
								children: "Installing 3 of 12"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 h-2 w-full overflow-hidden rounded-full bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-[64%] rounded-full bg-graphite" })
						})]
					})
				]
			})]
		})]
	});
}
//#endregion
export { DashboardPreview };
