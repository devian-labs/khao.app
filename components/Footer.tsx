import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <span className="text-xl font-extrabold text-red-600">Khao</span>
            <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400 max-w-xs">
              The self-serve QR menu and ordering app for tea stalls, cafes, takeaways, and small restaurants across India.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">Product</p>
            <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link href="/#features" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Features</Link></li>
              <li><Link href="/#pricing" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Pricing</Link></li>
              <li><Link href="/menu/demo" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Live Demo</Link></li>
              <li><Link href="/contact" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Contact & Support</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">Legal</p>
            <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link href="/privacy-policy" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/refund-policy" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Refund & Cancellation</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-100 dark:border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500 dark:text-zinc-500">
          <p>© 2026 Khao — a product of <a href="https://devianlabs.com" target="_blank" rel="noopener noreferrer" className="text-red-600 dark:text-red-400 hover:underline font-medium">Devian Labs</a>. Designed for small vendors.</p>
          <p>Made with care in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}
