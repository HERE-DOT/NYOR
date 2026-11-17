import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { brand } from "@/config/site";

export const metadata: Metadata = {
  title: "Nosotras",
  description: "La historia detrás del nombre NYOR y lo que nos inspira.",
};

export default function NosotrasPage() {
  return (
    <>
      <PageHero eyebrow="Nosotras" title={<>Un nombre con historia</>}>
        {brand.name} es una boutique multimarca pensada para mujeres de todas las edades y
        estilos: elegante, cercana y moderna.
      </PageHero>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-10 md:grid-cols-2">
          <div className="border-chocolate/20 border-t pt-6">
            <p className="font-serif text-6xl font-semibold tracking-[0.2em]">NY</p>
            <p className="mt-4">
              Se inspira en Nidya, el nombre de una mamá muy querida. Es un homenaje al
              cariño que da origen a todo esto.
            </p>
          </div>
          <div className="border-chocolate/20 border-t pt-6">
            <p className="font-serif text-6xl font-semibold tracking-[0.2em]">OR</p>
            <p className="mt-4">
              Se inspira en <em>Or</em>, palabra hebrea que significa «luz». Lo que
              buscamos es que cada mujer brille a su manera.
            </p>
          </div>
        </Container>
        <Container className="mt-12">
          <p className="max-w-2xl text-base">
            {brand.name} es un nombre de marca creado para esta boutique, no una palabra
            hebrea. Nuestra promesa es sencilla: {brand.slogan.toLowerCase()}.
          </p>
        </Container>
      </section>

      <section className="on-dark bg-chocolate text-marfil">
        <Container className="py-20 text-center sm:py-24">
          <p className="mx-auto max-w-3xl font-serif text-4xl leading-tight italic sm:text-5xl">
            {brand.spiritualPhrase}
          </p>
        </Container>
      </section>
    </>
  );
}
