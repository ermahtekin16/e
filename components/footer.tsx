"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Instagram } from "lucide-react";

export function Footer() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <footer
      ref={ref}
      className="relative py-24 md:py-40 px-8 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Section divider */}
      <div className="absolute top-0 left-8 md:left-16 lg:left-24 right-8 md:right-16 lg:right-24 h-px bg-foreground/10" />

      <div className="max-w-7xl mx-auto">
        {/* Giant brand watermark */}
        <div className="overflow-hidden">
          <h2
            className="font-serif text-[clamp(4rem,12vw,12rem)] text-foreground leading-[0.82] tracking-[-0.03em]"
            style={{
              transform: isVisible ? "translateY(0)" : "translateY(100%)",
              transition: "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
            }}
          >
            EMRAH
          </h2>
        </div>
        <div className="overflow-hidden -mt-1">
          <h2
            className="font-serif text-[clamp(4rem,12vw,12rem)] text-foreground/[0.06] leading-[0.82] tracking-[-0.03em]"
            style={{
              transform: isVisible ? "translateY(0)" : "translateY(100%)",
              transition: "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.25s",
            }}
          >
            TEKIN
          </h2>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s",
          }}
        >
          <a
            href="https://instagram.com/emrahtekin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-foreground/30 hover:text-foreground/70 transition-colors duration-500 group"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
            <span className="text-[10px] tracking-[0.3em] font-sans uppercase">
              @emrahtekin
            </span>
            <div className="h-px w-0 group-hover:w-8 bg-foreground/30 transition-all duration-500" />
          </a>

          <p className="text-[10px] tracking-[0.25em] text-foreground/20 font-sans">
            {"\u00A9 2026 EMRAH TEKIN. T\u00FCm haklar\u0131 sakl\u0131d\u0131r."}
          </p>
        </div>
      </div>
    </footer>
  );
}
