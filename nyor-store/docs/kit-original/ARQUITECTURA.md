# Arquitectura propuesta

## Stack

- Next.js App Router + TypeScript.
- Tailwind CSS y componentes accesibles.
- Supabase PostgreSQL, Auth y Storage.
- Vercel para hosting.

## Separación de proyectos

NYOR debe tener repositorio, proyecto Supabase, variables de entorno y despliegue propios. No reutilizar infraestructura, tablas, usuarios, claves ni datos de Distrimart o HERE.

## Principios

1. Auditar el repositorio antes de modificarlo.
2. Mantener una arquitectura modular por dominios: catálogo, cuentas, carrito, pedidos, inventario, proveedores, compras, finanzas y administración.
3. Usar validación tanto en cliente como servidor.
4. Las operaciones críticas (crear pedido, reservar stock, recibir compra, registrar pago) deben ser seguras y transaccionales.
5. Aplicar RLS a todas las tablas expuestas por Supabase.
6. Las operaciones administrativas deben validar el rol en servidor y en la base de datos/RLS.
7. Nunca exponer `service_role` ni secretos en el navegador.
8. No confiar en precios, costos, descuentos, totales ni permisos enviados por el cliente. Recalcular y validar en servidor.
9. Mantener auditoría de cambios administrativos importantes.
10. No introducir datos ficticios como inventario real. Usar fixtures claramente identificados en desarrollo.

## Orden recomendado de implementación

Fase 0 — Auditoría del entorno, decisiones pendientes y plan.
Fase 1 — Esqueleto de aplicación, sistema visual y navegación.
Fase 2 — Supabase, esquema, Auth y políticas RLS.
Fase 3 — Catálogo, categorías, productos y Storage.
Fase 4 — Carrito y checkout con creación segura de pedido.
Fase 5 — Administración de pedidos, estados y seguimiento.
Fase 6 — Inventario, proveedores y órdenes de compra.
Fase 7 — Ventas manuales, gastos, costos históricos y reportes.
Fase 8 — Promociones, combos, cupones y favoritos.
Fase 9 — Notificaciones WhatsApp, pruebas, accesibilidad y despliegue.

## Seguridad y publicación

No habilitar pedidos reales ni recopilar datos reales de clientes hasta completar autenticación, autorización, RLS, validación de servidor y pruebas de seguridad. Las credenciales deben configurarse localmente en `.env.local` y en el entorno de despliegue, nunca en Git.
