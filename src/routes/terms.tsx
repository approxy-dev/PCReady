import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/PageShell";
import { Panel, Reveal } from "@/components/site/primitives";

const title = "Terms — PCReady";
const description =
  "Terms of use for PCReady, a free Windows desktop application for preparing software environments after a fresh installation.";

export const Route = createFileRoute("/terms")({
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
  component: TermsPage,
});

const points = [
  {
    t: "Free desktop application",
    d: "PCReady is provided free of charge for preparing Windows systems.",
  },
  {
    t: "Third-party software",
    d: "Applications installed through PCReady remain subject to their own vendor licences and terms.",
  },
  {
    t: "Windows and Office media",
    d: "Windows and Office tools are informational and assume you hold valid licences for the software you deploy.",
  },
  {
    t: "No warranty",
    d: "PCReady is provided as is. You remain responsible for the changes you apply to your system.",
  },
];

function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Terms"
        title="Terms of Use"
        subtitle="Plain terms for using PCReady and the software it helps you install."
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
