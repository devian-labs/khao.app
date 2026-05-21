"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChefHat, ConciergeBell, ScanLine, Store } from "lucide-react";
import { useAudienceMode } from "./AudienceMode";

const content = {
  menu: {
    eyebrow: "Built For Menu Publishing",
    title: "Two views. Simple enough for a busy counter.",
    description:
      "Menu mode keeps the product lightweight: your team edits the menu, customers scan and browse.",
    roles: [
      {
        label: "Owner",
        icon: Store,
        description:
          "Create your shop, add menu items, update prices, and mark items unavailable from your phone.",
        badge: "Menu Admin",
      },
      {
        label: "Customer",
        icon: ScanLine,
        description:
          "Scan the QR, browse items, check prices, and decide what to order at the counter or with staff.",
        badge: "Diner View",
      },
    ],
  },
  ordering: {
    eyebrow: "Role-Based Access",
    title: "One app. Zero friction for your team.",
    description:
      "Staff get role-specific views in the app. Diners just scan and order from their phone browser — no download needed.",
    roles: [
      {
        label: "Admin",
        icon: Store,
        description:
          "Manage menu items, prices, tables, staff access, and live order activity across the floor.",
        badge: "Owner / Manager",
      },
      {
        label: "Waiter",
        icon: ConciergeBell,
        description:
          "Track tables, respond to waiter and bill requests, and keep service moving during rush hours.",
        badge: "Front of House",
      },
      {
        label: "Cook",
        icon: ChefHat,
        description:
          "See accepted orders, prepare items, and mark tickets done without paper slips.",
        badge: "Kitchen",
      },
    ],
  },
};

export default function RolesSection() {
  const { mode } = useAudienceMode();
  const current = content[mode];

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-[#E4E4E7]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div key={`${mode}-header`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.22, ease: "easeOut" as const }} className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#DC2626] mb-3">{current.eyebrow}</p>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#121212] sm:text-4xl max-w-xl">
              {current.title}
            </h2>
            <p className="mt-4 text-base text-[#71717A] max-w-2xl">{current.description}</p>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div key={`${mode}-roles`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className={`grid grid-cols-1 gap-5 sm:grid-cols-2 ${mode === "ordering" ? "lg:grid-cols-4" : "lg:max-w-3xl"}`}>
          {current.roles.map((role, i) => (
            <motion.div
              key={role.label}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22, delay: i * 0.06, ease: "easeOut" as const }}
              className="rounded-2xl bg-[#F9FAFB] ring-1 ring-[#E4E4E7] p-7 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#DC2626]/10 text-[#DC2626]">
                  <role.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-base font-bold text-[#121212]">{role.label}</p>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#71717A]">{role.badge}</span>
                </div>
              </div>
              <p className="text-sm leading-6 text-[#71717A]">{role.description}</p>
            </motion.div>
          ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
