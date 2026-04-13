import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // Ensure that /ro and /en work correctly as base paths
  trailingSlash: true,
};

export default nextConfig;
