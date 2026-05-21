"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type AudienceMode = "menu" | "ordering";

type AudienceModeContextValue = {
  mode: AudienceMode;
  setMode: (mode: AudienceMode) => void;
};

const AudienceModeContext = createContext<AudienceModeContextValue | null>(null);

const STORAGE_KEY = "khao-audience-mode";

export function AudienceModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<AudienceMode>("menu");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "menu" || saved === "ordering") setModeState(saved);
  }, []);

  const value = useMemo(
    () => ({
      mode,
      setMode: (nextMode: AudienceMode) => {
        setModeState(nextMode);
        window.localStorage.setItem(STORAGE_KEY, nextMode);
      },
    }),
    [mode],
  );

  return (
    <AudienceModeContext.Provider value={value}>
      {children}
    </AudienceModeContext.Provider>
  );
}

export function useAudienceMode() {
  const ctx = useContext(AudienceModeContext);
  if (!ctx) throw new Error("useAudienceMode must be used inside AudienceModeProvider");
  return ctx;
}

// ── Big card-style toggle ──────────────────────────────────────────────────
const options: Array<{
  mode: AudienceMode;
  label: string;
  subtitle: string;
  icon: string;
}> = [
  {
    mode: "menu",
    label: "Just Menus",
    subtitle: "Customers scan & browse",
    icon: "◻",
  },
  {
    mode: "ordering",
    label: "Full Ordering",
    subtitle: "Customers scan & order",
    icon: "⬛",
  },
];

export function AudienceModeToggle() {
  const { mode, setMode } = useAudienceMode();

  return (
    <div
      className="inline-grid grid-cols-2 gap-1 rounded-2xl bg-[#F9FAFB] ring-1 ring-[#E4E4E7] p-1.5"
      role="tablist"
      aria-label="Choose business type"
    >
      {options.map((opt) => {
        const active = mode === opt.mode;
        return (
          <button
            key={opt.mode}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => setMode(opt.mode)}
            className={`relative rounded-xl px-5 py-3 text-left transition-all duration-200 ${
              active
                ? "bg-white shadow-sm ring-1 ring-[#E4E4E7]"
                : "hover:bg-white/60"
            }`}
          >
            <p className={`text-sm font-bold leading-none transition-colors ${active ? "text-[#121212]" : "text-[#71717A]"}`}>
              {opt.label}
            </p>
            <p className={`mt-1 text-xs transition-colors ${active ? "text-[#DC2626]" : "text-[#71717A]"}`}>
              {opt.subtitle}
            </p>
            {active && (
              <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-[#DC2626]" />
            )}
          </button>
        );
      })}
    </div>
  );
}

// ── Persona chip row ───────────────────────────────────────────────────────
const personas: Array<{ emoji: string; label: string; mode: AudienceMode }> = [
  { emoji: "🛻", label: "Food Truck", mode: "menu" },
  { emoji: "☕", label: "Cafe", mode: "menu" },
  { emoji: "🥐", label: "Bakery", mode: "menu" },
  { emoji: "🍛", label: "Food Stall", mode: "menu" },
  { emoji: "🍽", label: "Restaurant", mode: "ordering" },
  { emoji: "🍺", label: "Pub / Bar", mode: "ordering" },
];

export function PersonaSelector() {
  const { mode, setMode } = useAudienceMode();

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
      {personas.map((p) => {
        const active = mode === p.mode;
        return (
          <button
            key={p.label}
            type="button"
            onClick={() => setMode(p.mode)}
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 ${
              active
                ? "bg-[#121212] text-white shadow-sm"
                : "bg-[#F9FAFB] text-[#71717A] ring-1 ring-[#E4E4E7] hover:ring-[#121212] hover:text-[#121212]"
            }`}
          >
            <span>{p.emoji}</span>
            {p.label}
          </button>
        );
      })}
    </div>
  );
}

// ── Compact toggle for use inside other sections ───────────────────────────
export function AudienceModeToggleCompact() {
  const { mode, setMode } = useAudienceMode();

  return (
    <div className="inline-flex rounded-full border border-[#E4E4E7] bg-[#F9FAFB] p-1" role="tablist">
      {options.map((opt) => {
        const active = mode === opt.mode;
        return (
          <button
            key={opt.mode}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => setMode(opt.mode)}
            className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
              active ? "bg-[#121212] text-white shadow-sm" : "text-[#71717A] hover:text-[#121212]"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
