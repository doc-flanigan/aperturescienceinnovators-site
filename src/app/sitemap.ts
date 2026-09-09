import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SECTIONS, UTILITY_PAGES } from "@/lib/structure";

/**
 * The machine-readable index. The Records Department does not know this
 * exists and it is going to stay that way.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    ...SECTIONS.flatMap((s) => [s.path, ...s.pages.map((p) => p.path)]),
    ...UTILITY_PAGES.map((p) => p.path),
  ];

  return paths.map((path) => ({
    url: `${SITE.url}${path === "/" ? "" : path}`,
    changeFrequency: "yearly" as const,
    priority: path === "/" ? 1 : path.split("/").length === 2 ? 0.8 : 0.6,
  }));
}
