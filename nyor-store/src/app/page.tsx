import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { EmptyState } from "@/components/ui/empty-state";
import { Eyebrow } from "@/components/ui/eyebrow";
import { brand, placeholderCategories } from "@/config/site";

// Redactado en futuro a propósito: estas funciones (checkout, pagos, entregas) aún no existen.
const promesas = [
  {
    titulo: "Entrega a tu medida",
    texto: "Podrás recibir tu pedido a domicilio o recogerlo en un punto acordado.",
  },
  {
    titulo: "Pagos sencillos",
    texto:
      "Pagarás por transferencia, Nequi o efectivo, y nuestro equipo confirmará tu pago.",
  },
  {
    titulo: "Todo en un solo lugar",
    texto:
      "Moda, perfumería, belleza, calzado y accesorios de varias marcas, reunidos aquí.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Presentación de marca */}
      <section className="border-chocolate/15 overflow-hidden border-b">
        <Container className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.15fr_1fr] lg:gap-8 lg:py-24">
          <div>
            <Eyebrow>Boutique multimarca</Eyebrow>
            <h1 className="mt-6 text-6xl sm:text-7xl lg:text-8xl">
              Tu esencia,
              <br />
              <em className="font-serif italic">tu estilo</em>
            </h1>
            <p className="mt-8 max-w-md text-lg">
              Moda, perfumería, belleza y más, elegidas con cariño para mujeres de todas
              las edades y estilos.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/tienda" variant="primary">
                Explorar la tienda
              </ButtonLink>
              <ButtonLink href="/nosotras" variant="outline">
                Conoce NYOR
              </ButtonLink>
            </div>
          </div>

          {/* Composición decorativa: arco + resplandor ("OR" = luz). No es una foto de producto. */}
          <div
            aria-hidden
            className="relative mx-auto aspect-[6/5] w-full max-w-xs sm:aspect-[4/5] sm:max-w-sm lg:max-w-md"
          >
            <div className="glow-or absolute -inset-10" />
            <div className="bg-rosa absolute inset-0 rounded-t-[999px] rounded-b-[2rem]" />
            <div className="border-dorado absolute inset-4 rounded-t-[999px] rounded-b-[1.4rem] border" />
            <div className="bg-marfil absolute inset-x-10 bottom-10 flex h-28 items-center justify-center rounded-2xl">
              <span className="font-serif text-4xl font-semibold tracking-[0.32em]">
                {brand.name}
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Categorías (provisionales hasta la Fase 3) */}
      <section aria-labelledby="titulo-categorias" className="py-16 sm:py-24">
        <Container>
          <Eyebrow>Categorías</Eyebrow>
          <h2 id="titulo-categorias" className="mt-5 text-4xl sm:text-5xl">
            Encuentra lo tuyo
          </h2>
          <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {placeholderCategories.map((cat, i) => (
              // Tarjeta informativa, NO es un enlace: aún no hay filtros por categoría.
              // En la Fase 3 pasará a ser <Link href={`/tienda?categoria=${cat.slug}`}>.
              <li key={cat.slug}>
                <div className="border-chocolate/20 flex aspect-[5/3] flex-col justify-between rounded-2xl border bg-white/40 p-5">
                  <span aria-hidden className="text-sm tracking-[0.2em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-2xl leading-tight sm:text-3xl">
                    {cat.name}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Novedades: estado vacío honesto */}
      <section
        aria-labelledby="titulo-novedades"
        className="border-chocolate/15 border-y py-16 sm:py-24"
      >
        <Container>
          <h2 id="titulo-novedades" className="sr-only">
            Novedades
          </h2>
          <EmptyState
            title="Muy pronto, nuestras primeras novedades"
            action={
              <ButtonLink href="/nosotras" variant="outline">
                Conoce la historia
              </ButtonLink>
            }
          >
            Estamos preparando el catálogo con mucho detalle. Vuelve en unos días.
          </EmptyState>
        </Container>
      </section>

      {/* Promesas */}
      <section aria-labelledby="titulo-promesas" className="py-16 sm:py-24">
        <Container>
          <Eyebrow>Muy pronto</Eyebrow>
          <h2 id="titulo-promesas" className="mt-5 mb-12 text-4xl sm:text-5xl">
            Así será comprar en NYOR
          </h2>
          <ul className="grid gap-10 md:grid-cols-3">
            {promesas.map((p) => (
              <li key={p.titulo} className="border-chocolate/20 border-t pt-6">
                <h3 className="text-3xl">{p.titulo}</h3>
                <p className="mt-3">{p.texto}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Frase de marca */}
      <section className="on-dark bg-chocolate text-marfil">
        <Container className="py-20 text-center sm:py-28">
          <span aria-hidden className="bg-dorado mx-auto mb-8 block h-px w-14" />
          <p className="mx-auto max-w-3xl font-serif text-4xl leading-tight italic sm:text-6xl">
            {brand.spiritualPhrase}
          </p>
        </Container>
      </section>
    </>
  );
}
