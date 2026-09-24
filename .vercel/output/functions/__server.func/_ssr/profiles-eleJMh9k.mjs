import { require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { Reveal } from "./primitives-DoEGU8Cj.mjs";
import { PageHeader, Section } from "./PageShell-CGwDFtNr.mjs";
import { profiles } from "./catalog-BlcIYwM1.mjs";
import { ProfileCard } from "./cards-BsJyPwQc.mjs";
import { CTASection } from "./CTASection-6s7N-FZ-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profiles-eleJMh9k.js
var import_jsx_runtime = require_jsx_runtime();
var customProfile = {
	name: "Custom",
	description: "Build your own setup from any of the 336 catalog applications and install only what is missing.",
	appCount: 0,
	builtin: false,
	apps: []
};
function ProfilesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Profiles",
			title: "Complete Environments in One Operation",
			subtitle: "Each profile bundles the applications a role actually needs. Install missing only keeps existing software untouched."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: [...profiles, customProfile].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i % 3 * 70,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileCard, { profile: p })
			}, p.name))
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { ProfilesPage as component };
