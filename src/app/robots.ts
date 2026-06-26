import { MetadataRoute } from "next";
import { venue } from "@/lib/venue";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${venue.url}/sitemap.xml`,
  };
}
