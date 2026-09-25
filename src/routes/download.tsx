import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Download,
  RefreshCw,
  ShieldAlert,
  ShieldX,
} from "lucide-react";
import { PageHeader, Section } from "@/components/site/PageShell";
import { Panel, Reveal, Label } from "@/components/site/primitives";
import { downloadArtifact } from "@/lib/site";

const title = "Download PCReady — Thank You";
const description =
  "Thank you for downloading PCReady. Restart the download if it hasn't started, and review the caution and responsibility notice before use.";

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

function startDownload(file: string) {
  const a = document.createElement("a");
  a.href = downloadArtifact.href;
  a.download = file;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function DownloadPage() {
  useEffect(() => {
    const timer = setTimeout(() => startDownload(downloadArtifact.file), 350);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Download"
        title="Thank You for Downloading PCReady"
        subtitle="Your download should begin automatically. If it hasn't started, click the link below to restart it."
      />

      <Section>
        <Reveal className="mx-auto max-w-3xl">
          <Panel className="p-6 sm:p-8">
            <div className="flex flex-col items-center justify-center gap-1 text-center sm:flex-row sm:items-center sm:gap-3">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-success">
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" /> Thank you for downloading
                PCReady!
              </span>
              <button
                type="button"
                onClick={() => startDownload(downloadArtifact.file)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-graphite underline-offset-2 hover:underline"
              >
                <RefreshCw className="h-3 w-3" aria-hidden="true" />
                Click here to restart the download if it hasn't started
              </button>
            </div>
            <div className="mt-6 grid gap-2 border-t border-border pt-5 sm:grid-cols-3">
              <div>
                <Label>Version</Label>
                <p className="mt-1 font-mono text-sm font-semibold text-foreground">
                  {downloadArtifact.version}
                </p>
              </div>
              <div>
                <Label>Size</Label>
                <p className="mt-1 font-mono text-sm font-semibold text-foreground">
                  {downloadArtifact.sizeLabel}
                </p>
              </div>
              <div>
                <Label>Platform</Label>
                <p className="mt-1 font-mono text-sm font-semibold text-foreground">
                  Windows 10 / 11 · x64 · ARM64
                </p>
              </div>
            </div>
            <p className="mt-5 break-all rounded-lg border border-border bg-surface p-3 font-mono text-[11px] leading-relaxed text-muted-foreground">
              SHA-256 · {downloadArtifact.sha256}
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href={downloadArtifact.href}
                download={downloadArtifact.file}
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-graphite px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-graphite-hover active:bg-graphite-pressed"
              >
                <Download className="h-4 w-4" aria-hidden="true" /> Download PCReady again
              </a>
              <a
                href={downloadArtifact.checksumHref}
                rel="noopener"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-graphite transition-colors hover:bg-hover"
              >
                Verify checksum
              </a>
            </div>
          </Panel>
        </Reveal>
      </Section>

      <Section className="border-y border-border bg-surface py-16 sm:py-20">
        <div className="mx-auto grid max-w-3xl gap-4">
          <Reveal>
            <Panel className="p-6 sm:p-8">
              <div className="flex items-start gap-3">
                <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-warning" aria-hidden="true" />
                <div>
                  <h2 className="text-sm font-bold tracking-tight text-foreground">
                    Caution — Development Build
                  </h2>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                    PCReady is provided as an approximate, in-development build. Features may
                    change, behave unexpectedly, or be incomplete, and no guarantee is made about
                    correctness, stability, or compatibility with your system. Use it at your own
                    risk and on machines you are prepared to troubleshoot.
                  </p>
                </div>
              </div>
            </Panel>
          </Reveal>

          <Reveal delay={80}>
            <Panel className="p-6 sm:p-8">
              <div className="flex items-start gap-3">
                <ShieldX className="mt-0.5 h-5 w-5 shrink-0 text-warning" aria-hidden="true" />
                <div>
                  <h2 className="text-sm font-bold tracking-tight text-foreground">
                    No Responsibility for Use
                  </h2>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                    PCReady and its developers take no responsibility for the use of the PCReady
                    application or any consequences that follow from using it. You are solely
                    responsible for what you install, how the application is used, and any changes
                    made to your system.
                  </p>
                </div>
              </div>
            </Panel>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex items-start gap-3 rounded-xl border border-warning/30 bg-warning/10 p-5 sm:p-6">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-warning" aria-hidden="true" />
              <p className="text-[13px] leading-relaxed text-muted-foreground">
                If a download did not start, use the restart link above. Downloads are delivered
                from the project's official release channel only.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
