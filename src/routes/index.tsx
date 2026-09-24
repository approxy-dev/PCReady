import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Download,
  Search,
  Package,
  Layers,
  ListChecks,
  ScanSearch,
  ShieldCheck,
  Monitor,
  FileSpreadsheet,
  Gauge,
  HardDrive,
  RotateCcw,
  Network,
  FileCheck2,
  Lock,
  Compass,
  MousePointerClick,
  Rocket,
  CheckCircle2,
  Settings,
  WifiOff,
} from "lucide-react";
import {
  Container,
  Reveal,
  SectionHeading,
  Label,
  Panel,
  StatusPill,
  TechBadge,
  buttonClass,
} from "@/components/site/primitives";
import { ProductPreview } from "@/components/site/ProductPreview";
import { DashboardPreview } from "@/components/site/DashboardPreview";
import { InstallationQueue, StateMachine } from "@/components/site/InstallationQueue";
import {
  FeatureCard,
  StatCard,
  AppCard,
  ProfileCard,
  SystemToolCard,
  SecurityFeature,
  LogViewer,
} from "@/components/site/cards";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { CTASection } from "@/components/site/CTASection";
import { catalogApps, categories, profiles } from "@/data/catalog";

const title = "PCReady — Fresh PC. Ready Faster.";
const description =
  "PCReady rebuilds your Windows software environment in minutes: 336 curated apps across 23 categories, 5 setup profiles, automated installation, WinGet and direct installers.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

const trustRow = [
  "336+ Curated Apps",
  "5 Setup Profiles",
  "Automated Installation",
  "WinGet + Direct Installers",
];

const identity = [
  { icon: Compass, title: "Discover", text: "Find the software you need." },
  {
    icon: MousePointerClick,
    title: "Select",
    text: "Choose individual apps or complete profiles.",
  },
  { icon: Rocket, title: "Install", text: "Automatically download and install applications." },
  { icon: CheckCircle2, title: "Ready", text: "Finish with a configured, productive PC." },
];

