# Estado del proyecto

Última actualización: 2026-11-17 · **Fase 1 — Fundaciones: terminada.** Fase 2 pendiente de aprobación.

## Fase 1: terminado y verificado

| Elemento                                                                               | Verificación                    |
| -------------------------------------------------------------------------------------- | ------------------------------- |
| Proyecto Next.js + TypeScript estricto (`noUncheckedIndexedAccess`) + Tailwind 4       | `npm run typecheck` sin errores |
| ESLint (reglas de Next + imports de tipos + `no-console`)                              | `npm run lint` sin errores      |
| Pruebas unitarias y de componentes: formato COP, configuración, navegación, menú móvil | `npm test`: 14 de 14 pasan      |
| Compilación de producción; 9 rutas estáticas                                           | `npm run build` correcto        |
| Sitio base: Inicio, Tienda, Novedades, Ofertas, Nosotras, 404 y página de error        | e2e                             |
| Accesibilidad automática (axe, WCAG 2.0/2.1 A y AA) en 5 páginas, móvil y escritorio   | e2e: 10 de 10 sin violaciones   |
| Menú móvil: abre, navega, cierra con Escape y al elegir enlace                         | unitaria + e2e                  |
| Cabeceras de seguridad básicas, `X-Powered-By` desactivado                             | e2e                             |
| Sitio con `noindex` y `robots.txt` bloqueando todo hasta el lanzamiento                | e2e                             |
| Paleta de marca intacta y reglas de contraste documentadas                             | cálculo WCAG en `globals.css`   |
| `npm audit --omit=dev`                                                                 | 0 vulnerabilidades              |

## Qué NO está hecho (y no debe presentarse como hecho)

- **No hay Supabase, Auth, base de datos, RLS, carrito, checkout, pedidos, inventario, finanzas ni panel admin.** Nada de eso existe todavía.
- **El contenido es provisional:**
  - Las 6 categorías (`placeholderCategories` en `src/config/site.ts`) son las _sugeridas_ del kit, no un catálogo. Desde la Fase 3 saldrán de la base de datos.
  - Las tarjetas de categoría enlazan a `/tienda`, que aún no filtra.
  - Textos comerciales de Inicio ("Entrega a tu medida", "Pagos sencillos"): reflejan decisiones ya tomadas, pero las funciones aún no existen. Revisar antes del lanzamiento.
  - La página "Nosotras" es un primer texto basado en el concepto del nombre; conviene que lo revise la dueña.
- **Sin logo:** la marca es solo texto (`Wordmark`) y `src/app/icon.svg` es un monograma provisional. Pendiente decisión 12.
- Sin Content-Security-Policy (se añade en la Fase 2, cuando se conozcan los dominios de Supabase y Google).
- Sin política de privacidad, términos ni política de cambios (decisiones 6 y 25; requieren revisión legal).
- Sin datos de contacto ni WhatsApp de la tienda: no se inventaron.

## Riesgos conocidos aceptados

- `npm audit` (incluyendo herramientas de desarrollo) reporta 1 advertencia alta: `picomatch` (ReDoS en patrones de globbing). Afecta solo a ESLint/Vitest/Prettier en desarrollo y CI, **no se incluye en producción**, y la última versión publicada (4.0.7) sigue marcada, por lo que no hay parche. El CI audita solo dependencias de producción. Reevaluar en cada actualización.
- Next 16 con Cache Components es el modelo por defecto del andamiaje (los datos son dinámicos salvo que se marque `use cache`). Se mantiene: es más seguro para datos con sesión, porque nada se cachea por accidente.

## No verificado

- El flujo de CI de GitHub Actions (`.github/workflows/ci.yml`) no se ha ejecutado: el repositorio aún no está en GitHub.
- No se ha desplegado en Vercel.

## Siguiente: Fase 2 — Base de datos, Auth y RLS

Requiere tu aprobación y, antes de empezar: proyecto Supabase nuevo de NYOR (desarrollo), cliente OAuth de Google propio, y los correos de los dos administradores. Ver sección 10 del diagnóstico.
