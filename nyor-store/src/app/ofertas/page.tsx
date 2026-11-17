import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { EmptyState } from "@/components/ui/empty-state";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "Ofertas",
  description: "Descuentos y combos especiales de NYOR.",
};

export default function OfertasPage() {
  return (
    <>
      <PageHero eyebrow="Ofertas" title="Descuentos y combos" />
      <section className="py-16 sm:py-24">
        <Container>
          <EmptyState title="Sin ofertas por ahora">
            Las promociones vigentes y los combos especiales se mostrarán en esta página.
          </EmptyState>
        </Container>
      </section>
    </>
  );
}
