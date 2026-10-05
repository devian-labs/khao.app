import type { Metadata } from "next";
import MenuViewer from "@/components/MenuViewer";

// Per-shop diner menus (reached via table QR codes) are thin, client-rendered,
// carry live order flows, and are not marketing pages: never index them,
// including /menu/demo. Also blocked in app/robots.ts and sent with an
// X-Robots-Tag header from next.config.ts.
export const metadata: Metadata = {
  title: "Menu",
  description: "Browse the menu and order from your table with Khao.",
  robots: { index: false, follow: false },
};

// In a real app, this would fetch the menu from Firebase based on the shopId
export default async function ShopMenuPage({
  params,
}: {
  params: Promise<{ shopId: string }>;
}) {
  const shopId = (await params).shopId;
  
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <MenuViewer shopId={shopId} />
    </div>
  );
}
