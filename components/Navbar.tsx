"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Instagram, MessageCircle, MapPin, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import * as Popover from "@radix-ui/react-popover";

const navLinks = [
    { name: "ANA SAYFA", href: "#home" },
    { name: "MİMARİMİZ", href: "#architect" },
    { name: "HİZMETLER", href: "#services" },
    { name: "SALON", href: "#salon" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const sections = navLinks.map(link => link.href.replace('#', ''));
        sections.push("contact"); // Explicitly add contact section

        const handleScroll = () => {
            const scrollPos = window.scrollY;
            setIsScrolled(scrollPos > 50);

            // Dynamically check which section is currently active
            let currentStr = "home"; // fallback to home
            // We use halfway down the screen as the threshold
            const threshold = scrollPos + window.innerHeight / 3;

            for (const secId of sections) {
                const el = document.getElementById(secId);
                if (el) {
                    const top = el.offsetTop;
                    // For the last sections, if we scroll to bottom, make sure they get highlighted
                    const isAtBottom = (window.innerHeight + scrollPos) >= document.body.offsetHeight - 50;
                    
                    if (top <= threshold || (isAtBottom && secId === "contact")) {
                        currentStr = secId;
                    }
                }
            }
            setActiveSection(currentStr);
        };
        
        window.addEventListener("scroll", handleScroll, { passive: true });
        
        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Removed overflow-hidden layout scroll lock completely to ensure layout stability

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
        e.preventDefault();
        e.stopPropagation();
        
        const targetId = href.replace("#", "");
        const elem = document.getElementById(targetId);
        
        if (mobileMenuOpen) {
            setMobileMenuOpen(false);
        }

        if (elem) {
            // Using window.scrollTo with relative offset is much safer than scrollIntoView on mobile browsers
            setTimeout(() => {
                const elementPosition = elem.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
                setActiveSection(targetId);
            }, 100);
        }
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 py-4 px-6 md:px-12",
                isScrolled ? "bg-black/85 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent",
                mobileMenuOpen && !isScrolled ? "bg-zinc-950/95 backdrop-blur-md border-b border-white/5" : ""
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="#home"
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => scrollToSection(e, "#home")}
                    className="font-serif text-xl md:text-2xl tracking-[0.2em] text-white hover:text-[#C5A059] transition-colors"
                >
                    EMRAH TEKİN
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center lg:gap-6 xl:gap-10">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.replace('#', '');
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className={cn(
                                    "text-[11px] tracking-[0.25em] transition-all duration-300 font-medium",
                                    isActive ? "text-[#C5A059]" : "text-white/70 hover:text-[#C5A059]"
                                )}
                            >
                                {link.name}
                            </a>
                        );
                    })}
                </div>

                {/* Right Side - Communication Popover */}
                <div className="hidden lg:block">
                    <Popover.Root>
                        <Popover.Trigger asChild>
                            <button className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full text-[10px] tracking-[0.2em] font-bold hover:bg-[#C5A059] hover:text-white transition-all duration-500 group">
                                İLETİŞİM
                                <ChevronDown className="w-3 h-3 group-data-[state=open]:rotate-180 transition-transform duration-300" />
                            </button>
                        </Popover.Trigger>
                        <Popover.Portal>
                            <Popover.Content
                                className="z-[110] bg-zinc-900 border border-white/10 p-6 rounded-2xl shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in duration-300"
                                sideOffset={15}
                                align="end"
                            >
                                <div className="flex flex-col gap-5 min-w-[200px]">
                                    <h4 className="text-[10px] tracking-[0.3em] text-zinc-500 uppercase font-bold border-b border-white/5 pb-2">Hızlı Erişim</h4>

                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=Orhanbey+Mahallesi+3.+Orhan+Sokak+No:6+Osmangazi+Bursa"
                                        target="_blank"
                                        className="flex items-center gap-4 group"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-[#C5A059] transition-colors">
                                            <MapPin className="w-4 h-4 text-white" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xs text-white font-medium">Bize Gel</span>
                                            <span className="text-[10px] text-zinc-500">Google Haritalar</span>
                                        </div>
                                    </a>

                                    <a
                                        href="https://wa.me/message/SZ7BL4CNCIJUI1"
                                        target="_blank"
                                        className="flex items-center gap-4 group"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-[#25D366] transition-colors">
                                            <MessageCircle className="w-4 h-4 text-white" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xs text-white font-medium">WhatsApp</span>
                                            <span className="text-[10px] text-zinc-500">Randevu Al</span>
                                        </div>
                                    </a>

                                    <a
                                        href="https://www.instagram.com/emrah.tekin/"
                                        target="_blank"
                                        className="flex items-center gap-4 group"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-[#E4405F] transition-colors">
                                            <Instagram className="w-4 h-4 text-white" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xs text-white font-medium">Instagram</span>
                                            <span className="text-[10px] text-zinc-500">@emrah.tekin</span>
                                        </div>
                                    </a>
                                </div>
                                <Popover.Arrow className="fill-zinc-900" />
                            </Popover.Content>
                        </Popover.Portal>
                    </Popover.Root>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden relative z-[130] p-2 text-white transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] outline-none focus:outline-none [-webkit-tap-highlight-color:transparent]"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    <div className="relative w-8 h-8 flex items-center justify-center">
                        <Menu 
                            className={cn(
                                "absolute w-8 h-8 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]", 
                                mobileMenuOpen ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
                            )} 
                        />
                        <X 
                            className={cn(
                                "absolute w-8 h-8 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]", 
                                mobileMenuOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"
                            )} 
                        />
                    </div>
                </button>
            </div>

            {/* Stable Accordion Dropdown Mobile Menu */}
            <div 
                className={cn(
                    "lg:hidden absolute top-full left-0 right-0 bg-zinc-950/95 backdrop-blur-xl transition-all duration-300 ease-in-out border-b shadow-2xl overflow-hidden",
                    mobileMenuOpen ? "max-h-[500px] border-white/10 opacity-100" : "max-h-0 border-transparent opacity-0 pointer-events-none"
                )}
            >
                <div className="flex flex-col px-6 py-4">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.replace('#', '');
                        return (
                            <button
                                key={link.name}
                                type="button"
                                onClick={(e) => scrollToSection(e, link.href)}
                                className={cn(
                                    "text-lg font-serif tracking-[0.15em] font-medium py-4 flex items-center justify-start w-full transition-all duration-300 outline-none focus:outline-none [-webkit-tap-highlight-color:transparent]",
                                    isActive ? "text-[#C5A059]" : "text-white/60 hover:text-[#C5A059]"
                                )}
                            >
                                {link.name}
                            </button>
                        );
                    })}

                    <button
                        type="button"
                        onClick={(e) => scrollToSection(e, '#contact')}
                        className={cn(
                            "text-lg font-serif tracking-[0.15em] font-medium py-4 flex items-center justify-start w-full transition-all duration-300 outline-none focus:outline-none [-webkit-tap-highlight-color:transparent]",
                            activeSection === 'contact' ? "text-[#C5A059]" : "text-white/60 hover:text-[#C5A059]"
                        )}
                    >
                        İLETİŞİM
                    </button>

                    {/* Social Micro Interactions */}
                    <div className="flex gap-6 mt-6 pt-4 border-t border-white/5 pb-4">
                        <a href="https://www.instagram.com/emrah.tekin/" target="_blank" className="text-white/50 hover:text-white transition-colors p-2 -ml-2">
                            <Instagram size={20} />
                        </a>
                        <a href="https://wa.me/message/SZ7BL4CNCIJUI1" target="_blank" className="text-white/50 hover:text-[#25D366] transition-colors p-2">
                            <MessageCircle size={20} />
                        </a>
                        <a href="https://www.google.com/maps/search/?api=1&query=Orhanbey+Mahallesi+3.+Orhan+Sokak+No:6+Osmangazi+Bursa" target="_blank" className="text-white/50 hover:text-[#C5A059] transition-colors p-2">
                            <MapPin size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
