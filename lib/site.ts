import type { Metadata } from "next";

// Canonical production origin. dev.khao.app and *.vercel.app deployments must
// never be canonical; they are also served with `X-Robots-Tag: noindex` (see
// next.config.ts) and a Disallow-all robots.txt (see app/robots.ts).
export const SITE_URL = "https://khao.app";
export const PRODUCTION_HOST = "khao.app";
export const SITE_NAME = "Khao";
export const SITE_LOCALE = "en_IN";

export const ORG = {
  name: "Devian Labs",
  url: "https://devianlabs.com",
  email: "hello@devianlabs.com",
};

export const OG_IMAGE_ALT =
  "Khao — QR menu and table ordering for small food businesses in India";

export const SUPPORT_EMAIL = "support@khao.app";

export const HOME_TITLE = "QR Menu & Table Ordering App for Cafés & Restaurants | Khao";

export const DEFAULT_DESCRIPTION =
  "QR code menu and table ordering for tea stalls, cafés, food trucks and small restaurants in India. Manage it on Android; diners scan and order with no app.";

type PageSeo = {
  /** Page title; the root layout template appends " | Khao". */
  title: string;
  description: string;
  /** Path beginning with "/", e.g. "/contact". */
  path: string;
  /** Use the title verbatim, without the " | Khao" template. */
  absoluteTitle?: boolean;
};

/**
 * Builds per-page metadata. openGraph/twitter are re-declared in full on every
 * page because Next.js merges metadata shallowly (a child `openGraph` replaces
 * the parent's, including the file-based image from app/opengraph-image.tsx).
 * So the generated 1200×630 card is referenced explicitly here; on the home
 * segment the file-based image takes precedence (same image).
 */
export function pageMetadata({ title, description, path, absoluteTitle }: PageSeo): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      type: "website",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: OG_IMAGE_ALT }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [{ url: "/twitter-image", alt: OG_IMAGE_ALT }],
    },
  };
}
