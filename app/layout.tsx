import React from "react"
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";

import "./globals.css";

const _playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Emrah Tekin | Bursa Erkek Kuaförü",
  description:
    "Bursa'da lüks erkek bakımı ve anatomik saç tasarımı deneyimi.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${_playfair.variable} ${_inter.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden bg-black text-white selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
