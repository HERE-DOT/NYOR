# Registro de decisiones — NYOR

Las decisiones originales del kit están en `docs/kit-original/` (sin modificar). Este archivo registra lo decidido después. Una decisión nueva se añade al final; no se reescriben las anteriores.

## Decididas

| ID    | Fecha      | Decisión                                                                                                                              |
| ----- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| D-001 | 2026-11-17 | Se aprueba el plan por fases del diagnóstico de la Fase 0, con **inventario y compras antes del checkout**.                           |
| D-002 | 2026-11-17 | Ventas web, WhatsApp y presenciales viven en **una sola tabla `orders`** con campo de canal (evita doble conteo).                     |
| D-003 | 2026-11-17 | El colaborador ve **solo la operación**. No ve costos, márgenes, gastos ni reportes financieros. La dueña (`owner`) ve todo.          |
| D-004 | 2026-11-17 | Costeo **por lotes con salida PEPS (FIFO)**.                                                                                          |
| D-005 | 2026-11-17 | El código vive en **GitHub**, en un repositorio privado propio de NYOR.                                                               |
| D-006 | 2026-11-17 | La **paleta no cambia**: rosa `#D99A9C`, marfil `#F7E8DC`, dorado `#C49A55`, chocolate `#57382E`. Es parte de la esencia de la marca. |

## Supuestos derivados de D-003 (por confirmar)

Se asumen hasta que se diga lo contrario; afectan la Fase 2 (permisos) y la Fase 4:

- El colaborador **sí** puede: gestionar catálogo (sin ver costos), ver y mover inventario (cantidades), gestionar pedidos y cambiar su estado, y registrar la confirmación de un pago recibido.
- El colaborador **no** puede: ver proveedores, órdenes de compra y costos de recepción, gastos, utilidad, reportes financieros ni el registro de auditoría. **Proveedores y compras quedan solo para la dueña.**
- Pregunta abierta: ¿el colaborador debe poder registrar la _recepción física_ de mercancía (cantidades) sin ver costos? Si sí, se separa "recibir" de "valorar".

## Pendientes

Ver `docs/kit-original/DECISIONES_PENDIENTES.md` (12 puntos) y las 17 decisiones nuevas (13–29) del documento de diagnóstico de la Fase 0. Ninguna se resolverá con valores inventados: se mantienen configurables.
