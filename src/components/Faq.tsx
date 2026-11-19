import { ChevronDown } from "lucide-react";

const faqs = [
  [
    "Koja dokumenta su potrebna za prevoz u inostranstvo?",
    "Najčešće: čip, važeća vakcinacija protiv besnila, pasoš/zdravstveni sertifikat i dokumenta koja zahteva zemlja odredišta. Uslovi se razlikuju od države do države, pa vam rado pomažemo da proverite šta je tačno potrebno.",
  ],
  [
    "Da li mogu da pratim ljubimca tokom puta?",
    "Redovno vas obaveštavamo o toku putovanja porukama i fotografijama, a o mogućnosti pratnje dogovaramo se unapred.",
  ],
  [
    "Prevozite li i veće pse?",
    "Da. Prilagođavamo boks i raspored u vozilu veličini i temperamentu ljubimca. Pošaljite nam rasu i težinu u upitu.",
  ],
  [
    "Kako se formira cena?",
    "Zavisi od relacije, broja ljubimaca, veličine i datuma. Pošaljite upit i dobijate ponudu bez obaveze.",
  ],
  [
    "Prevozite li više ljubimaca odjednom?",
    "Da, ako su ljubimci iz iste porodice ili se dobro slažu, možemo ih prevesti zajedno.",
  ],
];

export default function Faq() {
  return (
    <section id="faq" className="bg-ink-2 py-20">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="font-display text-center text-3xl font-bold sm:text-4xl">
          Česta <span className="gold-text">pitanja</span>
        </h2>
        <div className="mt-10 space-y-3">
          {faqs.map(([q, a]) => (
            <details
              key={q}
              className="group rounded-xl border border-white/10 bg-ink p-5 open:border-gold/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                {q}
                <ChevronDown
                  className="shrink-0 text-gold transition group-open:rotate-180"
                  size={20}
                />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
