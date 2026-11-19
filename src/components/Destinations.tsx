import { MapPin } from "lucide-react";
import Reveal from "./Reveal";

const row1 = [
  "Srbija",
  "Hrvatska",
  "Slovenija",
  "Austrija",
  "Nemačka",
  "Mađarska",
  "Rumunija",
  "Bugarska",
];
const row2 = [
  "Crna Gora",
  "BiH",
  "S. Makedonija",
  "Grčka",
  "Italija",
  "Švajcarska",
  "Francuska",
  "Holandija",
];

function Row({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const list = [...items, ...items];
  return (
    <div className="marquee-wrap overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
      <ul className={`marquee gap-3 py-1.5 ${reverse ? "reverse" : ""}`}>
        {list.map((c, i) => (
          <li
            key={i}
            aria-hidden={i >= items.length}
            className="mr-3 flex shrink-0 items-center gap-2 rounded-full border border-[#d4af37]/50 bg-white px-6 py-3 text-sm font-medium shadow-sm"
          >
            <MapPin size={15} className="text-[#a8842a]" /> {c}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Destinations() {
  return (
    <section
      id="destinacije"
      className="overflow-hidden bg-cream py-24 text-ink"
    >
      <div className="mx-auto max-w-6xl px-4 text-center">
        <Reveal>
          <p className="text-xs tracking-[0.3em] text-[#a8842a] uppercase">
            Destinacije
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold sm:text-5xl">
            Prevozimo širom{" "}
            <span className="text-[#a8842a]">Srbije i Evrope</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink/70">
            Polazimo iz Zrenjanina, a vozimo gde god je potrebno. Ako vaše
            odredište nije na listi, pišite nam, dogovorićemo se.
          </p>
        </Reveal>
      </div>
      <div className="mt-12 space-y-3">
        <Row items={row1} />
        <Row items={row2} reverse />
      </div>
    </section>
  );
}