const principles = [
  {
    icon: Lock,
    title: "Secure Downloads",
    description: "HTTPS validation and safe download handling for every source.",
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
    description: "Checks available space before large downloads begin.",
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

const settingsCards = [
  { k: "Download Directory", v: "%USERPROFILE%\\Downloads\\PCReady" },
  { k: "Concurrent Downloads", v: "3" },
  { k: "Retry Count", v: "5" },
  { k: "Timeout", v: "120s" },
  { k: "Proxy", v: "System default" },
  { k: "Catalog Source", v: "Curated + WinGet" },
  { k: "Theme", v: "Silver / Graphite" },
];

const fallbacks = [
  { from: "No WinGet", to: "Direct installers" },
  { from: "No network", to: "Cached catalog" },
  { from: "Unavailable icon", to: "Fallback icon" },
  { from: "Temporary failure", to: "Retry" },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <Container className="grid items-center gap-12 py-14 lg:grid-cols-[1fr_1.05fr] lg:py-20">
          <Reveal>
            <Label>Windows setup & software deployment</Label>
            <h1 className="text-balance-tight mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl xl:text-6xl">
              Fresh PC. Ready Faster.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Rebuild your Windows software environment in minutes. Browse essential applications,
              choose a setup profile, and let PCReady handle downloading, verification, and
              installation.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/download"
                className={buttonClass({ size: "lg", className: "w-full sm:w-auto" })}
              >
                <Download className="h-4 w-4" aria-hidden="true" /> Download PCReady
              </Link>
              <Link
                to="/features"
                className={buttonClass({
                  variant: "secondary",
                  size: "lg",
                  className: "w-full sm:w-auto",
                })}
              >
                Explore PCReady
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6">
              {trustRow.map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-2 text-[13px] font-semibold text-graphite"
                >
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-silver-soft" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <ProductPreview />
          </Reveal>
        </Container>
      </section>

      {/* Product identity */}
      <section aria-labelledby="identity-title" className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="PC → Software → Setup → Ready"
              title="One PC. One Setup. Everything Ready."
              subtitle="PCReady brings the most important parts of a fresh Windows setup into one application."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {identity.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <Panel hover className="h-full p-6">
                  <span className="metal-sheen inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border">
                    <s.icon className="h-5 w-5 text-graphite" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-bold tracking-tight text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  <p className="mt-4 font-mono text-[11px] text-muted-foreground">
                    Step {String(i + 1).padStart(2, "0")}
                  </p>
                </Panel>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Feature overview */}
      <section
        aria-labelledby="features-title"
        className="border-y border-border bg-surface py-20 sm:py-24"
      >
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Feature overview"
              title="Everything You Need to Prepare a PC"
              subtitle="A curated catalog, package search, profiles, automated installation, detection, and a hardened download manager."
            />
          </Reveal>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <FeatureCard
                icon={Package}
                title="App Catalog"
                description="Browse 336 curated applications across 23 categories, from browsers and development tools to security and gaming."
                className="h-full"
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  {catalogApps.slice(0, 4).map((a) => (
                    <AppCard key={a.name} app={a} />
                  ))}
                </div>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {categories.slice(0, 10).map((c) => (
                    <li
                      key={c}
                      className="rounded-md border border-border bg-surface px-2 py-1 text-[11px] font-medium text-graphite"
                    >
                      {c}
                    </li>
                  ))}
                  <li className="rounded-md border border-border bg-surface px-2 py-1 text-[11px] font-medium text-muted-foreground">
                    +{categories.length - 10} more
                  </li>
                </ul>
              </FeatureCard>
            </Reveal>

            <Reveal delay={80}>
              <FeatureCard
                icon={Search}
                title="WinGet Search"
                description="Search thousands of additional Windows packages using WinGet, directly inside PCReady."
                className="h-full"
              >
                <div className="rounded-xl border border-border bg-surface p-3">
                  <div className="flex items-center gap-2 border-b border-border pb-2">
                    <Search className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
                    <span className="text-xs text-muted-foreground">Search applications...</span>
                  </div>
                  <ul className="mt-2 space-y-1.5">
                    {[
                      "Google Chrome",
                      "Microsoft Visual Studio Code",
                      "7-Zip",
                      "Git",
                      "VLC",
                      "Discord",
                    ].map((n) => (
                      <li
                        key={n}
                        className="flex items-center justify-between rounded-md px-2 py-1.5 text-xs font-medium text-foreground hover:bg-hover"
                      >
                        <span className="truncate">{n}</span>
                        <span className="ml-2 shrink-0 font-mono text-[10px] text-muted-foreground">
                          winget
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FeatureCard>
            </Reveal>

            <Reveal>
              <FeatureCard
                icon={Layers}
                title="Profiles"
                description="Install complete software environments with predefined profiles, and skip anything already present."
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
                <p className="mt-4 inline-flex items-center gap-2 rounded-md border border-success/30 bg-success/10 px-2.5 py-1.5 text-[11px] font-semibold text-success">
                  Install missing only
                </p>
              </FeatureCard>
            </Reveal>

            <Reveal delay={80}>
              <FeatureCard
                icon={ScanSearch}
                title="Smart Installed-App Detection"
                description="PCReady combines Windows package information and system detection to determine which applications are already installed."
                className="h-full"
              >
                <div className="flex flex-wrap gap-2">
                  {["Installed", "Available", "Pending"].map((s) => (
                    <StatusPill key={s} status={s} />
                  ))}
                </div>
              </FeatureCard>
            </Reveal>

            <Reveal delay={160}>
              <FeatureCard
                icon={Gauge}
                title="Hardened Download Manager"
                description="Reliability and security engineering built into every transfer."
                className="h-full"
              >
                <ul className="grid gap-1.5 font-mono text-[11px] text-muted-foreground">
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

          {/* Automated queue */}
          <div className="mt-16 grid items-start gap-6 lg:grid-cols-[1.15fr_1fr]">
            <Reveal>
              <h3
                id="features-title"
                className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
              >
                Automated Installation Queue
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Every application moves through a predictable pipeline with live progress, retry,
                cancel, and clear failure states.
              </p>
              <div className="mt-6">
                <InstallationQueue />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <StateMachine />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Windows & Office tools */}
      <section aria-labelledby="tools-title" className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="System tools"
              title="Beyond Application Installation"
              subtitle="PCReady also includes tools for preparing Windows and Office environments."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
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
            <Reveal delay={100}>
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
        </Container>
      </section>

      {/* IDM */}
      <section
        aria-labelledby="idm-title"
        className="border-y border-border bg-surface py-16 sm:py-20"
      >
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Label>Integration</Label>
            <h2
              id="idm-title"
              className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            >
              Smarter Downloads with IDM
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
              PCReady can detect and integrate with Internet Download Manager for supported large
              downloads, handing the transfer off so IDM manages segmentation and resume.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Panel className="p-5">
              <ol className="space-y-2">
                {["PCReady", "Detect IDM", "Hand off download", "IDM manages transfer"].map(
                  (s, i) => (
                    <li key={s} className="flex items-center gap-3">
                      <span className="w-6 shrink-0 font-mono text-[11px] text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium text-foreground">
                        {s}
                      </span>
                    </li>
                  ),
                )}
              </ol>
            </Panel>
          </Reveal>
        </Container>
      </section>

      {/* Dashboard */}
      <section aria-labelledby="dashboard-title" className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Dashboard"
              title="Your PC Setup at a Glance"
              subtitle="Installed, available, and pending applications, the active profile, and quick actions in one console."
            />
          </Reveal>
          <Reveal delay={100} className="mt-12">
            <DashboardPreview />
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal>
              <StatCard value="336" label="Curated applications" hint="23 categories" />
            </Reveal>
            <Reveal delay={60}>
              <StatCard value="5" label="Built-in setup profiles" hint="+ custom" />
            </Reveal>
            <Reveal delay={120}>
              <StatCard value="6K+" label="WinGet packages searchable" hint="beyond the catalog" />
            </Reveal>
            <Reveal delay={180}>
              <StatCard value="SHA-256" label="Download verification" hint="per file" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Installation experience */}
      <section
        aria-labelledby="install-title"
        className="border-y border-border bg-surface py-20 sm:py-24"
      >
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Installation experience"
              title="Select. Install. Done."
              subtitle="Three steps between a fresh Windows installation and a productive PC."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {[
              { n: "01", t: "Choose your apps", d: "Pick from the catalog or load a profile." },
              { n: "02", t: "Start installation", d: "PCReady queues everything in order." },
              {
                n: "03",
                t: "PCReady handles the rest",
                d: "Download, verify, install, and report.",
              },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <Panel hover className="h-full p-6">
                  <p className="font-mono text-3xl font-bold text-silver">{s.n}</p>
                  <h3 className="mt-3 text-lg font-bold tracking-tight text-foreground">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </Panel>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} className="mx-auto mt-8 max-w-3xl">
            <InstallationQueue />
          </Reveal>
        </Container>
      </section>

      {/* Reliability */}
      <section aria-labelledby="trust-title" className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Reliability & safety"
              title="Built for Real PC Setup Work"
              subtitle="Engineering principles that keep downloads and installers predictable on real machines."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 80}>
                <SecurityFeature icon={p.icon} title={p.title} description={p.description} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Logs */}
      <section
        aria-labelledby="logs-title"
        className="border-y border-border bg-surface py-16 sm:py-20"
      >
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Label>Logging & diagnostics</Label>
            <h2
              id="logs-title"
              className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            >
              Know What Happened
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
              PCReady writes structured logs for every download, verification step, and installer
              launch, so failures are easy to trace.
            </p>
            <p className="mt-5 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground shadow-panel">
              Logs are stored locally and sensitive credentials are never logged.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <LogViewer />
          </Reveal>
        </Container>
      </section>

      {/* Settings */}
      <section aria-labelledby="settings-title" className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Settings & customization"
              title="Tuned to Your Machine"
              subtitle="Configure how PCReady downloads and installs. Settings are persisted locally."
            />
          </Reveal>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {settingsCards.map((s, i) => (
              <Reveal key={s.k} delay={(i % 4) * 60}>
                <Panel hover className="flex h-full items-start gap-3 p-4">
                  <Settings className="mt-0.5 h-4 w-4 shrink-0 text-graphite" aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground">{s.k}</p>
                    <p className="mt-1 truncate font-mono text-[11px] text-muted-foreground">
                      {s.v}
                    </p>
                  </div>
                </Panel>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Offline */}
      <section
        aria-labelledby="offline-title"
        className="border-y border-border bg-surface py-16 sm:py-20"
      >
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Resilience"
              title="Designed for Imperfect Networks"
              subtitle="PCReady degrades gracefully instead of failing when a source or service is unavailable."
            />
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
        </Container>
      </section>

      {/* Catalog + profiles teaser */}
      <section aria-labelledby="catalog-title" className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Catalog & profiles"
              title="Applications and Environments, Ready to Deploy"
              subtitle="Browse the curated catalog or install a complete environment in one operation."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {profiles.slice(0, 3).map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <ProfileCard profile={p} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/catalog"
              className={buttonClass({ variant: "secondary", className: "w-full sm:w-auto" })}
            >
              <Package className="h-4 w-4" aria-hidden="true" /> Browse App Catalog
            </Link>
            <Link
              to="/profiles"
              className={buttonClass({ variant: "secondary", className: "w-full sm:w-auto" })}
            >
              <ListChecks className="h-4 w-4" aria-hidden="true" /> View All Profiles
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Architecture */}
      <section
        aria-labelledby="arch-title"
        className="border-y border-border bg-surface py-16 sm:py-20"
      >
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Technical architecture"
              title="Built with Modern Windows Technology"
            />
          </Reveal>
          <Reveal delay={80} className="mt-8 flex flex-wrap justify-center gap-2">
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
        </Container>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-title" className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Questions About PCReady" />
          </Reveal>
          <Reveal delay={80} className="mx-auto mt-10 max-w-3xl">
            <FAQAccordion />
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
