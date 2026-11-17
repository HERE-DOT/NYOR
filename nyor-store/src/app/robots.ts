import type { MetadataRoute } from "next";
import { allowIndexing, siteUrl } from "@/lib/env";

export default function robots(): MetadataRoute.Robots {
  if (!allowIndexing) {
    // Antes del lanzamiento no se indexa nada.
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/admin", "/cuenta", "/api"] },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
