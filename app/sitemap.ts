import type { MetadataRoute } from "next";

const baseUrl = "https://webboostpartner.nl";

interface RouteConfig {
  route: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: RouteConfig[] = [
    // === Primaire pagina's ===
    { route: "/", priority: 1.0, changeFrequency: "weekly" },
    { route: "/website-laten-maken-rotterdam", priority: 0.9, changeFrequency: "monthly" },
    { route: "/seo-rotterdam", priority: 0.9, changeFrequency: "monthly" },

    // === Commerciële pagina's ===
    { route: "/pakketten", priority: 0.8, changeFrequency: "monthly" },
    { route: "/nextjs-vs-wordpress", priority: 0.8, changeFrequency: "monthly" },

    // === Ondersteunende pagina's ===
    { route: "/over-mij", priority: 0.7, changeFrequency: "monthly" },
    { route: "/contact", priority: 0.7, changeFrequency: "monthly" },

    // === Diepgaande / technische pagina's ===
    { route: "/wordpress-naar-nextjs", priority: 0.6, changeFrequency: "monthly" },
    { route: "/core-web-vitals", priority: 0.6, changeFrequency: "monthly" },

    // === Juridische pagina's ===
    { route: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { route: "/voorwaarden", priority: 0.3, changeFrequency: "yearly" },
    { route: "/cookiebeleid", priority: 0.3, changeFrequency: "yearly" },
  ];

  const currentDate = new Date();

  return routes.map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency,
    priority,
  }));
}
