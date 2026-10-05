import Link from "next/link";
import type { Metadata } from "next";

// Next.js adds <meta name="robots" content="noindex"> to 404 responses itself.
export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-2xl px-6 py-20 lg:px-8">
        <p className="text-sm font-semibold text-red-600 dark:text-red-400 mb-3">404</p>
        <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-white mb-3">Page not found</h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-10 text-base leading-7">
          The page you were looking for doesn&apos;t exist or has moved. If you scanned a QR code at a shop, ask the staff for the latest menu link.
        </p>
        <Link href="/" className="text-sm font-medium text-red-600 dark:text-red-400 hover:underline">
          ← Back to Khao
        </Link>
      </div>
    </div>
  );
}
