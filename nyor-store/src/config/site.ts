export const brand = {
  name: "NYOR",
  slogan: "Tu esencia, tu estilo",
  spiritualPhrase: "Brilla con la gracia que Dios te dio",
  description:
    "NYOR es una boutique multimarca para mujer: moda, perfumería, belleza y cuidado, calzado y accesorios en un solo lugar.",
} as const;

export type NavItem = { label: string; href: string };

/** Navegación principal definida en REQUISITOS.md §3. */
export const mainNav: readonly NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Tienda", href: "/tienda" },
  { label: "Novedades", href: "/novedades" },
  { label: "Ofertas", href: "/ofertas" },
  { label: "Nosotras", href: "/nosotras" },
];

/**
 * PROVISIONAL (Fase 1): categorías iniciales SUGERIDAS en REQUISITOS.md §2.
 * Desde la Fase 3 salen de la base de datos y se administran desde el panel.
 * No es catálogo real.
 */
export const placeholderCategories: readonly { slug: string; name: string }[] = [
  { slug: "moda", name: "Moda" },
  { slug: "perfumeria", name: "Perfumería" },
  { slug: "belleza-y-cuidado", name: "Belleza y cuidado" },
  { slug: "calzado", name: "Calzado" },
  { slug: "accesorios", name: "Accesorios" },
  { slug: "otros-productos", name: "Otros productos" },
];
