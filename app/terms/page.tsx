import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";
import { breadcrumb } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service – QR Menu & Table Ordering App",
  description:
    "Terms of Service for Khao, the QR menu and table ordering app for Indian food businesses: accounts, subscriptions, billing, acceptable use and liability.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <JsonLd data={breadcrumb("Terms of Service", "/terms")} />
      <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <Link href="/" className="text-sm text-zinc-500 hover:text-red-600 dark:hover:text-red-400 transition-colors mb-10 inline-block">
          ← Back to Khao
        </Link>

        <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-white mb-2">Terms of Service</h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-12">Last updated: 21 May 2026</p>

        <div className="space-y-10 text-sm leading-7 text-zinc-700 dark:text-zinc-300">

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using the Khao app or website (&quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree, do not use the Service.
            </p>
            <p className="mt-3">
              Khao is operated by <strong>Devian Labs</strong>, India (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">2. Description of Service</h2>
            <p>
              Khao provides a digital QR menu and order management platform for small food vendors. The Service includes the vendor mobile app (iOS and Android), the customer-facing menu web pages, and the associated website at khao.app.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">3. Eligibility</h2>
            <p>
              You must be at least 18 years old and legally capable of entering into binding contracts to use the Service. By using Khao, you represent that you meet these requirements.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">4. Account & Access</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>You must register using a valid phone number. One phone number may be associated with one account.</li>
              <li>You are responsible for all activity that occurs under your account.</li>
              <li>You must not share your account credentials or allow others to access your account.</li>
              <li>We reserve the right to suspend or terminate accounts that violate these Terms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">5. Subscription & Billing</h2>
            <p>Khao is offered on a paid monthly subscription basis:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong>QR Menu Only</strong> — ₹29/month</li>
              <li><strong>Table Ordering</strong> — ₹79/month</li>
            </ul>
            <p className="mt-3">
              Subscriptions are billed through Google Play (Android) or the Apple App Store (iOS) and are subject to the billing terms of the respective platforms. Prices are in Indian Rupees (INR) and include applicable taxes.
            </p>
            <p className="mt-3">
              Subscriptions auto-renew each month unless cancelled at least 24 hours before the renewal date. You can manage or cancel your subscription in your device&apos;s store subscription settings.
            </p>
            <p className="mt-3">
              We reserve the right to change pricing at any time. Where legally required, we will provide advance notice of price changes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">6. Acceptable Use</h2>
            <p>You agree not to use the Service to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Post false, misleading, or fraudulent menu or shop information.</li>
              <li>Violate any applicable law or regulation, including Indian food safety regulations (FSSAI).</li>
              <li>Attempt to reverse-engineer, hack, or disrupt the platform.</li>
              <li>Use the platform for anything other than legitimate food and beverage vending.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">7. Content Ownership</h2>
            <p>
              You retain ownership of the menu content, shop details, and images you upload. By uploading content, you grant Devian Labs a non-exclusive, royalty-free licence to display that content within the Service for the purpose of operating the platform.
            </p>
            <p className="mt-3">
              You are solely responsible for ensuring that your content does not infringe any third-party rights and complies with all applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">8. Service Availability</h2>
            <p>
              We aim to provide reliable access to the Service but do not guarantee 100% uptime. We may suspend the Service for maintenance, updates, or events outside our control. We will not be liable for losses resulting from temporary unavailability.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Devian Labs shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Service, including loss of revenue, orders, or data.
            </p>
            <p className="mt-3">
              Our total liability for any claim arising out of these Terms shall not exceed the amount you paid for the Service in the three months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">10. Termination</h2>
            <p>
              You may stop using the Service at any time by cancelling your subscription and deleting the app. We may terminate or suspend your access without notice if you breach these Terms.
            </p>
            <p className="mt-3">
              Upon termination, your data will be retained for up to 30 days before deletion, in line with our <Link href="/privacy-policy" className="text-red-600 dark:text-red-400 hover:underline">Privacy Policy</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">11. Governing Law</h2>
            <p>
              These Terms are governed by the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of courts in India.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">12. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify you of material changes by updating the &quot;Last updated&quot; date and, where appropriate, via in-app notice. Continued use of the Service after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">13. Contact</h2>
            <p>
              For questions about these Terms:<br />
              <strong>Devian Labs</strong><br />
              Email: <a href="mailto:support@khao.app" className="text-red-600 dark:text-red-400 hover:underline">support@khao.app</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
