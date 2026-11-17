"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { EmptyState } from "@/components/ui/empty-state";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Container className="py-20 sm:py-28">
      <EmptyState
        title="Algo no salió como esperábamos"
        action={<Button onClick={() => reset()}>Intentar de nuevo</Button>}
      >
        Ocurrió un error inesperado. Puedes intentarlo otra vez; si persiste, vuelve en
        unos minutos.
      </EmptyState>
    </Container>
  );
}
