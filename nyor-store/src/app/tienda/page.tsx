import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { EmptyState } from "@/components/ui/empty-state";
import { PageHero } from "@/components/ui/page-hero";
import { placeholderCategories } from "@/config/site";

export const metadata: Metadata = {
  title: "Tienda",
  description:
    "Catálogo multimarca de NYOR: moda, perfumería, belleza y cuidado, calzado y accesorios.",
};

export default function TiendaPage() {
  return (
    <>
      <PageHero eyebrow="Tienda" title="Todo NYOR en un solo lugar">
        Aquí vivirá el catálogo completo, con búsqueda y filtros por categoría, marca,
        precio y disponibilidad.
      </PageHero>
      <section className="py-16 sm:py-24">
        <Container>
          <ul
            aria-label="Categorías"
            className="mb-14 flex flex-wrap justify-center gap-3"
          >
            {placeholderCategories.map((c) => (
              <li
                key={c.slug}
                className="border-chocolate/30 rounded-full border px-5 py-2 text-sm tracking-[0.12em] uppercase"
              >
                {c.name}
              </li>
            ))}
          </ul>
          <EmptyState title="Catálogo en preparación">
            Todavía no hay productos publicados. Cuando estén listos los verás aquí, con
            su precio y disponibilidad.
          </EmptyState>
        </Container>
      </section>
    </>
  );
}
