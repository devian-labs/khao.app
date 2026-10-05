"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useAudienceMode } from "./AudienceMode";
import { commonFaqs, faqsByMode } from "@/lib/faqs";

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
              {/* Always rendered (hidden when collapsed) so the answer text is in
                  the server HTML and matches the FAQPage JSON-LD. */}
              <p hidden={open !== i} className="mt-3 text-sm leading-6 text-[#71717A] pr-8">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
