import { describe, expect, it } from "vitest";
import { formatCOP } from "./format";

const norm = (s: string) => s.replace(/\s/g, " ");

describe("formatCOP", () => {
  it("formatea pesos enteros con separador de miles y sin decimales", () => {
    expect(norm(formatCOP(1234567))).toBe("$ 1.234.567");
    expect(norm(formatCOP(0))).toBe("$ 0");
    expect(norm(formatCOP(89900))).toBe("$ 89.900");
  });

  it("rechaza valores con decimales en vez de redondearlos", () => {
    expect(() => formatCOP(1999.5)).toThrow(RangeError);
  });

  it("rechaza valores no finitos", () => {
    expect(() => formatCOP(Number.NaN)).toThrow(RangeError);
    expect(() => formatCOP(Number.POSITIVE_INFINITY)).toThrow(RangeError);
  });
});
