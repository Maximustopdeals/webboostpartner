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
    default: "WebBoost Partner | Next.js Websites Rotterdam die scoren in Google",
    template: "%s | WebBoost Partner",
  },
  description:
    "Website laten maken in Rotterdam? WebBoost Partner bouwt razendsnelle Next.js websites die beter scoreen in Google dan WordPress. Lokaal, eerlijk, no-nonsense.",
  keywords: [
    "Next.js website laten maken Rotterdam",
    "Next.js webbouwer Rotterdam",
    "Next.js developer Rotterdam",
    "Next.js specialist Rotterdam",
    "website laten maken Rotterdam",
    "SEO Rotterdam",
    "WordPress alternatief",
    "Core Web Vitals",
    "snelle website Rotterdam",
  ],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://webboostpartner.nl",
    siteName: "WebBoost Partner",
    title: "WebBoost Partner | Next.js Websites Rotterdam",
    description:
      "Razendsnelle Next.js websites voor ondernemers in Rotterdam en omgeving.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://webboostpartner.nl" },
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
    name: "WebBoost Partner",
    image: "https://webboostpartner.nl/og.jpg",
    "@id": "https://webboostpartner.nl",
    url: "https://webboostpartner.nl",
    telephone: "+31642628242",
    email: "info@webboostpartner.nl",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rotterdam",
      addressCountry: "NL",
    },
    areaServed: [
      "Rotterdam",
      "Capelle aan den IJssel",
      "Krimpen aan den IJssel",
      "Ridderkerk",
      "Barendrecht",
      "Schiedam",
    ],
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
