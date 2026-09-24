import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/PageShell";
import { ProfileCard } from "@/components/site/cards";
import { Reveal } from "@/components/site/primitives";
import { CTASection } from "@/components/site/CTASection";
import { profiles, type Profile } from "@/data/catalog";

const customProfile: Profile = {
  name: "Custom",
  description:
    "Build your own setup from any of the 336 catalog applications and install only what is missing.",
  appCount: 0,
  builtin: false,
  apps: [],
};

const title = "Setup Profiles — PCReady";
const description =
  "Install complete Windows software environments with 5 built-in PCReady profiles — Student, Gamer, Mobile Developer, Data / Python, Technician — or build a custom profile and install only what is missing.";

export const Route = createFileRoute("/profiles")({
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
  component: ProfilesPage,
});

function ProfilesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Profiles"
        title="Complete Environments in One Operation"
        subtitle="Each profile bundles the applications a role actually needs. Install missing only keeps existing software untouched."
      />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[...profiles, customProfile].map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 70}>
              <ProfileCard profile={p} />
            </Reveal>
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
