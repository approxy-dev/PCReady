import type { ComponentType, ReactNode } from "react";
import { Check } from "lucide-react";
import type { CatalogApp, Profile } from "@/data/catalog";
import { AppGlyph, Label, Panel, ActionLink } from "./primitives";
import { cn } from "@/lib/utils";

export function FeatureCard({
  icon: Icon,
  title,
  description,
  children,
  className,
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <Panel hover className={cn("flex flex-col p-6", className)}>
      <span className="metal-sheen mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border">
        <Icon className="h-5 w-5 text-graphite" />
      </span>
      <h3 className="text-base font-bold tracking-tight text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      {children ? <div className="mt-5">{children}</div> : null}
    </Panel>
  );
}

export function StatCard({ value, label, hint }: { value: string; label: string; hint?: string }) {
  return (
    <Panel className="p-5">
      <p className="text-2xl font-bold tabular-nums tracking-tight text-foreground sm:text-3xl">
        {value}
      </p>
      <p className="mt-1 text-sm font-semibold text-foreground">{label}</p>
      {hint ? <p className="mt-1 font-mono text-[11px] text-muted-foreground">{hint}</p> : null}
    </Panel>
  );
}

export function AppCard({ app }: { app: CatalogApp }) {
  return (
    <Panel hover className="flex items-center gap-3 p-4">
      <AppGlyph name={app.name} />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-foreground">{app.name}</p>
        <p className="truncate text-xs text-muted-foreground">{app.category}</p>
        <p className="truncate font-mono text-[11px] text-muted-foreground">{app.wingetId}</p>
      </div>
    </Panel>
  );
}

export function ProfileCard({ profile }: { profile: Profile }) {
  const custom = profile.name === "Custom";
  return (
    <Panel hover className="flex h-full flex-col p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-bold tracking-tight text-foreground">{profile.name}</h3>
          <Label className="mt-1 block">
            {custom ? "Your selection" : `${profile.appCount} Applications`}
          </Label>
        </div>
        {!custom ? (
          <span className="rounded-md border border-border bg-nav-active px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-graphite">
            {profile.builtin ? "Built-in" : "Profile"}
          </span>
        ) : null}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{profile.description}</p>
      {profile.apps.length ? (
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {profile.apps.map((a) => (
            <li
              key={a}
              className="rounded-md border border-border bg-surface px-2 py-1 text-[11px] font-medium text-graphite"
            >
              {a}
            </li>
          ))}
        </ul>
      ) : null}
      <div className="mt-5 flex items-center gap-2 border-t border-border pt-4">
        <ActionLink to="/download" variant="primary" size="sm" className="w-full">
          {custom ? "Build Custom Profile" : "Install Profile"}
        </ActionLink>
      </div>
      <p className="mt-2.5 flex items-center gap-1.5 text-[11px] font-medium text-success">
        <Check className="h-3 w-3" aria-hidden="true" /> Install missing only
      </p>
    </Panel>
  );
}

export function SystemToolCard({
  title,
  description,
  items,
  cta,
  icon: Icon,
}: {
  title: string;
  description: string;
  items: string[];
  cta: string;
  icon: ComponentType<{ className?: string }>;
}) {
  return (
    <Panel hover className="flex h-full flex-col p-6 sm:p-8">
      <span className="metal-sheen mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border">
        <Icon className="h-5 w-5 text-graphite" />
      </span>
      <h3 className="text-xl font-bold tracking-tight text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-foreground">
            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-graphite" aria-hidden="true" />
            {i}
          </li>
        ))}
      </ul>
      <div className="mt-6 pt-1">
        <ActionLink to="/features" variant="secondary">
          {cta}
        </ActionLink>
      </div>
    </Panel>
  );
}

export function SecurityFeature({
  icon: Icon,
  title,
  description,
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-panel transition-shadow hover:shadow-lift">
      <span className="metal-sheen inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border">
        <Icon className="h-4.5 w-4.5 text-graphite" />
      </span>
      <div>
        <h3 className="text-sm font-bold text-foreground">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export function LogViewer() {
  const lines = [
    { t: "22:41:12", m: "Download started", tone: "muted" },
    { t: "22:41:18", m: "SHA-256 verified", tone: "success" },
    { t: "22:41:20", m: "Installer launched", tone: "muted" },
    { t: "22:41:48", m: "Installation completed", tone: "success" },
  ];
  const logName = `pcready-${new Date().toISOString().slice(0, 10)}.log`;
  return (
    <Panel className="overflow-hidden">
      <div className="flex items-center justify-between border-b border-border bg-sidebar px-4 py-2.5">
        <p className="text-xs font-semibold text-foreground">{logName}</p>
        <span className="font-mono text-[10px] text-muted-foreground">local only</span>
      </div>
      <pre className="overflow-x-auto bg-[#2E3033] p-4 font-mono text-[12px] leading-6 text-[#E5E4E2]">
        {lines.map((l) => (
          <div key={l.t}>
            <span className="text-[#A7A9AC]">{l.t}</span>{" "}
            <span className={l.tone === "success" ? "text-[#4ADE80]" : undefined}>{l.m}</span>
          </div>
        ))}
      </pre>
    </Panel>
  );
}
