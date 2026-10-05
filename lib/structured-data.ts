import { DEFAULT_DESCRIPTION, ORG, SITE_NAME, SITE_URL, SUPPORT_EMAIL } from "./site";
import { tiers } from "./pricing";
import type { Faq } from "./faqs";

const ORG_ID = `${ORG.url}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const APP_ID = `${SITE_URL}/#software`;

/** Site-wide graph: publisher organisation + website. Rendered in the root layout. */
export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: ORG.name,
        url: ORG.url,
        email: ORG.email,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: SUPPORT_EMAIL,
          areaServed: "IN",
          availableLanguage: ["en"],
        },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: "en-IN",
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}

/**
 * Home page: Khao as a SoftwareApplication plus the visible FAQ.
 * Offers mirror exactly what the pricing section shows (monthly prices, INR).
 * No aggregateRating / review / downloadUrl: none exist publicly yet.
 */
export function homeGraph(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": APP_ID,
        name: SITE_NAME,
        url: SITE_URL,
        description: DEFAULT_DESCRIPTION,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Android, Web",
        image: `${SITE_URL}/opengraph-image`,
        inLanguage: "en-IN",
        isPartOf: { "@id": WEBSITE_ID },
        publisher: { "@id": ORG_ID },
        author: { "@id": ORG_ID },
        offers: tiers.map((tier) => ({
          "@type": "Offer",
          name: tier.name,
          description: tier.description,
          price: String(tier.monthly),
          priceCurrency: "INR",
          url: `${SITE_URL}/#pricing`,
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: String(tier.monthly),
            priceCurrency: "INR",
            billingDuration: "P1M",
            unitText: "month",
          },
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };
}

/** Home › Page breadcrumb for the second-level pages. */
export function breadcrumb(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };
}
