import { z } from "zod";

/**
 * Variables públicas (seguras para el navegador). Se leen con referencia
 * estática a `process.env.NEXT_PUBLIC_*` para que Next las incruste.
 * Las variables privadas (Supabase service role, etc.) irán en un módulo
 * aparte marcado `server-only` a partir de la Fase 2.
 */
const publicSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.url().default("http://localhost:3000"),
  NEXT_PUBLIC_ALLOW_INDEXING: z
    .enum(["true", "false"])
    .default("false")
    .transform((v) => v === "true"),
});

const parsed = publicSchema.safeParse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || undefined,
  NEXT_PUBLIC_ALLOW_INDEXING: process.env.NEXT_PUBLIC_ALLOW_INDEXING || undefined,
});

if (!parsed.success) {
  throw new Error(
    `Variables de entorno públicas inválidas: ${z.prettifyError(parsed.error)}`,
  );
}

/** URL del sitio sin barra final. */
export const siteUrl = parsed.data.NEXT_PUBLIC_SITE_URL.replace(/\/+$/, "");

/** false hasta el lanzamiento: el sitio se sirve con noindex. */
export const allowIndexing = parsed.data.NEXT_PUBLIC_ALLOW_INDEXING;
