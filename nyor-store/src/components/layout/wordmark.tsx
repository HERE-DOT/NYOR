import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { brand } from "@/config/site";
import { cn } from "@/lib/cn";

/** Enlace al inicio con el nombre NYOR en dorado. El logo dentro es decorativo: el enlace lleva la etiqueta. */
export function Wordmark({
  tone = "onLight",
  className,
}: {
  tone?: "onLight" | "onDark";
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label={`${brand.name} — ir al inicio`}
      className={cn("inline-block", className)}
    >
      <Logo variant="wordmark" tone={tone} label={null} className="h-7 w-auto sm:h-8" />
    </Link>
  );
}
