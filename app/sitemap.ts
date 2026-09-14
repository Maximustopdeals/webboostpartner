import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://webboostpartner.nl";
  const currentDate = new Date();

  const routes = [
    // Navigatie-items
    { route: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { route: "/website-laten-maken-rotterdam", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/seo-rotterdam", priority: 0.9, changeFrequency: "monthly" as const }, // Vindbare site
    { route: "/pakketten", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/nextjs-vs-wordpress", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/over-mij", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/contact", priority: 0.8, changeFrequency: "monthly" as const },

    // Extra pagina's die wel bestaan maar niet in de navigatie staan
    { route: "/wordpress-naar-nextjs", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/core-web-vitals", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return routes.map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency,
    priority,
  }));
}
