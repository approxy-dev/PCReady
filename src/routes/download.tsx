import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Download,
  HardDrive,
  Cpu,
  MonitorCheck,
  Package,
  FileArchive,
  Terminal,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import { PageHeader, Section } from "@/components/site/PageShell";
import { Panel, Reveal, SectionHeading, TechBadge, Label } from "@/components/site/primitives";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { downloads, recommendedDownload } from "@/lib/site";
import { cn } from "@/lib/utils";

const title = "Download PCReady — Free Windows Setup Tool";
const description =
  "Download PCReady, the free Windows desktop application for rebuilding your software environment on Windows 10 and Windows 11 (x64 and ARM64).";

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DownloadPage,
});

const requirements = [
  { icon: MonitorCheck, k: "Operating system", v: "Windows 10 · Windows 11" },
  { icon: Cpu, k: "Architecture", v: "x64 · ARM64" },
  { icon: HardDrive, k: "Disk space", v: "Varies with selected applications" },
];

const kindMeta: Record<string, { label: string; icon: typeof Package; chip: string }> = {
  installer: {
    label: "Installer",
    icon: Package,
    chip: "border-success/30 bg-success/10 text-success",
  },
  portable: {
    label: "Portable",
    icon: FileArchive,
    chip: "border-border bg-nav-active text-graphite",
  },
  framework: {
    label: "Framework",
    icon: Terminal,
    chip: "border-border bg-nav-active text-graphite",
  },
};

function DownloadPage() {
  const [revealed, setRevealed] = useState<string | null>(null);

  return (
    <>
      <PageHeader
        eyebrow="Download"
        title="Get Your PC Ready"
        subtitle="Install the applications you need, skip the ones you don't, and rebuild your Windows environment faster."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <Panel className="p-6 sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Free desktop application
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground">
                PCReady for Windows
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A single installer with the curated catalog, setup profiles, installation queue,
                download manager, Windows and Office tools, and diagnostics.
              </p>

              <div className="mt-6 rounded-xl border border-border bg-surface p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="text-sm font-bold text-foreground">{recommendedDownload.label}</p>
                    <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">
                      v{recommendedDownload.version} · {recommendedDownload.sizeLabel} · Windows x64
                    </p>
                  </div>
                  <a
                    href={`/downloads/${recommendedDownload.file}`}
                    download={recommendedDownload.file}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-graphite px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-graphite-hover active:bg-graphite-pressed"
                  >
                    <Download className="h-4 w-4" aria-hidden="true" /> Download PCReady
                  </a>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  {recommendedDownload.description}
                </p>
                <div className="mt-3 border-t border-border pt-3">
                  <a
                    href="/downloads/SHA256SUMS.txt"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-graphite hover:underline"
                  >
                    <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" /> SHA-256 checksums
                  </a>
                </div>
              </div>

              <ul className="mt-6 flex flex-wrap gap-2 border-t border-border pt-6">
                {["Windows 10", "Windows 11", "x64", "ARM64"].map((c) => (
                  <li key={c}>
                    <TechBadge>{c}</TechBadge>
                  </li>
                ))}
              </ul>
            </Panel>
          </Reveal>

          <Reveal delay={80}>
            <Panel className="h-full p-6 sm:p-8">
              <h2 className="text-base font-bold tracking-tight text-foreground">Requirements</h2>
              <ul className="mt-5 space-y-4">
                {requirements.map((r) => (
                  <li key={r.k} className="flex items-start gap-3">
                    <span className="metal-sheen inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border">
                      <r.icon className="h-4 w-4 text-graphite" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{r.k}</p>
                      <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">{r.v}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-xl border border-border bg-muted px-4 py-3 text-xs leading-relaxed text-muted-foreground">
                WinGet is recommended for package search, but PCReady falls back to direct
                installers when it is unavailable.
              </p>
            </Panel>
          </Reveal>
        </div>
      </Section>

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="All versions"
              title="Available Builds"
              subtitle="Installer, portable, or framework-dependent — pick the option that fits how you manage software."
            />
          </Reveal>

          <div className="mt-10 space-y-4">
            {downloads.map((d, i) => {
              const meta = kindMeta[d.kind]!;
              const Icon =
                d.kind === "installer" ? Package : d.kind === "portable" ? FileArchive : Terminal;
              const open = revealed === d.id;
              return (
                <Reveal key={d.id} delay={i * 60}>
                  <Panel className="p-5 sm:p-6">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex items-start gap-4">
                        <span className="metal-sheen inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border">
                          <Icon className="h-5 w-5 text-graphite" aria-hidden="true" />
                        </span>
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-base font-bold tracking-tight text-foreground">
                              {d.label}
                            </h3>
                            <span
                              className={cn(
                                "rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
                                meta.chip,
                              )}
                            >
                              {meta.label}
                            </span>
                            {d.recommended ? (
                              <span className="rounded-md border border-border bg-muted px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                                Recommended
                              </span>
                            ) : null}
                          </div>
                          <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                            {d.description}
                          </p>
                          <p className="mt-1.5 font-mono text-[11px] text-muted-foreground">
                            v{d.version} · {d.sizeLabel} · {d.file}
                          </p>
                        </div>
                      </div>

                      <div className="flex shrink-0 flex-col items-start gap-2 lg:items-end">
                        <a
                          href={`/downloads/${d.file}`}
                          download={d.file}
                          className={cn(
                            "inline-flex h-10 items-center justify-center gap-2 rounded-lg px-4 text-sm font-semibold transition-colors",
                            d.recommended
                              ? "bg-graphite text-primary-foreground hover:bg-graphite-hover active:bg-graphite-pressed"
                              : "border border-border bg-surface text-graphite hover:bg-hover active:bg-nav-active",
                          )}
                        >
                          <Download className="h-4 w-4" aria-hidden="true" /> Download
                        </a>
                        <button
                          type="button"
                          onClick={() => setRevealed(open ? null : d.id)}
                          aria-expanded={open}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-graphite hover:underline"
                        >
                          <ChevronDown
                            className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")}
                            aria-hidden="true"
                          />
                          {open ? "Hide checksum" : "Show SHA-256"}
                        </button>
                        {open ? (
                          <code className="w-full max-w-full break-all rounded-md border border-border bg-muted px-2.5 py-1.5 font-mono text-[10px] leading-relaxed text-muted-foreground">
                            {d.sha256}
                          </code>
                        ) : null}
                      </div>
                    </div>
                  </Panel>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={120} className="mx-auto mt-10 max-w-3xl">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-panel">
              <Label>Verifying your download</Label>
              <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground">
                <li>
                  Download the build you want from above, or run the version-independent checksum
                  file:{" "}
                  <a
                    href="/downloads/SHA256SUMS.txt"
                    className="font-semibold text-graphite hover:underline"
                  >
                    SHA256SUMS.txt
                  </a>
                  .
                </li>
                <li>
                  On Windows open PowerShell and run{" "}
                  <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                    Get-FileHash .\&lt;file&gt; -Algorithm SHA256
                  </code>
                  .
                </li>
                <li>
                  Compare the result to the matching checksum. Matching values mean the file is
                  intact.
                </li>
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8">
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Before You Install" />
          </Reveal>
          <Reveal delay={80} className="mx-auto mt-10 max-w-3xl">
            <FAQAccordion />
          </Reveal>
        </div>
      </section>
    </>
  );
}
