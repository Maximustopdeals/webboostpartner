import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

// Let op: GEEN www meer!
const baseUrl = "https://webboostpartner.nl";

interface RouteConfig {
  route: string;
  priority: number;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: RouteConfig[] = [
    // === 1. Pilaar pagina's (Absolute top prioriteit voor leadgeneratie) ===
    { route: "", priority: 1.0, changeFrequency: "weekly" }, // Homepage
    { route: "/website-laten-maken-rotterdam", priority: 0.9, changeFrequency: "weekly" },
    { route: "/seo-rotterdam", priority: 0.9, changeFrequency: "weekly" },

    // === 2. Lokale SEO Regiopagina's ===
    // { route: "/website-laten-maken-capelle", priority: 0.8, changeFrequency: "weekly" },
    // { route: "/website-laten-maken-barendrecht", priority: 0.8, changeFrequency: "weekly" },

    // === 3. Commerciële & Diensten pagina's ===
    { route: "/pakketten", priority: 0.8, changeFrequency: "monthly" },
    { route: "/wordpress-naar-nextjs", priority: 0.8, changeFrequency: "monthly" },
    { route: "/nextjs-vs-wordpress", priority: 0.7, changeFrequency: "monthly" },

    // === 4. Portfolio (Overzicht) ===
    { route: "/portfolio", priority: 0.8, changeFrequency: "weekly" },

    // === 5. Ondersteunende autoriteitspagina's ===
    { route: "/over-mij", priority: 0.6, changeFrequency: "monthly" },
    { route: "/contact", priority: 0.6, changeFrequency: "monthly" },

    // === 6. Juridische noodzaak (Laagste prioriteit voor de zoekmachine) ===
    { route: "/privacy", priority: 0.2, changeFrequency: "yearly" },
    { route: "/voorwaarden", priority: 0.2, changeFrequency: "yearly" },
    { route: "/cookiebeleid", priority: 0.2, changeFrequency: "yearly" },
  ];

  // === 7. Dynamische Portfolio Cases ===
  // Dit genereert automatisch een URL voor Cindy, Marley's, DTG Cleaning, etc.
  const portfolioRoutes: RouteConfig[] = projects.map((project) => ({
    route: `/portfolio/${project.slug}`,
    priority: 0.7, // Iets lager dan het overzicht, maar nog steeds belangrijk
    changeFrequency: "monthly",
  }));

  // Combineer de statische routes met de dynamische portfolio routes
  const allRoutes = [...staticRoutes, ...portfolioRoutes];

  const currentDate = new Date();

  return allRoutes.map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency,
    priority,
  }));
}
