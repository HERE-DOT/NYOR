import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

/** Rótulo pequeño sobre un título. Usa chocolate (o marfil con `tone="light"`), nunca dorado sobre claro. */
export function Eyebrow({
  tone = "dark",
  className,
  ...props
}: ComponentProps<"p"> & { tone?: "dark" | "light" }) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-xs font-medium tracking-[0.28em] uppercase",
        tone === "dark" ? "text-chocolate" : "text-marfil",
        className,
      )}
      {...props}
    >
      <span aria-hidden className="bg-dorado h-px w-8" />
      {props.children}
    </p>
  );
}
