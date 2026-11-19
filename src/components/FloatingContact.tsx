import { Phone, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export default function FloatingContact() {
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Zdravo, interesuje me prevoz ljubimca.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="pulse-ring relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110"
      >
        <MessageCircle />
      </a>
      <a
        href={`tel:${site.phone}`}
        aria-label="Pozovi"
        className="btn-gold flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition hover:scale-110 md:hidden"
      >
        <Phone />
      </a>
    </div>
  );
}
