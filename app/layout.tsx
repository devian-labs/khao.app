import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

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
  title: "Khao — QR Menu & Ordering App",
  description:
    "Khao helps food trucks, roadside cafes, and restaurants launch a QR menu or full QR ordering flow from an Android app.",
  metadataBase: new URL("https://khao.app"),
  openGraph: {
    title: "Khao — QR Menu & Ordering App",
    description:
      "Start with a QR menu. Add table ordering, waiter alerts, and kitchen flow when your restaurant needs it.",
    url: "https://khao.app",
    siteName: "Khao",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Khao — QR Menu & Ordering App",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khao — QR Menu & Ordering App",
    description:
      "QR menu and QR ordering for independent food businesses.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#121212]">
        {children}
      </body>
    </html>
  );
}
