import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("mx-auto w-full max-w-[1320px] px-5 sm:px-8", className)}>{children}</div>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <As
      ref={ref as never}
      className={cn("pcr-reveal", className)}
      data-visible={visible ? "true" : "false"}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </As>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? <Label className="mb-3 inline-block">{eyebrow}</Label> : null}
      <h2 className="text-balance-tight text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export function Label({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Panel({
  children,
  className,
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card shadow-panel",
        hover &&
          "transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-lift",
        className,
      )}
    >
      {children}
    </div>
  );
}

const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold transition-colors duration-150 disabled:pointer-events-none disabled:opacity-60";

const btnVariants = {
  primary: "bg-graphite text-primary-foreground hover:bg-graphite-hover active:bg-graphite-pressed",
  secondary: "border border-border bg-surface text-graphite hover:bg-hover active:bg-nav-active",
  ghost: "text-graphite hover:bg-hover",
} as const;

const btnSizes = {
  sm: "h-9 px-3.5",
  md: "h-11 px-5",
  lg: "h-12 px-6 text-[15px]",
} as const;

export function buttonClass({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: keyof typeof btnVariants | undefined;
  size?: keyof typeof btnSizes | undefined;
  className?: string | undefined;
} = {}) {
  return cn(btnBase, btnVariants[variant], btnSizes[size], className);
}

export function ActionButton({
  children,
  variant,
  size,
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof btnVariants | undefined;
  size?: keyof typeof btnSizes | undefined;
}) {
  return (
    <button className={buttonClass({ variant, size, className })} {...rest}>
      {children}
    </button>
  );
}

export function ActionLink({
  to,
  children,
  variant,
  size,
  className,
  ariaLabel,
}: {
  to: string;
  children: ReactNode;
  variant?: keyof typeof btnVariants | undefined;
  size?: keyof typeof btnSizes | undefined;
  className?: string | undefined;
  ariaLabel?: string | undefined;
}) {
  return (
    <Link
      to={to as never}
      aria-label={ariaLabel}
      className={buttonClass({ variant, size, className })}
    >
      {children}
    </Link>
  );
}

const statusStyles: Record<string, string> = {
  Installed: "border-success/30 bg-success/10 text-success",
  Installing: "border-border bg-nav-active text-graphite",
  Downloading: "border-border bg-nav-active text-graphite",
  Verifying: "border-border bg-nav-active text-graphite",
  Queued: "border-border bg-muted text-muted-foreground",
  Available: "border-border bg-muted text-muted-foreground",
  Pending: "border-warning/30 bg-warning/10 text-warning",
  Failed: "border-error/30 bg-error/10 text-error",
  Skipped: "border-border bg-muted text-muted-foreground",
};

export function StatusPill({ status, className }: { status: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-semibold tracking-wide",
        statusStyles[status] ?? "border-border bg-muted text-muted-foreground",
        className,
      )}
    >
      {status}
    </span>
  );
}

export function TechBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-xs font-medium text-graphite shadow-panel">
      {children}
    </span>
  );
}

export function AppGlyph({ name, size = "md" }: { name: string; size?: "sm" | "md" }) {
  const initials = name
    .replace(/[^A-Za-z0-9 ]/g, " ")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join("");
  return (
    <span
      aria-hidden="true"
      className={cn(
        "metal-sheen inline-flex shrink-0 items-center justify-center rounded-lg border border-border font-semibold text-graphite",
        size === "sm" ? "h-7 w-7 text-[10px]" : "h-10 w-10 text-xs",
      )}
    >
      {initials}
    </span>
  );
}
