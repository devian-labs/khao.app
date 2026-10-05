import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Public, indexable pages only. /login and /menu/* are intentionally excluded.
// Legal page dates match the "Last updated" line shown on each page.
export default function sitemap(): MetadataRoute.Sitemap {
  const legalUpdated = new Date("2026-05-21");
  return [
    { url: `${SITE_URL}/` },
    { url: `${SITE_URL}/contact` },
    { url: `${SITE_URL}/privacy-policy`, lastModified: legalUpdated },
    { url: `${SITE_URL}/terms`, lastModified: legalUpdated },
    { url: `${SITE_URL}/refund-policy`, lastModified: legalUpdated },
  ];
}
