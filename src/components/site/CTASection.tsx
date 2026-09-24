import { FileText } from "lucide-react";
import { Container, Reveal, buttonClass } from "./primitives";
import { Link } from "@tanstack/react-router";
import { DownloadButton } from "./DownloadButton";

export function CTASection() {
  return (
    <section aria-labelledby="cta-title" className="py-20 sm:py-24">
      <Container>
        <Reveal className="overflow-hidden rounded-3xl border border-border bg-[#2E3033] px-6 py-14 text-center shadow-lift sm:px-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A7A9AC]">
            Free desktop application
          </p>
          <h2
            id="cta-title"
            className="text-balance-tight mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Get Your PC Ready
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#E5E4E2]">
            Install the applications you need, skip the ones you don't, and rebuild your Windows
            environment faster.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <DownloadButton
              size="lg"
              className="w-full bg-white text-[#2E3033] hover:bg-[#E5E4E2] sm:w-auto"
              thankYouClassName="text-white"
              restartClassName="text-[#E5E4E2]"
            />
            <Link
              to="/documentation"
              className={buttonClass({
                size: "lg",
                className:
                  "w-full border border-[#53565A] bg-transparent text-[#E5E4E2] hover:bg-[#3A3D40] sm:w-auto",
              })}
            >
              <FileText className="h-4 w-4" aria-hidden="true" /> View Documentation
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap justify-center gap-2">
            {["Windows 10", "Windows 11", "x64", "ARM64"].map((c) => (
              <li
                key={c}
                className="rounded-md border border-[#53565A] px-3 py-1.5 font-mono text-[11px] text-[#E5E4E2]"
              >
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
