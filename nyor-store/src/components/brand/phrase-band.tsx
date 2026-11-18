import { Container } from "@/components/ui/container";
import { brand } from "@/config/site";
import { CrownOrnament } from "./logo";

/** Banda chocolate con la frase espiritual en caligrafía dorada. */
export function PhraseBand() {
  return (
    <section className="on-dark bg-chocolate text-dorado-claro">
      <Container className="flex flex-col items-center py-16 text-center sm:py-24">
        <CrownOrnament tone="onDark" className="w-40 sm:w-52" />
        <p className="font-script mt-8 max-w-3xl text-5xl leading-[1.15] sm:text-7xl">
          {brand.spiritualPhrase}
        </p>
      </Container>
    </section>
  );
}
