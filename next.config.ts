import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["lucide-react"],
    nextScriptWorkers: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      // De host-redirect voor www -> non-www is hier verwijderd.
      // Vercel regelt deze doorverwijzing al op netwerkniveau.
      {
        source: "/nextjs-specialist",
        destination: "/over-mij",
        permanent: true,
      },
      {
        source: "/nextjs-developer-rotterdam",
        destination: "/over-mij",
        permanent: true,
      },
      {
        source: "/nextjs-website-rotterdam",
        destination: "/website-laten-maken-rotterdam",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
