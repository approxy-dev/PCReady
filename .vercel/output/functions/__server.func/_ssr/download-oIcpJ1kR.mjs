import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { Label, Panel, Reveal } from "./primitives-DoEGU8Cj.mjs";
import { PageHeader, Section } from "./PageShell-CGwDFtNr.mjs";
import { CircleCheck, Download, RefreshCw, ShieldAlert, ShieldX, TriangleAlert } from "../_libs/lucide-react.mjs";
import { downloadArtifact } from "./site-Bvq3kyV4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/download-oIcpJ1kR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function startDownload(file) {
	const a = document.createElement("a");
	a.href = downloadArtifact.href;
	a.download = file;
	a.rel = "noopener";
	document.body.appendChild(a);
	a.click();
	a.remove();
}
function DownloadPage() {
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => startDownload(downloadArtifact.file), 350);
		return () => clearTimeout(timer);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Download",
			title: "Thank You for Downloading PCReady",
			subtitle: "Your download should begin automatically. If it hasn't started, click the link below to restart it."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			className: "mx-auto max-w-3xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "p-6 sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center justify-center gap-1 text-center sm:flex-row sm:items-center sm:gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 text-sm font-semibold text-success",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
								className: "h-4 w-4",
								"aria-hidden": "true"
							}), " Thank you for downloading PCReady!"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => startDownload(downloadArtifact.file),
							className: "inline-flex items-center gap-1.5 text-xs font-semibold text-graphite underline-offset-2 hover:underline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
								className: "h-3 w-3",
								"aria-hidden": "true"
							}), "Click here to restart the download if it hasn't started"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-2 border-t border-border pt-5 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Version" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-mono text-sm font-semibold text-foreground",
								children: downloadArtifact.version
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Size" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-mono text-sm font-semibold text-foreground",
								children: downloadArtifact.sizeLabel
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Platform" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-mono text-sm font-semibold text-foreground",
								children: "Windows 10 / 11 · x64 · ARM64"
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 break-all rounded-lg border border-border bg-surface p-3 font-mono text-[11px] leading-relaxed text-muted-foreground",
						children: ["SHA-256 · ", downloadArtifact.sha256]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: downloadArtifact.checksumHref,
							rel: "noopener",
							target: "_blank",
							className: "inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-graphite transition-colors hover:bg-hover",
							children: "Verify checksum"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => startDownload(downloadArtifact.file),
							className: "inline-flex items-center justify-center gap-2 rounded-lg bg-graphite px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-graphite-hover active:bg-graphite-pressed",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
								className: "h-4 w-4",
								"aria-hidden": "true"
							}), " Download PCReady again"]
						})]
					})
				]
			})
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "border-y border-border bg-surface py-16 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-3xl gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
						className: "p-6 sm:p-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, {
								className: "mt-0.5 h-5 w-5 shrink-0 text-warning",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-sm font-bold tracking-tight text-foreground",
								children: "Caution — Development Build"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-[13px] leading-relaxed text-muted-foreground",
								children: "PCReady is provided as an approximate, in-development build. Features may change, behave unexpectedly, or be incomplete, and no guarantee is made about correctness, stability, or compatibility with your system. Use it at your own risk and on machines you are prepared to troubleshoot."
							})] })]
						})
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
							className: "p-6 sm:p-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldX, {
									className: "mt-0.5 h-5 w-5 shrink-0 text-warning",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-sm font-bold tracking-tight text-foreground",
									children: "No Responsibility for Use"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 text-[13px] leading-relaxed text-muted-foreground",
									children: "PCReady and its developers take no responsibility for the use of the PCReady application or any consequences that follow from using it. You are solely responsible for what you install, how the application is used, and any changes made to your system."
								})] })]
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 120,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3 rounded-xl border border-warning/30 bg-warning/10 p-5 sm:p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
								className: "mt-0.5 h-5 w-5 shrink-0 text-warning",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[13px] leading-relaxed text-muted-foreground",
								children: "If a download did not start, use the restart link above. Downloads are delivered from the project's official release channel only."
							})]
						})
					})
				]
			})
		})
	] });
}
//#endregion
export { DownloadPage as component };
