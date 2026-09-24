import type { ReactNode } from "react";
import { Container, Label } from "./primitives";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="border-b border-border bg-surface">
      <Container className="py-14 sm:py-20">
        <Label>{eyebrow}</Label>
        <h1 className="text-balance-tight mt-3 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      </Container>
    </section>
  );
}

export function Section({
  children,
  className,
  labelledBy,
}: {
  children: ReactNode;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section aria-labelledby={labelledBy} className={className ?? "py-16 sm:py-20"}>
      <Container>{children}</Container>
    </section>
  );
}
