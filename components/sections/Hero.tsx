"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import anime from "animejs";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);

    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        // Detect touch devices / mobile pointer
        setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);

        const tl = anime.timeline({
            easing: "easeOutExpo",
            duration: 1500,
        });

        tl.add({
            targets: ".hero-text-char",
            translateY: [100, 0],
            opacity: [0, 1],
            delay: anime.stagger(50),
        }).add(
            {
                targets: ".hero-subtext",
                translateY: [50, 0],
                opacity: [0, 1],
                duration: 1000,
            },
            "-=1000"
        );
    }, []);

    return (
        <section id="home" className="relative h-[100svh] w-full overflow-hidden bg-black" ref={containerRef}>
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/emrah.webp"
                    alt="Emrah Tekin Hero"
                    fill
                    sizes="(max-width: 768px) 100vw, 100vw"
                    className="object-cover object-[center_30%]"
                    priority
                    quality={85}
                />
                {/* Overlay: Ensure solid black at bottom for seamless transition */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
            </div>

            {/* Content */}
            <div className="relative z-20 flex h-full flex-col items-center justify-end pb-32 text-center md:items-start md:justify-end md:pb-32 md:pl-20 md:text-left [@media(max-height:500px)]:!items-center [@media(max-height:500px)]:!justify-end [@media(max-height:500px)]:!pb-12 [@media(max-height:500px)]:!pl-0 [@media(max-height:500px)]:!text-center">
                <h1 className="font-serif text-[clamp(2.2rem,10vw,10rem)] [@media(max-height:500px)]:!text-[clamp(1.8rem,7vw,4rem)] font-bold uppercase tracking-widest text-white mb-2 leading-[1.1] pt-12" aria-label="EMRAH TEKİN">
                    <span className="inline-block overflow-hidden py-8 -my-8 [@media(max-height:500px)]:!py-2 [@media(max-height:500px)]:!-my-2">
                        {"EMRAH TEKİN".split("").map((char, index) => (
                            <span key={index} className="hero-text-char inline-block">
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </span>
                </h1>
                <p className="hero-subtext mt-6 text-xl tracking-[0.5em] text-gray-300 md:text-2xl font-light uppercase opacity-0 [@media(max-height:500px)]:!text-xs [@media(max-height:500px)]:!mt-2">
                    Güzelliğin Anatomik Sanatı
                </p>
            </div>

            {/* Scroll indicator - Only render if not a touch device */}
            {!isTouchDevice && (
                <div className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2 opacity-70">
                        <div className="w-1 h-2 bg-white rounded-full animate-scroll" />
                    </div>
                </div>
            )}
        </section>
    );
}
