import type { ReactNode } from "react";
import { Download } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { buttonClass } from "./primitives";

type DownloadButtonProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: ReactNode;
};

export function DownloadButton({
  variant = "primary",
  size = "md",
  className,
  label = "Download PCReady",
}: DownloadButtonProps) {
  return (
    <Link to="/download" className={buttonClass({ variant, size, className })}>
      <Download className="h-4 w-4" aria-hidden="true" /> {label}
    </Link>
  );
}
