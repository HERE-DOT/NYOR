import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { EmptyState } from "@/components/ui/empty-state";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "Novedades",
  description: "Lo último que llega a NYOR.",
};

export default function NovedadesPage() {
  return (
    <>
      <PageHero eyebrow="Novedades" title="Lo que acaba de llegar" />
      <section className="py-16 sm:py-24">
        <Container>
          <EmptyState title="Aún no hay novedades">
            Cuando lleguen productos nuevos aparecerán aquí.
          </EmptyState>
        </Container>
      </section>
    </>
  );
}
