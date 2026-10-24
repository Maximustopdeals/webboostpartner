"use client";

import React from "react";
import { ArrowRight, Check, Loader2, AlertCircle } from "lucide-react";

// ⚠️ VERVANG dit door jouw eigen Formspree form-ID (zie formspree.io)
const FORMSPREE_ENDPOINT = "https://formspree.io/f/JOUW_FORM_ID";

export default function PageSpeedTool() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("cta_bron", "homepage_speed_tool");
    data.set("intentie_quickscan", "JA");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSuccess(true);
        form.reset();
      } else {
        const body = await res.json().catch(() => null);
        setError(
          body?.errors?.[0]?.message ??
            "Er ging iets mis bij het verzenden. Probeer het opnieuw."
        );
      }
    } catch (err) {
      console.error(err);
      setError(
        "Verzenden mislukt. Controleer je internetverbinding en probeer opnieuw."
      );
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <section className="bg-white py-20 border-b-2 border-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <div className="border-2 border-black p-8 sm:p-12 shadow-brutal inline-block bg-[#FAFAFA]">
            <h3 className="font-heading font-black uppercase text-2xl sm:text-3xl mb-2 text-black">
              De scanner is gestart!
            </h3>
            <p className="text-sm text-[#4a4a48] font-medium max-w-prose leading-relaxed">
              Ik ga jouw website handmatig analyseren op mobiele snelheid en
              SEO-knelpunten. Je ontvangt de video-analyse binnen 48 uur direct
              in je mailbox.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="bg-[#F5F5F3] py-20 sm:py-28 border-b-2 border-black"
      data-testid="pagespeed-tool-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid lg:grid-cols-12 gap-12 items-center">
        {/* Linkerkant: Overtuigende waarde */}
        <div className="lg:col-span-7">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-3">
            // Gratis Website Scan
          </p>
          <h2 className="font-heading font-black uppercase text-4xl sm:text-5xl tracking-tight leading-[0.95] text-black mb-6">
            Hoe snel is jouw website op mobiel?
          </h2>
          <p className="text-base sm:text-lg text-[#4a4a48] mb-6 leading-relaxed font-medium">
            Voer je huidige website URL in. In plaats van een geautomatiseerd
            software-rapport loop ik{" "}
            <strong className="font-bold text-black">handmatig</strong> door je
            website heen. Je ontvangt binnen 48 uur een persoonlijke
            video-analyse waarin ik je exact laat zien waar je laadtijd
            stagneert en hoe je direct meer lokale aanvragen pakt.
          </p>
          <ul className="space-y-2 text-xs font-mono tracking-wider uppercase text-black font-bold">
            <li className="flex items-center">
              <Check
                size={16}
                className="text-[#FF4500] mr-2 stroke-[3] shrink-0"
              />{" "}
              Handmatige check op laadsnelheid &amp; conversie-lekken
            </li>
            <li className="flex items-center">
              <Check
                size={16}
                className="text-[#FF4500] mr-2 stroke-[3] shrink-0"
              />{" "}
              100% gratis en vrijblijvend, geen verkoopgesprek
            </li>
          </ul>
        </div>

        {/* Rechterkant: Compact, laagdrempelig formulier */}
        <div className="lg:col-span-5 border-2 border-black bg-white p-6 shadow-[6px_6px_0px_0px_#1A1A19]">
          <h3 className="font-heading font-black uppercase text-lg mb-4 text-black border-b-2 border-black pb-2">
            Vraag Quickscan Aan
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-700 mb-1 font-bold">
                Website URL
              </label>
              <input
                type="url"
                name="website_url"
                required
                placeholder="https://www.jouwbedrijf.nl"
                className="w-full border-2 border-black p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF4500] bg-[#FAFAFA]"
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-700 mb-1 font-bold">
                E-mailadres
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="naam@bedrijf.nl"
                className="w-full border-2 border-black p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF4500] bg-[#FAFAFA]"
              />
            </div>

            {error && (
              <p
                role="alert"
                className="flex items-start gap-2 text-[10px] font-mono uppercase tracking-wider text-red-600 font-bold"
              >
                <AlertCircle size={14} className="shrink-0 mt-0.5" />
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full justify-center inline-flex items-center bg-[#FF4500] text-white font-heading font-bold uppercase tracking-wider text-xs border-2 border-black py-4 hover:bg-black transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin mr-2" size={14} />{" "}
                  Analyseren...
                </>
              ) : (
                <>
                  Start Gratis Analyse{" "}
                  <ArrowRight className="ml-2" size={14} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
