"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BellRing, ClipboardList, QrCode, Store } from "lucide-react";
import { useAudienceMode } from "./AudienceMode";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.devianlabs.khao";

const content = {
  menu: {
    eyebrow: "QR menu flow",
    title: "Publish your menu without changing service.",
    intro:
      "For stalls, food trucks, and small cafes that only need a clean digital menu customers can scan.",
    support: "No ordering workflow required.",
    steps: [
      {
        number: "01",
        icon: Store,
        title: "Create your shop",
        description:
          "Add your shop name, description, and basic timings from the Android app.",
        preview: "Shop profile",
      },
      {
        number: "02",
        icon: ClipboardList,
        title: "Add your menu",
        description:
          "Create items, categories, prices, descriptions, and availability without touching a laptop.",
        preview: "Menu builder",
      },
      {
        number: "03",
        icon: QrCode,
        title: "Print or share your QR",
        description:
          "Save a printable QR, place it on your counter or truck, and update the menu anytime.",
        preview: "Menu QR",
      },
    ],
  },
  ordering: {
    eyebrow: "QR ordering flow",
    title: "Let tables order while your team keeps control.",
    intro:
      "For small and mid-size restaurants that want QR ordering, waiter alerts, and kitchen flow.",
    support: "No commission on the orders you receive.",
    steps: [
      {
        number: "01",
        icon: Store,
        title: "Create your restaurant",
        description:
          "Set up your shop, service style, tables, and the menu you want diners to order from.",
        preview: "Restaurant setup",
      },
      {
        number: "02",
        icon: QrCode,
        title: "Place table QRs",
        description:
          "Generate table-wise QRs so every order arrives with the right table context.",
        preview: "Table QR",
      },
      {
        number: "03",
        icon: BellRing,
        title: "Run live service",
        description:
          "Accept orders, handle waiter and bill requests, and move tickets through the kitchen.",
        preview: "Live orders",
      },
    ],
  },
};

export default function HowItWorks() {
  const { mode } = useAudienceMode();
  const current = content[mode];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white border-t border-[#E4E4E7]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${mode}-header`}
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: "easeOut" as const }}
            className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#DC2626] mb-3">{current.eyebrow}</p>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#121212] sm:text-4xl max-w-xl">
                {current.title}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#71717A]">{current.intro}</p>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${mode}-steps`}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 gap-5 lg:grid-cols-3"
          >
          {current.steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22, delay: i * 0.06, ease: "easeOut" as const }}
              className="rounded-[2rem] border border-[#E4E4E7] bg-[#F9FAFB] p-7 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FEF2F2] text-[#DC2626]">
                  <step.icon className="h-5 w-5" />
                </span>
                <span className="font-display text-4xl font-extrabold text-[#E4E4E7]">{step.number}</span>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-[#121212] mb-2">{step.title}</h3>
                <p className="text-sm leading-6 text-[#71717A]">{step.description}</p>
              </div>
            </motion.div>
          ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-xl bg-[#DC2626] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#b91c1c] transition-colors"
          >
            Get the Android App →
          </a>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-[#71717A]">
            <ClipboardList className="h-4 w-4 text-[#DC2626]" />
            {current.support}
          </span>
        </div>
      </div>
    </section>
  );
}
