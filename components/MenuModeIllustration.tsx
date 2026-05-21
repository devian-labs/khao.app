"use client";

import { motion } from "framer-motion";

// ── QR code (SVG, 21×21 modules) ─────────────────────────────────────────
function QRVisual({ size = 72 }: { size?: number }) {
  const C = 21;
  const cells: boolean[] = Array(C * C).fill(false);
  const s = (r: number, c: number) => {
    if (r >= 0 && r < C && c >= 0 && c < C) cells[r * C + c] = true;
  };
  const finder = (r0: number, c0: number) => {
    for (let i = 0; i < 7; i++) {
      s(r0, c0 + i); s(r0 + 6, c0 + i);
      s(r0 + i, c0); s(r0 + i, c0 + 6);
    }
    for (let dr = 2; dr <= 4; dr++)
      for (let dc = 2; dc <= 4; dc++) s(r0 + dr, c0 + dc);
  };
  finder(0, 0); finder(0, 14); finder(14, 0);
  // timing
  for (let i = 8; i < 13; i += 2) { s(6, i); s(i, 6); }
  // dense data modules
  [
    // format info strips
    [8,0],[8,1],[8,2],[8,3],[8,4],[8,5],[8,7],
    [0,8],[1,8],[2,8],[3,8],[4,8],[5,8],[7,8],
    [8,13],[8,14],[8,15],[8,16],[8,17],[8,18],[8,19],[8,20],
    [13,8],[14,8],[15,8],[16,8],[17,8],[18,8],[19,8],[20,8],
    // upper center (rows 0-5, cols 9-13)
    [0,9],[0,10],[0,12],[1,9],[1,11],[1,12],
    [2,10],[2,12],[3,9],[3,11],[3,12],[4,9],[4,10],[5,9],[5,11],[5,12],
    // row 7 center
    [7,9],[7,11],[7,13],[7,16],[7,17],[7,19],
    // left middle (rows 9-13, cols 0-5)
    [9,1],[9,3],[9,5],[10,0],[10,2],[10,4],
    [11,1],[11,3],[11,5],[12,0],[12,2],[12,4],[13,1],[13,3],[13,5],
    // main data area rows 9-20, cols 8-20
    [9,8],[9,9],[9,10],[9,12],[9,14],[9,15],[9,16],[9,18],[9,20],
    [10,9],[10,11],[10,12],[10,13],[10,15],[10,17],[10,18],[10,19],
    [11,8],[11,10],[11,11],[11,12],[11,14],[11,15],[11,17],[11,18],[11,20],
    [12,9],[12,10],[12,11],[12,13],[12,15],[12,16],[12,17],[12,19],
    [13,8],[13,9],[13,10],[13,12],[13,14],[13,15],[13,16],[13,18],[13,20],
    [14,9],[14,11],[14,12],[14,13],[14,15],[14,17],[14,18],[14,19],
    [15,8],[15,10],[15,11],[15,12],[15,14],[15,16],[15,17],[15,18],[15,20],
    [16,9],[16,10],[16,11],[16,13],[16,15],[16,16],[16,17],[16,19],
    [17,8],[17,9],[17,10],[17,12],[17,14],[17,15],[17,17],[17,18],[17,20],
    [18,9],[18,11],[18,12],[18,13],[18,15],[18,17],[18,18],[18,19],
    [19,8],[19,10],[19,11],[19,12],[19,14],[19,16],[19,17],[19,19],[19,20],
    [20,9],[20,11],[20,12],[20,13],[20,15],[20,17],[20,18],[20,20],
  ].forEach(([r, c]) => s(r, c));

  const px = size / C;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: "block" }}>
      <rect width={size} height={size} fill="white" />
      {cells.map((dark, idx) => {
        if (!dark) return null;
        const row = Math.floor(idx / C);
        const col = idx % C;
        return <rect key={idx} x={col * px} y={row * px} width={px} height={px} fill="#121212" />;
      })}
    </svg>
  );
}

// ── Tiny toggle ───────────────────────────────────────────────────────────
function MiniToggle({ on }: { on: boolean }) {
  return (
    <div
      className={`relative inline-flex h-4 w-7 flex-shrink-0 items-center rounded-full border-2 border-transparent transition-colors ${on ? "bg-[#121212]" : "bg-[#D4D4D8]"}`}
    >
      <span
        className={`inline-block h-3 w-3 transform rounded-full bg-white shadow transition-transform ${on ? "translate-x-3" : "translate-x-0"}`}
      />
    </div>
  );
}

// ── Menu items ────────────────────────────────────────────────────────────
const ITEMS = [
  { name: "Masala Dosa", price: "₹35", on: false },
  { name: "Samosa Chat", price: "₹50", on: true },
  { name: "Masala Chaas", price: "₹30", on: true },
  { name: "Vada (2 Pieces)", price: "₹25", on: true },
  { name: "Idli (3 Pieces)", price: "₹25", on: true },
];

