import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://webboostpartner.nl';
  const currentDate = new Date();

  const routes = [
    {
      route: '',
      priority: 1.0,
      changeFrequency: 'weekly' as const,
    },
    {
      route: '/website-laten-maken-rotterdam',
      priority: 0.9,
      changeFrequency: 'monthly' as const,
    },
    {
      route: '/over-mij',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      route: '/pakketten',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      route: '/seo-rotterdam',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      route: '/contact',
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    },
    // Minder belangrijke pagina's
    {
      route: '/nextjs-website-rotterdam',
      priority: 0.6,
      changeFrequency: 'monthly' as const,
    },
    {
      route: '/nextjs-developer-rotterdam',
      priority: 0.6,
      changeFrequency: 'monthly' as const,
    },
    {
      route: '/nextjs-vs-wordpress',
      priority: 0.6,
      changeFrequency: 'monthly' as const,
    },
    {
      route: '/wordpress-naar-nextjs',
      priority: 0.6,
      changeFrequency: 'monthly' as const,
    },
    {
      route: '/core-web-vitals',
      priority: 0.6,
      changeFrequency: 'monthly' as const,
    },
    {
      route: '/nextjs-specialist',
      priority: 0.6,
      changeFrequency: 'monthly' as const,
    },
    {
      route: '/demo',
      priority: 0.5,
      changeFrequency: 'monthly' as const,
    },
    {
      route: '/pagespeed',
      priority: 0.5,
      changeFrequency: 'monthly' as const,
    },
  ];

  return routes.map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency,
    priority,
  }));
}
