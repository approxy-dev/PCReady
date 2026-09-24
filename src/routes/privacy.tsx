import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/PageShell";
import { Panel, Reveal } from "@/components/site/primitives";

const title = "Privacy — PCReady";
const description =
  "How PCReady handles local data: settings and logs are stored on your own machine and sensitive credentials are never logged.";

export const Route = createFileRoute("/privacy")({
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
  component: PrivacyPage,
});

const points = [
  {
    t: "Local-first data",
    d: "Settings, the cached catalog, and logs are stored locally on the machine running PCReady.",
  },
  {
    t: "No credential logging",
    d: "Sensitive credentials are never written to logs or diagnostic output.",
  },
  {
    t: "Network activity",
    d: "PCReady contacts package sources and vendor download endpoints only to fetch catalog data and installers.",
  },
  {
    t: "Your control",
    d: "Download directory, catalog source, proxy, and retry behaviour are all configurable.",
  },
];

function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy"
        title="Your Setup Stays on Your PC"
        subtitle="PCReady is a desktop application. Its data lives on the machine you run it on."
      />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2">
          {points.map((p, i) => (
            <Reveal key={p.t} delay={(i % 2) * 70}>
              <Panel className="h-full p-6">
                <h2 className="text-base font-bold tracking-tight text-foreground">{p.t}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
