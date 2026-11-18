import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { brand, mainNav } from "@/config/site";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="on-dark bg-chocolate text-marfil mt-auto">
      <div aria-hidden className="bg-oro h-px w-full" />
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr] md:items-center">
        <div>
          <Logo variant="full" tone="onDark" className="w-64 sm:w-72" />
          <p className="mt-5 flex items-center gap-4 text-[0.7rem] tracking-[0.4em] uppercase">
            <span aria-hidden className="bg-dorado-claro/60 h-px w-8" />
            {brand.slogan}
          </p>
          <p className="font-script text-dorado-claro mt-6 text-4xl leading-tight">
            {brand.spiritualPhrase}
          </p>
        </div>
        <nav aria-label="Pie de página">
          <p className="text-xs font-medium tracking-[0.28em] uppercase">Explorar</p>
          <ul className="mt-5 space-y-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center underline-offset-4 hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <div className="border-marfil/20 border-t">
        <Container className="py-6 text-sm">
          <p>{brand.name} · Boutique multimarca</p>
        </Container>
      </div>
    </footer>
  );
}
