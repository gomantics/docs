import { MetadataRoute } from "next";
import {
  sxNavigation,
  chunkxNavigation,
  cfgxNavigation,
  semantixNavigation,
} from "@/config/docs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gomantics.dev";

  const docUrls = [
    ...sxNavigation,
    ...chunkxNavigation,
    ...cfgxNavigation,
    ...semantixNavigation,
  ]
    .flatMap((group) => group.links)
    .map((link) => ({
      url: `${baseUrl}${link.href}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...docUrls,
  ];
}
