import { createFileRoute } from "@tanstack/react-router";
import {
  Package,
  Search,
  Layers,
  ScanSearch,
  Gauge,
  Monitor,
  FileSpreadsheet,
  Lock,
  FileCheck2,
  ShieldCheck,
  HardDrive,
  RotateCcw,
  Network,
} from "lucide-react";
import { PageHeader, Section } from "@/components/site/PageShell";
import { FeatureCard, SecurityFeature, SystemToolCard, LogViewer } from "@/components/site/cards";
import { InstallationQueue, StateMachine } from "@/components/site/InstallationQueue";
import { Reveal, SectionHeading, StatusPill } from "@/components/site/primitives";
import { CTASection } from "@/components/site/CTASection";
import { profiles } from "@/data/catalog";

const title = "Features — PCReady";
const description =
  "Curated app catalog, WinGet search, setup profiles, automated installation queue, installed-app detection, and a hardened download manager.";

export const Route = createFileRoute("/features")({
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
  component: FeaturesPage,
});

const principles = [
  {
    icon: Lock,
    title: "Secure Downloads",
    description: "HTTPS validation and safe download handling.",
  },
  {
    icon: FileCheck2,
    title: "File Verification",
    description: "SHA-256 verification protects against corrupted downloads.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Installation",
    description: "Controlled installer execution and validated arguments.",
  },
  {
    icon: HardDrive,
    title: "Disk Protection",
    description: "Checks available space before large downloads.",
  },
  {
    icon: RotateCcw,
    title: "Retry & Recovery",
    description: "Automatic retry handling for temporary failures.",
  },
  {
    icon: Network,
    title: "Graceful Degradation",
    description: "Works even when some Windows services or network sources are unavailable.",
  },
];

function FeaturesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Features"
        title="Everything You Need to Prepare a PC"
        subtitle="PCReady covers discovery, selection, installation, verification, system tools, and diagnostics for a fresh Windows machine."
      />

      <Section>
        <div className="grid gap-4 lg:grid-cols-3">
          <Reveal>
            <FeatureCard
              icon={Package}
              title="App Catalog"
              description="336 curated applications across 23 categories, each with its WinGet package ID and category for fast browsing and search."
              className="h-full"
            />
          </Reveal>
          <Reveal delay={70}>
            <FeatureCard
              icon={Search}
              title="WinGet Search"
              description="Search thousands of additional Windows packages using WinGet without leaving the application."
              className="h-full"
            />
          </Reveal>
          <Reveal delay={140}>
            <FeatureCard
              icon={Layers}
              title="Profiles"
              description="Install complete software environments from predefined profiles with install-missing-only behaviour."
              className="h-full"
            >
              <ul className="flex flex-wrap gap-1.5">
                {profiles.map((p) => (
                  <li
                    key={p.name}
                    className="rounded-md border border-border bg-surface px-2 py-1 text-[11px] font-medium text-graphite"
                  >
                    {p.name}
                  </li>
                ))}
              </ul>
            </FeatureCard>
          </Reveal>
          <Reveal>
            <FeatureCard
              icon={ScanSearch}
              title="Smart Installed-App Detection"
              description="Windows package information plus system detection determine what is already on the machine."
              className="h-full"
            >
              <div className="flex flex-wrap gap-2">
                {["Installed", "Available", "Pending"].map((s) => (
                  <StatusPill key={s} status={s} />
                ))}
              </div>
            </FeatureCard>
          </Reveal>
          <Reveal delay={70} className="lg:col-span-2">
            <FeatureCard
              icon={Gauge}
              title="Hardened Download Manager"
              description="Every transfer is validated, verified, and recoverable."
              className="h-full"
            >
              <ul className="grid gap-1.5 font-mono text-[11px] text-muted-foreground sm:grid-cols-2">
                {[
                  "HTTPS-only downloads",
                  "SHA-256 verification",
                  "Retry handling",
                  "Timeout control",
                  "Disk-space checks",
                  "Concurrent download control",
                  "Proxy support",
                  "Safe filenames",
                  "Path-traversal protection",
                ].map((x) => (
                  <li key={x}>· {x}</li>
                ))}
              </ul>
            </FeatureCard>
          </Reveal>
        </div>
      </Section>

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Installation"
              title="Automated Installation Queue"
              subtitle="A predictable pipeline from queued to installed, with retry, cancel, failed, and skipped states."
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
            eyebrow="System tools"
            title="Beyond Application Installation"
            subtitle="PCReady also includes tools for preparing Windows and Office environments."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <SystemToolCard
              icon={Monitor}
              title="Windows Media"
              description="Select and prepare the Windows build you need for a clean installation."
              items={[
                "Windows version selection",
                "Windows 11",
                "Windows 10",
                "LTSC",
                "Server",
                "ARM64 variants",
                "Download management",
                "Direct-link resolution",
                "Verification guidance",
              ]}
              cta="Explore Windows Tools"
            />
          </Reveal>
          <Reveal delay={80}>
            <SystemToolCard
              icon={FileSpreadsheet}
              title="Office Deployment"
              description="Prepare Microsoft Office environments for online or offline deployment."
              items={[
                "Microsoft 365",
                "Office 2024",
                "Office 2021",
                "Office 2019",
                "Office 2016",
                "Office 2013",
                "Online deployment",
                "Offline deployment",
              ]}
              cta="Explore Office Tools"
            />
          </Reveal>
        </div>
      </Section>

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8">
          <Reveal>
            <SectionHeading eyebrow="Reliability & safety" title="Built for Real PC Setup Work" />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 70}>
                <SecurityFeature icon={p.icon} title={p.title} description={p.description} />
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
              subtitle="Structured, timestamped logs for downloads, verification, and installer execution. Logs are stored locally and sensitive credentials are never logged."
            />
          </Reveal>
          <Reveal delay={80}>
            <LogViewer />
          </Reveal>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
