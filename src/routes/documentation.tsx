import { createFileRoute } from "@tanstack/react-router";
import { Settings } from "lucide-react";
import { PageHeader, Section } from "@/components/site/PageShell";
import { Panel, Reveal, SectionHeading, TechBadge } from "@/components/site/primitives";
import { LogViewer } from "@/components/site/cards";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { CTASection } from "@/components/site/CTASection";

const title = "Documentation — PCReady";
const architectureTitle = "Built with Modern Windows Technology";
const description =
  "PCReady documentation: getting started, profiles, installation states, settings, logging, and the technical architecture behind the application.";

export const Route = createFileRoute("/documentation")({
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
  component: DocumentationPage,
});

const settingsCards = [
  { k: "Download Directory", v: "Where installers are stored before execution." },
  { k: "Concurrent Downloads", v: "How many transfers run at the same time." },
  { k: "Retry Count", v: "Automatic attempts after a temporary failure." },
  { k: "Timeout", v: "Maximum wait time per request." },
  { k: "Proxy", v: "System or custom proxy configuration." },
  { k: "Catalog Source", v: "Curated catalog, WinGet, or both." },
  { k: "Theme", v: "Silver / graphite application appearance." },
];

const guides = [
  {
    t: "Getting started",
    d: "Install PCReady, let it scan the system, then pick a profile or individual applications.",
  },
  {
    t: "Working with profiles",
    d: "Profiles bundle applications per role. Install missing only skips anything already present.",
  },
  {
    t: "Installation states",
    d: "Queued → Downloading → Verifying → Installing → Installed, with retry, cancel, failed, and skipped.",
  },
  {
    t: "Windows & Office tools",
    d: "Select a Windows build or Office release and prepare online or offline deployment.",
  },
  {
    t: "IDM integration",
    d: "When Internet Download Manager is detected, supported large downloads are handed off to IDM.",
  },
  {
    t: "Troubleshooting",
    d: "Check the local log for the failing step, then retry the item or change the catalog source.",
  },
];

function DocumentationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Documentation"
        title="Everything About Running PCReady"
        subtitle="Reference material for setup, profiles, installation behaviour, settings, and diagnostics."
      />

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g, i) => (
            <Reveal key={g.t} delay={(i % 3) * 70}>
              <Panel hover className="h-full p-6">
                <h2 className="text-base font-bold tracking-tight text-foreground">{g.t}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.d}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Settings"
              title="Configuration Reference"
              subtitle="Settings are persisted locally on the machine running PCReady."
            />
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {settingsCards.map((s, i) => (
              <Reveal key={s.k} delay={(i % 3) * 60}>
                <Panel className="flex h-full items-start gap-3 p-4">
                  <Settings className="mt-0.5 h-4 w-4 shrink-0 text-graphite" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{s.k}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.v}</p>
                  </div>
                </Panel>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Logging & diagnostics"
              title="Know What Happened"
              subtitle="Logs are stored locally and sensitive credentials are never logged."
            />
          </Reveal>
          <Reveal delay={80}>
            <LogViewer />
          </Reveal>
        </div>
      </Section>

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8">
          <Reveal>
            <SectionHeading eyebrow="Technical architecture" title={architectureTitle} />
          </Reveal>
          <Reveal delay={70} className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              ".NET 8",
              "WPF",
              "MVVM",
              "CommunityToolkit.Mvvm",
              "WinGet",
              "PowerShell",
              "SHA-256",
            ].map((t) => (
              <TechBadge key={t}>{t}</TechBadge>
            ))}
          </Reveal>
        </div>
      </section>

      <Section>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
        </Reveal>
        <Reveal delay={70} className="mx-auto mt-10 max-w-3xl">
          <FAQAccordion />
        </Reveal>
      </Section>

      <CTASection />
    </>
  );
}
