import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    // AANGEPAST: Nu MET www, conform de Vercel-configuratie en sitemap
    sitemap: 'https://www.webboostpartner.nl/sitemap.xml',
  };
}
