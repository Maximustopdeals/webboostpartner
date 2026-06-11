export default function sitemap() {
  const base = "https://webboostpartner.nl";
  const routes = [
    "",
    "/website-laten-maken-rotterdam",
    "/seo-rotterdam",
    "/nextjs-vs-wordpress",
    "/wordpress-naar-nextjs",
    "/core-web-vitals",
    "/nextjs-specialist",
    "/pakketten",
    "/over-mij",
    "/contact",
  ];
  const now = new Date();
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: now,
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1.0 : 0.8,
  }));
}
