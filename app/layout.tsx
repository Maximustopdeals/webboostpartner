import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";

// Importeer hier je componenten
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${dmSerif.variable} ${manrope.variable}`}>
      <body className="bg-background text-foreground font-sans antialiased selection:bg-brand selection:text-white flex flex-col min-h-screen">
        
        {/* Hier renderen we de Navbar */}
        <Navbar />
        
        {/* De main content met flex-grow zodat de footer altijd onderaan blijft */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Hier renderen we de Footer */}
        <Footer />
        
      </body>
    </html>
  );
}
