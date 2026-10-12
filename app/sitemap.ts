import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://jomcuci-redz6.vercel.app";
  return [
    { url: `${base}/ms`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/en`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 }
  ];
}
