import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container, buttonClass } from "./primitives";
import { PCReadyMark } from "./PCReadyMark";

const links = [
  { label: "Features", to: "/features" },
  { label: "App Catalog", to: "/catalog" },
  { label: "Profiles", to: "/profiles" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Download", to: "/download" },
  { label: "Documentation", to: "/documentation" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-surface/90 backdrop-blur-sm transition-shadow",
        scrolled ? "border-border shadow-panel" : "border-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5" aria-label="PCReady home">
          <PCReadyMark className="h-8 w-8" />
          <span className="text-[17px] font-bold tracking-tight text-foreground">PCReady</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-hover hover:text-foreground"
              activeProps={{ className: "bg-nav-active text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link to="/features" className={buttonClass({ variant: "secondary", size: "sm" })}>
            Explore Features
          </Link>
          <Link to="/download" className={buttonClass({ size: "sm" })}>
            Download PCReady
          </Link>
        </div>

        <button
          type="button"
          className={buttonClass({ variant: "secondary", size: "sm", className: "lg:hidden" })}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-border bg-surface lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-hover"
                activeProps={{ className: "bg-nav-active" }}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <Link
                to="/download"
                onClick={() => setOpen(false)}
                className={buttonClass({ className: "w-full" })}
              >
                Download PCReady
              </Link>
              <Link
                to="/features"
                onClick={() => setOpen(false)}
                className={buttonClass({ variant: "secondary", className: "w-full" })}
              >
                Explore Features
              </Link>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
