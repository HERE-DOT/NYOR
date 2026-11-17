import Link from "next/link";
import { brand, mainNav } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Wordmark } from "./wordmark";

export function SiteFooter() {
  return (
    <footer className="on-dark bg-chocolate text-marfil mt-auto">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr]">
        <div>
          <Wordmark />
          <p className="mt-4 font-serif text-2xl italic">{brand.slogan}</p>
          <p className="mt-6 max-w-md text-base">{brand.spiritualPhrase}.</p>
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
