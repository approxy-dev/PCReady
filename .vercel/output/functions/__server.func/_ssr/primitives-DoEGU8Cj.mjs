import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { clsx } from "../_libs/clsx.mjs";
import { twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/primitives-DoEGU8Cj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Container({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mx-auto w-full max-w-[1320px] px-5 sm:px-8", className),
		children
	});
}
function Reveal({ children, className, delay = 0, as: As = "div" }) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (typeof IntersectionObserver === "undefined") {
			setVisible(true);
			return;
		}
		const io = new IntersectionObserver((entries) => {
			for (const e of entries) if (e.isIntersecting) {
				setVisible(true);
				io.disconnect();
			}
		}, {
			rootMargin: "0px 0px -8% 0px",
			threshold: .08
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(As, {
		ref,
		className: cn("pcr-reveal", className),
		"data-visible": visible ? "true" : "false",
		style: { animationDelay: `${delay}ms` },
		children
	});
}
function SectionHeading({ eyebrow, title, subtitle, align = "center", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left", className),
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				className: "mb-3 inline-block",
				children: eyebrow
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-balance-tight text-3xl font-bold tracking-tight text-foreground sm:text-4xl",
				children: title
			}),
			subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg",
				children: subtitle
			}) : null
		]
	});
}
function Label({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground", className),
		children
	});
}
function Panel({ children, className, hover = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-2xl border border-border bg-card shadow-panel", hover && "transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-lift", className),
		children
	});
}
var btnBase = "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold transition-colors duration-150 disabled:pointer-events-none disabled:opacity-60";
var btnVariants = {
	primary: "bg-graphite text-primary-foreground hover:bg-graphite-hover active:bg-graphite-pressed",
	secondary: "border border-border bg-surface text-graphite hover:bg-hover active:bg-nav-active",
	ghost: "text-graphite hover:bg-hover"
};
var btnSizes = {
	sm: "h-9 px-3.5",
	md: "h-11 px-5",
	lg: "h-12 px-6 text-[15px]"
};
function buttonClass({ variant = "primary", size = "md", className } = {}) {
	return cn(btnBase, btnVariants[variant], btnSizes[size], className);
}
function ActionLink({ to, children, variant, size, className, ariaLabel }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		"aria-label": ariaLabel,
		className: buttonClass({
			variant,
			size,
			className
		}),
		children
	});
}
var statusStyles = {
	Installed: "border-success/30 bg-success/10 text-success",
	Installing: "border-border bg-nav-active text-graphite",
	Downloading: "border-border bg-nav-active text-graphite",
	Verifying: "border-border bg-nav-active text-graphite",
	Queued: "border-border bg-muted text-muted-foreground",
	Available: "border-border bg-muted text-muted-foreground",
	Pending: "border-warning/30 bg-warning/10 text-warning",
	Failed: "border-error/30 bg-error/10 text-error",
	Skipped: "border-border bg-muted text-muted-foreground"
};
function StatusPill({ status, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-semibold tracking-wide", statusStyles[status] ?? "border-border bg-muted text-muted-foreground", className),
		children: status
	});
}
function TechBadge({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-flex items-center rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-xs font-medium text-graphite shadow-panel",
		children
	});
}
function AppGlyph({ name, size = "md" }) {
	const initials = name.replace(/[^A-Za-z0-9 ]/g, " ").split(" ").filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-hidden": "true",
		className: cn("metal-sheen inline-flex shrink-0 items-center justify-center rounded-lg border border-border font-semibold text-graphite", size === "sm" ? "h-7 w-7 text-[10px]" : "h-10 w-10 text-xs"),
		children: initials
	});
}
//#endregion
export { ActionLink, AppGlyph, Container, Label, Panel, Reveal, SectionHeading, StatusPill, TechBadge, buttonClass, cn };
