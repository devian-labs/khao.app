import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Support — Khao",
  description: "Get help with Khao. Contact the Khao support team.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-2xl px-6 py-20 lg:px-8">
        <Link href="/" className="text-sm text-zinc-500 hover:text-red-600 dark:hover:text-red-400 transition-colors mb-10 inline-block">
          ← Back to Khao
        </Link>

        <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-white mb-3">Contact & Support</h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-12 text-base leading-7">
          We&apos;re a small team building Khao. If something isn&apos;t working or you have a question, reach out — we typically respond within 1 business day.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-14">
          <a
            href="mailto:support@khao.app"
            className="group flex flex-col gap-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 ring-1 ring-zinc-200 dark:ring-zinc-800 hover:ring-red-500/50 dark:hover:ring-red-500/40 p-7 transition-all hover:shadow-lg hover:shadow-red-500/5"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 group-hover:bg-red-100 dark:group-hover:bg-red-500/20 transition-colors">
              <Mail className="w-5 h-5" />
            </span>
            <div>
              <p className="font-semibold text-zinc-900 dark:text-white">Email Support</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">support@khao.app</p>
              <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-2">Best for billing, account issues, and bug reports.</p>
            </div>
          </a>

          <a
            href="mailto:hello@devianlabs.com"
            className="group flex flex-col gap-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 ring-1 ring-zinc-200 dark:ring-zinc-800 hover:ring-red-500/50 dark:hover:ring-red-500/40 p-7 transition-all hover:shadow-lg hover:shadow-red-500/5"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 group-hover:bg-red-100 dark:group-hover:bg-red-500/20 transition-colors">
              <MessageCircle className="w-5 h-5" />
            </span>
            <div>
              <p className="font-semibold text-zinc-900 dark:text-white">General Enquiries</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">hello@devianlabs.com</p>
              <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-2">For partnerships, feedback, and everything else.</p>
            </div>
          </a>
        </div>

        <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-900 ring-1 ring-zinc-200 dark:ring-zinc-800 p-7">
          <h2 className="font-semibold text-zinc-900 dark:text-white mb-4">Common Questions</h2>
          <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
            <li>
              <span className="font-medium text-zinc-800 dark:text-zinc-200">How do I cancel my subscription?</span>
              <span className="text-zinc-500 dark:text-zinc-500"> — </span>
              <Link href="/refund-policy#how-to-cancel" className="text-red-600 dark:text-red-400 hover:underline">See our Refund Policy</Link>
            </li>
            <li>
              <span className="font-medium text-zinc-800 dark:text-zinc-200">Where is my data stored?</span>
              <span className="text-zinc-500 dark:text-zinc-500"> — </span>
              <Link href="/privacy-policy" className="text-red-600 dark:text-red-400 hover:underline">See our Privacy Policy</Link>
            </li>
            <li>
              <span className="font-medium text-zinc-800 dark:text-zinc-200">What are the subscription terms?</span>
              <span className="text-zinc-500 dark:text-zinc-500"> — </span>
              <Link href="/terms" className="text-red-600 dark:text-red-400 hover:underline">See our Terms of Service</Link>
            </li>
          </ul>
        </div>

        <p className="mt-10 text-sm text-zinc-400 dark:text-zinc-600">
          Khao is a product of{" "}
          <a href="https://devian.app" target="_blank" rel="noopener noreferrer" className="text-red-600 dark:text-red-400 hover:underline">
            Devian Labs
          </a>
          , India.
        </p>
      </div>
    </div>
  );
}
