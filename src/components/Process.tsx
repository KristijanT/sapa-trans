import Reveal from "./Reveal";

const steps = [
  [
    "Pošaljite upit",
    "Recite nam vrstu i veličinu ljubimca, polazište, odredište i datum.",
  ],
  [
    "Dobijate ponudu",
    "Brzo odgovaramo sa jasnom cenom i svim detaljima putovanja.",
  ],
  [
    "Preuzimanje",
    "Dolazimo na vašu adresu i ljubimca smeštamo u bezbedan, udoban boks.",
  ],
  [
    "Isporuka",
    "Redovno vas obaveštavamo tokom puta, a ljubimca predajemo na odredištu.",
  ],
];

export default function Process() {
  return (
    <section id="proces" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="text-center text-xs tracking-[0.3em] text-gold uppercase">
            Jednostavno
          </p>
          <h2 className="font-display mt-3 text-center text-3xl font-bold sm:text-5xl">
            Kako <span className="gold-text">radimo</span>
          </h2>
        </Reveal>

        <ol className="relative mt-16 grid gap-10 lg:grid-cols-4">
          {/* linija koja povezuje korake */}
          <div
            className="absolute top-8 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent lg:block"
            aria-hidden="true"
          />
          {steps.map(([t, d], i) => (
            <li key={t}>
              <Reveal delay={i * 120} className="text-center">
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 bg-ink text-2xl font-bold shadow-lg shadow-gold/20">
                  <span className="gold-text font-display">{i + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{t}</h3>
                <p className="mx-auto mt-2 max-w-[16rem] text-sm text-white/60">
                  {d}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
