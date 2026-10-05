import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { PRODUCTION_HOST, SITE_URL } from "@/lib/site";

// Host-aware: only https://khao.app is crawlable. Any other host that serves
// this build (dev.khao.app, *.vercel.app previews, localhost) gets
// "Disallow: /". Reading the Host header makes this route request-time
// (see node_modules/next/dist/docs/.../01-metadata/robots.md).
export default async function robots(): Promise<MetadataRoute.Robots> {
  const host = (await headers()).get("host")?.split(":")[0].toLowerCase();

  if (host !== PRODUCTION_HOST) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // /menu/* = per-shop diner menus and live order flows (incl. /menu/demo).
      disallow: ["/login", "/menu/", "/api/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
