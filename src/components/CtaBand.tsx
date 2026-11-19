import Image from "next/image";
import Reveal from "./Reveal";
import Paw from "./Paw";
import { site } from "@/lib/site";
import { Phone } from "lucide-react";

export default function CtaBand() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="relative grid items-center gap-8 overflow-hidden rounded-[2rem] border border-gold/30 bg-gradient-to-br from-ink-2 via-ink to-ink-2 p-8 sm:p-12 md:grid-cols-5">
            <Paw className="pointer-events-none absolute -right-10 -bottom-10 w-72 rotate-12 text-gold/5" />
            <div className="relative md:col-span-3">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Planirate put?{" "}
                <span className="gold-text">Mi vozimo vašeg ljubimca.</span>
              </h2>
              <p className="mt-4 max-w-lg text-white/65">
                Javite nam polazište i odredište i već danas dobijate ponudu.
                Bez obaveze, bez stresa.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#kontakt"
                  className="btn-gold rounded-full px-8 py-3.5 font-semibold"
                >
                  Zatražite ponudu
                </a>
                <a
                  href={`tel:${site.phone}`}
                  className="flex items-center gap-2 rounded-full border border-gold/50 px-8 py-3.5 font-semibold text-gold-light transition hover:bg-gold/10"
                >
                  <Phone size={18} /> {site.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="relative md:col-span-2">
              <div className="float-slow overflow-hidden rounded-2xl border border-gold/30 shadow-2xl shadow-gold/10">
                <Image
                  src="/van.jpg"
                  alt="Šapa Trans kombi na putu"
                  width={446}
                  height={530}
                  sizes="(min-width:768px) 340px, 100vw"
                  className="h-64 w-full object-cover md:h-72"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
