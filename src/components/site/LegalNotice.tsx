import type { ReactNode } from "react";
import { ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

export function LegalNotice({
  title = "Responsible Use Notice",
  className,
  children,
}: {
  title?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <aside
      aria-label={title}
      className={cn("rounded-xl border border-warning/30 bg-warning/10 p-5 sm:p-6", className)}
    >
      <div className="flex items-start gap-3">
        <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-warning" aria-hidden="true" />
        <div className="min-w-0">
          <h2 className="text-sm font-bold tracking-tight text-foreground">{title}</h2>
          <div className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{children}</div>
        </div>
      </div>
    </aside>
  );
}
