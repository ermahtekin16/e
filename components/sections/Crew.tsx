"use client";

import { useEffect, useRef, useState } from "react";
import anime from "animejs";
import { Instagram, MessageCircle, MapPin, Play, Pause, VolumeX, Volume1, Volume2 } from "lucide-react";

export default function Crew() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(1);
    const [isMounted, setIsMounted] = useState(false);

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;

        if (video.paused) {
            video.play().then(() => setIsPlaying(true)).catch(err => console.error("Video play failed:", err));
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    const toggleMute = () => {
        const video = videoRef.current;
        if (video) {
            const newMuted = !video.muted;
            video.muted = newMuted;
            setIsMuted(newMuted);
            if (!newMuted && volume === 0) {
                setVolume(1);
                video.volume = 1;
            }
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = parseFloat(e.target.value);
        setVolume(val);
        const video = videoRef.current;
        if (video) {
            video.volume = val;
            if (val === 0) {
                setIsMuted(true);
                video.muted = true;
            } else {
                setIsMuted(false);
                video.muted = false;
            }
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const current = videoRef.current.currentTime;
            const duration = videoRef.current.duration;
            if (duration > 0) {
                setProgress((current / duration) * 100);
            }
        }
    };

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        const video = videoRef.current;
        if (!video || !video.duration) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        video.currentTime = pos * video.duration;
    };

    useEffect(() => {
        setIsMounted(true);
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        anime({
                            targets: sectionRef.current?.querySelectorAll(".fade-up"),
                            translateY: [50, 0],
                            opacity: [0, 1],
                            delay: anime.stagger(150),
                            easing: "easeOutQuad",
                            duration: 800,
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
        <section
            id="architect"
            ref={sectionRef}
            className="bg-black py-24 px-6 md:px-20 text-white relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    {/* Text Content */}
                    <div className="fade-up order-2 lg:order-1 text-left">
                        <p className="text-xs uppercase tracking-[0.3em] text-[#C5A059] opacity-80 mb-6 font-bold">
                            MİMARİMİZ
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 leading-[1.15] tracking-wide">
                            Bursa’nın En İyi Erkek Kuaförü
                        </h1>
                        <h2 className="text-lg md:text-xl lg:text-2xl text-gray-400 font-light tracking-widest mb-10">
                            Emrah Tekin | Profesyonel Salon ve Profesyonel Ekibiyle
                        </h2>
                        
                        <div className="space-y-8 text-gray-300 font-light text-base md:text-lg lg:text-xl leading-relaxed lg:leading-[2.2]">
                            <p>
                                Saç tasarımını kişiye özel bir sanat formu olarak ele alıyoruz. Minimalizm ve lüksün kesişim noktasında; kafa anatomisine ve yüz hatlarınıza en uygun kesimi sunuyoruz.
                            </p>
                            <p>
                                Salonumuz, modern erkeğin ihtiyaçlarını anlayan ve geleneksel teknikleri güncel vizyonla harmanlayan ayrıcalıklı bir duraktır.
                            </p>
                            <p>
                                Burada oturduğunuz koltuk, sadece bir bekleme alanı değil; değişimin, gücün ve stilin yeniden tanımlandığı bir sahnedir.
                            </p>
                        </div>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-800 pt-10">
                            <div className="space-y-3 text-center md:text-left">
                                <h3 className="font-serif text-2xl lg:text-3xl text-white uppercase tracking-wider">VİZYON</h3>
                                <p className="text-gray-400 text-xs lg:text-sm tracking-widest">Geleceğin Estetiğini Bugüne Taşımak</p>
                            </div>
                            <div className="space-y-3 text-center md:text-left">
                                <h3 className="font-serif text-2xl lg:text-3xl text-white uppercase tracking-wider">DİSİPLİN</h3>
                                <p className="text-gray-400 text-xs lg:text-sm tracking-widest">Süreçte Yüksek Standartlar</p>
                            </div>
                            <div className="space-y-3 text-center md:text-left">
                                <h3 className="font-serif text-2xl lg:text-3xl text-white uppercase tracking-wider">STİL</h3>
                                <p className="text-gray-400 text-xs lg:text-sm tracking-widest">Ruhun Dışa Vurumu</p>
                            </div>
                        </div>
                    </div>

                    {/* Vertical Cinema Video Column */}
                    <div className="fade-up order-1 lg:order-2 relative w-full aspect-[9/16] max-w-[380px] mx-auto lg:ml-auto overflow-hidden rounded-[2.5rem] bg-black shadow-2xl group ring-1 ring-white/10 flex flex-col justify-end">
                        {isMounted && (
                            <video
                                ref={videoRef}
                                src="https://github.com/ermahtekin16/e/releases/download/v1.0/30.mp4"
                                preload="metadata"
                                playsInline
                                suppressHydrationWarning
                                className="absolute inset-0 block w-full h-full object-cover bg-black cursor-pointer"
                                onClick={togglePlay}
                                onTimeUpdate={handleTimeUpdate}
                                onPlay={() => setIsPlaying(true)}
                                onPause={() => setIsPlaying(false)}
                            />
                        )}
                        {/* Media Player UI - Restricted to bottom 25% */}
                        <div className="relative z-10 w-full pt-16 pb-5 md:pb-6 px-5 md:px-6 pointer-events-none flex flex-col justify-end bg-gradient-to-t from-black via-black/80 to-transparent">
                            
                            {/* Controls Row: Play, Seek Bar, Volume */}
                            <div className="flex items-center gap-4 w-full mb-5 pointer-events-auto">
                                <button onClick={(e) => { e.stopPropagation(); togglePlay(); }} className="text-white/80 hover:text-white transition-colors shrink-0">
                                    {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
                                </button>
                                
                                <div 
                                    className="flex-1 h-6 flex items-center cursor-pointer group/progress relative"
                                    onClick={handleProgressClick}
                                >
                                    <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden relative">
                                        <div 
                                            className="absolute top-0 left-0 h-full bg-white transition-all duration-75 ease-linear shadow-[0_0_8px_rgba(255,255,255,0.8)]" 
                                            style={{ width: `${progress}%` }} 
                                        />
                                    </div>
                                    <div className="absolute left-0 w-full h-full" /> {/* Touch target */}
                                </div>

                                <div className="flex items-center group/volume shrink-0">
                                    <button onClick={(e) => { e.stopPropagation(); toggleMute(); }} className="text-white/80 hover:text-white transition-colors">
                                        {isMuted || volume === 0 ? <VolumeX size={18} /> : (volume < 0.5 ? <Volume1 size={18} /> : <Volume2 size={18} />)}
                                    </button>
                                    <div className="hidden md:flex items-center w-0 group-hover/volume:w-20 overflow-hidden transition-all duration-300 ease-out origin-left">
                                        <input 
                                            type="range" 
                                            min="0" 
                                            max="1" 
                                            step="0.05" 
                                            value={isMuted ? 0 : volume} 
                                            onChange={handleVolumeChange} 
                                            onClick={(e) => e.stopPropagation()}
                                            className="w-16 h-1 ml-2 bg-white/30 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Info & Social Dock */}
                            <div className="flex flex-col items-center gap-3 pointer-events-auto">
                                <div className="flex items-center gap-8">
                                    <a href="https://www.instagram.com/emrah.tekin/" target="_blank" className="text-white/40 hover:text-white transition-colors duration-300">
                                        <Instagram size={18} />
                                    </a>
                                    <a href="https://wa.me/message/SZ7BL4CNCIJUI1" target="_blank" className="text-white/40 hover:text-[#25D366] transition-colors duration-300">
                                        <MessageCircle size={18} />
                                    </a>
                                    <a href="https://www.google.com/maps/search/?api=1&query=Orhanbey+Mahallesi+3.+Orhan+Sokak+No:6+Osmangazi+Bursa" target="_blank" className="text-white/40 hover:text-[#C5A059] transition-colors duration-300">
                                        <MapPin size={18} />
                                    </a>
                                </div>
                                <div className="text-[10px] tracking-[0.2em] uppercase font-light text-center text-white/40">
                                    08:30 – 20:30 | PAZAR KAPALI
                                </div>
                            </div>
                        </div>

                        {/* Large central play button overlay when paused */}
                        {!isPlaying && (
                            <div className="absolute inset-x-0 top-0 bottom-[25%] flex items-center justify-center pointer-events-none">
                                <button 
                                    onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                                    className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white pointer-events-auto hover:bg-white/20 transition-all duration-300 transform active:scale-90"
                                >
                                    <Play size={32} fill="white" className="ml-1" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
