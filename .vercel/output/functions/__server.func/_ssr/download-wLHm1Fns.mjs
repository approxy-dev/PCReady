import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { Label, Panel, Reveal, SectionHeading, TechBadge, cn } from "./primitives-DoEGU8Cj.mjs";
import { PageHeader, Section } from "./PageShell-CGwDFtNr.mjs";
import { ChevronDown, Cpu, Download, FileArchive, HardDrive, MonitorCheck, Package, ShieldCheck, Terminal } from "../_libs/lucide-react.mjs";
import { FAQAccordion } from "./FAQAccordion-BNR4qNY5.mjs";
import { downloads, recommendedDownload } from "./site-D7s06t8h.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/download-wLHm1Fns.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var requirements = [
	{
		icon: MonitorCheck,
		k: "Operating system",
		v: "Windows 10 · Windows 11"
	},
	{
		icon: Cpu,
		k: "Architecture",
		v: "x64 · ARM64"
	},
	{
		icon: HardDrive,
		k: "Disk space",
		v: "Varies with selected applications"
	}
];
var kindMeta = {
	installer: {
		label: "Installer",
		icon: Package,
		chip: "border-success/30 bg-success/10 text-success"
	},
	portable: {
		label: "Portable",
		icon: FileArchive,
		chip: "border-border bg-nav-active text-graphite"
	},
	framework: {
		label: "Framework",
		icon: Terminal,
		chip: "border-border bg-nav-active text-graphite"
	}
};
function DownloadPage() {
	const [revealed, setRevealed] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Download",
			title: "Get Your PC Ready",
			subtitle: "Install the applications you need, skip the ones you don't, and rebuild your Windows environment faster."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-[1.1fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "p-6 sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground",
						children: "Free desktop application"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-2xl font-bold tracking-tight text-foreground",
						children: "PCReady for Windows"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground",
						children: "A single installer with the curated catalog, setup profiles, installation queue, download manager, Windows and Office tools, and diagnostics."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 rounded-xl border border-border bg-surface p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-bold text-foreground",
									children: recommendedDownload.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-0.5 font-mono text-[11px] text-muted-foreground",
									children: [
										"v",
										recommendedDownload.version,
										" · ",
										recommendedDownload.sizeLabel,
										" · Windows x64"
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `/downloads/${recommendedDownload.file}`,
									download: recommendedDownload.file,
									className: "inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-graphite px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-graphite-hover active:bg-graphite-pressed",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
										className: "h-4 w-4",
										"aria-hidden": "true"
									}), " Download PCReady"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs leading-relaxed text-muted-foreground",
								children: recommendedDownload.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 border-t border-border pt-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "/downloads/SHA256SUMS.txt",
									className: "inline-flex items-center gap-1.5 text-xs font-semibold text-graphite hover:underline",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
										className: "h-3.5 w-3.5",
										"aria-hidden": "true"
									}), " SHA-256 checksums"]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 flex flex-wrap gap-2 border-t border-border pt-6",
						children: [
							"Windows 10",
							"Windows 11",
							"x64",
							"ARM64"
						].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechBadge, { children: c }) }, c))
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 80,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "h-full p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base font-bold tracking-tight text-foreground",
							children: "Requirements"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-4",
							children: requirements.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "metal-sheen inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r.icon, {
										className: "h-4 w-4 text-graphite",
										"aria-hidden": "true"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold text-foreground",
									children: r.k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 font-mono text-[11px] text-muted-foreground",
									children: r.v
								})] })]
							}, r.k))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 rounded-xl border border-border bg-muted px-4 py-3 text-xs leading-relaxed text-muted-foreground",
							children: "WinGet is recommended for package search, but PCReady falls back to direct installers when it is unavailable."
						})
					]
				})
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface py-16 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-[1320px] px-5 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "All versions",
						title: "Available Builds",
						subtitle: "Installer, portable, or framework-dependent — pick the option that fits how you manage software."
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 space-y-4",
						children: downloads.map((d, i) => {
							const meta = kindMeta[d.kind];
							const Icon = d.kind === "installer" ? Package : d.kind === "portable" ? FileArchive : Terminal;
							const open = revealed === d.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * 60,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
									className: "p-5 sm:p-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "metal-sheen inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
													className: "h-5 w-5 text-graphite",
													"aria-hidden": "true"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex flex-wrap items-center gap-2",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
																className: "text-base font-bold tracking-tight text-foreground",
																children: d.label
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: cn("rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider", meta.chip),
																children: meta.label
															}),
															d.recommended ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "rounded-md border border-border bg-muted px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
																children: "Recommended"
															}) : null
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground",
														children: d.description
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "mt-1.5 font-mono text-[11px] text-muted-foreground",
														children: [
															"v",
															d.version,
															" · ",
															d.sizeLabel,
															" · ",
															d.file
														]
													})
												]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex shrink-0 flex-col items-start gap-2 lg:items-end",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
													href: `/downloads/${d.file}`,
													download: d.file,
													className: cn("inline-flex h-10 items-center justify-center gap-2 rounded-lg px-4 text-sm font-semibold transition-colors", d.recommended ? "bg-graphite text-primary-foreground hover:bg-graphite-hover active:bg-graphite-pressed" : "border border-border bg-surface text-graphite hover:bg-hover active:bg-nav-active"),
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
														className: "h-4 w-4",
														"aria-hidden": "true"
													}), " Download"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => setRevealed(open ? null : d.id),
													"aria-expanded": open,
													className: "inline-flex items-center gap-1 text-xs font-semibold text-graphite hover:underline",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
														className: cn("h-3.5 w-3.5 transition-transform", open && "rotate-180"),
														"aria-hidden": "true"
													}), open ? "Hide checksum" : "Show SHA-256"]
												}),
												open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
													className: "w-full max-w-full break-all rounded-md border border-border bg-muted px-2.5 py-1.5 font-mono text-[10px] leading-relaxed text-muted-foreground",
													children: d.sha256
												}) : null
											]
										})]
									})
								})
							}, d.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 120,
						className: "mx-auto mt-10 max-w-3xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card p-5 shadow-panel",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Verifying your download" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
								className: "mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										"Download the build you want from above, or run the version-independent checksum file:",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "/downloads/SHA256SUMS.txt",
											className: "font-semibold text-graphite hover:underline",
											children: "SHA256SUMS.txt"
										}),
										"."
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										"On Windows open PowerShell and run",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
											className: "rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground",
											children: "Get-FileHash .\\<file> -Algorithm SHA256"
										}),
										"."
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Compare the result to the matching checksum. Matching values mean the file is intact." })
								]
							})]
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-[1320px] px-5 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "FAQ",
					title: "Before You Install"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					className: "mx-auto mt-10 max-w-3xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQAccordion, {})
				})]
			})
		})
	] });
}
//#endregion
export { DownloadPage as component };
