"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/message/SZ7BL4CNCIJUI1"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="WhatsApp ile rezervasyon al"
    >
      {/* Desktop - expanded pill */}
      <div className="hidden md:flex items-center gap-4 bg-foreground text-background px-7 py-4 border border-foreground/20 hover:bg-foreground/90 transition-all duration-500">
        <MessageCircle className="w-4 h-4" />
        <span className="text-[10px] tracking-[0.25em] font-sans uppercase">
          {"Rezervasyon Al"}
        </span>
      </div>

      {/* Mobile - icon only */}
      <div className="flex md:hidden items-center justify-center w-14 h-14 bg-foreground text-background border border-foreground/20 hover:bg-foreground/90 transition-all duration-500">
        <MessageCircle className="w-5 h-5" />
      </div>
    </a>
  );
}
