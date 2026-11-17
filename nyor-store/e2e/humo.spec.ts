import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const rutas = ["/", "/tienda", "/novedades", "/ofertas", "/nosotras"];

test.describe("humo: el sitio base responde y es accesible", () => {
  for (const ruta of rutas) {
    test(`${ruta} carga, no se indexa y no tiene violaciones axe`, async ({ page }) => {
      const res = await page.goto(ruta);
      expect(res?.status()).toBe(200);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
        "content",
        /noindex/,
      );
      const resultados = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      expect(resultados.violations).toEqual([]);
    });
  }

  test("una ruta inexistente devuelve 404 con la página amable", async ({ page }) => {
    const res = await page.goto("/no-existe");
    expect(res?.status()).toBe(404);
    await expect(
      page.getByRole("heading", { name: "No encontramos esa página" }),
    ).toBeVisible();
  });

  test("envía cabeceras de seguridad", async ({ request }) => {
    const res = await request.get("/");
    const h = res.headers();
    expect(h["x-content-type-options"]).toBe("nosniff");
    expect(h["x-frame-options"]).toBe("DENY");
    expect(h["x-powered-by"]).toBeUndefined();
  });

  test("robots.txt bloquea todo mientras no haya lanzamiento", async ({ request }) => {
    const txt = await (await request.get("/robots.txt")).text();
    expect(txt).toMatch(/Disallow: \//);
  });
});

test("en móvil el menú se abre y navega", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Solo aplica al proyecto móvil");
  await page.goto("/");
  await page.getByRole("button", { name: "Abrir menú" }).click();
  await page
    .getByRole("navigation", { name: "Principal" })
    .getByRole("link", { name: "Nosotras" })
    .click();
  await expect(page).toHaveURL(/\/nosotras$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Un nombre con historia",
  );
});
