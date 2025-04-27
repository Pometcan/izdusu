import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  distDir: "/build",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  //basePath: process.env.NODE_ENV === 'production' ? '/' : '',
  //assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
};

export default nextConfig;
