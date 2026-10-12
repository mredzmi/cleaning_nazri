import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "sneakershoot-static.sgp1.cdn.digitaloceanspaces.com" }
    ]
  },
  poweredByHeader: false
};
export default nextConfig;