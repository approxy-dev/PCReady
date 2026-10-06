// Central site constants. Change VITE_SITE_URL (or edit the fallback below) to
// the production origin before deploying — it feeds sitemap.xml links and og:image.
//
// The fallback is the project's own Vercel production domain. pcready.app was
// never registered, so a canonical pointing at it would send crawlers to a
// non-existent host and the page would never be indexed.
export const SITE_URL = (import.meta.env["VITE_SITE_URL"] ?? "https://pc-ready-gamma.vercel.app").replace(
  /\/+$/,
  "",
);

// The developer's GitHub profile. github.com publishes no sitemap for user
// profiles, so a profile is only ever discovered through inbound links: this
// URL is emitted both as <link rel="me"> in the document head and as a plain
// anchor in the footer, which is what gives a crawler a path back to it.
export const GITHUB_PROFILE = "https://github.com/approxy-dev";

function formatSize(bytes: number): string {
  const mb = bytes / (1024 * 1024);
  return mb >= 100 ? `${mb.toFixed(0)} MB` : `${mb.toFixed(1)} MB`;
}

// Mirrors the release artifact bundled under public/downloads/.
export const downloadArtifact = {
  file: "PCReady.exe",
  label: "PCReady (Self-contained)",
  version: "1.10.0",
  sizeBytes: 168_558_431,
  sizeLabel: formatSize(168_558_431),
  sha256: "e82bbfaf37a3cb9d3172955d82785bead9ab42ce5949a70b24e1f4f0fb9bfb74",
  description:
    "No installer and no .NET runtime needed. Extract anywhere and run PCReady.exe — the self-contained portable build.",
  href: "https://github.com/approxy-dev/PCReady/releases/latest/download/PCReady.exe",
  checksumHref: "https://github.com/approxy-dev/PCReady/releases/latest/download/VERSION.txt",
} as const;

// Professional disclaimer shown around IDM / Windows / Office integrations.
export const legalDisclaimer = {
  title: "Responsible Use Notice",
  body: "PCReady is a legitimate system-preparation tool. It does not distribute, endorse, or promote cracked, pirated, or unlicensed software — including unofficial versions or activators for Internet Download Manager, Microsoft Windows, or Microsoft Office. You are solely responsible for obtaining valid licences and ensuring your use of any software is lawful. PCReady and its developers are not responsible for how the application is used.",
} as const;
