import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";

// Importeer al je globale componenten
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions"; // 👈 DEZE WAS NOG NIET GEÏMPORTEERD

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  // ... (behoud hier je bestaande metadata, title, description, openGraph, etc.)
  // Als je deze al had ingevuld in layout.tsx, laat ze dan staan.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${dmSerif.variable} ${manrope.variable}`}>
      <body className="bg-background text-foreground font-sans antialiased selection:bg-brand selection:text-white flex flex-col min-h-screen">
        
        {/* 1. De Navigatiebalk */}
        <Navbar />
        
        {/* 2. De Pagina Content */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* 3. De Footer */}
        <Footer />
        
        {/* 4. De Floating Action Buttons (WhatsApp & Back to Top) */}
        <FloatingActions />
        
      </body>
    </html>
  );
}
