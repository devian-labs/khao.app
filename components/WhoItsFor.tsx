const tiles = [
  {
    title: "Cafes & Restaurants",
    description:
      "Single-location spots that want a clean digital menu and modern ordering — without a heavy POS contract.",
  },
  {
    title: "Cloud Kitchens & Takeaway",
    description:
      "Operations-first food businesses where orders, kitchen flow, and staff coordination matter more than dine-in décor.",
  },
  {
    title: "Food Stalls & QSR",
    description:
      "Quick-service vendors who want fast menu updates, QR-based ordering, and zero printing costs.",
  },
];

export default function WhoItsFor() {
  return (
    <section className="py-20 sm:py-28 bg-[#F9FAFB] border-t border-[#E4E4E7]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#DC2626] mb-3">Built For</p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#121212] sm:text-4xl max-w-xl">
            Independent restaurants. Real operations. No fluff.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {tiles.map((tile) => (
            <div
              key={tile.title}
              className="rounded-2xl bg-white ring-1 ring-[#E4E4E7] p-8"
            >
              <h3 className="font-display text-lg font-bold text-[#121212] mb-3">{tile.title}</h3>
              <p className="text-sm leading-6 text-[#71717A]">{tile.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
