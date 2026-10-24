import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // ✅ Zorgt voor kleinere JS bundles door moderne syntax te behouden
  experimental: {
    optimizePackageImports: ['lucide-react'], 
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // ... je redirects ...
};

export default nextConfig;
