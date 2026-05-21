"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.devianlabs.khao";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E4E4E7]">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-display font-extrabold text-xl tracking-tight text-[#121212]">
          <Image
            src="/logo.png"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7 rounded-lg"
            priority
          />
          Khao
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#71717A]">
          <Link href="/#features" className="hover:text-[#121212] transition-colors">Features</Link>
          <Link href="/#how-it-works" className="hover:text-[#121212] transition-colors">How it works</Link>
          <Link href="/#pricing" className="hover:text-[#121212] transition-colors">Pricing</Link>
          <Link href="/contact" className="hover:text-[#121212] transition-colors">Contact</Link>
        </div>

        <div className="hidden md:flex items-center">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-[#DC2626] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#b91c1c] transition-colors"
          >
            Get Android App
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-[#71717A] hover:bg-[#F9FAFB] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-t border-[#E4E4E7] bg-white px-6 py-4 flex flex-col gap-4 text-sm font-medium text-[#71717A]">
          <Link href="/#features" onClick={() => setMobileOpen(false)} className="hover:text-[#DC2626] transition-colors">Features</Link>
          <Link href="/#how-it-works" onClick={() => setMobileOpen(false)} className="hover:text-[#DC2626] transition-colors">How it works</Link>
          <Link href="/#pricing" onClick={() => setMobileOpen(false)} className="hover:text-[#DC2626] transition-colors">Pricing</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="hover:text-[#DC2626] transition-colors">Contact</Link>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-2 rounded-xl bg-[#DC2626] px-5 py-3 text-sm font-semibold text-white text-center"
          >
            Get Android App
          </a>
        </div>
      )}
    </header>
  );
}
