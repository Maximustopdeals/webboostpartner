import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    // Let op: geen www meer!
    sitemap: 'https://webboostpartner.nl/sitemap.xml',
  };
}
