import type { MetadataRoute } from "next";

const baseUrl = "https://www.webboostpartner.nl";

interface RouteConfig {
  route: string;
  priority: number;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: RouteConfig[] = [
    // === 1. Pilaar pagina's (Absolute top prioriteit voor leadgeneratie) ===
    { route: "", priority: 1.0, changeFrequency: "weekly" }, // Homepage
    { route: "/website-laten-maken-rotterdam", priority: 0.9, changeFrequency: "weekly" },
    { route: "/seo-rotterdam", priority: 0.9, changeFrequency: "weekly" },

    // === 2. Lokale SEO Regiopagina's (Hier voeg je straks je nieuwe regio's toe) ===
    // { route: "/website-laten-maken-capelle", priority: 0.8, changeFrequency: "weekly" },
    // { route: "/website-laten-maken-barendrecht", priority: 0.8, changeFrequency: "weekly" },

    // === 3. Commerciële & Diensten pagina's ===
    { route: "/pakketten", priority: 0.8, changeFrequency: "monthly" },
    { route: "/wordpress-naar-nextjs", priority: 0.8, changeFrequency: "monthly" },
    { route: "/nextjs-vs-wordpress", priority: 0.7, changeFrequency: "monthly" },

    // === 4. Ondersteunende autoriteitspagina's ===
    { route: "/over-mij", priority: 0.6, changeFrequency: "monthly" },
    { route: "/contact", priority: 0.6, changeFrequency: "monthly" },

    // === 5. Juridische noodzaak (Laagste prioriteit voor de zoekmachine) ===
    { route: "/privacy", priority: 0.2, changeFrequency: "yearly" },
    { route: "/voorwaarden", priority: 0.2, changeFrequency: "yearly" },
    { route: "/cookiebeleid", priority: 0.2, changeFrequency: "yearly" },
  ];

  const currentDate = new Date();

  return routes.map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency,
    priority,
  }));
}
