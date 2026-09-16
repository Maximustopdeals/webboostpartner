"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "cookie-consent";

type Consent = "all" | "functional" | null;

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Consent;
    if (!stored) {
      setVisible(true);
    }
  }, []);

  const handleConsent = (consent: "all" | "functional") => {
    localStorage.setItem(STORAGE_KEY, consent);
    setVisible(false);

    // Activeer Google Analytics alleen bij volledige toestemming
    if (consent === "all" && typeof window !== "undefined") {
      // @ts-expect-error - gtag wordt door GTM ingeladen
      window.gtag?.("consent", "update", {
        analytics_storage: "granted",
      });
    }
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-[60] bg-white border-2 border-black shadow-brutal"
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
    >
      <div className="p-5">
        <div className="flex items-start gap-3 mb-4">
          <div className="shrink-0 w-9 h-9 bg-[#FF4500] border-2 border-black grid place-items-center">
            <Cookie size={18} className="text-white" strokeWidth={2.5} />
          </div>
          <div className="flex-1">
            <h2
              id="cookie-banner-title"
              className="font-heading font-extrabold uppercase text-sm tracking-tight mb-1"
            >
              Cookies
            </h2>
            <p id="cookie-banner-desc" className="text-xs text-[#525252] leading-relaxed">
              Wij gebruiken functionele cookies om de website te laten werken, 
              en analytische cookies om te begrijpen hoe u onze site gebruikt. 
              Zie ons{" "}
              <Link href="/cookiebeleid" className="text-[#FF4500] underline">
                cookiebeleid
              </Link>
              .
            </p>
          </div>
          <button
            type="button"
            onClick={() => handleConsent("functional")}
            aria-label="Sluit en accepteer alleen functionele cookies"
            className="shrink-0 w-7 h-7 grid place-items-center hover:bg-black hover:text-white transition-colors"
          >
            <X size={16} strokeWidth={3} />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <button
            type="button"
            onClick={() => handleConsent("all")}
            className="flex-1 bg-[#FF4500] text-white font-heading font-bold uppercase text-xs tracking-wider border-2 border-black px-4 py-3 hover:bg-black transition-colors"
          >
            Alles accepteren
          </button>
          <button
            type="button"
            onClick={() => handleConsent("functional")}
            className="flex-1 bg-white text-black font-heading font-bold uppercase text-xs tracking-wider border-2 border-black px-4 py-3 hover:bg-black hover:text-white transition-colors"
          >
            Alleen functioneel
          </button>
        </div>
      </div>
    </div>
  );
}
