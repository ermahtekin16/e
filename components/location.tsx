"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { MapPin, Clock } from "lucide-react";

export function Location() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section
      ref={ref}
      className="relative py-40 md:py-56 px-8 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Section divider */}
      <div className="absolute top-0 left-8 md:left-16 lg:left-24 right-8 md:right-16 lg:right-24 h-px bg-foreground/10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-8">
        {/* Left - Title & Info */}
        <div className="lg:col-span-5">
          {/* Label */}
          <div className="overflow-hidden">
            <span
              className="text-[10px] tracking-[0.4em] text-foreground/40 font-sans uppercase block"
              style={{
                transform: isVisible ? "translateY(0)" : "translateY(100%)",
                transition:
                  "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
              }}
            >
              Konum
            </span>
          </div>

          {/* Title with mask reveal */}
          <div className="mt-8 overflow-hidden">
            <h2
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-[0.9] tracking-[-0.02em]"
              style={{
                transform: isVisible ? "translateY(0)" : "translateY(100%)",
                transition:
                  "transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
              }}
            >
              The Studio
            </h2>
          </div>
          <div className="overflow-hidden">
            <p
              className="font-serif text-3xl md:text-4xl text-foreground/25 italic leading-[0.9]"
              style={{
                transform: isVisible ? "translateY(0)" : "translateY(100%)",
                transition:
                  "transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.35s",
              }}
            >
              Bursa
            </p>
          </div>

          {/* Address & Hours */}
          <div
            className="mt-14 flex flex-col gap-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(25px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s",
            }}
          >
            {/* Address */}
            <div className="flex items-start gap-5">
              <MapPin className="w-4 h-4 text-foreground/30 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-foreground/50 font-sans leading-relaxed">
                  {"Osmangazi, Fevzi \u00C7akmak Caddesi"}
                </p>
                <p className="text-sm text-foreground/50 font-sans leading-relaxed">
                  {"No: 42, Bursa / T\u00FCrkiye"}
                </p>
              </div>
            </div>

            <div className="h-px w-full bg-foreground/8" />

            {/* Hours */}
            <div className="flex items-start gap-5">
              <Clock className="w-4 h-4 text-foreground/30 mt-1 flex-shrink-0" />
              <div className="flex flex-col gap-3 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.25em] text-foreground/30 font-sans uppercase">
                    {"Pazartesi \u2013 Cumartesi"}
                  </span>
                  <span className="text-sm text-foreground/50 font-sans">
                    10:00 - 20:00
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.25em] text-foreground/30 font-sans uppercase">
                    Pazar
                  </span>
                  <span className="text-sm text-foreground/30 font-sans italic">
                    {"Randevu ile"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Minimal Map Visual */}
        <div className="lg:col-span-6 lg:col-start-7">
          <div
            className="relative"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? "translateY(0) scale(1)"
                : "translateY(40px) scale(0.97)",
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
            }}
          >
            {/* Map */}
            <div className="relative aspect-[4/3] bg-secondary/50 overflow-hidden">
              <svg
                viewBox="0 0 400 300"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Subtle grid */}
                {[75, 150, 225].map((y) => (
                  <line
                    key={`h-${y}`}
                    x1="0"
                    y1={y}
                    x2="400"
                    y2={y}
                    stroke="hsl(0 0% 15%)"
                    strokeWidth="0.5"
                  />
                ))}
                {[100, 200, 300].map((x) => (
                  <line
                    key={`v-${x}`}
                    x1={x}
                    y1="0"
                    x2={x}
                    y2="300"
                    stroke="hsl(0 0% 15%)"
                    strokeWidth="0.5"
                  />
                ))}

                {/* Abstract roads */}
                <path
                  d="M50,0 Q200,150 350,300"
                  stroke="hsl(0 0% 22%)"
                  strokeWidth="1.5"
                  fill="none"
                />
                <line
                  x1="0"
                  y1="140"
                  x2="400"
                  y2="160"
                  stroke="hsl(0 0% 22%)"
                  strokeWidth="2"
                />
                <path
                  d="M180,0 Q200,150 220,300"
                  stroke="hsl(0 0% 18%)"
                  strokeWidth="1"
                  fill="none"
                />

                {/* Location marker */}
                <circle
                  cx="200"
                  cy="150"
                  r="5"
                  fill="hsl(0 0% 100%)"
                />
                <circle cx="200" cy="150" r="2" fill="hsl(0 0% 0%)" />

                {/* Pulse ring */}
                <circle
                  cx="200"
                  cy="150"
                  r="12"
                  fill="none"
                  stroke="hsl(0 0% 100%)"
                  strokeWidth="0.5"
                  opacity="0.3"
                >
                  <animate
                    attributeName="r"
                    from="8"
                    to="28"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.4"
                    to="0"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>

              {/* Coordinates */}
              <div className="absolute bottom-4 right-4">
                <span className="text-[9px] tracking-[0.25em] text-foreground/20 font-sans">
                  {"40.1885\u00B0N, 29.0610\u00B0E"}
                </span>
              </div>
            </div>

            {/* Offset frame */}
            <div className="absolute -bottom-4 -left-4 w-full h-full border border-foreground/5 pointer-events-none hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
