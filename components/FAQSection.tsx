"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useAudienceMode } from "./AudienceMode";

const commonFaqs = [
  {
    q: "How long does setup take?",
    a: "You can create a shop in minutes, add your first menu, and generate QR codes from the app. Larger menus take longer to enter, but you do not need to book a call to get started.",
  },
  {
    q: "Can I import my existing menu?",
    a: "You can add items yourself from the app. If you are launching with a large menu or multiple outlets, contact us and we can guide the setup.",
  },
  {
    q: "Is there a contract or lock-in?",
    a: "Monthly subscription, cancel anytime. No long-term lock-in, no cancellation fees. Your subscription stays active until the end of the paid period.",
  },
  {
    q: "What if I have an issue?",
    a: "Email us at support@khao.app. Khao is built to be self-serve, but our team can still help with launch questions, setup guidance, and product issues.",
  },
];

const faqsByMode = {
  menu: [
    {
      q: "Do customers need to download an app?",
      a: "No. Customers scan your QR with their phone camera and open the menu in the browser.",
    },
    {
      q: "Can I use Khao without taking online orders?",
      a: "Yes. QR Menu mode is only for publishing your menu. Customers browse and still order at the counter or with your staff.",
    },
    {
      q: "What happens when an item is sold out?",
      a: "Mark it unavailable in the app and customers will see the updated menu without you printing a new card.",
    },
  ],
  ordering: [
    {
      q: "Do I need new hardware?",
      a: "No. Khao is built for the phones and tablets most small restaurants already have. Diners scan from their own phones, and your team can run admin, waiter, and kitchen views on Android devices.",
    },
    {
      q: "Can diners pay through Khao?",
      a: "Not yet. Diners place orders, but they pay you directly at the table — UPI, cash, or card on your existing terminal. We may add payments later if vendors ask for it.",
    },
    {
      q: "What if my internet goes down?",
      a: "The staff app requires an internet connection to receive orders in real time. We recommend keeping the app open on a reliable Wi-Fi connection for the best experience.",
    },
  ],
};

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const { mode } = useAudienceMode();
  const faqs = [...faqsByMode[mode], ...commonFaqs];

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#F9FAFB] border-t border-[#E4E4E7]">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#DC2626] mb-3">FAQ</p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#121212] sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-[#71717A]">
            Still have questions?{" "}
            <a href="/contact" className="font-medium text-[#121212] hover:text-[#DC2626] transition-colors">
              Reach out to us
            </a>
            .
          </p>
        </div>

        <div className="divide-y divide-[#E4E4E7]">
          {faqs.map((faq, i) => (
            <div key={i} className="py-5">
              <button
                className="w-full flex items-center justify-between text-left gap-4 group"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className={`text-sm font-semibold transition-colors ${open === i ? "text-[#DC2626]" : "text-[#121212] group-hover:text-[#DC2626]"}`}>
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 flex-shrink-0 text-[#71717A] transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <p className="mt-3 text-sm leading-6 text-[#71717A] pr-8">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
