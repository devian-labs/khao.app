"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Link from "next/link";
import { useAudienceMode } from "./AudienceMode";
import { tiers } from "@/lib/pricing";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.devianlabs.khao";

export default function PricingSection() {
  const [yearly, setYearly] = useState(false);
  const { mode } = useAudienceMode();
  const tier = tiers.find((item) => item.id === mode) ?? tiers[0];
  const isOrdering = mode === "ordering";

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#F9FAFB] border-t border-[#E4E4E7]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#DC2626] mb-3">Pricing</p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#121212] sm:text-4xl max-w-xl">
            {isOrdering ? "Pricing for QR ordering." : "Pricing for QR menus."}
          </h2>
          <p className="mt-4 text-base text-[#71717A] max-w-2xl">
            {isOrdering
              ? "Use Khao for table ordering and keep every rupee from your orders. Diners pay you directly by UPI, cash, or your existing card machine."
              : "Use Khao as a lightweight digital menu without paying for ordering features you do not need."}
          </p>
        </div>

        <div className="flex items-center gap-3 mb-10">
          <span className={`text-sm font-medium ${!yearly ? "text-[#121212]" : "text-[#71717A]"}`}>Monthly</span>
          <button
            onClick={() => setYearly(!yearly)}
            aria-label="Toggle yearly billing"
            role="switch"
            aria-checked={yearly}
            className={`relative inline-flex h-7 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none ${yearly ? "bg-[#121212]" : "bg-[#E4E4E7]"}`}
          >
            <span
              className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-md ring-0 transition-transform duration-200 ${yearly ? "translate-x-7" : "translate-x-0"}`}
            />
          </button>
          <span className={`text-sm font-medium flex items-center gap-2 ${yearly ? "text-[#121212]" : "text-[#71717A]"}`}>
            Yearly
            <span className="rounded-full bg-[#DC2626]/10 px-2 py-0.5 text-xs font-semibold text-[#DC2626]">Save ~15%</span>
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:max-w-3xl lg:grid-cols-[1fr_0.8fr]">
            <div
              key={tier.name}
              className="rounded-2xl p-8 flex flex-col bg-[#121212] ring-1 ring-[#2A2A2A]"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display text-lg font-bold text-white">
                  {tier.name}
                </h3>
                <span className="rounded-full bg-[#DC2626] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  Best fit
                </span>
              </div>

              <p className="text-sm mb-6 text-zinc-400">
                {tier.description}
              </p>

              <div className="flex items-end gap-1 mb-6">
                <span className="font-display text-4xl font-extrabold text-white">
                  ₹{yearly ? tier.yearly : tier.monthly}
                </span>
                <span className="text-sm mb-1 text-zinc-400">
                  / {yearly ? "year" : "month"}
                </span>
              </div>

              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="block rounded-xl px-4 py-3 text-center text-sm font-semibold mb-8 transition-colors bg-[#DC2626] text-white hover:bg-[#b91c1c]"
              >
                {tier.cta}
              </a>

              <ul className="space-y-3 text-sm flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#DC2626]" />
                    <span className="text-zinc-300">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-8 ring-1 ring-[#E4E4E7]">
              <p className="font-display text-lg font-bold text-[#121212]">
                {isOrdering ? "Need only a menu first?" : "Need ordering later?"}
              </p>
              <p className="mt-3 text-sm leading-6 text-[#71717A]">
                {isOrdering
                  ? "Switch the hero toggle to QR Menu to see the lighter plan for stalls, counters, and food trucks."
                  : "Start with QR Menu and move to QR Ordering when you add tables, staff views, or kitchen flow."}
              </p>
            </div>
        </div>

        <p className="mt-8 text-sm text-[#71717A]">
          Want help during launch or have multiple outlets?{" "}
          <Link href="/contact" className="font-medium text-[#121212] hover:text-[#DC2626] transition-colors">
            Contact us
          </Link>{" "}
          for setup guidance and group pricing.
        </p>
      </div>
    </section>
  );
}