// ── Glass feature tiles ───────────────────────────────────────────────────
const TILES = [
  {
    bold: "Toggle",
    rest: "Item\nAvailability",
    cls: "top-[3%] -left-3 -rotate-3",
    float: { y: [0, -7, 0] as number[], dur: 3.2, delay: 0 },
  },
  {
    bold: "Add Items",
    rest: "to Categories",
    cls: "top-[38%] left-5",
    float: { y: [0, -6, 0] as number[], dur: 3.8, delay: 0.7 },
  },
  {
    bold: "Change",
    rest: "price Anytime",
    cls: "top-[17%] -right-1 rotate-3",
    float: { y: [0, -8, 0] as number[], dur: 3.5, delay: 0.4 },
  },
  {
    bold: "Digital Menu",
    rest: "in 5 Minutes",
    cls: "top-[47%] right-3 -rotate-2",
    float: { y: [0, -6, 0] as number[], dur: 4.0, delay: 1.0 },
  },
];

// ── A-frame QR sign ───────────────────────────────────────────────────────
function AFrameSign() {
  return (
    <div className="flex flex-col items-center" style={{ width: 130 }}>
      {/* Poster image */}
      <img
        src="/qr-menu-poster.png"
        alt="Breakfast Shop QR menu"
        style={{
          width: "100%",
          borderRadius: 12,
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          display: "block",
        }}
      />
    </div>
  );
}

// ── Main illustration ─────────────────────────────────────────────────────
export default function MenuModeIllustration() {
  return (
    <div
      className="relative w-full select-none"
      style={{ height: 600, overflow: "visible" }}
    >
      {/* Concentric rings — centered in the illustration */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ zIndex: 0 }}
      >
        {[160, 240, 320, 400, 480].map((d, i) => (
          <div
            key={d}
            className="absolute rounded-full border border-[#E4E4E7]"
            style={{
              width: d,
              height: d,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              opacity: 0.6 - i * 0.08,
            }}
          />
        ))}
      </div>

      {/* Phone mockup — centered */}
      <div
        className="absolute left-1/2 top-4 -translate-x-1/2"
        style={{ zIndex: 10 }}
      >
        <div
          className="overflow-hidden shadow-2xl shadow-zinc-900/20"
          style={{
            width: 230,
            borderRadius: 32,
            border: "10px solid #121212",
            backgroundColor: "#121212",
          }}
        >
          <div className="overflow-hidden" style={{ borderRadius: 22, backgroundColor: "#F9FAFB" }}>
            {/* Header */}
            <div className="flex items-center justify-between bg-white px-3 py-3">
              <div className="flex items-center gap-1.5">
                <div className="h-3 w-3 rounded-full bg-[#E4E4E7]" />
                <p className="font-display text-xs font-extrabold text-[#121212]">Menu</p>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-5 w-5 rounded-full bg-[#F9FAFB]" />
                <div className="h-5 w-5 rounded-full bg-[#F9FAFB]" />
              </div>
            </div>

            {/* Category chip */}
            <div className="bg-white px-3 pb-2">
              <span className="rounded-full bg-[#F9FAFB] px-2 py-0.5 text-[9px] font-bold text-[#71717A] ring-1 ring-[#E4E4E7]">
                Breakfast
              </span>
            </div>

            {/* Item list */}
            <div className="divide-y divide-[#F4F4F5] bg-white px-3">
              {ITEMS.map((item) => (
                <div key={item.name} className="flex items-center gap-2 py-2">
                  <div className="h-7 w-7 flex-shrink-0 rounded-xl bg-[#F9FAFB]" />
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-[10px] font-semibold leading-tight truncate ${
                        item.on ? "text-[#121212]" : "text-[#71717A] line-through"
                      }`}
                    >
                      {item.name}
                    </p>
                    <p className="text-[9px] text-[#71717A]">{item.price}</p>
                  </div>
                  <MiniToggle on={item.on} />
                </div>
              ))}
            </div>

            {/* FAB */}
            <div className="flex justify-end bg-white px-3 py-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#121212]">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1v10M1 6h10" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Bottom nav */}
            <div className="flex items-center justify-around border-t border-[#E4E4E7] bg-white py-2.5">
              {[
                { label: "Home", active: false, path: "M6 2L1 7h2v4h6V7h2L6 2z" },
                { label: "Menu", active: true, path: "M3 4h6M3 6.5h6M3 9h4" },
                { label: "Settings", active: false, path: "M6 4a2 2 0 100 4 2 2 0 000-4zM6 1v1.5M6 9.5V11M1 6h1.5M9.5 6H11" },
              ].map(({ label, active, path }) => (
                <div key={label} className="flex flex-col items-center gap-0.5">
                  <svg width="16" height="16" viewBox="0 0 12 12" fill="none" stroke={active ? "#DC2626" : "#71717A"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={path} />
                  </svg>
                  <span className={`text-[8px] font-semibold ${active ? "text-[#DC2626]" : "text-[#71717A]"}`}>{label}</span>
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
          transition={{
            repeat: Infinity,
            duration: tile.float.dur,
            ease: "easeInOut",
            delay: tile.float.delay,
          }}
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

      {/* A-frame QR sign — bottom-left */}
      <motion.div
        className="absolute bottom-6 left-0 z-20"
        style={{ transform: "rotate(-6deg)", transformOrigin: "bottom center" }}
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.2 }}
      >
        <AFrameSign />
      </motion.div>
    </div>
  );
}
