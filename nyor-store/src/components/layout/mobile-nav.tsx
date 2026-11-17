"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import type { NavItem } from "@/config/site";
import { NavLinks } from "./nav-links";

export function MobileNav({ items }: { items: readonly NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="md:hidden"
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls="menu-movil"
        onClick={() => setOpen((v) => !v)}
        className="-mr-2 inline-flex size-11 items-center justify-center rounded-full"
      >
        <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
        {open ? (
          <X aria-hidden className="size-6" />
        ) : (
          <Menu aria-hidden className="size-6" />
        )}
      </button>

      {open ? (
        <nav
          id="menu-movil"
          aria-label="Principal"
          className="border-chocolate/15 bg-marfil absolute inset-x-0 top-full border-b shadow-[0_20px_30px_-20px_rgba(87,56,46,0.35)]"
        >
          <NavLinks
            items={items}
            onNavigate={() => setOpen(false)}
            className="flex flex-col px-5 py-4"
            linkClassName="flex min-h-12 items-center text-base"
          />
        </nav>
      ) : null}
    </div>
  );
}
