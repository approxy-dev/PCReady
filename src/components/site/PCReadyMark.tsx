import { cn } from "@/lib/utils";

export function PCReadyMark({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      role="img"
      aria-label="PCReady logo"
      className={cn("shrink-0", className)}
    >
      <defs>
        <linearGradient id={`pcr-metal-${tone}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={tone === "dark" ? "#E5E4E2" : "#E5E4E2"} />
          <stop offset="48%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#A7A9AC" />
        </linearGradient>
      </defs>
      <rect
        x="1.5"
        y="1.5"
        width="45"
        height="45"
        rx="11"
        fill={`url(#pcr-metal-${tone})`}
        stroke="#A7A9AC"
        strokeWidth="1.5"
      />
      <rect x="9" y="12" width="30" height="20" rx="3" fill="#53565A" />
      <rect x="12" y="15" width="24" height="14" rx="1.5" fill="#E5E4E2" />
      <path
        d="M17.5 22.5l3.6 3.6 7.4-7.6"
        fill="none"
        stroke="#53565A"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="17" y="34" width="14" height="3" rx="1.5" fill="#53565A" />
    </svg>
  );
}
