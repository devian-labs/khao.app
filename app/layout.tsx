import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { DEFAULT_DESCRIPTION, HOME_TITLE as homeTitle, ORG, SITE_LOCALE, SITE_NAME, SITE_URL } from "@/lib/site";
import { siteGraph } from "@/lib/structured-data";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: homeTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: ORG.name, url: ORG.url }],
  creator: ORG.name,
  publisher: ORG.name,
  // Defaults only. Each public page sets its own canonical, openGraph and
  // twitter via pageMetadata() in lib/site.ts (no canonical is inherited, so
  // noindex pages don't point at the home page). OG/Twitter images come from
  // app/opengraph-image.tsx and app/twitter-image.tsx.
  openGraph: {
    title: homeTitle,
    description: DEFAULT_DESCRIPTION,
    siteName: SITE_NAME,
    locale: SITE_LOCALE,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: DEFAULT_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#121212]">
        <JsonLd data={siteGraph()} />
        {children}
      </body>
    </html>
  );
}
