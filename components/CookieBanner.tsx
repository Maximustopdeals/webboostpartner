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
    if (!stored) setVisible(true);
  }, []);

  const handleConsent = (consent: "all" | "functional") => {
    localStorage.setItem(STORAGE_KEY, consent);
    setVisible(false);
    if (typeof window !== "undefined") {
      // @ts-expect-error - gtag wordt door GTM ingeladen
      window.gtag?.("consent", "update", {
        analytics_storage: consent === "all" ? "granted" : "denied",
      });
    }
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-6 left-6 right-6 sm:right-auto sm:max-w-md z-[60] bg-background/95 backdrop-blur-md border border-border-subtle shadow-xl rounded-md"
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
    >
      <div className="p-6">
        <div className="flex items-start gap-4 mb-5">
          <div className="shrink-0 w-10 h-10 bg-brand/10 text-brand rounded-full grid place-items-center">
            <Cookie size={20} strokeWidth={2} />
          </div>
          <div className="flex-1">
            <h2 id="cookie-banner-title" className="font-serif text-lg text-foreground mb-2">
              Cookies
            </h2>
            <p id="cookie-banner-desc" className="text-sm text-foreground-muted leading-relaxed font-sans">
              Wij gebruiken functionele cookies om de website te laten werken, 
              en analytische cookies om te begrijpen hoe u onze site gebruikt. 
              Zie ons{" "}
              <Link href="/cookiebeleid" className="text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand transition-colors font-medium">
                cookiebeleid
              </Link>.
            </p>
          </div>
          <button
            type="button"
            onClick={() => handleConsent("functional")}
            aria-label="Sluit en accepteer alleen functionele cookies"
            className="shrink-0 text-foreground-muted hover:text-foreground transition-colors p-1"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={() => handleConsent("all")}
            className="flex-1 bg-brand text-white font-sans font-medium text-sm px-4 py-3 rounded-sm hover:bg-brand-hover transition-colors"
          >
            Alles accepteren
          </button>
          <button
            type="button"
            onClick={() => handleConsent("functional")}
            className="flex-1 bg-background-secondary text-foreground font-sans font-medium text-sm px-4 py-3 rounded-sm hover:bg-border-subtle transition-colors"
          >
            Alleen functioneel
          </button>
        </div>
      </div>
    </div>
  );
}
