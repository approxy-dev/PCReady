import { createFileRoute } from "@tanstack/react-router";
import { Compass, MousePointerClick, Rocket, CheckCircle2, WifiOff } from "lucide-react";
import { PageHeader, Section } from "@/components/site/PageShell";
import { InstallationQueue, StateMachine } from "@/components/site/InstallationQueue";
import { DashboardPreview } from "@/components/site/DashboardPreview";
import { Panel, Reveal, SectionHeading } from "@/components/site/primitives";
import { CTASection } from "@/components/site/CTASection";

const title = "How It Works — PCReady";
const description =
  "Discover, select, install, ready: how PCReady queues, downloads, verifies, and installs Windows applications after a fresh install.";

export const Route = createFileRoute("/how-it-works")({
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
  component: HowItWorksPage,
});

const steps = [
  {
    icon: Compass,
    n: "01",
    t: "Discover",
    d: "Find the software you need in the curated catalog or with WinGet search.",
  },
  {
    icon: MousePointerClick,
    n: "02",
    t: "Select",
    d: "Choose individual apps or a complete profile for your role.",
  },
  {
    icon: Rocket,
    n: "03",
    t: "Install",
    d: "PCReady downloads, verifies, and installs each application in order.",
  },
  {
    icon: CheckCircle2,
    n: "04",
    t: "Ready",
    d: "Finish with a configured, productive PC and a full activity log.",
  },
];

const fallbacks = [
  { from: "No WinGet", to: "Direct installers" },
  { from: "No network", to: "Cached catalog" },
  { from: "Unavailable icon", to: "Fallback icon" },
  { from: "Temporary failure", to: "Retry" },
];

function HowItWorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="Select. Install. Done."
        subtitle="PCReady turns a fresh Windows installation into a working environment with a single, observable pipeline."
      />

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 70}>
              <Panel hover className="h-full p-6">
                <span className="metal-sheen inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border">
                  <s.icon className="h-5 w-5 text-graphite" aria-hidden="true" />
                </span>
                <p className="mt-4 font-mono text-xs text-muted-foreground">{s.n}</p>
                <h2 className="mt-1 text-base font-bold tracking-tight text-foreground">{s.t}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Pipeline"
              title="Every App Follows the Same Path"
              subtitle="Queued, downloading, verifying, installing, installed — with retry, cancel, failed, and skipped handling."
            />
          </Reveal>
          <div className="mt-10 grid items-start gap-6 lg:grid-cols-[1.15fr_1fr]">
            <Reveal>
              <InstallationQueue />
            </Reveal>
            <Reveal delay={80}>
              <StateMachine />
            </Reveal>
          </div>
        </div>
      </section>

      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Dashboard"
            title="Your PC Setup at a Glance"
            subtitle="System information, counts, active profile, and quick actions in one console."
          />
        </Reveal>
        <Reveal delay={80} className="mt-10">
          <DashboardPreview />
        </Reveal>
      </Section>

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8">
          <Reveal>
            <SectionHeading eyebrow="Resilience" title="Designed for Imperfect Networks" />
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {fallbacks.map((f, i) => (
              <Reveal key={f.from} delay={i * 70}>
                <Panel className="h-full p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <WifiOff className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
                    {f.from}
                  </p>
                  <p aria-hidden="true" className="mt-2 font-mono text-xs text-silver-soft">
                    ↓
                  </p>
                  <p className="mt-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium text-graphite">
                    {f.to}
                  </p>
                </Panel>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
