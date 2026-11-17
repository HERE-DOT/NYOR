import { mainNav } from "@/config/site";
import { Container } from "@/components/ui/container";
import { MobileNav } from "./mobile-nav";
import { NavLinks } from "./nav-links";
import { Wordmark } from "./wordmark";

export function SiteHeader() {
  return (
    <header className="border-chocolate/15 bg-marfil/95 sticky top-0 z-40 border-b backdrop-blur">
      <Container className="relative flex h-18 items-center justify-between">
        <Wordmark />
        <nav aria-label="Principal" className="hidden md:block">
          <NavLinks items={mainNav} className="flex items-center gap-9" />
        </nav>
        <MobileNav items={mainNav} />
      </Container>
    </header>
  );
}
