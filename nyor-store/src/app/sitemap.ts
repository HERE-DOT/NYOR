import type { MetadataRoute } from "next";
import { mainNav } from "@/config/site";
import { siteUrl } from "@/lib/env";

export default function sitemap(): MetadataRoute.Sitemap {
  return mainNav.map((item) => ({
    url: `${siteUrl}${item.href === "/" ? "" : item.href}`,
  }));
}
