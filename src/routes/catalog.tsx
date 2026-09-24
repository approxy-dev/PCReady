import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/PageShell";
import { CatalogBrowser } from "@/components/site/CatalogBrowser";
import { CTASection } from "@/components/site/CTASection";

const title = "App Catalog — PCReady";
const description =
  "Browse 336 curated Windows applications across 23 categories, with publisher, version, category, and installed state.";

export const Route = createFileRoute("/catalog")({
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
  component: CatalogPage,
});

function CatalogPage() {
  return (
    <>
      <PageHeader
        eyebrow="App catalog"
        title="336 Curated Applications"
        subtitle="Filter by category, search by name or publisher, and see at a glance what is already installed on this PC."
      />
      <Section>
        <CatalogBrowser />
      </Section>
      <CTASection />
    </>
  );
}
