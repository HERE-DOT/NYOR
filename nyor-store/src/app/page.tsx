import { CategoryIcon } from "@/components/brand/category-icon";
import { Logo } from "@/components/brand/logo";
import { PhraseBand } from "@/components/brand/phrase-band";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { EmptyState } from "@/components/ui/empty-state";
import { Eyebrow } from "@/components/ui/eyebrow";
import { placeholderCategories } from "@/config/site";

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
      <section className="bg-seda overflow-hidden">
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

          {/* Composición decorativa: arco + resplandor + logo. No es una foto de producto. */}
          <div
            aria-hidden
            className="relative mx-auto aspect-[6/5] w-full max-w-xs sm:aspect-[4/5] sm:max-w-sm lg:max-w-md"
          >
            <div className="glow-or absolute -inset-10" />
            <div className="bg-rosa/70 absolute inset-0 rounded-t-[999px] rounded-b-[2rem]" />
            <div className="border-dorado absolute inset-4 rounded-t-[999px] rounded-b-[1.4rem] border" />
            <div className="bg-chocolate absolute inset-x-8 bottom-10 flex items-center justify-center rounded-2xl px-6 py-7 shadow-lg">
              <Logo
                variant="full"
                tone="onDark"
                label={null}
                className="w-full max-w-60"
              />
            </div>
          </div>
        </Container>
        <div aria-hidden className="bg-oro h-px w-full opacity-70" />
      </section>

      {/* Categorías (provisionales hasta la Fase 3) */}
      <section aria-labelledby="titulo-categorias" className="py-16 sm:py-24">
        <Container>
          <Eyebrow>Categorías</Eyebrow>
          <h2 id="titulo-categorias" className="mt-5 text-4xl sm:text-5xl">
            Encuentra lo tuyo
          </h2>
          <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
            {placeholderCategories.map((cat) => (
              // Tarjeta informativa, NO es un enlace: aún no hay filtros por categoría.
              // En la Fase 3 pasará a ser <Link href={`/tienda?categoria=${cat.slug}`}>.
              <li key={cat.slug}>
                <div className="border-dorado/50 flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-3xl border bg-white/55 p-4 text-center shadow-sm">
                  <CategoryIcon kind={cat.icon} className="h-12 w-12 sm:h-14 sm:w-14" />
                  <span className="font-serif text-xl leading-tight sm:text-2xl">
                    {cat.name}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Novedades: estado vacío honesto */}
      <section aria-labelledby="titulo-novedades" className="bg-seda py-16 sm:py-24">
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
      <PhraseBand />
    </>
  );
}
