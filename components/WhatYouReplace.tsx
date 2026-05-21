"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { useAudienceMode } from "./AudienceMode";

const content = {
  menu: {
    eyebrow: "What Khao replaces",
    title: "Stop sending PDFs. Start sharing QRs.",
    description: "Most small shops run on printed cards, WhatsApp PDFs, or hand-written boards. Khao replaces all of it with a menu customers can scan from any phone.",
    replaces: [
      { label: "Printed menu cards", sub: "Expensive to reprint every time prices change" },
      { label: "WhatsApp menu PDFs", sub: "Hard to update, blurry screenshots, no photos" },
      { label: "Verbal menus", sub: "Leads to order mistakes and language confusion" },
      { label: "Instagram DMs for menus", sub: "Not searchable, not scannable, not scalable" },
    ],
    withKhao: [
      "Update menu in seconds from your phone",
      "Customers scan, browse, and see photos",
      "No reprinting. No forwarding PDFs.",
      "Mark items out of stock instantly",
    ],
  },
  ordering: {
    eyebrow: "What Khao replaces",
    title: "Less waiter dependency. More table flow.",
    description: "Restaurants with dine-in ordering lose time and accuracy to manual processes. Khao replaces the paper and the shouting.",
    replaces: [
      { label: "Paper KOTs", sub: "Lost tickets, misread handwriting, duplicate orders" },
      { label: "Waiter dependency for ordering", sub: "Staff bottleneck during peak hours" },
      { label: "Manual table tracking", sub: "Confusion over which table ordered what" },
      { label: "Verbal bill requests", sub: "Diners waiting, waiters missing signals" },
    ],
    withKhao: [
      "Diner orders go to kitchen instantly",
      "Waiter & cook see their own live view",
      "Bill requests arrive as alerts, no shouting",
      "Table context on every single order",
    ],
  },
};

const fade = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
  transition: { duration: 0.22, ease: "easeOut" as const },
};

export default function WhatYouReplace() {
  const { mode } = useAudienceMode();
  const c = content[mode];

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-[#E4E4E7]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div key={mode} {...fade}>
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#DC2626] mb-3">{c.eyebrow}</p>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#121212] sm:text-4xl max-w-2xl">
                {c.title}
              </h2>
              <p className="mt-4 text-base text-[#71717A] max-w-2xl">
                {c.description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Before */}
              <div className="rounded-2xl bg-[#FEF2F2] ring-1 ring-[#FECACA] p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-[#DC2626] mb-6">Before Khao</p>
                <ul className="space-y-4">
                  {c.replaces.map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#DC2626]/15 text-[#DC2626]">
                        <X className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-[#121212]">{item.label}</p>
                        <p className="text-xs text-[#71717A] mt-0.5">{item.sub}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* After */}
              <div className="rounded-2xl bg-[#121212] p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-[#DC2626] mb-6">With Khao</p>
                <ul className="space-y-4">
                  {c.withKhao.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#DC2626] text-white">
                        <ArrowRight className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <p className="text-sm font-semibold text-white">{item}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3">
                  <p className="text-xs font-semibold text-zinc-400">
                    {mode === "menu"
                      ? "✓ No ordering complexity. No new hardware."
                      : "✓ No POS hardware. No order commissions."}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
