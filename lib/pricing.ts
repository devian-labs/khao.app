// Single source of truth for the plans shown in components/PricingSection.tsx
// and the SoftwareApplication offers in the home page JSON-LD.
export const tiers = [
  {
    id: "menu",
    name: "Menu Only",
    monthly: 29,
    yearly: 299,
    description: "Perfect for fast-moving stalls and takeaways that want a clean digital menu.",
    features: [
      "Unlimited menu items & categories",
      "QR code generation",
      "Open / Closed toggle",
      "Admin & Diner views",
      "Email support",
    ],
    cta: "Get Android App",
    popular: false,
  },
  {
    id: "ordering",
    name: "Self-Ordering",
    monthly: 79,
    yearly: 799,
    description: "Everything in Menu Only, plus full ordering, kitchen flow, table QRs, and staff roles.",
    features: [
      "Everything in Menu Only",
      "Self-ordering by diners",
      "Waiter & Cook role views",
      "Real-time kitchen display",
      "Table-specific QR codes",
      "Call Waiter & Request Bill alerts",
      "Multi-menu mode",
    ],
    cta: "Get Android App",
    popular: true,
  },
];
