"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useParallax } from "@/hooks/use-parallax";

function GalleryImage({
  src,
  alt,
  aspect,
  className,
  delay = 0,
  isVisible,
  caption,
  parallaxOffset,
}: {
  src: string;
  alt: string;
  aspect: string;
  className?: string;
  delay?: number;
  isVisible: boolean;
  caption?: string;
  parallaxOffset?: number;
}) {
  return (
    <div
      className={`relative overflow-visible group ${className ?? ""}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? `translateY(${parallaxOffset ?? 0}px) scale(1)`
          : "translateY(60px) scale(0.96)",
        transition: `opacity 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      <div className={`relative ${aspect} overflow-hidden`}>
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.06] transition-all duration-[1.2s] ease-out"
        />
        {/* Hover vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      {/* Caption */}
      {caption && (
        <div className="mt-4 flex items-center gap-4">
          <div className="h-px w-6 bg-foreground/20" />
          <p className="text-[10px] tracking-[0.35em] text-foreground/30 font-sans uppercase">
            {caption}
          </p>
        </div>
      )}
    </div>
  );
}

export function EditorialGallery() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.1);
  const { ref: row1Ref, isVisible: row1Visible } = useScrollReveal(0.05);
  const { ref: row2Ref, isVisible: row2Visible } = useScrollReveal(0.05);
  const { ref: parallax1Ref, offset: offset1 } = useParallax(0.06);
  const { ref: parallax2Ref, offset: offset2 } = useParallax(0.1);

  return (
    <section className="relative py-40 md:py-56 px-8 md:px-16 lg:px-24 overflow-hidden">
      {/* Section divider */}
      <div className="absolute top-0 left-8 md:left-16 lg:left-24 right-8 md:right-16 lg:right-24 h-px bg-foreground/10" />

      {/* Section header */}
      <div ref={headerRef} className="max-w-7xl mx-auto mb-24 md:mb-32 relative">
        {/* Label */}
        <div className="overflow-hidden">
          <span
            className="text-[10px] tracking-[0.4em] text-foreground/40 font-sans uppercase block"
            style={{
              transform: headerVisible ? "translateY(0)" : "translateY(100%)",
              transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
            }}
          >
            Showcase
          </span>
        </div>

        {/* Large editorial title */}
        <div className="mt-6 overflow-hidden">
          <h2
            className="font-serif text-6xl md:text-8xl lg:text-9xl text-foreground leading-[0.85] tracking-[-0.03em]"
            style={{
              transform: headerVisible ? "translateY(0)" : "translateY(100%)",
              transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
            }}
          >
            Editorial
          </h2>
        </div>

        {/* Side detail */}
        <div
          className="absolute right-0 bottom-0 hidden lg:block"
          style={{
            opacity: headerVisible ? 0.3 : 0,
            transition: "opacity 1s ease 0.5s",
          }}
        >
          <span className="text-[10px] tracking-[0.3em] text-foreground/30 font-sans uppercase">
            {"04 \u2014 Works"}
          </span>
        </div>
      </div>

      {/* Gallery Grid - Asymmetric broken grid */}
      <div className="max-w-7xl mx-auto">
        {/* Row 1 - Large left, smaller right offset up */}
        <div ref={row1Ref} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          <div ref={parallax1Ref} className="md:col-span-7">
            <GalleryImage
              src="/placeholder.svg?height=900&width=650"
              alt="Luxury hair styling - Precision Cut"
              aspect="aspect-[3/4]"
              isVisible={row1Visible}
              delay={0}
              caption={"Editorial I \u2014 Precision Cut"}
              parallaxOffset={offset1 * 0.3}
            />
          </div>
          <div className="md:col-span-4 md:col-start-9 md:mt-32">
            <GalleryImage
              src="/placeholder.svg?height=700&width=550"
              alt="Luxury hair styling - Texture & Form"
              aspect="aspect-[4/5]"
              isVisible={row1Visible}
              delay={250}
              caption={"Editorial II \u2014 Texture & Form"}
            />
          </div>
        </div>

        {/* Row 2 - Smaller left offset, large right */}
        <div
          ref={row2Ref}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 mt-10 md:mt-16"
        >
          <div className="md:col-span-4 md:col-start-1">
            <GalleryImage
              src="/placeholder.svg?height=600&width=600"
              alt="Luxury hair styling - Color Art"
              aspect="aspect-square"
              isVisible={row2Visible}
              delay={0}
              caption={"Editorial III \u2014 Color Art"}
            />
          </div>
          <div ref={parallax2Ref} className="md:col-span-7 md:col-start-6 md:-mt-20">
            <GalleryImage
              src="/placeholder.svg?height=750&width=550"
              alt="Luxury hair styling - The Vision"
              aspect="aspect-[5/7]"
              isVisible={row2Visible}
              delay={200}
              caption={"Editorial IV \u2014 The Vision"}
              parallaxOffset={offset2 * 0.2}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
