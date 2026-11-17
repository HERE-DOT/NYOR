import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { EmptyState } from "@/components/ui/empty-state";

export const metadata: Metadata = { title: "Página no encontrada" };

export default function NotFound() {
  return (
    <Container className="py-20 sm:py-28">
      <EmptyState
        title="No encontramos esa página"
        action={<ButtonLink href="/">Volver al inicio</ButtonLink>}
      >
        Es posible que el enlace haya cambiado o que la página ya no exista.
      </EmptyState>
    </Container>
  );
}
