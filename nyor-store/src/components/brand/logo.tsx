import { useId } from "react";
import { cn } from "@/lib/cn";
import { LOGO_LETTERS, LOGO_STAR_O, LOGO_TEXT_BOX } from "./logo-paths";

/**
 * LOGO PROVISIONAL de NYOR (decisión 12 pendiente): letras en Cormorant Garamond convertidas
 * a trazos + ornamento propio de pétalos y destello. Cuando exista el logo definitivo se
 * reemplaza este archivo y `src/app/icon.svg`; el resto del sitio no cambia.
 *
 * El dorado metálico se logra con un degradado entre tonos más oscuros y más claros del
 * dorado de marca (#C49A55, que no se altera). Un logotipo está exento de las reglas de
 * contraste de texto de WCAG.
 */

type Tone = "onLight" | "onDark";

const GOLD_STOPS: Record<Tone, readonly (readonly [number, string])[]> = {
  // Sobre fondos claros: más profundo, para que se lea.
  onLight: [
    [0, "#7a5120"],
    [0.28, "#b98a45"],
    [0.52, "#e4c78c"],
    [0.74, "#bb8e4c"],
    [1, "#7a5120"],
  ],
  // Sobre chocolate: más luminoso.
  onDark: [
    [0, "#b58a45"],
    [0.3, "#e9d09c"],
    [0.52, "#fbeecf"],
    [0.74, "#dfbb77"],
    [1, "#b58a45"],
  ],
};

/** Estrella de cuatro puntas con lados cóncavos. */
export function starPath(cx: number, cy: number, r: number): string {
  const k = r * 0.14;
  return [
    `M${cx} ${cy - r}`,
    `Q${cx + k} ${cy - k} ${cx + r} ${cy}`,
    `Q${cx + k} ${cy + k} ${cx} ${cy + r}`,
    `Q${cx - k} ${cy + k} ${cx - r} ${cy}`,
    `Q${cx - k} ${cy - k} ${cx} ${cy - r}Z`,
  ].join("");
}

// Ornamento (coordenadas relativas al centro de la base; Y negativa = hacia arriba).
const PETAL_CENTER = "M0 0C88 -70 92 -190 0 -300C-92 -190 -88 -70 0 0Z";
const PETAL_SIDE = "M-30 6C-170 -4 -290 -80 -318 -210C-210 -176 -100 -110 -30 6Z";
const PETAL_OUTER = "M-70 22C-230 34 -380 -6 -452 -92C-330 -82 -190 -48 -70 22Z";
const SWOOSH = "M-640 44C-380 -170 380 -170 640 44C360 -90 -360 -90 -640 44Z";

const BOX = LOGO_TEXT_BOX;
const ORNAMENT_BASE_Y = -700;
const VB = {
  wordmark: { x: BOX.left - 40, y: -660, w: BOX.right - BOX.left + 80, h: 700 },
  full: { x: BOX.left - 40, y: -1150, w: BOX.right - BOX.left + 80, h: 1190 },
} as const;

export function Logo({
  variant = "full",
  tone = "onLight",
  label = "NYOR",
  className,
}: {
  /** `full`: corona de pétalos + NYOR. `wordmark`: solo NYOR. */
  variant?: "full" | "wordmark";
  tone?: Tone;
  /** Texto accesible. `null` si el logo es decorativo (por ejemplo, dentro de un enlace ya etiquetado). */
  label?: string | null;
  className?: string;
}) {
  const id = useId();
  const gradId = `oro-${id}`;
  const vb = VB[variant];
  const fill = `url(#${gradId})`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`${vb.x} ${vb.y} ${vb.w} ${vb.h}`}
      role={label ? "img" : undefined}
      aria-label={label ?? undefined}
      aria-hidden={label ? undefined : true}
      focusable="false"
      className={cn("block", className)}
    >
      <defs>
        <linearGradient
          id={gradId}
          gradientUnits="userSpaceOnUse"
          x1={BOX.left}
          y1={variant === "full" ? -1000 : -640}
          x2={BOX.right}
          y2={20}
        >
          {GOLD_STOPS[tone].map(([offset, color]) => (
            <stop key={offset} offset={offset} stopColor={color} />
          ))}
        </linearGradient>
      </defs>

      {variant === "full" ? (
        <g fill={fill} transform={`translate(${BOX.cx} ${ORNAMENT_BASE_Y})`}>
          <path d={SWOOSH} />
          <path d={PETAL_CENTER} />
          <path d={PETAL_SIDE} />
          <path d={PETAL_SIDE} transform="scale(-1 1)" />
          <path d={PETAL_OUTER} />
          <path d={PETAL_OUTER} transform="scale(-1 1)" />
          <path d={starPath(0, -362, 58)} />
        </g>
      ) : null}

      <g fill={fill}>
        {LOGO_LETTERS.map((l) => (
          <path key={l.ch} d={l.d} transform={`translate(${l.x} 0)`} />
        ))}
        <path d={starPath(LOGO_STAR_O.x, LOGO_STAR_O.y, 92)} />
      </g>
    </svg>
  );
}

/** Corona de pétalos sola, para separadores y bandas. */
export function CrownOrnament({
  tone = "onLight",
  className,
}: {
  tone?: Tone;
  className?: string;
}) {
  const id = useId();
  const gradId = `oro-c-${id}`;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-660 -450 1320 520"
      aria-hidden
      focusable="false"
      className={cn("block", className)}
    >
      <defs>
        <linearGradient
          id={gradId}
          gradientUnits="userSpaceOnUse"
          x1="-640"
          y1="-420"
          x2="640"
          y2="60"
        >
          {GOLD_STOPS[tone].map(([offset, color]) => (
            <stop key={offset} offset={offset} stopColor={color} />
          ))}
        </linearGradient>
      </defs>
      <g fill={`url(#${gradId})`}>
        <path d={SWOOSH} />
        <path d={PETAL_CENTER} />
        <path d={PETAL_SIDE} />
        <path d={PETAL_SIDE} transform="scale(-1 1)" />
        <path d={PETAL_OUTER} />
        <path d={PETAL_OUTER} transform="scale(-1 1)" />
        <path d={starPath(0, -362, 58)} />
      </g>
    </svg>
  );
}
