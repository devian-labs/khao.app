export default function TrustSection() {
  return (
    <section className="py-20 sm:py-28 bg-white border-t border-[#E4E4E7]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#DC2626] mb-3">About Khao</p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#121212] sm:text-4xl mb-6">
            Made by a small team. For other small teams.
          </h2>
          <p className="text-base leading-7 text-[#71717A] mb-4">
            Khao is built by{" "}
            <a href="https://devian.app" target="_blank" rel="noopener noreferrer" className="font-medium text-[#121212] hover:text-[#DC2626] transition-colors">
              Devian Labs
            </a>
            , a small software studio based in India. We build lean, focused software for businesses that want clean tools — not bloated platforms.
          </p>
          <p className="text-base leading-7 text-[#71717A] mb-8">
            We work directly with the restaurants on Khao. You can email us. You can WhatsApp us. There&apos;s no support ticket queue.
          </p>
          <a
            href="https://devian.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#121212] hover:text-[#DC2626] transition-colors"
          >
            Visit Devian Labs →
          </a>
        </div>
      </div>
    </section>
  );
}
