import Link from "next/link";
import { brand } from "@/config/site";
import { cn } from "@/lib/cn";

/**
 * Marca de texto provisional: el logo definitivo está pendiente (decisión 12).
 * Cuando exista, se sustituye aquí y en `src/app/icon.svg`.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${brand.name} — ir al inicio`}
      className={cn("font-serif text-3xl font-semibold tracking-[0.32em]", className)}
    >
      {brand.name}
    </Link>
  );
}
