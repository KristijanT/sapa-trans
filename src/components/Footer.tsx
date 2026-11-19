import Image from "next/image";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center text-sm text-white/50 sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt=""
            width={36}
            height={36}
            className="rounded-full"
          />
          <span>
            {site.name} – {site.tagline}, {site.city}
          </span>
        </div>
        <p>
          © {site.year} {site.name}. Sva prava zadržana.
        </p>
      </div>
    </footer>
  );
}
