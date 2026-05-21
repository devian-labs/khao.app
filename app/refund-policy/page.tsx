import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy — Khao",
  description: "Refund and cancellation policy for Khao subscriptions.",
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <Link href="/" className="text-sm text-zinc-500 hover:text-red-600 dark:hover:text-red-400 transition-colors mb-10 inline-block">
          ← Back to Khao
        </Link>

        <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-white mb-2">Refund & Cancellation Policy</h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-12">Last updated: 21 May 2026</p>

        <div className="space-y-10 text-sm leading-7 text-zinc-700 dark:text-zinc-300">

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">1. Overview</h2>
            <p>
              Khao is operated by <strong>Devian Labs</strong>. Subscriptions to Khao are billed monthly through Google Play (Android) or the Apple App Store (iOS), processed via <strong>RevenueCat</strong>. This policy explains how cancellations and refunds work.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">2. Subscription Plans</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>QR Menu Only</strong> — ₹29/month</li>
              <li><strong>Table Ordering</strong> — ₹79/month</li>
            </ul>
            <p className="mt-3">
              All plans are billed on a recurring monthly basis. Your subscription renews automatically on the same day each month unless cancelled before the renewal date.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">3. How to Cancel</h2>
            <p>
              Because billing is handled by Google Play or the Apple App Store, cancellations must be done through your device&apos;s store settings:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>
                <strong>Android (Google Play):</strong> Open Google Play → Profile icon → Payments &amp; subscriptions → Subscriptions → Select &quot;Khao&quot; → Cancel subscription.
              </li>
              <li>
                <strong>iOS (App Store):</strong> Open Settings → your Apple ID → Subscriptions → Select &quot;Khao&quot; → Cancel Subscription.
              </li>
            </ul>
            <p className="mt-3">
              Cancellation must be completed at least <strong>24 hours before your next renewal date</strong> to avoid being charged for the next billing cycle.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">4. What Happens After Cancellation</h2>
            <p>
              When you cancel, your subscription remains active until the end of the current paid billing period. After that date, your account reverts to a free (inactive) state and you will lose access to paid features. Your shop data is retained for 30 days before deletion.
            </p>
            <p className="mt-3">
              You can resubscribe at any time to regain access.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">5. Refunds</h2>
            <p>
              <strong>Khao does not offer refunds for monthly subscription charges</strong> once a billing period has begun, except in the following situations:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-3">
              <li>
                <strong>Billing error:</strong> If you were charged incorrectly or multiple times in the same cycle, contact us and we will investigate.
              </li>
              <li>
                <strong>Service unavailability:</strong> If the Service was completely inaccessible for a significant period within a paid cycle due to our fault, we will consider a pro-rated credit at our discretion.
              </li>
            </ul>
            <p className="mt-3">
              For all refund requests, contact us at <a href="mailto:support@khao.app" className="text-red-600 dark:text-red-400 hover:underline">support@khao.app</a> within 7 days of the charge.
            </p>

            <div className="mt-5 rounded-xl bg-amber-50 dark:bg-amber-500/10 ring-1 ring-amber-200 dark:ring-amber-500/20 px-5 py-4">
              <p className="text-amber-800 dark:text-amber-300 font-medium">Note on App Store Refunds</p>
              <p className="mt-1 text-amber-700 dark:text-amber-400">
                Refunds for purchases made through Google Play or the Apple App Store are ultimately subject to each platform&apos;s own refund policies. You may contact Google Play or Apple Support directly to request a refund.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">6. Free Trial (If Applicable)</h2>
            <p>
              If a free trial is offered, it will be clearly stated at the time of subscription. No charge is made during the trial period. To avoid being charged after a trial, cancel before the trial ends through your store subscription settings.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">7. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. Changes will be reflected by updating the &quot;Last updated&quot; date. Continued use of the Service after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">8. Contact</h2>
            <p>
              For any questions about billing, cancellation, or refunds:<br />
              <strong>Devian Labs</strong><br />
              Email: <a href="mailto:support@khao.app" className="text-red-600 dark:text-red-400 hover:underline">support@khao.app</a>
            </p>
            <p className="mt-3">
              You can also visit our <Link href="/contact" className="text-red-600 dark:text-red-400 hover:underline">Contact page</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
