"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AudienceModeToggle, useAudienceMode } from "./AudienceMode";
import MenuModeIllustration from "./MenuModeIllustration";
import OrderingModeIllustration from "./OrderingModeIllustration";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.devianlabs.khao";

const content = {
  menu: {
    headline: "Digital QR Menu for small food businesses.",
    accent: "Digital QR Menu",
    headlineRest: "for small food businesses.",
    description:
      "Khao gives your stall, cafe, or food truck a clean digital menu customers can scan from any phone. Update prices, mark items unavailable, and print your QR — no ordering system needed.",
    primaryCta: "Create QR Menu",
    secondaryCta: "See menu flow",
    highlights: ["Menu-only mode", "Printable QR", "No ordering setup", "Update anytime"],
    shopName: "Asha Chai Point",
    qrTitle: "Menu QR",
    qrCaption: "Scan to view menu",
    panelLabel: "Menu board",
    panelTitle: "Breakfast menu",
    panelRows: [["Masala Chai", "₹15"], ["Vada Pav", "₹25"]],
    statOne: "42", statOneLabel: "Items",
    statTwo: "138", statTwoLabel: "Menu views",
    actions: ["View QR", "Edit Menu", "Share PDF", "Open/Closed"],
    activityTitle: "Menu updated",
    activityBadge: "LIVE",
    activityMeta: "Tea & snacks",
    activityTime: "2 min ago",
    activityTotal: "No orders enabled",
  },
  ordering: {
    headline: "Turn Tables into self-ordering stations.",
    accent: "Turn Tables",
    headlineRest: "into self-ordering stations.",
    description:
      "Khao turns any Android phone into a live control room for table QR codes, waiter alerts, kitchen tickets, and live orders. Diners scan, order, and your team handles service in real time.",
    primaryCta: "Start Table Ordering",
    secondaryCta: "See ordering flow",
    highlights: ["Table QR ordering", "Waiter & kitchen views", "No order commissions", "Bill requests"],
    shopName: "Raju Tea Stall",
    qrTitle: "Table 7 QR",
    qrCaption: "Scan to order",
    panelLabel: "Kitchen",
    panelTitle: "Order #18",
    panelRows: [["2x Masala Chai", "Table 7"], ["1x Vada Pav", "Ready"]],
    statOne: "24", statOneLabel: "Orders",
    statTwo: "6", statTwoLabel: "Active",
    actions: ["View QR", "Edit Menu", "Tables", "Staff"],
    activityTitle: "Incoming order",
    activityBadge: "NEW",
    activityMeta: "Table 7",
    activityTime: "Just now",
    activityTotal: "₹95",
  },
};

const fade = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
  transition: { duration: 0.22, ease: "easeOut" as const },
};

export default function HeroSection() {
  const { mode } = useAudienceMode();
  const c = content[mode];

  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-16 sm:pt-32 sm:pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_60%_0%,rgba(220,38,38,0.06),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* ── Left: ICP selector + copy ── */}
          <div className="text-center lg:text-left">
            {/* ICP selector lives inside the left column */}
            <div className="mb-8 flex flex-col items-center gap-4 lg:items-start">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#71717A]">
                What do you need Khao to do?
              </p>
              <AudienceModeToggle />
            </div>

            {/* initial={false}: server HTML renders the H1/copy fully visible
                (LCP); the fade only runs when the audience mode is switched. */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={mode} {...fade}>
                <h1 className="font-display font-extrabold tracking-tight text-[#121212]">
                  <span className="block text-5xl sm:text-6xl lg:text-[4.5rem] leading-[1.05] text-[#DC2626]">{c.accent}</span>
                  <span className="block text-2xl sm:text-3xl lg:text-3xl leading-snug mt-1">{c.headlineRest}</span>
                </h1>

                <p className="mt-6 text-lg leading-8 text-[#71717A] max-w-xl mx-auto lg:mx-0">
                  {c.description}
                </p>

                <div className="mt-8 flex flex-wrap items-start justify-center lg:justify-start gap-4">
                  {/* Google Play */}
                  <a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl bg-[#121212] px-5 py-3 shadow-lg shadow-zinc-900/10 transition-all hover:-translate-y-0.5 hover:bg-[#1a1a1a]"
                  >
                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
                      <path d="M1.22 0.46L11.9 11.15L1.22 21.54C0.47 21.1 0 20.3 0 19.44V2.56C0 1.7 0.47 0.9 1.22 0.46Z" fill="#4FC3F7"/>
                      <path d="M15.95 7.7L13.17 10.48L11.9 11.15L1.22 0.46C1.64 0.17 2.14 0 2.66 0C3.02 0 3.38 0.08 3.72 0.23L15.95 7.7Z" fill="#F44336"/>
                      <path d="M19.3 9.52C19.76 9.95 20 10.52 20 11C20 11.48 19.76 12.05 19.3 12.48L16.52 14.07L13.17 10.48L16.52 7.93L19.3 9.52Z" fill="#FFCA28"/>
                      <path d="M11.9 11.15L13.17 11.82L3.72 21.77C3.38 21.92 3.02 22 2.66 22C2.14 22 1.64 21.83 1.22 21.54L11.9 11.15Z" fill="#4CAF50"/>
                    </svg>
                    <div>
                      <p className="text-[10px] text-zinc-400 leading-none mb-0.5">Get it on</p>
                      <p className="text-[15px] font-semibold text-white leading-none">Google Play</p>
                    </div>
                  </a>

                  {/* App Store — coming soon */}
                  <div className="flex flex-col items-start gap-1.5">
                    <div className="flex items-center gap-3 rounded-2xl bg-[#121212] px-5 py-3 opacity-40 cursor-not-allowed select-none">
                      <svg width="18" height="22" viewBox="0 0 24 24" fill="white">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      <div>
                        <p className="text-[10px] text-zinc-400 leading-none mb-0.5">Download on the</p>
                        <p className="text-[15px] font-semibold text-white leading-none">App Store</p>
                      </div>
                    </div>
                    <p className="text-[11px] text-[#71717A] pl-1">Coming soon on iOS</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Right: illustration — menu mode gets dedicated component ── */}
          <AnimatePresence mode="wait" initial={false}>
            {mode === "menu" ? (
              <motion.div key="menu-illustration" {...fade} className="relative mx-auto w-full max-w-[480px] lg:mx-0 lg:ml-auto">
                <MenuModeIllustration />
              </motion.div>
            ) : (
              <motion.div key="ordering-illustration" {...fade} className="relative mx-auto w-full max-w-[480px] lg:mx-0 lg:ml-auto">
                <OrderingModeIllustration />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
