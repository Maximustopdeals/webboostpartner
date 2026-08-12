import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/nextjs-specialist',
        destination: '/over-mij',
        permanent: true,
      },
      {
        source: '/nextjs-developer-rotterdam',
        destination: '/over-mij',
        permanent: true,
      },
      {
        source: '/nextjs-website-rotterdam',
        destination: '/website-laten-maken-rotterdam',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
