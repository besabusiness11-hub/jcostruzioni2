import type { MetadataRoute } from "next"
import { ROUTES, SITE_URL } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: SITE_URL + route,
    lastModified: new Date(),
    changeFrequency: route === "/tipologie" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/tipologie" ? 0.9 : 0.6,
  }))
}
