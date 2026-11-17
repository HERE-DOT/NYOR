const copFormatter = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});

/**
 * Formatea pesos colombianos. Los precios y totales de NYOR se manejan como
 * pesos ENTEROS; un valor con decimales indica un error de cálculo y se rechaza
 * en vez de redondearlo en silencio.
 */
export function formatCOP(pesos: number): string {
  if (!Number.isSafeInteger(pesos)) {
    throw new RangeError(`formatCOP espera pesos enteros, recibió: ${pesos}`);
  }
  return copFormatter.format(pesos);
}
