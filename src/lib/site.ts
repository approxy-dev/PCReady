// Central site constants. Change VITE_SITE_URL (or edit the fallback below) to
// the production origin before deploying — it feeds sitemap.xml links and og:image.
export const SITE_URL = (import.meta.env["VITE_SITE_URL"] ?? "https://pcready.app").replace(
  /\/+$/,
  "",
);

function formatSize(bytes: number): string {
  const mb = bytes / (1024 * 1024);
  return mb >= 100 ? `${mb.toFixed(0)} MB` : `${mb.toFixed(1)} MB`;
}

// Mirrors the release artifact bundled under public/downloads/.
export const downloadArtifact = {
  file: "PCReady.exe",
  label: "PCReady (Self-contained)",
  version: "2.5.0",
  sizeBytes: 169_209_693,
  sizeLabel: formatSize(169_209_693),
  sha256: "27a585845b892ee870ffe18980189a56d7e102ce247e86d34344e897ba61c916",
  description:
    "No installer and no .NET runtime needed. Extract anywhere and run PCReady.exe — the self-contained portable build.",
  href: "/downloads/PCReady.exe",
  checksumHref: "/downloads/VERSION.txt",
} as const;

// Professional disclaimer shown around IDM / Windows / Office integrations.
export const legalDisclaimer = {
  title: "Responsible Use Notice",
  body: "PCReady is a legitimate system-preparation tool. It does not distribute, endorse, or promote cracked, pirated, or unlicensed software — including unofficial versions or activators for Internet Download Manager, Microsoft Windows, or Microsoft Office. You are solely responsible for obtaining valid licences and ensuring your use of any software is lawful. PCReady and its developers are not responsible for how the application is used.",
} as const;
