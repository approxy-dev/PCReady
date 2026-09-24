// Central site constants. Change VITE_SITE_URL (or edit the fallback below) to
// the production origin before deploying — it feeds sitemap.xml links and og:image.
export const SITE_URL = (import.meta.env["VITE_SITE_URL"] ?? "https://pcready.app").replace(
  /\/+$/,
  "",
);

export type DownloadArtifact = {
  id: string;
  file: string;
  label: string;
  version: string;
  kind: "installer" | "portable" | "framework";
  sizeBytes: number;
  sizeLabel: string;
  sha256: string;
  description: string;
  recommended?: boolean;
};

function formatSize(bytes: number): string {
  const mb = bytes / (1024 * 1024);
  return mb >= 100 ? `${mb.toFixed(0)} MB` : `${mb.toFixed(1)} MB`;
}

// Mirrors the release artifacts bundled under public/downloads/.
// Keep in sync with public/downloads/SHA256SUMS.txt (see README for regeneration).
const downloadList = [
  {
    id: "setup",
    file: "PCReady-Setup-v2.5.0-win-x64.exe",
    label: "PCReady Setup",
    version: "2.5.0",
    kind: "installer" as const,
    sizeBytes: 53_294_410,
    sha256: "a4320b9a1636325fb10bc2fe5a631bab2d8b67c2bab8ab40ccc6c9a93d7fa057",
    description:
      "Our recommended install. Wrapped in an Inno Setup installer with Start Menu and desktop shortcuts. Self-contained — no .NET runtime needed.",
    recommended: true,
  },
  {
    id: "portable",
    file: "PCReady-v2.5.0-win-x64-portable-selfcontained.zip",
    label: "Portable (self-contained)",
    version: "2.5.0",
    kind: "portable" as const,
    sizeBytes: 71_590_841,
    sha256: "be472e308735f1564d31685f28573204738dce95111faa5ac3b468e71e1f2adc",
    description: "No installer, no .NET runtime needed. Unzip and run PCReady.exe.",
  },
  {
    id: "framework",
    file: "PCReady-v2.5.0-win-x64-framework-dependent.zip",
    label: "Framework-dependent",
    version: "2.5.0",
    kind: "framework" as const,
    sizeBytes: 6_255_582,
    sha256: "154eeb0681120773aa27c2bf51ab28968d3f7967fb0e365760d01b3afd4ab257",
    description:
      "Smallest download (~6.0 MB). Requires the .NET 8 Desktop Runtime, which is usually installed via Windows Update.",
  },
] satisfies Omit<DownloadArtifact, "sizeLabel">[];

export const downloads: DownloadArtifact[] = downloadList.map((d) => ({
  ...d,
  sizeLabel: formatSize(d.sizeBytes),
}));

export const recommendedDownload = downloads.find((d) => d.recommended) ?? downloads[0]!;
