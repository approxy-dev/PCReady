import {
  LayoutGrid,
  Package,
  Search,
  Settings,
  ShieldCheck,
  Monitor,
  FileText,
  Rocket,
  FolderOpen,
  Layers,
  FileSpreadsheet,
} from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Dashboard", icon: LayoutGrid, active: true },
  { label: "App Catalog", icon: Package },
  { label: "WinGet Search", icon: Search },
  { label: "Profiles", icon: ShieldCheck },
  { label: "Windows Media", icon: Monitor },
  { label: "Office Deployment", icon: FileSpreadsheet },
  { label: "Logs", icon: FileText },
  { label: "Settings", icon: Settings },
];

const stats = [
  { k: "Installed", v: "184", tone: "success" },
  { k: "Available", v: "152", tone: "muted" },
  { k: "Pending", v: "12", tone: "warning" },
  { k: "Current Profile", v: "Technician", tone: "muted" },
];

const actions = [
  { label: "Install Essentials", icon: Rocket },
  { label: "Browse Apps", icon: FolderOpen },
  { label: "Choose Profile", icon: Layers },
  { label: "Windows Tools", icon: Monitor },
  { label: "Office Tools", icon: FileSpreadsheet },
];

export function DashboardPreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-surface shadow-lift",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-border bg-sidebar px-4 py-2.5">
        <span className="text-xs font-semibold text-foreground">PCReady</span>
        <span className="font-mono text-[10px] text-muted-foreground">Windows 11 Pro · x64</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr]">
        <aside className="hidden border-r border-border bg-sidebar p-3 sm:block">
          <p className="px-2 pb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Navigation
          </p>
          {nav.map((n) => (
            <div
              key={n.label}
              className={cn(
                "mb-0.5 flex items-center gap-2 rounded-md px-2 py-2 text-xs font-medium",
                n.active ? "bg-nav-active text-foreground" : "text-muted-foreground",
              )}
            >
              <n.icon className="h-3.5 w-3.5" aria-hidden="true" />
              {n.label}
            </div>
          ))}
        </aside>

        <div className="p-4 sm:p-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold tracking-tight text-foreground">System Overview</h3>
              <p className="font-mono text-[11px] text-muted-foreground">
                Windows 11 Pro · x64 · WinGet detected
              </p>
            </div>
            <span className="rounded-md border border-border bg-nav-active px-2.5 py-1 text-[11px] font-semibold text-graphite">
              Profile: Technician
            </span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.k} className="rounded-xl border border-border bg-card p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {s.k}
                </p>
                <p
                  className={cn(
                    "mt-1 truncate text-xl font-bold tabular-nums tracking-tight",
                    s.tone === "success" && "text-success",
                    s.tone === "warning" && "text-warning",
                    s.tone === "muted" && "text-foreground",
                  )}
                >
                  {s.v}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Quick Actions
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {actions.map((a) => (
              <span
                key={a.label}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-semibold text-graphite shadow-panel"
              >
                <a.icon className="h-3.5 w-3.5" aria-hidden="true" />
                {a.label}
              </span>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-border bg-card p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-foreground">Active operation</p>
              <span className="font-mono text-[10px] text-muted-foreground">
                Installing 3 of 12
              </span>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full w-[64%] rounded-full bg-graphite" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
