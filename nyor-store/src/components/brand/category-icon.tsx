import { useId } from "react";
import type { CategoryIconKind } from "@/config/site";
import { cn } from "@/lib/cn";

/**
 * Ilustraciones lineales propias, en dorado, para las tarjetas de categoría.
 * Son provisionales: se sustituyen por fotografía real de producto cuando exista.
 */
const SHAPES: Record<CategoryIconKind, string[]> = {
  perfume: [
    "M40 20h20v12H40z",
    "M44 32h12v10H44z",
    "M30 50a6 6 0 0 1 6-6h28a6 6 0 0 1 6 6v28a6 6 0 0 1-6 6H36a6 6 0 0 1-6-6z",
    "M40 62h20",
    "M50 52v6",
  ],
  moda: ["M50 42V35a7 7 0 1 0-7-7", "M50 42 14 66q-5 4 2 4h68q7 0 2-4z"],
  belleza: [
    "M26 52h48v26a6 6 0 0 1-6 6H32a6 6 0 0 1-6-6z",
    "M24 42h52v10H24z",
    "M40 62q10 8 20 0",
    "M70 22l2 5 5 2-5 2-2 5-2-5-5-2 5-2z",
  ],
  accesorios: [
    "M30 36h40l14 18-34 32L16 54z",
    "M16 54h68",
    "M38 36l-8 18 20 32",
    "M62 36l8 18-20 32",
    "M38 36l12 18 12-18",
  ],
  calzado: [
    "M18 72h66q4 0 4-5 0-6-8-8L58 54Q46 46 42 30H30q0 22-12 30z",
    "M30 30q2 16 12 22",
    "M66 72v8",
  ],
  otros: [
    "M24 46h52v34H24z",
    "M20 36h60v10H20z",
    "M50 36v44",
    "M50 36q-14-14-20-4t20 4q14-14 20-4t-20 4z",
  ],
};

export function CategoryIcon({
  kind,
  className,
}: {
  kind: CategoryIconKind;
  className?: string;
}) {
  const id = useId();
  const gradId = `oro-i-${id}`;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      aria-hidden
      focusable="false"
      className={cn("block", className)}
      fill="none"
      stroke={`url(#${gradId})`}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <linearGradient
          id={gradId}
          gradientUnits="userSpaceOnUse"
          x1="10"
          y1="10"
          x2="90"
          y2="90"
        >
          <stop offset="0" stopColor="#8f6428" />
          <stop offset="0.45" stopColor="#d9b26a" />
          <stop offset="1" stopColor="#9a6b2c" />
        </linearGradient>
      </defs>
      {SHAPES[kind].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
