# Requisitos funcionales — NYOR

## 1. Marca y posicionamiento

- Marca: NYOR.
- Eslogan: “Tu esencia, tu estilo”.
- Concepto del nombre: NY (inspirado en Nidya, nombre de la mamá) + OR (inspirado en el hebreo אוֹר, _Or_, “luz”). NYOR es un nombre de marca creado; no afirmar que sea una palabra hebrea literal.
- Frase espiritual secundaria: “Brilla con la gracia que Dios te dio”.
- Personalidad: híbrida, elegante, cercana y moderna.
- Público principal: mujeres de distintas edades y estilos.
- Modelo principal: B2C, venta directa al consumidor final.
- Canal secundario posible: ventas mayoristas, sin convertirlo en el foco inicial.
- Paleta: rosa #D99A9C, marfil/champaña #F7E8DC, dorado #C49A55, chocolate #57382E.
- Dirección visual: boutique multimarca femenina, accesible, cálida y sofisticada. El logo definitivo todavía está pendiente.

## 2. Catálogo

- Catálogo multimarca unificado: no separar la tienda por proveedor.
- Cada producto puede tener marca, proveedor, categoría y subcategoría.
- Categorías y subcategorías administrables desde el panel, sin cambios de código.
- Categorías iniciales sugeridas: Moda, Perfumería, Belleza y cuidado, Calzado, Accesorios y Otros productos.
- Productos con fotografías, descripción, precio, costo interno, variantes (talla, color, presentación), estado de publicación y disponibilidad.
- Mostrar claramente “Disponible” o “Por encargo”; “Agotado” cuando no se pueda comprar.
- Los costos internos, proveedores y márgenes nunca deben mostrarse a clientes.
- Permitir productos destacados, novedades, más vendidos y ofertas.

## 3. Tienda pública

- Inicio con presentación de marca, categorías, novedades, destacados, promociones y más vendidos.
- Navegación: Inicio, Tienda, Novedades, Ofertas y Nosotras.
- Búsqueda y filtros por categoría, marca, precio y disponibilidad.
- Página de detalle con galería, variantes, precio, disponibilidad, descripción, relacionados y favoritos.
- Precios individuales y combos/paquetes especiales.
- Promociones: descuentos y combos; cupones y vigencia.
- Carrito persistente para usuarios autenticados.
- Registro obligatorio para comprar.
- Registro/acceso con correo y contraseña o Google.
- WhatsApp obligatorio al realizar una compra.
- Favoritos e historial de pedidos.

## 4. Checkout y pedidos

- Métodos de entrega: domicilio y recogida en punto acordado.
- Domicilio gratuito desde un mínimo de compra, pero el umbral todavía no está definido.
- El cliente elige entrega, proporciona datos y revisa el resumen.
- Pago inicial manual: transferencia, Nequi o efectivo, con confirmación administrativa.
- No integrar pasarela de pago en la primera versión.
- El pedido se guarda primero en Supabase; después se abre WhatsApp con resumen y número de pedido.
- Nunca depender de WhatsApp como único almacenamiento del pedido.
- Los pedidos con productos por encargo requieren verificación de disponibilidad y precio final antes de confirmarse.
- Separar estado del pedido y estado del pago.
- Estados propuestos del pedido: recibido, en revisión, confirmado, en preparación, en camino/listo para recoger, entregado y cancelado.
- Seguimiento completo en la cuenta del cliente.
- Notificaciones previstas por WhatsApp. La automatización real requiere WhatsApp Business Platform o proveedor compatible; no simular envíos si no hay integración.
- Recogida en punto acordado: permitir definir instrucciones/punto de recogida sin publicar domicilios privados.

## 5. Cuentas y clientes

- Registro obligatorio para comprar; explorar catálogo puede ser público.
- Autenticación por email/contraseña y Google.
- WhatsApp requerido para completar la compra.
- Perfil con nombre, email, teléfono, direcciones, historial y favoritos.
- El cliente solo puede leer/editar sus propios datos y pedidos.
- Consentimiento claro para comunicaciones y tratamiento de datos personales.

## 6. Administración

- Panel protegido por roles.
- Dos administradores iniciales (la dueña y el colaborador que gestiona la tienda), creados de forma segura mediante configuración/seed controlado. No permitir que cualquier usuario se autoproclame administrador.
- Módulos: resumen, productos, categorías, inventario, proveedores, compras, pedidos, clientes, promociones, gastos, ventas manuales y reportes.
- CRUD de productos, fotos, precios, costos, variantes y estado.
- CRUD de categorías y subcategorías.
- Gestión de pedidos y cambios de estado con registro de quién realizó cada cambio.
- Gestión de ventas por web, WhatsApp y presenciales.
- Registrar ventas manuales sin crear pedidos web falsos.
- Reportes diarios, semanales y mensuales.
- Exportación de reportes a CSV/Excel puede quedar para una fase posterior si aumenta mucho el alcance.

## 7. Inventario

- Control de existencias físicas, unidades reservadas y disponibles.
- Evitar sobreventa mediante operaciones transaccionales/atómicas.
- Alertas de stock bajo.
- Historial de movimientos: entradas, salidas, reservas, liberaciones, ajustes y devoluciones.
- Productos por encargo con seguimiento de solicitud al proveedor.
- No asumir que un artículo por encargo está disponible hasta confirmación.
- Mantener costos históricos por lote/compra para que cambios de costo no alteren ventas pasadas.

## 8. Proveedores y compras

- Directorio de proveedores y datos de contacto.
- Asociar productos a proveedores.
- Órdenes de compra con productos, cantidades, costos y estado.
- Estados sugeridos: borrador, solicitada, parcialmente recibida, recibida, cancelada.
- Registrar recepción total o parcial y actualizar inventario correctamente.
- Adjuntar referencia/imagen de factura o comprobante cuando corresponda.
- Mantener historial de precios/costos por compra.

## 9. Finanzas y reportes

- Registrar costo de adquisición por lote/compra y costo asociado a cada venta.
- Registrar ingresos, pagos, gastos y ajustes.
- Utilidad bruta y estimación de utilidad neta.
- No confundir ventas registradas con dinero efectivamente recibido.
- Separar estado de pago: pendiente, pago parcial, pagado, reembolsado/anulado.
- Registrar método de pago y quién confirmó el pago.
- Incluir ventas web, WhatsApp y presenciales.
- Los reportes deben explicar qué incluyen y evitar doble conteo.
- No presentar “utilidad neta” como contabilidad formal ni reemplazar asesoría contable/fiscal.

## 10. Requisitos de calidad

- Diseño responsive y accesible, pensado primero para móvil.
- Interfaz en español y moneda COP.
- Buen rendimiento y SEO básico.
- Validación de formularios y mensajes claros.
- Manejo de errores y estados vacíos/cargando.
- Pruebas para autenticación, permisos, checkout, inventario y cálculos financieros.
- Protección de datos personales conforme a normativa aplicable en Colombia.
