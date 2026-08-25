import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Photos are local files under public/, so no remotePatterns are needed.
    // Add them here if assets ever move to a CDN.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
