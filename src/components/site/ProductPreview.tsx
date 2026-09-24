import {
  LayoutGrid,
  Package,
  Search,
  Settings,
  ShieldCheck,
  Monitor,
  FileText,
} from "lucide-react";
import { AppGlyph, StatusPill } from "./primitives";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Dashboard", icon: LayoutGrid, active: true },
  { label: "App Catalog", icon: Package },
  { label: "WinGet Search", icon: Search },
  { label: "Profiles", icon: ShieldCheck },
  { label: "Windows Tools", icon: Monitor },
  { label: "Logs", icon: FileText },
  { label: "Settings", icon: Settings },
];

const apps = [
  { name: "Visual Studio Code", publisher: "Microsoft", version: "1.96", state: "Installed" },
  { name: "Google Chrome", publisher: "Google LLC", version: "132.0", state: "Available" },
  { name: "7-Zip", publisher: "Igor Pavlov", version: "24.09", state: "Available" },
  { name: "Git", publisher: "Git for Windows", version: "2.47.1", state: "Installed" },
];

export function ProductPreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-surface shadow-lift",
        className,
      )}
    >
      {/* window chrome */}
      <div className="flex items-center justify-between border-b border-border bg-sidebar px-4 py-2.5">
        <span className="text-xs font-semibold tracking-tight text-foreground">
          PCReady — Setup Console
        </span>
        <span aria-hidden="true" className="flex items-center gap-3 text-muted-foreground">
          <span className="block h-[1.5px] w-3 bg-silver-soft" />
          <span className="block h-2.5 w-2.5 border border-silver-soft" />
          <span className="relative block h-2.5 w-2.5">
            <span className="absolute inset-x-0 top-1/2 h-[1.5px] rotate-45 bg-silver-soft" />
            <span className="absolute inset-x-0 top-1/2 h-[1.5px] -rotate-45 bg-silver-soft" />
          </span>
        </span>
      </div>

      <div className="grid grid-cols-[132px_1fr] sm:grid-cols-[168px_1fr]">
        <aside className="border-r border-border bg-sidebar p-2.5">
          {nav.map((n) => (
            <div
              key={n.label}
              className={cn(
                "mb-0.5 flex items-center gap-2 rounded-md px-2 py-2 text-[11px] font-medium",
                n.active ? "bg-nav-active text-foreground" : "text-muted-foreground",
              )}
            >
              <n.icon className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="truncate">{n.label}</span>
            </div>
          ))}
        </aside>

        <div className="p-3.5 sm:p-5">
          <div className="grid grid-cols-3 gap-2.5">
            {[
              { k: "Installed", v: "184" },
              { k: "Available", v: "152" },
              { k: "Pending", v: "12" },
            ].map((s) => (
              <div key={s.k} className="rounded-xl border border-border bg-card px-3 py-2.5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {s.k}
                </p>
                <p className="mt-1 text-lg font-bold tabular-nums text-foreground">{s.v}</p>
              </div>
            ))}
          </div>

          <div className="mt-3.5 rounded-xl border border-border bg-card p-3">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-foreground">Installation Queue</p>
              <span className="font-mono text-[10px] text-muted-foreground">3 of 5</span>
            </div>
            <div className="mt-2.5 space-y-2">
              {[
                { n: "Visual Studio Code", s: "Installing", p: 72 },
                { n: "Google Chrome", s: "Downloading", p: 41 },
              ].map((q) => (
                <div key={q.n}>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="truncate font-medium text-foreground">{q.n}</span>
                    <span className="ml-2 shrink-0 font-mono text-muted-foreground">
                      {q.s} {q.p}%
                    </span>
                  </div>
                  <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-graphite transition-[width] duration-700"
                      style={{ width: `${q.p}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3.5 space-y-2">
            {apps.map((a) => (
              <div
                key={a.name}
                className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-3 py-2.5"
              >
                <AppGlyph name={a.name} size="sm" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[11px] font-semibold text-foreground">{a.name}</p>
                  <p className="truncate font-mono text-[10px] text-muted-foreground">
                    {a.publisher} · {a.version}
                  </p>
                </div>
                <StatusPill status={a.state} className="hidden sm:inline-flex" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
