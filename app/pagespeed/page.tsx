"use client";

import { useState } from "react";
import PageSpeedTool from "@/components/PageSpeedTool";
import LeadCapture from "@/components/LeadCapture";

interface ScoresType {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
  lcp: string;
  cls: string;
  inp: string;
  fcp: string;
  ttfb: string;
}

export default function PageSpeedPage() {
  const [capturedUrl, setCapturedUrl] = useState("");
  const [capturedScores, setCapturedScores] = useState<Record<string, unknown> | null>(null);

  const handleResult = (url: string, scores: ScoresType) => {
    setCapturedUrl(url);
    setCapturedScores(scores as unknown as Record<string, unknown>);
  };

  return (
    <main>
      <section className="bg-[#FAFAFA] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h1 className="font-heading font-black uppercase text-4xl sm:text-5xl tracking-tight leading-[0.95]">
              Gratis <span className="text-[#FF4500]">PageSpeed</span> Tool
            </h1>
            <p className="mt-4 text-lg text-[#525252] max-w-2xl mx-auto">
              Test jouw website op snelheid, SEO en Core Web Vitals.
              Gebaseerd op officiële Google PageSpeed Insights data.
            </p>
          </div>

          <PageSpeedTool onResult={handleResult} />

          {capturedScores && (
            <div className="mt-8 max-w-2xl mx-auto">
              <LeadCapture
                tool="pagespeed"
                urlTested={capturedUrl}
                resultData={capturedScores as Record<string, unknown>}
                title="Bewaar je PageSpeed resultaat"
                description="Laat je e-mail achter en ontvang het volledige rapport met alle scores, Core Web Vitals en verbeterpunten. We nemen binnen 24 uur contact op."
                ctaText="Stuur rapport naar mijn e-mail"
              />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
