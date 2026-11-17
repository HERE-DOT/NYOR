import { describe, expect, it } from "vitest";
import { brand, mainNav, placeholderCategories } from "./site";

describe("configuración del sitio", () => {
  it("la navegación principal es la definida en los requisitos", () => {
    expect(mainNav.map((n) => n.label)).toEqual([
      "Inicio",
      "Tienda",
      "Novedades",
      "Ofertas",
      "Nosotras",
    ]);
  });

  it("las rutas de navegación son únicas y absolutas", () => {
    const hrefs = mainNav.map((n) => n.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
    for (const h of hrefs) expect(h.startsWith("/")).toBe(true);
  });

  it("los slugs de categorías provisionales son únicos", () => {
    const slugs = placeholderCategories.map((c) => c.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("conserva el eslogan de marca", () => {
    expect(brand.slogan).toBe("Tu esencia, tu estilo");
  });
});
