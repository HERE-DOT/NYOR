import { describe, expect, it } from "vitest";
import { isActive } from "./nav-links";

describe("isActive", () => {
  it("Inicio solo está activo en la raíz", () => {
    expect(isActive("/", "/")).toBe(true);
    expect(isActive("/tienda", "/")).toBe(false);
  });

  it("una sección está activa en su ruta y en las hijas", () => {
    expect(isActive("/tienda", "/tienda")).toBe(true);
    expect(isActive("/tienda/vestido-x", "/tienda")).toBe(true);
  });

  it("no confunde prefijos parecidos", () => {
    expect(isActive("/tiendas", "/tienda")).toBe(false);
  });
});
