import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Khao",
  description: "Privacy Policy for the Khao app and website.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <Link href="/" className="text-sm text-zinc-500 hover:text-red-600 dark:hover:text-red-400 transition-colors mb-10 inline-block">
          ← Back to Khao
        </Link>

        <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-white mb-2">Privacy Policy</h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-12">Last updated: 21 May 2026</p>

        <div className="prose prose-zinc dark:prose-invert max-w-none space-y-10 text-sm leading-7 text-zinc-700 dark:text-zinc-300">

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">1. Who We Are</h2>
            <p>
              Khao is a product of <strong>Devian Labs</strong> (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;), a company registered in India. This Privacy Policy explains how we collect, use, and protect information when you use the Khao vendor app (the &quot;App&quot;) or website at <strong>khao.app</strong> (the &quot;Website&quot;).
            </p>
            <p className="mt-3">
              By using Khao, you agree to the practices described in this policy. If you do not agree, please stop using the App and Website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">2. Information We Collect</h2>
            <h3 className="font-medium text-zinc-800 dark:text-zinc-200 mb-2">2a. From Vendors (App Users)</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Phone number</strong> — used for OTP-based authentication via Firebase.</li>
              <li><strong>Shop details</strong> — name, description, and any information you enter when creating your shop.</li>
              <li><strong>Menu content</strong> — item names, prices, descriptions, and images you upload.</li>
              <li><strong>Order data</strong> — orders placed by your customers are stored in your account.</li>
              <li><strong>Device information</strong> — device type, OS version, and app version for debugging and analytics.</li>
            </ul>

            <h3 className="font-medium text-zinc-800 dark:text-zinc-200 mb-2 mt-5">2b. From Customers (Menu Viewers)</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>No account or login is required for customers to view menus or place orders.</li>
              <li>We may collect basic analytics (page views, device type) via Firebase Analytics to improve the product.</li>
            </ul>

            <h3 className="font-medium text-zinc-800 dark:text-zinc-200 mb-2 mt-5">2c. Payment Information</h3>
            <p>
              Subscriptions are processed by Google Play (Android) or the Apple App Store (iOS) through RevenueCat. We do not collect or store your payment card details. Billing is governed by the respective store&apos;s privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To authenticate you and maintain your session.</li>
              <li>To display your shop, menu, and orders in the App.</li>
              <li>To send push notifications for new orders and customer requests.</li>
              <li>To improve the product using aggregated, anonymised usage data.</li>
              <li>To respond to support requests.</li>
            </ul>
            <p className="mt-3">We do <strong>not</strong> sell your personal data to third parties. We do not use your data for advertising.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">4. Data Storage & Security</h2>
            <p>
              Your data is stored on <strong>Google Firebase</strong> (Firestore and Firebase Storage), hosted on Google Cloud servers. Firebase applies industry-standard security controls including encryption in transit and at rest.
            </p>
            <p className="mt-3">
              While we take reasonable precautions, no system is completely secure. In the event of a data breach that affects your personal information, we will notify you as required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">5. Data Retention</h2>
            <p>
              We retain your account data for as long as your account is active. If you delete your account, we will delete your personal data within 30 days, except where retention is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">6. Third-Party Services</h2>
            <p>We use the following third-party services, each with their own privacy policies:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong>Firebase (Google)</strong> — authentication, database, storage, analytics.</li>
              <li><strong>RevenueCat</strong> — subscription management and billing.</li>
              <li><strong>Google Play / Apple App Store</strong> — app distribution and in-app purchases.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your account and personal data.</li>
              <li>Withdraw consent for optional data processing.</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at <a href="mailto:support@khao.app" className="text-red-600 dark:text-red-400 hover:underline">support@khao.app</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">8. Children&apos;s Privacy</h2>
            <p>
              Khao is intended for use by business owners and is not directed at children under 13. We do not knowingly collect personal data from children.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material changes by updating the &quot;Last updated&quot; date above and, where required, by sending an in-app notification. Continued use of Khao after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">10. Contact</h2>
            <p>
              For any privacy-related questions or requests, contact us at:<br />
              <strong>Devian Labs</strong><br />
              Email: <a href="mailto:support@khao.app" className="text-red-600 dark:text-red-400 hover:underline">support@khao.app</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
