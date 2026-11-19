"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Loader2 } from "lucide-react";
import { site } from "@/lib/site";

type Status = "idle" | "loading" | "ok" | "error";

const field =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/30";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="kontakt" className="bg-cream py-20 text-ink">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Zatražite <span className="text-[#a8842a]">ponudu</span>
          </h2>
          <p className="mt-4 text-ink/70">
            Popunite formu ili nas pozovite. Odgovaramo u najkraćem roku.
          </p>
          <ul className="mt-8 space-y-4">
            <li>
              <a
                href={`tel:${site.phone}`}
                className="flex items-center gap-3 hover:text-[#a8842a]"
              >
                <Phone size={20} className="text-[#a8842a]" />{" "}
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 hover:text-[#a8842a]"
              >
                <Mail size={20} className="text-[#a8842a]" /> {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={20} className="text-[#a8842a]" /> {site.city},
              Srbija
            </li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="grid gap-4 rounded-3xl bg-white p-6 shadow-xl sm:grid-cols-2 sm:p-8 lg:col-span-3"
        >
          <input
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />
          <label className="text-sm font-medium">
            Ime i prezime
            <input
              name="name"
              required
              maxLength={80}
              autoComplete="name"
              className={`${field} mt-1`}
            />
          </label>
          <label className="text-sm font-medium">
            Telefon
            <input
              name="phone"
              type="tel"
              required
              maxLength={30}
              autoComplete="tel"
              className={`${field} mt-1`}
            />
          </label>
          <label className="text-sm font-medium sm:col-span-2">
            Email
            <input
              name="email"
              type="email"
              maxLength={100}
              autoComplete="email"
              className={`${field} mt-1`}
            />
          </label>
          <label className="text-sm font-medium">
            Ljubimac
            <select name="pet" className={`${field} mt-1`}>
              <option>Pas</option>
              <option>Mačka</option>
              <option>Više ljubimaca</option>
              <option>Drugo</option>
            </select>
          </label>
          <label className="text-sm font-medium">
            Željeni datum
            <input name="date" type="date" className={`${field} mt-1`} />
          </label>
          <label className="text-sm font-medium">
            Polazište
            <input
              name="from"
              required
              maxLength={100}
              placeholder="npr. Zrenjanin"
              className={`${field} mt-1`}
            />
          </label>
          <label className="text-sm font-medium">
            Odredište
            <input
              name="to"
              required
              maxLength={100}
              placeholder="npr. Beč, Austrija"
              className={`${field} mt-1`}
            />
          </label>
          <label className="text-sm font-medium sm:col-span-2">
            Poruka
            <textarea
              name="message"
              rows={4}
              maxLength={1000}
              placeholder="Rasa, težina, posebne potrebe..."
              className={`${field} mt-1`}
            />
          </label>

          <button
            disabled={status === "loading"}
            className="btn-gold flex items-center justify-center gap-2 rounded-full py-3.5 font-semibold transition hover:scale-[1.02] disabled:opacity-60 sm:col-span-2"
          >
            {status === "loading" && (
              <Loader2 className="animate-spin" size={18} />
            )}
            {status === "loading" ? "Šaljem..." : "Pošalji upit"}
          </button>
          <p role="status" aria-live="polite" className="text-sm sm:col-span-2">
            {status === "ok" && (
              <span className="text-green-700">
                Hvala! Upit je poslat, javljamo vam se uskoro.
              </span>
            )}
            {status === "error" && (
              <span className="text-red-600">
                Greška pri slanju. Pozovite nas na {site.phoneDisplay}.
              </span>
            )}
          </p>
        </form>
      </div>
    </section>
  );
}
