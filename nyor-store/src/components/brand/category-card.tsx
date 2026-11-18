import Image from "next/image";
import Link from "next/link";
import { CategoryIcon } from "@/components/brand/category-icon";
import { CrownOrnament } from "@/components/brand/logo";
import type { CategoryIconKind } from "@/config/site";
import { cn } from "@/lib/cn";

/** Fondos de la ilustración: solo mezclas de la paleta de marca. */
const TINTS: Record<CategoryIconKind, string> = {
  perfume: "from-rosa/45 via-marfil to-dorado/25",
  moda: "from-marfil via-rosa/30 to-rosa/55",
  belleza: "from-dorado/25 via-marfil to-rosa/45",
  accesorios: "from-dorado/35 via-marfil to-marfil",
  calzado: "from-rosa/35 via-marfil to-dorado/30",
  otros: "from-marfil via-dorado/20 to-rosa/40",
};

export function CategoryCard({
  slug,
  name,
  icon,
  photo,
}: {
  slug: string;
  name: string;
  icon: CategoryIconKind;
  photo?: string;
}) {
  return (
    <Link
      href={`/tienda?categoria=${slug}`}
      aria-label={`Ver ${name}`}
      className="group border-dorado/50 hover:border-dorado block overflow-hidden rounded-3xl border bg-white/60 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-18px_rgba(87,56,46,0.45)] active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none"
    >
      <div
        className={cn(
          "relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br",
          TINTS[icon],
        )}
      >
        {photo ? (
          <>
            <Image
              src={photo}
              alt=""
              fill
              sizes="(min-width: 640px) 33vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110 motion-reduce:transform-none"
            />
            {/* Velo cálido de marca para que todas las fotos se vean coherentes */}
            <span
              aria-hidden
              className="bg-rosa/15 absolute inset-0 mix-blend-multiply"
            />
          </>
        ) : (
          <>
            <CrownOrnament
              tone="onLight"
              className="absolute top-3 left-1/2 w-16 -translate-x-1/2 opacity-30 transition-opacity duration-300 group-hover:opacity-60"
            />
            <CategoryIcon
              kind={icon}
              className="relative mt-4 h-20 w-20 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3 motion-reduce:transform-none sm:h-24 sm:w-24"
            />
          </>
        )}
        {/* Brillo dorado que cruza la tarjeta al pasar el cursor */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 transition-all duration-700 group-hover:left-[130%] group-hover:opacity-100 motion-reduce:hidden"
        />
      </div>
      <div className="flex items-center justify-between gap-3 px-5 py-4">
        <span className="font-serif text-xl leading-tight sm:text-2xl">{name}</span>
        <span
          aria-hidden
          className="bg-chocolate text-marfil group-hover:bg-rosa group-hover:text-chocolate flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      </div>
    </Link>
  );
}
