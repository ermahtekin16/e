"use client";

import { useEffect, useState } from "react";

export function Hero() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 300),
      setTimeout(() => setStep(2), 800),
      setTimeout(() => setStep(3), 1300),
      setTimeout(() => setStep(4), 1800),
      setTimeout(() => setStep(5), 2300),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-background">
      {/* Film grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==")`,
        }}
      />

      {/* Top editorial bar */}
      <nav
        className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-8 md:px-16 lg:px-24 transition-all duration-[1.2s] ease-out"
        style={{
          opacity: step >= 1 ? 1 : 0,
          transform: step >= 1 ? "translateY(0)" : "translateY(-30px)",
        }}
      >
        <div className="flex items-center gap-4">
          <div className="w-8 h-px bg-foreground/30" />
          <span className="text-[10px] tracking-[0.4em] text-foreground/50 font-sans uppercase">
            Est. Bursa
          </span>
        </div>
        <span className="text-[10px] tracking-[0.4em] text-foreground/50 font-sans uppercase hidden md:block">
          Luxury Hair Artist
        </span>
        <div className="flex items-center gap-4">
          <span className="text-[10px] tracking-[0.4em] text-foreground/50 font-sans uppercase hidden sm:block">
            {"T\u00FCrkiye"}
          </span>
          <div className="w-8 h-px bg-foreground/30" />
        </div>
      </nav>

      {/* Main content - broken grid */}
      <div className="w-full h-full relative">
        {/* VERTICAL NAME - left side, rotated */}
        <div
          className="absolute left-6 md:left-12 lg:left-20 top-1/2 -translate-y-1/2 z-10 transition-all duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: step >= 2 ? 1 : 0,
            transform: step >= 2
              ? "translateY(-50%) translateX(0)"
              : "translateY(-50%) translateX(-80px)",
          }}
        >
          <div className="lg:writing-vertical-lr">
            <h1 className="font-serif text-foreground select-none">
              <span
                className="block text-[clamp(3.5rem,10vw,9rem)] tracking-[-0.02em] leading-[0.82]"
                style={{
                  WebkitTextStroke: "1px hsl(0 0% 100%)",
                  color: "transparent",
                }}
              >
                EMRAH
              </span>
              <span className="block text-[clamp(3.5rem,10vw,9rem)] tracking-[-0.02em] leading-[0.82]">
                TEKIN
              </span>
            </h1>
          </div>
        </div>

        {/* HERO IMAGE - offset right, overlapping name */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] md:w-[45%] lg:w-[40%] z-0 transition-all duration-[1.6s] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: step >= 4 ? 1 : 0,
            transform: step >= 4
              ? "translateY(-50%) scale(1)"
              : "translateY(-45%) scale(0.93)",
          }}
        >
          <div className="relative">
            {/* Main image */}
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="/placeholder.svg?height=1000&width=750"
                alt="Emrah Tekin - Luxury Hair Art"
                className="w-full h-full object-cover grayscale"
              />
              {/* Subtle vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/20 pointer-events-none" />
            </div>

            {/* Offset decorative frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-foreground/10 pointer-events-none" />

            {/* Editorial caption overlapping bottom */}
            <div className="absolute -bottom-6 -left-8 md:-left-20 lg:-left-32 z-10">
              <p
                className="text-[10px] tracking-[0.35em] text-foreground/40 font-sans uppercase transition-all duration-1000 delay-700"
                style={{
                  opacity: step >= 5 ? 1 : 0,
                  transform: step >= 5 ? "translateX(0)" : "translateX(-20px)",
                }}
              >
                {"Vol. I \u2014 The Art of Precision"}
              </p>
            </div>
          </div>
        </div>

        {/* SLOGAN - overlapping in bottom-left, on top of everything */}
        <div
          className="absolute bottom-24 md:bottom-32 left-8 md:left-16 lg:left-24 z-20 transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: step >= 3 ? 1 : 0,
            transform: step >= 3 ? "translateY(0)" : "translateY(40px)",
          }}
        >
          <div className="flex items-center gap-6">
            <div
              className="h-px bg-foreground/40 transition-all duration-[1.5s] ease-out delay-500"
              style={{ width: step >= 3 ? "60px" : "0px" }}
            />
            <p className="text-sm md:text-base tracking-[0.25em] text-foreground/70 font-sans uppercase">
              {"Sanat\u0131n Keskin Hatt\u0131"}
            </p>
          </div>
        </div>

        {/* ISSUE NUMBER - editorial detail, top right of image */}
        <div
          className="absolute top-24 md:top-32 right-8 md:right-16 lg:right-24 z-20 transition-all duration-1000 delay-1000"
          style={{
            opacity: step >= 5 ? 0.4 : 0,
          }}
        >
          <span className="text-[10px] tracking-[0.3em] text-foreground/40 font-sans uppercase">
            No. 001
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 transition-all duration-1000"
        style={{
          opacity: step >= 5 ? 0.4 : 0,
          transform: step >= 5 ? "translateY(0)" : "translateY(15px)",
        }}
      >
        <span className="text-[9px] tracking-[0.4em] text-foreground/40 uppercase font-sans">
          Scroll
        </span>
        <div className="w-px h-10 relative overflow-hidden">
          <div className="w-full h-full bg-foreground/20" />
          <div className="absolute top-0 left-0 w-full h-1/2 bg-foreground/60 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
