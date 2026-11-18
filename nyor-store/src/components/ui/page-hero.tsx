import type { ReactNode } from "react";
import { Container } from "./container";
import { Eyebrow } from "./eyebrow";

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="bg-seda">
      <Container className="py-14 sm:py-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-3xl text-5xl sm:text-6xl">{title}</h1>
        {children ? <p className="mt-6 max-w-2xl text-lg">{children}</p> : null}
      </Container>
      <div aria-hidden className="bg-oro h-px w-full opacity-70" />
    </section>
  );
}
