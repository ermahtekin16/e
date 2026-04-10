"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useParallax } from "@/hooks/use-parallax";

export function Philosophy() {
  const { ref: sectionRef, isVisible } = useScrollReveal(0.15);
  const { ref: parallaxRef, offset } = useParallax(0.08);

  return (
    <section
      ref={sectionRef}
      className="relative py-40 md:py-56 px-8 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Section divider */}
      <div className="absolute top-0 left-8 md:left-16 lg:left-24 right-8 md:right-16 lg:right-24 h-px bg-foreground/10" />

      {/* Large background watermark text */}
      <div
        ref={parallaxRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{ transform: `translate(-50%, calc(-50% + ${offset}px))` }}
      >
        <span className="font-serif text-[clamp(8rem,22vw,20rem)] text-foreground/[0.02] leading-none tracking-tight block whitespace-nowrap">
          FELSEFE
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-8">
          {/* Left column */}
          <div className="lg:col-span-5">
            {/* Label with reveal */}
            <div
              className="overflow-hidden"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: "opacity 0.6s ease 0.1s",
              }}
            >
              <span
                className="text-[10px] tracking-[0.4em] text-foreground/40 font-sans uppercase block"
                style={{
                  transform: isVisible ? "translateY(0)" : "translateY(100%)",
                  transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
                }}
              >
                Felsefe
              </span>
            </div>

            {/* Large heading with mask reveal */}
            <div className="mt-8 overflow-hidden">
              <h2
                className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-[0.9] tracking-[-0.02em]"
                style={{
                  transform: isVisible ? "translateY(0)" : "translateY(100%)",
                  transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
                }}
              >
                {"Sanat\u0131n"}
              </h2>
            </div>
            <div className="overflow-hidden">
              <h2
                className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-[0.9] tracking-[-0.02em]"
                style={{
                  transform: isVisible ? "translateY(0)" : "translateY(100%)",
                  transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.35s",
                }}
              >
                Keskin
              </h2>
            </div>
            <div className="overflow-hidden">
              <h2
                className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground/30 leading-[0.9] tracking-[-0.02em] italic"
                style={{
                  transform: isVisible ? "translateY(0)" : "translateY(100%)",
                  transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s",
                }}
              >
                {"Hatt\u0131"}
              </h2>
            </div>

            {/* Accent line */}
            <div
              className="mt-10 h-px bg-foreground/30 transition-all duration-[1.5s] ease-out"
              style={{
                width: isVisible ? "80px" : "0px",
                transitionDelay: "0.7s",
              }}
            />
          </div>

          {/* Right column - Body text */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-end">
            <div
              className="overflow-hidden"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: "opacity 0.8s ease 0.6s",
              }}
            >
              <p
                className="text-lg md:text-xl text-foreground/60 leading-[1.7] font-sans"
                style={{
                  transform: isVisible ? "translateY(0)" : "translateY(40px)",
                  transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s",
                }}
              >
                {"Her kesim bir imzad\u0131r. Her dokunu\u015F, y\u0131llar\u0131n birikimiyle \u015Fekillenen bir sanat eserinin son darbesidir. Emrah Tekin, sa\u00E7\u0131 bir malzeme olarak de\u011Fil, bir ifade arac\u0131 olarak g\u00F6r\u00FCr."}
              </p>
            </div>

            <div
              className="overflow-hidden mt-8"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: "opacity 0.8s ease 0.8s",
              }}
            >
              <p
                className="text-lg md:text-xl text-foreground/60 leading-[1.7] font-sans"
                style={{
                  transform: isVisible ? "translateY(0)" : "translateY(40px)",
                  transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s",
                }}
              >
                {"L\u00FCks, g\u00F6r\u00FCn\u00FCr olan\u0131n \u00F6tesindedir. Detayda gizlenir, his ile tamamlan\u0131r. Bursa\u2019n\u0131n kalbinde, uluslararas\u0131 standartlarda bir deneyim sizi bekliyor."}
              </p>
            </div>

            {/* Signature detail */}
            <div
              className="mt-14 flex items-center gap-6"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1s",
              }}
            >
              <div className="h-px w-12 bg-foreground/20" />
              <span className="text-[10px] tracking-[0.35em] text-foreground/30 font-sans uppercase">
                {"Since 2010 \u2014 Bursa, T\u00FCrkiye"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
