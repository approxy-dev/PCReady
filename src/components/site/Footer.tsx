import { Link } from "@tanstack/react-router";
import { Container } from "./primitives";
import { PCReadyMark } from "./PCReadyMark";
import { downloadArtifact } from "@/lib/site";

const groups = [
  {
    title: "Product",
    links: [
      { label: "Features", to: "/features" },
      { label: "App Catalog", to: "/catalog" },
      { label: "Profiles", to: "/profiles" },
      { label: "How It Works", to: "/how-it-works" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", to: "/documentation" },
      { label: "Privacy", to: "/privacy" },
      { label: "Terms", to: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#2E3033] text-[#E5E4E2]">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <PCReadyMark className="h-8 w-8" tone="dark" />
              <span className="text-[17px] font-bold tracking-tight text-white">PCReady</span>
            </div>
            <p className="mt-3 text-sm text-[#A7A9AC]">Fresh PC. Ready Faster.</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#A7A9AC]">
              A Windows desktop application for rebuilding your software environment after a fresh
              installation.
            </p>
          </div>

          {groups.map((g) => (
            <nav key={g.title} aria-label={g.title}>
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A7A9AC]">
                {g.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-[#E5E4E2] transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[#53565A] pt-6 text-xs text-[#A7A9AC] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} PCReady. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <a
              href={downloadArtifact.href}
              download={downloadArtifact.file}
              rel="noopener"
              className="font-semibold text-[#E5E4E2] transition-colors hover:text-white"
            >
              Download PCReady
            </a>
            <p className="font-mono">Windows 10 · Windows 11 · x64 · ARM64</p>
          </div>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-[#8b8d91]">
          PCReady does not promote cracked, pirated, or unlicensed software. You are responsible for
          obtaining valid licences for the software you install. See our{" "}
          <Link
            to="/terms"
            className="text-[#A7A9AC] underline underline-offset-2 hover:text-white"
          >
            Terms of Use
          </Link>{" "}
          for details.
        </p>
      </Container>
    </footer>
  );
}
