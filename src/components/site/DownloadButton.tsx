import { useState, type ReactNode } from "react";
import { CheckCircle2, Download, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { downloadArtifact } from "@/lib/site";

type DownloadButtonProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: ReactNode;
  thankYouClassName?: string;
  restartClassName?: string;
};

function startDownload(file: string) {
  const a = document.createElement("a");
  a.href = `/downloads/${file}`;
  a.download = file;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export function DownloadButton({
  variant = "primary",
  size = "md",
  className,
  label = "Download PCReady",
  thankYouClassName,
  restartClassName = "text-graphite",
}: DownloadButtonProps) {
  const [downloaded, setDownloaded] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const handleDownload = () => {
    startDownload(downloadArtifact.file);
    setDownloaded(true);
    setAttempts((n) => n + 1);
  };

  if (downloaded) {
    return (
      <div
        className={cn(
          "inline-flex flex-col items-center justify-center gap-1 text-center sm:flex-row sm:items-center sm:gap-3",
          thankYouClassName,
        )}
      >
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-success">
          <CheckCircle2 className="h-4 w-4" aria-hidden="true" /> Thank you for downloading PCReady!
        </span>
        <button
          type="button"
          onClick={handleDownload}
          className={cn(
            "inline-flex items-center gap-1.5 text-xs font-semibold underline-offset-2 hover:underline",
            restartClassName,
          )}
        >
          <RefreshCw className="h-3 w-3" aria-hidden="true" />
          Click here to restart the download if it hasn't started
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={handleDownload}
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-graphite px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-graphite-hover active:bg-graphite-pressed",
        size === "sm" && "h-9 px-3.5",
        size === "lg" && "h-12 px-6 text-[15px]",
        variant === "secondary" &&
          "border border-border bg-surface text-graphite hover:bg-hover active:bg-nav-active",
        variant === "ghost" && "bg-transparent text-graphite hover:bg-hover",
        className,
      )}
    >
      <Download className="h-4 w-4" aria-hidden="true" /> {label}
    </button>
  );
}
