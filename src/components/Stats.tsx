"use client";
import { useEffect, useRef, useState } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const dur = 1600;
      const tick = (t: number) => {
        const p = Math.min((t - start) / dur, 1);
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

// OVO SU PRIMERI: zameni pravim brojevima klijenta
const stats = [
  { to: 500, suffix: "+", label: "Prevezenih ljubimaca" },
  { to: 15, suffix: "+", label: "Zemalja Evrope" },
  { to: 100, suffix: "%", label: "Brige i pažnje" },
  { to: 24, suffix: "/7", label: "Podrška tokom puta" },
];

export default function Stats() {
  return (
    <section className="border-y border-gold/20 bg-gradient-to-b from-ink to-ink-2">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="gold-text font-display text-4xl font-bold sm:text-5xl">
              <Counter to={s.to} suffix={s.suffix} />
            </div>
            <p className="mt-2 text-sm text-white/60">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
