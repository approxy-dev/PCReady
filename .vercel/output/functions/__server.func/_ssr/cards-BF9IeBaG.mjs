import { require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { ActionLink, AppGlyph, Label, Panel, cn } from "./primitives-DoEGU8Cj.mjs";
import { Check } from "../_libs/lucide-react.mjs";
import { DownloadButton } from "./DownloadButton-CuTtBb7W.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cards-BF9IeBaG.js
var import_jsx_runtime = require_jsx_runtime();
function FeatureCard({ icon: Icon, title, description, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		hover: true,
		className: cn("flex flex-col p-6", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "metal-sheen mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-graphite" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-base font-bold tracking-tight text-foreground",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted-foreground",
				children: description
			}),
			children ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5",
				children
			}) : null
		]
	});
}
function StatCard({ value, label, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		className: "p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-2xl font-bold tabular-nums tracking-tight text-foreground sm:text-3xl",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm font-semibold text-foreground",
				children: label
			}),
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-mono text-[11px] text-muted-foreground",
				children: hint
			}) : null
		]
	});
}
function AppCard({ app }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		hover: true,
		className: "flex items-center gap-3 p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppGlyph, { name: app.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate text-sm font-semibold text-foreground",
					children: app.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate text-xs text-muted-foreground",
					children: app.category
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate font-mono text-[11px] text-muted-foreground",
					children: app.wingetId
				})
			]
		})]
	});
}
function ProfileCard({ profile }) {
	const custom = profile.name === "Custom";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		hover: true,
		className: "flex h-full flex-col p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-base font-bold tracking-tight text-foreground",
					children: profile.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					className: "mt-1 block",
					children: custom ? "Your selection" : `${profile.appCount} Applications`
				})] }), !custom ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-md border border-border bg-nav-active px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-graphite",
					children: profile.builtin ? "Built-in" : "Profile"
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed text-muted-foreground",
				children: profile.description
			}),
			profile.apps.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 flex flex-wrap gap-1.5",
				children: profile.apps.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-md border border-border bg-surface px-2 py-1 text-[11px] font-medium text-graphite",
					children: a
				}, a))
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 flex items-center gap-2 border-t border-border pt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DownloadButton, {
					variant: "primary",
					size: "sm",
					className: "w-full"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2.5 flex items-center gap-1.5 text-[11px] font-medium text-success",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					className: "h-3 w-3",
					"aria-hidden": "true"
				}), " Install missing only"]
			})
		]
	});
}
function SystemToolCard({ title, description, items, cta, icon: Icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		hover: true,
		className: "flex h-full flex-col p-6 sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "metal-sheen mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-graphite" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xl font-bold tracking-tight text-foreground",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted-foreground",
				children: description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-5 grid gap-2 sm:grid-cols-2",
				children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-start gap-2 text-sm text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-graphite",
						"aria-hidden": "true"
					}), i]
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 pt-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
					to: "/features",
					variant: "secondary",
					children: cta
				})
			})
		]
	});
}
function SecurityFeature({ icon: Icon, title, description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-panel transition-shadow hover:shadow-lift",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "metal-sheen inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4.5 w-4.5 text-graphite" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "text-sm font-bold text-foreground",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1.5 text-sm leading-relaxed text-muted-foreground",
			children: description
		})] })]
	});
}
function LogViewer() {
	const lines = [
		{
			t: "22:41:12",
			m: "Download started",
			tone: "muted"
		},
		{
			t: "22:41:18",
			m: "SHA-256 verified",
			tone: "success"
		},
		{
			t: "22:41:20",
			m: "Installer launched",
			tone: "muted"
		},
		{
			t: "22:41:48",
			m: "Installation completed",
			tone: "success"
		}
	];
	const logName = `pcready-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.log`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		className: "overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-b border-border bg-sidebar px-4 py-2.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold text-foreground",
				children: logName
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[10px] text-muted-foreground",
				children: "local only"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			className: "overflow-x-auto bg-[#2E3033] p-4 font-mono text-[12px] leading-6 text-[#E5E4E2]",
			children: lines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[#A7A9AC]",
					children: l.t
				}),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: l.tone === "success" ? "text-[#4ADE80]" : void 0,
					children: l.m
				})
			] }, l.t))
		})]
	});
}
//#endregion
export { AppCard, FeatureCard, LogViewer, ProfileCard, SecurityFeature, StatCard, SystemToolCard };
