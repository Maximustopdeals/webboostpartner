import type { Metadata } from "next";
import { Outfit, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientWidgets from "@/components/ClientWidgets";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-mono",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.webboostpartner.nl"),
  title: {
    default: "Webdesign Rotterdam | Website Laten Maken | Next.js | WebBoost Partner",
    template: "%s | WebBoost Partner",
  },
  description:
    "Website laten maken in Rotterdam? WebBoost Partner bouwt razendsnelle Next.js websites (95+ PageSpeed) die beter scoren in Google. Lokaal, vaste prijs, SEO inbegrepen.",
  keywords: [
    "website laten maken Rotterdam",
    "webdesign Rotterdam",
    "Next.js website laten maken Rotterdam",
    "Next.js webbouwer Rotterdam",
    "Next.js specialist Rotterdam",
    "SEO Rotterdam",
    "snelle website Rotterdam",
    "WordPress alternatief Rotterdam",
    "website bouwen Rotterdam",
  ],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://www.webboostpartner.nl",
    siteName: "WebBoost Partner",
    title: "Webdesign Rotterdam | Website Laten Maken | WebBoost Partner",
    description:
      "Razendsnelle Next.js websites voor ondernemers in Rotterdam. 95+ PageSpeed, SEO inbegrepen, vaste prijs vanaf €1.950.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "WebBoost Partner — Next.js Webdesign Rotterdam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webdesign Rotterdam | Website Laten Maken | WebBoost Partner",
    description:
      "Razendsnelle Next.js websites voor ondernemers in Rotterdam. 95+ PageSpeed, SEO inbegrepen, vaste prijs.",
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
  alternates: { canonical: "/" },
  verification: {
    google: "OjFfp_u3mWFOSFreofiGa1Pz4fgKv1h8X_xHCbr1l7Y",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.webboostpartner.nl/#organization",
    name: "WebBoost Partner",
    alternateName: "WebBoost Partner Rotterdam",
    description:
      "WebBoost Partner is een Next.js specialist in Rotterdam. Wij bouwen razendsnelle, SEO-geoptimaliseerde websites voor ZZP en MKB met 95+ PageSpeed scores.",
    image: "https://www.webboostpartner.nl/og.jpg",
    logo: "https://www.webboostpartner.nl/logo_webboostpartner.webp",
    url: "https://www.webboostpartner.nl",
    telephone: "+31642628242",
    email: "info@webboostpartner.nl",
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Bankoverschrijving, iDEAL",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Neeltje Griffijnstraat 12",
      addressLocality: "Rotterdam",
      postalCode: "3065 KD",
      addressRegion: "Zuid-Holland",
      addressCountry: "NL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "51.9225",
      longitude: "4.47917",
    },
    areaServed: [
      { "@type": "City", name: "Rotterdam" },
      { "@type": "City", name: "Capelle aan den IJssel" },
      { "@type": "City", name: "Krimpen aan den IJssel" },
      { "@type": "City", name: "Ridderkerk" },
      { "@type": "City", name: "Barendrecht" },
      { "@type": "City", name: "Schiedam" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [],
  };

  return (
    <html lang="nl" className={`${outfit.variable} ${ibmPlex.variable} ${ibmMono.variable}`}>
      <body>
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PSM987PS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />

        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        
        <ClientWidgets />

        {/* ✅ GTM + GA4 nu via de 'worker' strategy (Partytown) voor betere TBT */}
        <Script id="gtm-script" strategy="worker">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PSM987PS');`}
        </Script>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L8ZWH28FVR"
          strategy="worker"
        />
        <Script id="ga4-script" strategy="worker">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-L8ZWH28FVR');`}
        </Script>
      </body>
    </html>
  );
}
