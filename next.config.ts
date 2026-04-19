import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', /* for github pages */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
