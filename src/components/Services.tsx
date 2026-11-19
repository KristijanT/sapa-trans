import {
  Stethoscope,
  Home,
  Globe2,
  Route,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";

const items = [
  {
    icon: Stethoscope,
    t: "Prevoz do veterinara",
    d: "Pregledi, vakcinacije, operacije i kontrole. Stižemo na vreme i bez stresa.",
  },
  {
    icon: Home,
    t: "Selidbe sa ljubimcima",
    d: "Vi se bavite selidbom, mi bezbedno prebacujemo vašeg ljubimca na novu adresu.",
  },
  {
    icon: Globe2,
    t: "Međunarodni prevoz",
    d: "Transport do i iz inostranstva, uz pomoć oko dokumentacije i graničnih procedura.",
  },
  {
    icon: Route,
    t: "Prevoz između gradova",
    d: "Door-to-door prevoz po Srbiji: do uzgajivačnice, novog doma ili aerodroma.",
  },
  {
    icon: ShieldCheck,
    t: "Siguran i udoban transport",
    d: "Klimatizovano vozilo, bezbedni boksovi i pauze prilagođene ljubimcu.",
  },
  {
    icon: HeartHandshake,
    t: "Briga i pažnja",
    d: "Redovno vas obaveštavamo o putovanju. Vaš ljubimac nikada nije samo 'teret'.",
  },
];

export default function Services() {
  return (
    <section id="usluge" className="relative bg-ink-2 py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="text-center text-xs tracking-[0.3em] text-gold uppercase">
            Šta radimo
          </p>
          <h2 className="font-display mt-3 text-center text-3xl font-bold sm:text-5xl">
            Naše <span className="gold-text">usluge</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-white/60">
            Sve što je potrebno da vaš ljubimac stigne na cilj miran i bezbedan.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={(i % 3) * 100}>
              <SpotlightCard className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-7 transition duration-300 hover:-translate-y-2 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/10">
                <div className="mb-5 inline-flex rounded-xl border border-gold/30 bg-gold/5 p-3.5 text-gold transition duration-300 group-hover:scale-110 group-hover:rotate-[-6deg] group-hover:bg-gold group-hover:text-ink">
                  <Icon size={26} />
                </div>
                <h3 className="text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {d}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
