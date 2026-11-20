import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";

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
      <body className="bg-background text-foreground font-sans antialiased selection:bg-brand selection:text-white">
        {/* Navbar en Footer komen hier later omheen */}
        <main>{children}</main>
      </body>
    </html>
  );
}
