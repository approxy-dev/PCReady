import { __toESM } from "../_runtime.mjs";
import { Content2, Header, Item, Root2, Trigger2, require_jsx_runtime, require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { cn } from "./primitives-DoEGU8Cj.mjs";
import { ChevronDown } from "../_libs/lucide-react.mjs";
import { faqs } from "./pcready-CTieZak7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FAQAccordion-BNR4qNY5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
function FAQAccordion() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
		type: "single",
		collapsible: true,
		className: "w-full",
		children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
			value: `item-${i}`,
			className: "mb-3 overflow-hidden rounded-2xl border border-border bg-card px-5 shadow-panel",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
				className: "py-4 text-left text-sm font-semibold text-foreground hover:no-underline",
				children: f.q
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
				className: "pb-5 text-sm leading-relaxed text-muted-foreground",
				children: f.a
			})]
		}, f.q))
	});
}
//#endregion
export { FAQAccordion };
