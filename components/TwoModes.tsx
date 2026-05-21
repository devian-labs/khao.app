const modes = [
  {
    name: "Menu Mode",
    tagline: "Digital menu. Personal touch.",
    steps: [
      "Diners scan the QR code",
      "Browse the full menu with photos and prices",
      "Waiter takes the order in person",
      "Staff manages the order from the app",
    ],
    best: "Restaurants that want digital menus but prefer the personal touch of waiter-taken orders.",
    accent: false,
  },
  {
    name: "Self-Ordering Mode",
    tagline: "Scan, order, done.",
    steps: [
      "Diners scan the QR code",
      "Browse, customize, and place orders themselves",
      "Order goes directly to the kitchen",
      "Waiter handles delivery and service",
    ],
    best: "Cafes, food courts, quick-service counters, and small restaurants that want to reduce staff workload during peak hours.",
    accent: true,
  },
];

export default function TwoModes() {
  return (
    <section className="py-20 sm:py-28 bg-[#F9FAFB] border-t border-[#E4E4E7]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#DC2626] mb-3">Flexible by Design</p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#121212] sm:text-4xl max-w-xl">
            Two modes. Your choice.
          </h2>
          <p className="mt-4 text-base text-[#71717A] max-w-2xl">
            Start with a clean QR menu. Add self-ordering when you&apos;re ready. Switch anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {modes.map((mode) => (
            <div
              key={mode.name}
              className={`rounded-2xl p-8 ${
                mode.accent
                  ? "bg-[#121212] ring-1 ring-[#2A2A2A]"
                  : "bg-white ring-1 ring-[#E4E4E7]"
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className={`font-display text-xl font-extrabold ${mode.accent ? "text-white" : "text-[#121212]"}`}>
                    {mode.name}
                  </p>
                  <p className={`text-sm mt-0.5 ${mode.accent ? "text-[#71717A]" : "text-[#71717A]"}`}>
                    {mode.tagline}
                  </p>
                </div>
                {mode.accent && (
                  <span className="rounded-full bg-[#DC2626] px-3 py-1 text-xs font-bold text-white uppercase tracking-wide">
                    Most popular
                  </span>
                )}
              </div>

              <ol className="space-y-3 mb-8">
                {mode.steps.map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center ${
                      mode.accent
                        ? "bg-[#DC2626] text-white"
                        : "bg-[#F9FAFB] text-[#121212] ring-1 ring-[#E4E4E7]"
                    }`}>
                      {i + 1}
                    </span>
                    <span className={`text-sm leading-5 ${mode.accent ? "text-zinc-300" : "text-[#71717A]"}`}>
                      {step}
                    </span>
                  </li>
                ))}
              </ol>

              <div className={`rounded-xl px-4 py-3 ${mode.accent ? "bg-white/5" : "bg-[#F9FAFB]"}`}>
                <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${mode.accent ? "text-[#DC2626]" : "text-[#DC2626]"}`}>
                  Best for
                </p>
                <p className={`text-sm leading-5 ${mode.accent ? "text-zinc-300" : "text-[#71717A]"}`}>
                  {mode.best}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-[#71717A] max-w-2xl mx-auto">
          Start with a menu QR today. Turn on self-ordering when your team is ready.{" "}
          <span className="font-medium text-[#121212]">Khao adapts to you, not the other way around.</span>
        </p>
      </div>
    </section>
  );
}
