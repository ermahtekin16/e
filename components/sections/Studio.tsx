"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import anime from "animejs";

export default function Studio() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        anime({
                            targets: sectionRef.current?.querySelectorAll(".studio-image"),
                            translateY: [50, 0],
                            opacity: [0, 1],
                            delay: anime.stagger(200),
                            easing: "easeOutSine",
                            duration: 1000,
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => observer.disconnect();
    }, []);

    return (
        <section id="salon" ref={sectionRef} className="bg-black py-24 text-white">
            <div className="container mx-auto px-6">
                <h2 className="font-serif text-3xl md:text-6xl mb-12 md:mb-16 text-center uppercase">
                    salon
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-auto md:h-[800px]">
                    {/* Main Large Image */}
                    <div className="studio-image opacity-0 relative col-span-1 md:col-span-2 lg:col-span-2 row-span-2 h-[400px] md:h-full w-full overflow-hidden">
                        <Image
                            src="/images/salon1.webp" // Assumes this is the best wide shot
                            alt="Emrah Tekin Studio Interior"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-1000"
                        />
                    </div>

                    {/* Secondary Vertical Image */}
                    <div className="studio-image opacity-0 relative col-span-1 row-span-1 h-[300px] md:h-full w-full overflow-hidden">
                        <Image
                            src="/images/salon2.webp"
                            alt="Studio Detail"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-1000"
                        />
                    </div>

                    {/* Tertiary Image */}
                    <div className="studio-image opacity-0 relative col-span-1 row-span-1 h-[300px] md:h-full w-full overflow-hidden">
                        <Image
                            src="/images/salon3.webp"
                            alt="Studio Atmosphere"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-1000"
                        />
                    </div>
                </div>

                <div className="mt-16 text-center max-w-2xl mx-auto">
                    <p className="text-gray-400 font-light">
                        Endüstriyel dokular, özel aydınlatma ve lüksün uyumu.
                        Sizi bekleyen atmosfer, sıradan bir salondan çok daha fazlası.
                    </p>
                </div>
            </div>
        </section>
    );
}
