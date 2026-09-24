import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { cn } from "./primitives-DoEGU8Cj.mjs";
import { PageHeader, Section } from "./PageShell-CGwDFtNr.mjs";
import { catalogApps, catalogStats, categories } from "./catalog-BlcIYwM1.mjs";
import { Search } from "../_libs/lucide-react.mjs";
import { AppCard } from "./cards-BsJyPwQc.mjs";
import { CTASection } from "./CTASection-6s7N-FZ-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catalog-CjNul2Fz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CatalogBrowser() {
	const [active, setActive] = (0, import_react.useState)("All");
	const [query, setQuery] = (0, import_react.useState)("");
	const filtered = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		return catalogApps.filter((a) => {
			const matchCat = active === "All" || a.category === active;
			const matchQ = !q || a.name.toLowerCase().includes(q) || a.wingetId.toLowerCase().includes(q);
			return matchCat && matchQ;
		});
	}, [active, query]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full sm:max-w-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
					className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "search",
					value: query,
					onChange: (e) => setQuery(e.target.value),
					placeholder: "Search applications...",
					"aria-label": "Search applications",
					className: "h-11 w-full rounded-lg border border-border bg-surface pl-9 pr-3 text-sm text-foreground shadow-panel outline-none placeholder:text-muted-foreground focus-visible:border-silver-soft"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-xs text-muted-foreground",
				children: [
					filtered.length,
					" of ",
					catalogStats.totalApps,
					" curated applications"
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 flex gap-2 overflow-x-auto pb-2",
			role: "tablist",
			"aria-label": "Application categories",
			children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				role: "tab",
				"aria-selected": active === c,
				onClick: () => setActive(c),
				className: cn("shrink-0 rounded-lg border px-3.5 py-2 text-xs font-semibold transition-colors", active === c ? "border-graphite bg-graphite text-primary-foreground" : "border-border bg-surface text-graphite hover:bg-hover"),
				children: c
			}, c))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
			children: filtered.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppCard, { app: a }, a.name))
		}),
		filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-8 text-center text-sm text-muted-foreground",
			children: "No applications match that search."
		}) : null
	] });
}
function CatalogPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "App catalog",
			title: "336 Curated Applications",
			subtitle: "Filter by category, search by name or publisher, and see at a glance what is already installed on this PC."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatalogBrowser, {}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { CatalogPage as component };
