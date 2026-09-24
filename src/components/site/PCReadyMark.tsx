import { cn } from "@/lib/utils";

export function PCReadyMark({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <img
      src="/images/pcready-mark.png"
      alt="PCReady logo"
      aria-hidden="true"
      className={cn("shrink-0 object-contain", tone === "dark" && "brightness-90", className)}
    />
  );
}
