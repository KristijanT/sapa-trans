"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { site } from "@/lib/site";

const nav = [
  ["Usluge", "#usluge"],
  ["Destinacije", "#destinacije"],
  ["Kako radimo", "#proces"],
  ["Pitanja", "#faq"],
  ["Kontakt", "#kontakt"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled ? "border-gold/20 bg-ink/80 shadow-lg shadow-black/40 backdrop-blur-xl" : "border-transparent bg-transparent"}`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 transition-all duration-300 ${scrolled ? "h-16" : "h-20"}`}
      >
        <a
          href="#"
          className="group flex items-center gap-3"
          aria-label="Šapa Trans početna"
        >
          <Image
            src="/logo.png"
            alt=""
            width={48}
            height={48}
            priority
            className="rounded-full transition group-hover:rotate-[-8deg] group-hover:scale-110"
          />
          <span className="font-display text-xl font-bold">
            Šapa <span className="gold-text">Trans</span>
          </span>
        </a>

        <nav className="hidden gap-8 md:flex" aria-label="Glavna navigacija">
          {nav.map(([l, h]) => (
            <a
              key={h}
              href={h}
              className="group relative py-1 text-sm text-white/80 transition hover:text-gold-light"
            >
              {l}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <a
          href={`tel:${site.phone}`}
          className="btn-gold hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition hover:scale-105 md:flex"
        >
          <Phone size={16} /> {site.phoneDisplay}
        </a>

        <button
          className="p-2 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Zatvori meni" : "Otvori meni"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <div
        className={`grid overflow-hidden bg-ink/95 backdrop-blur-xl transition-all duration-300 md:hidden ${open ? "grid-rows-[1fr] border-t border-gold/20" : "grid-rows-[0fr]"}`}
      >
        <nav className="min-h-0 px-4" aria-label="Mobilna navigacija">
          <div className="pb-4">
            {nav.map(([l, h]) => (
              <a
                key={h}
                href={h}
                onClick={() => setOpen(false)}
                className="block border-b border-white/5 py-3 text-white/90"
              >
                {l}
              </a>
            ))}
            <a
              href={`tel:${site.phone}`}
              className="btn-gold mt-4 flex items-center justify-center gap-2 rounded-full py-3 font-semibold"
            >
              <Phone size={16} /> Pozovite nas
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
