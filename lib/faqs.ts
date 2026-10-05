// Shared by components/FAQSection.tsx (visible FAQ) and the FAQPage JSON-LD on
// the home page, so the structured data always matches the on-page text.
export type Faq = { q: string; a: string };

export const commonFaqs: Faq[] = [
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

export const faqsByMode: Record<"menu" | "ordering", Faq[]> = {
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

/** FAQs rendered in the server HTML (default "menu" audience mode). */
export const defaultFaqs: Faq[] = [...faqsByMode.menu, ...commonFaqs];
