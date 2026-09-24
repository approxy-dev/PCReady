import { Check, Download, Loader2, Circle, RotateCcw, X } from "lucide-react";
import { queueItems } from "@/data/pcready";
import { Panel, StatusPill } from "./primitives";
import { cn } from "@/lib/utils";

function StageIcon({ status }: { status: string }) {
  if (status === "Installed")
    return <Check className="h-3.5 w-3.5 text-success" aria-hidden="true" />;
  if (status === "Downloading")
    return <Download className="h-3.5 w-3.5 text-graphite" aria-hidden="true" />;
  if (status === "Installing")
    return <Loader2 className="h-3.5 w-3.5 text-graphite" aria-hidden="true" />;
  return <Circle className="h-3.5 w-3.5 text-silver-soft" aria-hidden="true" />;
}

export function InstallationQueue({ className }: { className?: string }) {
  return (
    <Panel className={cn("overflow-hidden", className)}>
      <div className="flex items-center justify-between border-b border-border bg-sidebar px-4 py-3">
        <p className="text-sm font-semibold text-foreground">Installation Queue</p>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-md border border-border bg-surface px-2 py-1 text-[11px] font-medium text-graphite">
            <RotateCcw className="h-3 w-3" aria-hidden="true" /> Retry
          </span>
          <span className="inline-flex items-center gap-1 rounded-md border border-border bg-surface px-2 py-1 text-[11px] font-medium text-graphite">
            <X className="h-3 w-3" aria-hidden="true" /> Cancel
          </span>
        </div>
      </div>

      <ul className="divide-y divide-border">
        {queueItems.map((q) => (
          <li key={q.name} className="px-4 py-3">
            <div className="flex items-center gap-3">
              <StageIcon status={q.status} />
              <span className="min-w-0 flex-1 truncate text-sm font-medium text-foreground">
                {q.name}
              </span>
              <StatusPill status={q.status} />
              <span className="w-10 shrink-0 text-right font-mono text-[11px] text-muted-foreground">
                {q.progress > 0 && q.progress < 100 ? `${q.progress}%` : ""}
              </span>
            </div>
            {q.progress > 0 ? (
              <div
                className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted"
                role="progressbar"
                aria-valuenow={q.progress}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${q.name} progress`}
              >
                <div
                  className={cn(
                    "h-full rounded-full transition-[width] duration-1000 ease-out",
                    q.status === "Installed" ? "bg-success" : "bg-graphite",
                  )}
                  style={{ width: `${q.progress}%` }}
                />
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </Panel>
  );
}

const stages = ["Queued", "Downloading", "Verifying", "Installing", "Installed"];

export function StateMachine() {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-panel">
      <p className="text-sm font-semibold text-foreground">Installation state machine</p>
      <ol className="mt-4 space-y-2">
        {stages.map((s, i) => (
          <li key={s} className="flex items-center gap-3">
            <span className="w-6 shrink-0 font-mono text-[11px] text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              className={cn(
                "flex-1 rounded-lg border px-3 py-2 text-sm font-medium",
                i === stages.length - 1
                  ? "border-success/30 bg-success/10 text-success"
                  : "border-border bg-surface text-foreground",
              )}
            >
              {s}
            </span>
          </li>
        ))}
      </ol>
      <div className="mt-4 flex flex-wrap gap-2 border-t border-border pt-4">
        {["Retry", "Cancel", "Failed", "Skipped"].map((s) => (
          <StatusPill key={s} status={s} />
        ))}
      </div>
    </div>
  );
}
