import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { mainNav } from "@/config/site";
import { MobileNav } from "./mobile-nav";

vi.mock("next/navigation", () => ({ usePathname: () => "/" }));

describe("MobileNav", () => {
  it("empieza cerrado y expone su estado con aria-expanded", () => {
    render(<MobileNav items={mainNav} />);
    const boton = screen.getByRole("button", { name: "Abrir menú" });
    expect(boton).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
  });

  it("se abre, muestra los 5 enlaces y marca la página actual", async () => {
    const user = userEvent.setup();
    render(<MobileNav items={mainNav} />);
    await user.click(screen.getByRole("button", { name: "Abrir menú" }));

    expect(screen.getByRole("button", { name: "Cerrar menú" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    expect(screen.getAllByRole("link")).toHaveLength(5);
    expect(screen.getByRole("link", { name: "Inicio" })).toHaveAttribute(
      "aria-current",
      "page",
    );
  });

  it("se cierra con Escape", async () => {
    const user = userEvent.setup();
    render(<MobileNav items={mainNav} />);
    await user.click(screen.getByRole("button", { name: "Abrir menú" }));
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
  });

  it("se cierra al elegir un enlace", async () => {
    const user = userEvent.setup();
    render(<MobileNav items={mainNav} />);
    await user.click(screen.getByRole("button", { name: "Abrir menú" }));
    await user.click(screen.getByRole("link", { name: "Tienda" }));
    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
  });
});
