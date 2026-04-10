"use client";

import { useRef, useEffect } from "react";
import anime from "animejs";

export default function Booking() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        anime({
                            targets: sectionRef.current?.querySelectorAll(".animate-up"),
                            translateY: [40, 0],
                            opacity: [0, 1],
                            delay: anime.stagger(150),
                            easing: "easeOutExpo",
                            duration: 1200,
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="booking" className="bg-zinc-950 py-24 px-6 md:px-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch border border-zinc-900 overflow-hidden rounded-sm">
                {/* Image Side */}
                <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-auto overflow-hidden animate-up opacity-0">
                    <img
                        src="/images/kas_tasarimi_salon.jpg"
                        alt="Kaş Tasarımı & Form"
                        className="absolute inset-0 w-full h-full object-cover object-bottom opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:hidden" />
                    <div className="absolute bottom-10 left-10 text-white z-10 hidden lg:block">
                        <span className="text-xs uppercase tracking-[0.3em] text-zinc-400 mb-2 block">Premium Bakım</span>
                        <h3 className="font-serif text-3xl uppercase tracking-wider">Kusursuz Detaylar</h3>
                    </div>
                </div>

                {/* Form Side */}
                <div className="lg:w-1/2 bg-zinc-900/50 p-10 md:p-16 backdrop-blur-sm animate-up opacity-0">
                    <div className="max-w-md mx-auto">
                        <h2 className="font-serif text-3xl md:text-4xl uppercase tracking-wider mb-4 text-white">
                            Randevu Formu
                        </h2>
                        <p className="text-zinc-500 font-light mb-10 text-sm tracking-wide">
                            Kişiselleştirilmiş bir deneyim için detaylarınızı bırakın, uzman ekibimiz size en kısa sürede dönüş yapsın.
                        </p>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-1">
                                <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 ml-1">İsim Soyisim</label>
                                <input
                                    type="text"
                                    className="w-full bg-zinc-950/50 border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-zinc-600 transition-colors rounded-sm"
                                    placeholder="Adınız ve Soyadınız"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 ml-1">Telefon Numarası</label>
                                <input
                                    type="tel"
                                    className="w-full bg-zinc-950/50 border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-zinc-600 transition-colors rounded-sm"
                                    placeholder="05xx xxx xx xx"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 ml-1">Tercih Edilen Hizmet</label>
                                <select className="w-full bg-zinc-950/50 border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-zinc-600 transition-colors rounded-sm appearance-none">
                                    <option>Kaş Tasarımı & Form</option>
                                    <option>Anatomik Kesim Hattı</option>
                                    <option>Cilt & Saç Ritüelleri</option>
                                    <option>Keratin & Düzleştirme</option>
                                    <option>Perma & Hacim Mimarisi</option>
                                </select>
                            </div>
                            <button className="w-full bg-white text-black py-4 uppercase tracking-[0.3em] text-xs font-bold hover:bg-zinc-200 transition-colors mt-8 rounded-sm">
                                Gönder
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
