import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

const variants = {
  /** CTA principal: rosa con texto chocolate (4,5:1). */
  primary: "bg-rosa text-chocolate hover:bg-chocolate hover:text-marfil",
  /** Sobre fondos claros. */
  dark: "bg-chocolate text-marfil hover:bg-rosa hover:text-chocolate",
  outline: "border border-chocolate text-chocolate hover:bg-chocolate hover:text-marfil",
  /** Sobre fondos chocolate. */
  outlineLight: "border border-marfil text-marfil hover:bg-marfil hover:text-chocolate",
} as const;

export type ButtonVariant = keyof typeof variants;

export function buttonStyles(variant: ButtonVariant = "primary", className?: string) {
  return cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-[0.08em] uppercase transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    className,
  );
}

type ButtonProps = ComponentProps<"button"> & { variant?: ButtonVariant };

export function Button({ variant, className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={buttonStyles(variant, className)} {...props} />;
}

type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: ButtonVariant };

export function ButtonLink({ variant, className, ...props }: ButtonLinkProps) {
  return <Link className={buttonStyles(variant, className)} {...props} />;
}
