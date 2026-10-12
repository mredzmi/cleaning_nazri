import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: { remotePatterns: [{ protocol: "images.unsplash.com", hostname: "images.unsplash.com" }] },
  poweredByHeader: false
};
export default nextConfig;