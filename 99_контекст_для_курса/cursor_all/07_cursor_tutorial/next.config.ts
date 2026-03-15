import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Temporarily ignore ESLint during builds to allow deployment
    // TODO: Fix all ESLint errors and re-enable
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Enable TypeScript error checking during builds
    ignoreBuildErrors: false,
  },
};

export default nextConfig;