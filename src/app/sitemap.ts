import { MetadataRoute } from "next";
import { venue } from "@/lib/venue";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: venue.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
