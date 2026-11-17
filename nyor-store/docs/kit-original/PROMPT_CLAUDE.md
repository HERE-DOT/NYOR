# PROMPT PRINCIPAL — PROYECTO NYOR

Actúa como arquitecto de software y desarrollador full-stack senior. Vas a ayudarme a construir NYOR, una tienda online multimarca orientada principalmente a venta directa al consumidor final en Colombia.

Lee primero y por completo:

- `README.md`
- `docs/REQUISITOS.md`
- `docs/ARQUITECTURA.md`
- `docs/DECISIONES_PENDIENTES.md`
- `supabase/schema_borrador.sql`

## REGLA PRINCIPAL: PRIMERO AUDITA, NO CONSTRUYAS A CIEGAS

En tu primera respuesta:

1. Resume el alcance del proyecto y las decisiones comerciales.
2. Revisa la carpeta y detecta si ya existe una aplicación o si está vacía.
3. Identifica errores, dependencias, archivos faltantes y riesgos de seguridad.
4. Revisa críticamente el SQL borrador: corrige relaciones, índices, constraints, triggers, transacciones y políticas RLS antes de proponer ejecutarlo.
5. Identifica decisiones pendientes. No inventes respuestas.
6. Presenta un plan por fases, con entregables y pruebas de aceptación.
7. No sobrescribas ni elimines archivos sin explicar el motivo y obtener mi aprobación.

## CONTEXTO DE NEGOCIO

NYOR es una boutique multimarca femenina. El nombre combina NY (inspirado en Nidya, nombre de la mamá) + OR (inspirado en el hebreo _Or_, “luz”). Es un nombre de marca creado, no una traducción literal hebrea. Eslogan: “Tu esencia, tu estilo”. Personalidad elegante, cercana y moderna. Público amplio de mujeres de distintas edades. La venta al consumidor final es el foco; el canal mayorista podría añadirse después.

La tienda venderá categorías diversas: moda, perfumería, belleza y cuidado, calzado, accesorios y otros productos. El catálogo debe ser multimarca y unificado, sin separar la experiencia por proveedor.

## STACK PROPUESTO

Next.js App Router, TypeScript, Tailwind CSS, Supabase (PostgreSQL, Auth y Storage) y Vercel. Confirma versiones compatibles antes de instalar. Si el repositorio ya tiene otro stack, no lo reemplaces sin explicar ventajas y riesgos.

NYOR debe ser independiente de otros proyectos. No reutilices bases de datos, credenciales, repositorios ni despliegues ajenos.

## DECISIONES YA TOMADAS

- Precios individuales y paquetes/combos.
- Promociones mediante descuentos y combos.
- Domicilio gratuito desde un mínimo (monto pendiente).
- Catálogo público; registro obligatorio para comprar.
- Registro con correo/contraseña o Google.
- WhatsApp obligatorio al comprar.
- Notificaciones previstas por WhatsApp.
- Entregas a domicilio y recogida en punto acordado.
- Seguimiento completo de pedidos en la cuenta.
- Pagos manuales inicialmente: transferencia, Nequi y efectivo; no integrar pasarela al comienzo.
- El pedido se guarda en base de datos antes de abrir WhatsApp con el resumen.
- Todas las ventas se registran: web, WhatsApp y presenciales.
- Finanzas completas: costos, precios, utilidad y gastos.
- Módulo de proveedores y órdenes de compra desde la primera versión.
- Categorías y subcategorías administrables desde el panel.
- Administración compartida por dos personas, con permisos seguros.
- Los productos pueden estar disponibles, por encargo o agotados.
- Los costos, márgenes y datos de proveedores son privados.

## ALCANCE FUNCIONAL

Construye por módulos:

1. Tienda pública: home, catálogo, búsqueda, filtros, detalle de producto, categorías, novedades, ofertas y marca.
2. Cuentas: email/contraseña y Google, perfil, direcciones, favoritos e historial.
3. Carrito persistente y checkout autenticado.
4. Pedidos: guardar en Supabase primero, generar número único, luego abrir WhatsApp. Separar estado del pedido y estado del pago.
5. Seguimiento: recibido, revisión, confirmado, preparación, en camino/listo para recoger, entregado y cancelado.
6. Administración: resumen, productos, categorías, inventario, pedidos, clientes, proveedores, compras, promociones, ventas manuales, gastos y reportes.
7. Inventario: stock físico, reservado, disponible, movimientos, alertas y control de sobreventa.
8. Proveedores y compras: órdenes, recepción parcial/total, historial de costos y documentos adjuntos.
9. Finanzas: costos históricos por compra/lote, ventas, pagos, gastos, utilidad bruta y neta estimada.
10. Reportes diarios, semanales y mensuales.

## SEGURIDAD NO NEGOCIABLE

- RLS para todas las tablas expuestas.
- Un cliente solo puede consultar y modificar su propio perfil, direcciones, favoritos y pedidos.
- No permitir que el usuario se otorgue a sí mismo rol administrador.
- Proteger todas las rutas y acciones administrativas en servidor y base de datos.
- No exponer `service_role`, secretos ni claves privadas al frontend.
- No confiar en precio, descuento, costo, stock ni total calculado en el navegador. Recalcular en servidor.
- Evitar sobreventa con transacciones/operaciones atómicas.
- Registrar quién cambió estados, inventario, precios, pagos y costos.
- Validar entradas y limitar abuso.
- No activar compras reales ni almacenar datos reales hasta que seguridad y pruebas estén completas.

## WHATSAPP

No afirmes que se envían mensajes automáticos si solo se abre un enlace `wa.me`. Para la primera versión, puede abrirse WhatsApp con un mensaje preparado tras guardar el pedido. Las notificaciones automáticas requieren WhatsApp Business Platform o proveedor compatible y configuración aprobada. Diseña una capa desacoplada para integrarlo posteriormente.

## MÉTODO DE TRABAJO

- Trabaja en fases pequeñas.
- Antes de editar, explica qué archivos tocarás y por qué.
- Después de cada fase, ejecuta pruebas, lint, typecheck y build disponibles.
- No ignores errores ni simules que una función está terminada.
- No uses información, productos, precios, clientes o proveedores ficticios como datos reales.
- Usa datos demo claramente marcados solo en desarrollo.
- Mantén diseño responsive, accesible, en español y COP.
- Documenta comandos, variables de entorno y pasos de configuración.
- Si falta una credencial, crea `.env.example` y explícame cómo configurarla; nunca inventes una.
- No hagas despliegues ni operaciones destructivas sin mi autorización.

## PRIMER ENTREGABLE

No empieces implementando toda la tienda. Entrega primero:
A. Diagnóstico de la carpeta.
B. Riesgos y correcciones necesarias.
C. Modelo de datos propuesto revisado.
D. Matriz de roles y permisos.
E. Plan de implementación por fases y pruebas.
F. Lista exacta de decisiones o credenciales que necesitarás más adelante.

Espera mi aprobación antes de comenzar la implementación.
