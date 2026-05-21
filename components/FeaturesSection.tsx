"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BellRing, ClipboardList, Layers, QrCode, ShoppingBag, Store, ToggleRight } from "lucide-react";
import { AudienceModeToggleCompact, useAudienceMode } from "./AudienceMode";

const content = {
  menu: {
    eyebrow: "QR Menu Features",
    title: "Everything a QR menu needs. Nothing extra.",
    description:
      "A lightweight menu mode for shops that want customers to scan, browse, and order the usual way at the counter.",
    features: [
      {
        icon: QrCode,
        title: "Printable Menu QR",
        description: "Generate a shop QR, print it for your counter, or share it on WhatsApp and Instagram.",
      },
      {
        icon: ClipboardList,
        title: "Simple Menu Builder",
        description: "Add items, prices, descriptions, images, and categories from the Android app.",
      },
      {
        icon: ToggleRight,
        title: "Live Availability",
        description: "Mark items available or out of stock instantly, without reprinting your menu.",
      },
      {
        icon: Store,
        title: "Made For Small Shops",
        description: "Ideal for roadside cafes, food trucks, tea stalls, kiosks, and takeaway counters.",
      },
      {
        icon: Layers,
        title: "Multiple Menus",
        description: "Keep breakfast, snacks, lunch, or seasonal menus ready and switch when needed.",
      },
      {
        icon: ShoppingBag,
        title: "Ordering Optional",
        description: "Start with only a menu. Move to table ordering later if your business grows into it.",
      },
    ],
  },
  ordering: {
    eyebrow: "QR Ordering Features",
    title: "A complete QR ordering flow in your pocket.",
    description:
      "For restaurants that need menu publishing, table ordering, staff views, and live service alerts.",
    features: [
      {
        icon: QrCode,
        title: "Table-Specific QRs",
        description: "Generate unique QRs for each table so every order reaches your team with table context.",
      },
      {
        icon: ToggleRight,
        title: "Live Menu Control",
        description: "Update prices, mark items out of stock, change your active menu, or close ordering from the app.",
      },
      {
        icon: ShoppingBag,
        title: "Real-Time Orders",
        description: "Orders land on your screen the moment a diner taps place order. Accept, prepare, and complete.",
      },
      {
        icon: BellRing,
        title: "Waiter & Bill Requests",
        description: "Customers can call a waiter or request the bill from the QR menu.",
      },
      {
        icon: Store,
        title: "Team Views",
        description: "Give owners, waiters, and cooks the right screen without enterprise POS complexity.",
      },
      {
        icon: Layers,
        title: "Flexible Menus",
        description: "Create breakfast, lunch, dinner, or event menus and switch the active one when service changes.",
      },
    ],
  },
};

const fade = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
  transition: { duration: 0.22, ease: "easeOut" as const },
};

export default function FeaturesSection() {
  const { mode } = useAudienceMode();
  const c = content[mode];

  return (
    <section id="features" className="py-20 sm:py-28 bg-[#121212] border-t border-[#2A2A2A]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <AnimatePresence mode="wait">
            <motion.div key={mode} {...fade}>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#DC2626] mb-3">{c.eyebrow}</p>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl max-w-xl">
                {c.title}
              </h2>
              <p className="mt-4 text-base text-zinc-400 max-w-2xl">
                {c.description}
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="shrink-0">
            <AudienceModeToggleCompact />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {c.features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22, delay: i * 0.04, ease: "easeOut" as const }}
                className="group rounded-2xl bg-white/5 ring-1 ring-white/10 p-7 hover:bg-white/8 hover:ring-[#DC2626]/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#DC2626]/10 text-[#DC2626] group-hover:bg-[#DC2626]/20 transition-colors">
                    <feature.icon className="w-4.5 h-4.5" />
                  </span>
                  <h3 className="text-sm font-bold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm leading-6 text-zinc-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
