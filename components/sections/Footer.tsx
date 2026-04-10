"use client";

import Link from "next/link";
import { MessageCircle, MapPin, Instagram, Calendar } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact" className="bg-zinc-950 text-white pt-20 pb-10 border-t border-zinc-900">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
                {/* Contact / Brand */}
                <div>
                    <h2 className="font-serif text-3xl mb-8">EMRAH TEKİN</h2>
                    <div className="space-y-6 text-gray-400 font-light">
                        <p className="max-w-md">
                            Kusursuzluk bir varış noktası değil, sürekli bir yolculuktur.
                            Kusursuzluk detaylarda, detaylar salonumuzda saklı.
                        </p>

                        <div className="flex flex-col space-y-4 pt-4">
                            <Link
                                href="https://www.instagram.com/emrah.tekin/"
                                target="_blank"
                                className="flex items-center space-x-3 hover:text-white transition-colors w-fit"
                            >
                                <Instagram size={20} />
                                <span>@emrah.tekin</span>
                            </Link>

                            <Link
                                href="https://wa.me/message/SZ7BL4CNCIJUI1"
                                className="group flex items-center space-x-3 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full hover:bg-zinc-800 hover:border-zinc-700 transition-all w-fit"
                                target="_blank"
                            >
                                <Calendar size={18} className="text-zinc-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                                <span className="text-sm tracking-wide text-gray-300 group-hover:text-white">Randevu Almak İçin</span>
                            </Link>

                        </div>
                    </div>
                </div>

                {/* Location Block */}
                <div className="relative h-64 w-full bg-zinc-900 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 group cursor-pointer">
                    <Link
                        href="https://www.google.com/maps/search/?api=1&query=Orhanbey+Mahallesi+3.+Orhan+Sokak+No:6+Osmangazi+Bursa"
                        target="_blank"
                        className="absolute inset-0 z-20 block bg-transparent"
                    />
                    
                    {/* Map with Satellite View */}
                    {/* We use negative bottom/left/right margins (via -bottom-24, -left-12, -right-12) to push the iframe Google Maps UI controls outside the overflow-hidden parent */}
                    <div className="absolute -bottom-24 -left-12 -right-12 top-0 bg-zinc-800">
                        <iframe
                            src="https://maps.google.com/maps?q=Orhanbey+Mahallesi+3.+Orhan+Sokak+No:6+Osmangazi+Bursa&t=k&z=19&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "grayscale(100%) invert(0%) contrast(1.2)" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent pointer-events-none" />
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="relative z-10 text-center space-y-2 bg-black/60 p-6 backdrop-blur-sm rounded-lg border border-white/10">
                            <MapPin size={32} className="mx-auto text-gray-500 mb-2 group-hover:text-white transition-colors" />
                            <address className="not-italic text-sm text-center text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed px-4">
                                Tayyare Kültür Merkezi ile Mavi İskender'in arası<br />
                                Orhanbey Mah. (Heykel), 3. Orhan Sk. No:6<br />
                                16010 Osmangazi/Bursa
                            </address>
                            <div className="mt-6 border-t border-zinc-800 pt-4 w-full">
                                <span className="block text-xs uppercase tracking-widest text-zinc-500 mb-1">Çalışma Saatleri</span>
                                <span className="block text-sm text-gray-300">08:30 – 20:30 | Pazar Kapalı</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center text-zinc-800 text-xs tracking-widest uppercase">
                © {new Date().getFullYear()} Emrah Tekin. All Rights Reserved.
            </div>
        </footer>
    );
}
