# NYOR

Tienda online multimarca para mujer — _Tu esencia, tu estilo_. Venta directa al consumidor final en Colombia.

> **Estado: en desarrollo (Fase 1 terminada).** No es una tienda funcional ni debe recibir pedidos ni datos reales. Ver [`docs/ESTADO.md`](docs/ESTADO.md) para saber qué está hecho y qué no.

## Stack

Next.js (App Router, Cache Components) · TypeScript estricto · Tailwind CSS 4 · Supabase (PostgreSQL, Auth, Storage — desde la Fase 2) · Vercel.

NYOR es un proyecto **independiente**: no comparte base de datos, claves, usuarios ni despliegues con otros proyectos.

## Requisitos

- Node.js 22 o superior (Next exige ≥ 20.9; el proyecto se prueba con 22).
- npm.

## Puesta en marcha

```bash
npm ci
cp .env.example .env.local   # y revisa los valores
npm run dev                  # http://localhost:3000
```

## Comandos

| Comando             | Qué hace                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------- |
| `npm run dev`       | Servidor de desarrollo                                                                      |
| `npm run lint`      | ESLint                                                                                      |
| `npm run typecheck` | Genera tipos de rutas y ejecuta `tsc --noEmit`                                              |
| `npm test`          | Pruebas unitarias y de componentes (Vitest)                                                 |
| `npm run test:e2e`  | Pruebas de extremo a extremo y accesibilidad (Playwright + axe; compila y levanta el sitio) |
| `npm run build`     | Compilación de producción                                                                   |
| `npm run check`     | lint + typecheck + test + build                                                             |
| `npm run format`    | Prettier                                                                                    |

Las pruebas e2e usan el Chrome instalado (`channel: "chrome"`). Si no lo tienes: `npx playwright install chrome`.

## Variables de entorno

Ver `.env.example`. Reglas:

- **Nunca** se versionan secretos. Solo `.env.example` está en Git.
- Solo las variables con prefijo `NEXT_PUBLIC_` llegan al navegador.
- La clave de servicio de Supabase (Fase 2) jamás lleva `NEXT_PUBLIC_` ni se importa en componentes cliente.
- `NEXT_PUBLIC_ALLOW_INDEXING=false` mantiene el sitio con `noindex` hasta el lanzamiento.

## Estructura

```
src/app/            rutas (App Router)
src/components/     ui/ (sistema visual) y layout/ (cabecera, pie, navegación)
src/config/         configuración de marca y navegación
src/lib/            utilidades (formato COP, env, cn)
e2e/                pruebas Playwright
docs/               decisiones, estado y documentos del kit original
docs/referencia/    SQL borrador del kit: SOLO LECTURA, no ejecutar
```

Los módulos de dominio (`catalog`, `orders`, `inventory`, …) se crearán en `src/modules/` cuando su fase empiece, no antes.

## Sistema visual

La paleta no se modifica (decisión D-006). Reglas de contraste en `src/app/globals.css`: el dorado y el rosa **no** se usan como color de texto sobre fondos claros; el texto va en chocolate.

## Documentación

- [`docs/ESTADO.md`](docs/ESTADO.md) — qué está terminado y qué falta.
- [`docs/DECISIONES.md`](docs/DECISIONES.md) — decisiones tomadas y supuestos por confirmar.
- [`docs/kit-original/`](docs/kit-original) — requisitos, arquitectura y decisiones pendientes originales.
