"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import anime from "animejs";

const services = [
    {
        title: "Anatomik Kesim Hattı",
        description: "Kafanın anatomik yapısına ve yüz hatlarına özel, kişiselleştirilmiş heykel tıraş hassasiyetinde kesimler.",
        price: "KİŞİSEL MİMARİ",
        image: "/images/anotamik.webp"
    },
    {
        title: "Cilt & Saç Ritüelleri",
        description: "Özel maskeler ve canlandırıcı bakımlarla tam bir yenilenme deneyimi. Stresten arındıran özel teknikler.",
        price: "HÜCRESEL TERAPİ",
        image: "/images/maske.webp"
    },
    {
        title: "Kaş Tasarımı & Form",
        description: "Yüz ifadesini güçlendiren, maskülen hatları belirginleştiren profesyonel dokunuşlar.",
        price: "Estetik Detay",
        image: "/images/kas_tasarimi_salon.webp"
    },
    {
        title: "Keratin & Düzleştirme",
        description: "Saçın doğal yapısını güçlendirerek ipeksi bir yumuşaklık ve sağlıklı bir düzlük kazandıran profesyonel bakım.",
        price: "DOKU DİSİPLİNİ",
        image: "/images/duz.webp"
    },
    {
        title: "Perma & Hacim Mimarisi",
        description: "Düz ve sönük saçlara doğal bir hareket kazandırarak hacimli dalgalar ve karakter sahibi bir stil sunan özel form işlemi.",
        price: "DOKUSAL HAREKET",
        image: "/images/perma3.webp"
    }
];

export default function Services() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let staggeredElements: Element[] = [];
        let timeoutId: NodeJS.Timeout | null = null;

        const observer = new IntersectionObserver(
            (entries) => {
                let hasNewIntersections = false;
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        staggeredElements.push(entry.target);
                        observer.unobserve(entry.target);
                        hasNewIntersections = true;
                    }
                });

                if (hasNewIntersections && !timeoutId) {
                    timeoutId = setTimeout(() => {
                        anime({
                            targets: staggeredElements,
                            translateY: [40, 0],
                            opacity: [0, 1],
                            delay: anime.stagger(100),
                            easing: "easeOutCubic",
                            duration: 800,
                        });
                        staggeredElements = []; // reset array
                        timeoutId = null;
                    }, 50); // wait 50ms to batch items appearing together
                }
            },
            { threshold: 0.15, rootMargin: "0px 0px -5% 0px" } 
            // 15% of the individual item needs to be visible
        );

        // Observer now tracks individual service items, NOT the entire massive container!
        const items = sectionRef.current?.querySelectorAll(".service-item");
        if (items) {
            items.forEach((item) => observer.observe(item));
        }

        return () => {
            if (timeoutId) clearTimeout(timeoutId);
            observer.disconnect();
        };
    }, []);

    return (
        <section id="services" ref={sectionRef} className="bg-zinc-950 py-32 px-6 md:px-20 text-white relative [@media(max-height:500px)]:py-12">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-gray-800 pb-6">
                    <h2 className="font-serif text-3xl md:text-5xl tracking-wider text-white uppercase">
                        Hizmetler
                    </h2>
                    <p className="text-gray-500 font-light mt-4 md:mt-0 uppercase tracking-widest text-sm">
                        ustalık ve bakım
                    </p>
                </div>

                <div className="flex flex-col gap-6 md:grid md:grid-cols-6 md:gap-12">
                    {services.map((service, index) => (
                        <div key={index} className={`service-item opacity-0 group cursor-pointer ${index < 2 ? "md:col-span-3" : "md:col-span-2"} flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0`}>
                            <div className="aspect-square w-24 h-24 md:h-auto md:aspect-[4/3] md:w-full flex-shrink-0 bg-zinc-900 md:mb-6 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                                {service.image ? (
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        priority={index < 2}
                                        sizes="(max-width: 768px) 96px, 33vw"
                                        quality={90}
                                        className={`object-cover transition-opacity duration-500 ${service.title.includes("Kaş") ? "object-bottom" : "object-center"}`}
                                    />
                                ) : (
                                    <div className="absolute inset-0 p-8 flex items-center justify-center">
                                        <span className="font-serif text-6xl text-zinc-800 group-hover:text-zinc-700 transition-colors duration-500">
                                            0{index + 1}
                                        </span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-serif text-lg md:text-2xl mb-1 md:mb-3 group-hover:text-gray-300 transition-colors">{service.title}</h3>
                                <p className="text-gray-400 font-light text-xs md:text-sm leading-relaxed mb-2 md:mb-4 line-clamp-2 md:line-clamp-none">
                                    {service.description}
                                </p>
                                <span className="text-[10px] md:text-xs uppercase tracking-widest text-zinc-600 border-b border-zinc-800 pb-1 w-fit">
                                    {service.price}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
