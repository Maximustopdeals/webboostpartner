import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const baseUrl = "https://www.webboostpartner.nl";

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

interface RouteConfig {
  route: string;
  priority: number;
  changeFrequency: ChangeFrequency;
  /** Optionele vaste lastModified (ISO-string of Date). */
  lastModified?: string | Date;
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Vaste referentiedatum voor content die zelden wijzigt.
  // ⚠️ LET OP: Zet dit op een datum in het verleden (bijv. de datum van je laatste grote update).
  const contentUpdated = new Date("2024-05-20");

  const staticRoutes: RouteConfig[] = [
    // Pilaar-pagina's (leadgeneratie)
    { route: "/", priority: 1.0, changeFrequency: "weekly", lastModified: contentUpdated },
    {
      route: "/website-laten-maken-rotterdam",
      priority: 0.9,
      changeFrequency: "weekly",
      lastModified: contentUpdated,
    },
    {
      route: "/seo-rotterdam",
      priority: 0.9,
      changeFrequency: "weekly",
      lastModified: contentUpdated,
    },

    // Commerciële & dienstenpagina's
    { route: "/pakketten", priority: 0.8, changeFrequency: "monthly" },
    { route: "/wordpress-naar-nextjs", priority: 0.8, changeFrequency: "monthly" },
    { route: "/nextjs-vs-wordpress", priority: 0.7, changeFrequency: "monthly" },

    // Portfolio
    { route: "/portfolio", priority: 0.8, changeFrequency: "weekly" },

    // Ondersteunende pagina's
    { route: "/over-mij", priority: 0.6, changeFrequency: "monthly" },
    { route: "/contact", priority: 0.6, changeFrequency: "monthly" },

    // Juridisch
    { route: "/privacy", priority: 0.2, changeFrequency: "yearly" },
    { route: "/voorwaarden", priority: 0.2, changeFrequency: "yearly" },
    { route: "/cookiebeleid", priority: 0.2, changeFrequency: "yearly" },
  ];

  const portfolioRoutes: RouteConfig[] = projects.map((project) => ({
    route: `/portfolio/${project.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  const allRoutes = [...staticRoutes, ...portfolioRoutes];

  return allRoutes.map(({ route, priority, changeFrequency, lastModified }) => ({
    url: `${baseUrl}${route === "/" ? "" : route}`,
    // ✅ AANGEPAST: Alleen toevoegen als lastModified bestaat (waarheidsgetrouw)
    ...(lastModified ? { lastModified } : {}),
    changeFrequency,
    priority,
  }));
}
