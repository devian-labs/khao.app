"use client";

import { motion } from "framer-motion";

// ── Glass feature tiles ───────────────────────────────────────────────────
const TILES = [
  {
    bold: "Instant",
    rest: "Order\nAlerts",
    cls: "top-[3%] -left-3 -rotate-3",
    float: { y: [0, -7, 0] as number[], dur: 3.2, delay: 0 },
  },
  {
    bold: "Table QR",
    rest: "Codes",
    cls: "top-[38%] left-5",
    float: { y: [0, -6, 0] as number[], dur: 3.8, delay: 0.7 },
  },
  {
    bold: "Kitchen",
    rest: "Tickets",
    cls: "top-[17%] -right-1 rotate-3",
    float: { y: [0, -8, 0] as number[], dur: 3.5, delay: 0.4 },
  },
  {
    bold: "Zero",
    rest: "Commission",
    cls: "top-[47%] right-3 -rotate-2",
    float: { y: [0, -6, 0] as number[], dur: 4.0, delay: 1.0 },
  },
];

const NAV = [
  { label: "Home", active: false, path: "M6 2L1 7h2v4h6V7h2L6 2z" },
  { label: "Orders", active: true, path: "M2 2h8a1 1 0 011 1v7a1 1 0 01-1 1H2a1 1 0 01-1-1V3a1 1 0 011-1zM3 5h6M3 7h4" },
  { label: "Menu", active: false, path: "M3 4h6M3 6.5h6M3 9h4" },
  { label: "Settings", active: false, path: "M6 4a2 2 0 100 4 2 2 0 000-4zM6 1v1.5M6 9.5V11M1 6h1.5M9.5 6H11" },
];

// ── Main illustration ─────────────────────────────────────────────────────
export default function OrderingModeIllustration() {
  return (
    <div className="relative w-full select-none" style={{ height: 600, overflow: "visible" }}>
      {/* Concentric rings */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ zIndex: 0 }}
      >
        {[160, 240, 320, 400, 480].map((d, i) => (
          <div
            key={d}
            className="absolute rounded-full border border-[#E4E4E7]"
            style={{
              width: d, height: d,
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              opacity: 0.6 - i * 0.08,
            }}
          />
        ))}
      </div>

      {/* Phone mockup */}
      <div className="absolute left-1/2 top-4 -translate-x-1/2" style={{ zIndex: 10 }}>
        <div
          className="overflow-hidden shadow-2xl shadow-zinc-900/20"
          style={{ width: 230, borderRadius: 32, border: "10px solid #121212", backgroundColor: "#121212" }}
        >
          <div className="overflow-hidden" style={{ borderRadius: 22, backgroundColor: "#F9FAFB" }}>

            {/* Header */}
            <div className="bg-white px-3 py-3">
              <p className="font-display text-sm font-extrabold text-[#121212]">Orders</p>
            </div>

            {/* Tab pills */}
            <div className="bg-white px-3 pb-2">
              <div className="flex rounded-xl bg-[#F4F4F5] p-0.5">
                {["Incoming", "Accepted", "Done"].map((tab) => (
                  <div
                    key={tab}
                    className={`flex-1 rounded-xl py-1 text-center text-[8px] font-semibold ${
                      tab === "Incoming" ? "bg-white text-[#121212] shadow-sm" : "text-[#71717A]"
                    }`}
                  >
                    {tab}
                  </div>
                ))}
              </div>
            </div>

            {/* Order card 1 — INCOMING */}
            <div className="px-3 pb-2">
              <div className="overflow-hidden rounded-xl bg-white ring-1 ring-[#E4E4E7]">
                <div className="px-2.5 pt-2.5">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="rounded-full bg-[#FEF2F2] px-2 py-0.5 text-[7px] font-bold text-[#DC2626]">INCOMING</span>
                    <span className="rounded-full bg-[#F9FAFB] px-2 py-0.5 text-[7px] text-[#71717A] ring-1 ring-[#E4E4E7]">Table 3</span>
                  </div>
                  {[
                    { name: "Masala Dosa", price: "₹35" },
                    { name: "Samosa Chat", price: "₹50" },
                    { name: "Masala Chaas", price: "₹30" },
                  ].map(({ name, price }, idx, arr) => (
                    <div key={name} className={`flex items-center gap-1.5 py-1.5 ${idx < arr.length - 1 ? "border-b border-[#F4F4F5]" : ""}`}>
                      <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded bg-[#F4F4F5] text-[7px] font-bold text-[#121212]">1</span>
                      <span className="flex-1 text-[9px] text-[#121212]">{name}</span>
                      <span className="text-[8px] text-[#71717A]">{price}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between border-t border-[#F4F4F5] px-2.5 py-1.5">
                  <span className="text-[7px] text-[#71717A]">6:29 PM</span>
                  <span className="text-[10px] font-bold text-[#121212]">₹115</span>
                </div>
                <div className="px-2.5 pb-2.5">
                  <div className="flex items-center justify-center gap-1.5 rounded-xl bg-[#121212] py-2">
                    <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[8px] font-bold text-white">Accept Order</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Spacer to match menu illustration height */}
            <div style={{ height: 72 }} className="bg-white" />

            {/* Bottom nav — 4 items */}
            <div className="flex items-center justify-around border-t border-[#E4E4E7] bg-white py-2.5">
              {NAV.map(({ label, active, path }) => (
                <div key={label} className="flex flex-col items-center gap-0.5">
                  {active ? (
                    <div className="flex h-6 w-8 items-center justify-center rounded-full bg-[#F0F0F0]">
                      <svg width="13" height="13" viewBox="0 0 12 12" fill="none" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d={path} />
                      </svg>
                    </div>
                  ) : (
                    <svg width="13" height="13" viewBox="0 0 12 12" fill="none" stroke="#71717A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d={path} />
                    </svg>
                  )}
                  <span className={`text-[7px] font-semibold ${active ? "text-[#121212]" : "text-[#71717A]"}`}>{label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Glass feature tiles */}
      {TILES.map((tile, i) => (
        <motion.div
          key={i}
          className={`absolute ${tile.cls} z-20`}
          animate={{ y: tile.float.y }}
          transition={{ repeat: Infinity, duration: tile.float.dur, ease: "easeInOut", delay: tile.float.delay }}
        >
          <div
            className="w-36 rounded-2xl px-4 py-3 shadow-2xl"
            style={{
              background: "rgba(255,255,255,0.82)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.7)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
            }}
          >
            <p className="text-sm font-bold leading-snug text-[#121212]">
              <span className="text-[#DC2626]">{tile.bold}</span>
              {" "}
              {tile.rest.split("\n").map((line, j) => (
                <span key={j}>{line}{j < tile.rest.split("\n").length - 1 && <br />}</span>
              ))}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
