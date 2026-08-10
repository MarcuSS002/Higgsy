import { useEffect } from "react";
import v2 from "../assets/v2.webm";

const STATS = [
  { value: "10K+", label: "Developers Placed" },
  { value: "94%", label: "Placement Rate" },
  { value: "4.8★", label: "Avg Rating" },
  { value: "120+", label: "Hiring Partners" },
];


export default function Scroll1() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("opacity-100", "translate-y-0");
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black text-zinc-100 font-sans overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden bg-black">

        <div className="pointer-events-none absolute inset-0 z-0 bg-black" />

        {/* Headline */}
        <h1 className="relative z-10 max-w-4xl text-5xl sm:text-6xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-6 text-white">
          Build Real Products
          <br />
          <span className="text-zinc-300">That Actually Matter</span>
        </h1>

        {/* Subheading */}
        <p className="relative z-10 max-w-lg text-base sm:text-lg text-zinc-400 leading-relaxed mb-10">
          Stop watching tutorials. Start shipping. Learn full-stack development
          by building production-grade products from day one.
        </p>

        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <img
            src="https://dfdx9u0psdezh.cloudfront.net/courses/likeyourproducts.webp"
            alt="Hero Image"
            className="absolute -top-20 -left-47 w-56 md:w-60 z-10"
          />

          {/* ── Browser mockup frame around video ── */}
          <div className="relative w-full flex-1">
            {/* Outer glow ring */}
            <div className="absolute -inset-px rounded-[22px] bg-black pointer-events-none" />

            {/* Browser shell */}
            <div className="relative rounded-[20px] overflow-hidden border border-white/10 bg-black shadow-[0_0_60px_rgba(0,0,0,0.35)]">

              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-black border-b border-white/10">
                {/* Traffic lights */}
                <span className="w-3 h-3 rounded-full bg-[#ff5f57] shrink-0" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e] shrink-0" />
                <span className="w-3 h-3 rounded-full bg-[#28c840] shrink-0" />

                {/* URL bar */}
                <div className="flex-1 mx-3 flex items-center gap-2 bg-black border border-white/[0.07] rounded-md px-3 py-1">
                  {/* Lock icon SVG */}
                  <svg width="11" height="12" viewBox="0 0 11 12" fill="none" className="shrink-0 opacity-40">
                    <rect x="1.5" y="5" width="8" height="6" rx="1.5" stroke="#e8f5e8" strokeWidth="1.2" />
                    <path d="M3.5 5V3.5a2 2 0 1 1 4 0V5" stroke="#e8f5e8" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  <span className="text-[11px] text-zinc-500 font-mono tracking-wide truncate">
                    https://your-app.vercel.app
                  </span>
                </div>
              </div>

              {/* Video viewport */}
              <div className="aspect-video w-full overflow-hidden bg-black">
                <video
                  src={v2}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Bottom bar (mimics the screenshot's bottom URL strip) */}
              <div className="flex items-center gap-2 px-4 py-2 bg-black border-t border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-1 text-[10px] font-mono text-zinc-500 tracking-wide">
                  https://your-app.vercel.app
                </span>
              </div>
            </div>
          </div>
        </div>

      {/* Stats bar */}
      <div className="relative z-10 w-full max-w-3xl grid grid-cols-2 sm:grid-cols-4 border border-white/10 rounded-2xl overflow-hidden divide-x divide-white/10">
          {STATS.map((s) => (
            <div key={s.label} className="bg-black/90 py-7 px-4 text-center">
              <div className="text-3xl font-black text-white tracking-tight leading-none mb-1.5">
                {s.value}
              </div>
              <div className="text-[11px] uppercase tracking-widest text-zinc-500 font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}