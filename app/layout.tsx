import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

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
  metadataBase: new URL("https://www.webboostpartner.nl"),

  title: {
    default: "Webdesign Rotterdam | Website laten maken | WebBoost Partner",
    template: "%s | WebBoost Partner",
  },

  description:
    "Een professionele website laten maken in Rotterdam? WebBoost Partner bouwt snelle Next.js-websites voor zzp en mkb, met SEO, maatwerk en een vaste prijs.",

  applicationName: "WebBoost Partner",
  
  // Voorkomt dat iOS zelf telefoonnummers linkt
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  // Favicons voor browser en Apple devices
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "WebBoost Partner",
    title: "WebBoost Partner | Webdesign Rotterdam",
    description:
      "Professionele Next.js-websites voor zzp en mkb in Rotterdam en omgeving.",
    url: "https://www.webboostpartner.nl",
    images: [
      {
        url: "/og.jpg", // Zorg dat deze afbeelding in je public map staat
        width: 1200,
        height: 630,
        alt: "WebBoost Partner - Webdesign Rotterdam",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "WebBoost Partner | Webdesign Rotterdam",
    description:
      "Professionele Next.js-websites voor zzp en mkb in Rotterdam en omgeving.",
    images: ["/og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${dmSerif.variable} ${manrope.variable}`}>
      <body className="bg-background text-foreground font-sans antialiased selection:bg-brand selection:text-white flex flex-col min-h-screen">
        
        {/* 🌟 GLOBAL STRUCTURED DATA (JSON-LD) */}
        {/* Deze wordt op elke pagina geladen zodat Google het bedrijf en de website kent */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.webboostpartner.nl/#organization",
                  name: "WebBoost Partner",
                  url: "https://www.webboostpartner.nl",
                  logo: "https://www.webboostpartner.nl/og.jpg", // Vervang eventueel door een puur logo bestand
                  description: "WebBoost Partner is een Nederlands webbureau dat razendsnelle Next.js-websites bouwt voor ZZP en MKB in Rotterdam en omgeving.",
                  founder: { "@id": "https://www.webboostpartner.nl/over-mij#person" },
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Rotterdam",
                    addressCountry: "NL"
                  },
                  areaServed: [
                    { "@type": "City", name: "Rotterdam" },
                    { "@type": "City", name: "Capelle aan den IJssel" },
                    { "@type": "City", name: "Krimpen aan den IJssel" },
                    { "@type": "City", name: "Ridderkerk" },
                    { "@type": "City", name: "Barendrecht" },
                    { "@type": "City", name: "Schiedam" }
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.webboostpartner.nl/#website",
                  url: "https://www.webboostpartner.nl",
                  name: "WebBoost Partner",
                  publisher: { "@id": "https://www.webboostpartner.nl/#organization" },
                  inLanguage: "nl-NL"
                }
              ]
            })
          }}
        />

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
