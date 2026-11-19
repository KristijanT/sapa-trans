import Image from "next/image";
import { ShieldCheck, HeartHandshake, Globe2, Star } from "lucide-react";
import Paw from "./Paw";

const paws = [
  { l: "6%", s: "28px", t: "16s", d: "0s" },
  { l: "18%", s: "40px", t: "22s", d: "4s" },
  { l: "32%", s: "22px", t: "18s", d: "9s" },
  { l: "47%", s: "34px", t: "24s", d: "2s" },
  { l: "61%", s: "26px", t: "19s", d: "7s" },
  { l: "74%", s: "44px", t: "26s", d: "11s" },
  { l: "86%", s: "30px", t: "17s", d: "5s" },
  { l: "95%", s: "22px", t: "21s", d: "13s" },
];

const perks = [
  { Icon: ShieldCheck, t: "Siguran transport" },
  { Icon: HeartHandshake, t: "Nega tokom puta" },
  { Icon: Globe2, t: "Cela Evropa" },
];

export default function Hero() {
  return (
    <section className="relative -mt-20 overflow-hidden pt-20">
      {/* pozadina */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gold/15 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-0 h-[400px] w-[500px] rounded-full bg-[#b8921f]/10 blur-[110px]" />
        {paws.map((p, i) => (
          <Paw
            key={i}
            className="paw-drift"
            style={
              {
                "--l": p.l,
                "--s": p.s,
                "--t": p.t,
                "--d": p.d,
              } as React.CSSProperties
            }
          />
        ))}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#0a0a0a_100%)]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 py-16 md:grid-cols-2 md:py-28">
        <div>
          <span className="fade-up inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 text-xs tracking-widest text-gold-light uppercase">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            Zrenjanin • Srbija • Evropa
          </span>

          <h1 className="fade-up font-display mt-6 text-4xl leading-[1.1] font-bold [--delay:100ms] sm:text-5xl lg:text-6xl">
            Vaš ljubimac putuje <span className="gold-text">sigurno</span>, kao
            član porodice.
          </h1>

          <p className="fade-up mt-6 max-w-lg text-lg text-white/70 [--delay:200ms]">
            Siguran, human i profesionalan prevoz pasa i mačaka. Od vizite kod
            veterinara do selidbe u drugu državu, brinemo o njima na svakom
            kilometru.
          </p>

          <div className="fade-up mt-8 flex flex-wrap gap-4 [--delay:300ms]">
            <a
              href="#kontakt"
              className="btn-gold rounded-full px-8 py-3.5 font-semibold shadow-lg shadow-gold/25 transition hover:scale-[1.04]"
            >
              Zatražite ponudu
            </a>
            <a
              href="#usluge"
              className="rounded-full border border-gold/50 px-8 py-3.5 font-semibold text-gold-light backdrop-blur transition hover:bg-gold/10"
            >
              Naše usluge
            </a>
          </div>

          <ul className="fade-up mt-10 grid grid-cols-1 gap-3 text-sm text-white/80 [--delay:400ms] sm:grid-cols-3">
            {perks.map(({ Icon, t }) => (
              <li key={t} className="flex items-center gap-2">
                <span className="rounded-lg border border-gold/30 bg-gold/5 p-1.5 text-gold">
                  <Icon size={16} />
                </span>{" "}
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="fade-up relative mx-auto w-full max-w-md [--delay:200ms] md:max-w-none">
          {/* rotirajuci zlatni okvir */}
          <div className="relative overflow-hidden rounded-[2rem] p-[2px] shadow-2xl shadow-gold/20">
            <div className="spin-slow absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_0%,#f1d98a_15%,transparent_35%,transparent_60%,#d4af37_75%,transparent_90%)]" />
            <div className="relative overflow-hidden rounded-[calc(2rem-2px)] bg-ink">
              <Image
                src="/hero.jpg"
                alt="Zlatni retriver i mačka u vozilu"
                width={520}
                height={580}
                priority
                sizes="(min-width:768px) 520px, 90vw"
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            </div>
          </div>

          {/* lebdece kartice */}
          <div className="float-slow absolute -top-5 -right-3 flex items-center gap-2 rounded-2xl border border-gold/40 bg-ink/80 px-4 py-3 text-sm shadow-xl backdrop-blur-md sm:-right-6">
            <Globe2 className="text-gold" size={20} />
            <div>
              <p className="font-semibold">Međunarodni prevoz</p>
              <p className="text-xs text-white/60">Cela Evropa</p>
            </div>
          </div>
          <div className="float-slower absolute -bottom-6 -left-3 flex items-center gap-3 rounded-2xl border border-gold/40 bg-ink/80 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-8">
            <div className="flex text-gold">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <p className="text-xs text-white/70">
              Brižni vozači,
              <br />
              srećni ljubimci
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
