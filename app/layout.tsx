import type { Metadata } from "next";
import { Outfit, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientWidgets from "@/components/ClientWidgets"; // ✅ NIEUW

// ... (fonts + metadata blijven exact hetzelfde) ...

export default function RootLayout({ children }: RootLayoutProps) {
  const orgSchema = { /* ... ongewijzigd ... */ };

  return (
    <html
      lang="nl"
      className={`${outfit.variable} ${ibmPlex.variable} ${ibmMono.variable}`}
    >
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PSM987PS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />

        <Navbar />
        <main id="main">{children}</main>
        <Footer />

        {/* ✅ Eén wrapper die de zware client-widgets lazy laadt */}
        <ClientWidgets />

        <Script id="gtm-script" strategy="lazyOnload">
          {`...`}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L8ZWH28FVR"
          strategy="lazyOnload"
        />
        <Script id="ga4-script" strategy="lazyOnload">
          {`...`}
        </Script>
      </body>
    </html>
  );
}
