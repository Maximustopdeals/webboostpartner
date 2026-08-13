"use client";

import { useState } from "react";
import { Zap, Monitor, Smartphone, ArrowRight, Loader2, CheckCircle2, AlertCircle, Send } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdapzjod";

// Types voor PageSpeed API responses
interface LighthouseCategory {
  score: number;
}

interface LighthouseAudit {
  displayValue?: string;
}

interface LighthouseResult {
  categories: {
    performance?: LighthouseCategory;
    accessibility?: LighthouseCategory;
    "best-practices"?: LighthouseCategory;
    seo?: LighthouseCategory;
  };
  audits: {
    "largest-contentful-paint"?: LighthouseAudit;
    "cumulative-layout-shift"?: LighthouseAudit;
    "interaction-to-next-paint"?: LighthouseAudit;
    "first-contentful-paint"?: LighthouseAudit;
    "server-response-time"?: LighthouseAudit;
  };
}

interface PageSpeedResponse {
  lighthouseResult: LighthouseResult;
}

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

// Helper functions — Google API geeft scores als 0-1, we tonen 0-100
function getScore(cat?: LighthouseCategory): number {
  if (!cat || typeof cat.score !== "number") return 0;
  return Math.round(cat.score * 100);
}

function getAuditValue(audit?: LighthouseAudit): string {
  if (!audit || !audit.displayValue || audit.displayValue === "") return "N/A";
  return audit.displayValue;
}

// Props interfaces
interface ScoreCircleProps {
  score: number;
}

interface ScoreInterpretationProps {
  score: number;
}

interface LeadFormData {
  naam: string;
  email: string;
  website: string;
  telefoon: string;
  interesse: boolean;
}

export default function PageSpeedTool() {
  const [url, setUrl] = useState<string>("");
  const [strategy, setStrategy] = useState<string>("mobile");
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<PageSpeedResponse | null>(null);
  const [error, setError] = useState<string>("");

  // Lead capture state
  const [showLeadForm, setShowLeadForm] = useState<boolean>(false);
  const [leadStatus, setLeadStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [leadError, setLeadError] = useState<string>("");
  const [leadData, setLeadData] = useState<LeadFormData>({
    naam: "",
    email: "",
    website: "",
    telefoon: "",
    interesse: false,
  });

  async function handleScan(): Promise<void> {
    if (!url.trim()) {
      setError("Voer een URL in.");
      return;
    }
    setError("");
    setLoading(true);
    setResult(null);
    setShowLeadForm(false);

    let scanUrl: string = url.trim();
    if (!/^https?:\/\//i.test(scanUrl)) {
      scanUrl = "https://" + scanUrl;
    }

    try {
      const res = await fetch(
        `/api/pagespeed?url=${encodeURIComponent(scanUrl)}&strategy=${strategy}`
      );
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Scan mislukt. Controleer de URL.");
      }
      const data: PageSpeedResponse = await res.json();
      setResult(data);
      // Auto-fill website in lead form
      setLeadData(prev => ({ ...prev, website: scanUrl }));
      setShowLeadForm(true);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Er ging iets mis. Probeer het opnieuw.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (e.key === "Enter") handleScan();
  }

  async function handleLeadSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    setLeadStatus("loading");
    setLeadError("");

    const formData = new FormData();
    formData.append("naam", leadData.naam);
    formData.append("email", leadData.email);
    formData.append("website", leadData.website);
    formData.append("telefoon", leadData.telefoon || "Niet opgegeven");
    formData.append("interesse", leadData.interesse ? "Ja, meer informatie over versnellen" : "Nee, alleen scanresultaat");
    formData.append("pagespeed_score", String(scores?.performance ?? "N/A"));
    formData.append("bron", "PageSpeed Tool Lead");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setLeadStatus("success");
      } else {
        let msg = "Er ging iets mis. Probeer het opnieuw.";
        try {
          const json = await res.json();
          if (json?.errors?.[0]?.message) msg = json.errors[0].message;
        } catch {}
        setLeadError(msg);
        setLeadStatus("error");
      }
    } catch {
      setLeadError("Netwerkfout. Probeer het later opnieuw.");
      setLeadStatus("error");
    }
  }

  // Extract scores from normalized API response
  const cats = result?.lighthouseResult?.categories || {};
  const audits = result?.lighthouseResult?.audits || {};

  const scores: ScoresType | null = result
    ? {
        performance: getScore(cats.performance),
        accessibility: getScore(cats.accessibility),
        bestPractices: getScore(cats["best-practices"]),
        seo: getScore(cats.seo),
        lcp: getAuditValue(audits["largest-contentful-paint"]),
        cls: getAuditValue(audits["cumulative-layout-shift"]),
        inp: getAuditValue(audits["interaction-to-next-paint"]),
        fcp: getAuditValue(audits["first-contentful-paint"]),
        ttfb: getAuditValue(audits["server-response-time"]),
      }
    : null;

  return (
    <section className="bg-[#FAFAFA] py-20 sm:py-28 border-y-2 border-black" data-testid="pagespeed-tool">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Title & info */}
          <div>
            <div className="inline-flex items-center gap-2 border-2 border-black bg-white px-3 py-1 mb-6">
              <Zap size={14} className="text-[#FF4500]" />
              <span className="font-mono text-xs uppercase tracking-widest">Gratis tool</span>
            </div>
            <h2 className="font-heading font-extrabold uppercase text-4xl sm:text-5xl tracking-tight leading-[0.95] mb-6">
              Hoe snel<br />
              is jouw <span className="text-[#FF4500]">site</span>?
            </h2>
            <p className="text-lg text-[#1a1a1a] leading-relaxed max-w-lg mb-8">
              Voer je URL in en zie binnen 30 seconden hoe Google jouw site beoordeelt.{" "}
              <strong>Core Web Vitals, SEO, performance</strong> — alles in een rapport.
            </p>
            <ul className="space-y-3">
              {[
                "Officiële Google PageSpeed Insights data",
                "Mobiele en desktop scan",
                "Direct inzicht in verbeterpunten",
              ].map((item: string) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#525252]">
                  <ArrowRight size={14} className="text-[#FF4500] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Form & Results */}
          <div className="bg-white border-2 border-black shadow-brutal p-6 sm:p-8">
            {/* Input area */}
            <div className="mb-5">
              <label className="block font-heading uppercase text-xs font-bold tracking-widest mb-2">
                Jouw website URL
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={url}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="bv. jouwbedrijf.nl"
                  className="flex-1 border-2 border-black p-4 bg-[#FAFAFA] focus:bg-white focus:border-[#FF4500] outline-none transition-colors font-mono text-sm"
                  data-testid="pagespeed-url-input"
                />
                <button
                  onClick={handleScan}
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 bg-[#FF4500] text-white font-heading font-bold uppercase tracking-wider border-2 border-black px-6 py-4 hover:bg-black hover:-translate-y-1 hover:shadow-brutal-sm transition-all disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
                  data-testid="pagespeed-scan-btn"
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Scannen...
                    </>
                  ) : (
                    <>
                      <Zap size={16} /> Scan mijn site
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Device toggle */}
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-xs uppercase tracking-widest text-[#525252]">Apparaat:</span>
              <div className="flex border-2 border-black">
                <button
                  onClick={() => setStrategy("mobile")}
                  className={`flex items-center gap-2 px-4 py-2 font-heading font-bold uppercase text-xs tracking-wider transition-colors ${
                    strategy === "mobile"
                      ? "bg-black text-white"
                      : "bg-white text-black hover:bg-[#FAFAFA]"
                  }`}
                  data-testid="pagespeed-mobile"
                >
                  <Smartphone size={14} /> Mobiel
                </button>
                <button
                  onClick={() => setStrategy("desktop")}
                  className={`flex items-center gap-2 px-4 py-2 font-heading font-bold uppercase text-xs tracking-wider transition-colors border-l-2 border-black ${
                    strategy === "desktop"
                      ? "bg-black text-white"
                      : "bg-white text-black hover:bg-[#FAFAFA]"
                  }`}
                  data-testid="pagespeed-desktop"
                >
                  <Monitor size={14} /> Desktop
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="border-2 border-black bg-[#FFE5DA] p-4 mb-5" data-testid="pagespeed-error">
                <p className="text-sm font-medium text-[#FF4500]">{error}</p>
              </div>
            )}

            {/* Results */}
            {scores && (
              <div className="space-y-5" data-testid="pagespeed-results">
                {/* Main score circles */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { label: "Performance", score: scores.performance },
                    { label: "Toegankelijkheid", score: scores.accessibility },
                    { label: "Best Practices", score: scores.bestPractices },
                    { label: "SEO", score: scores.seo },
                  ].map((cat) => (
                    <div key={cat.label} className="border-2 border-black bg-[#FAFAFA] p-4 text-center">
                      <ScoreCircle score={cat.score} />
                      <p className="font-heading font-bold uppercase text-xs tracking-wider mt-2">{cat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Core Web Vitals */}
                <div className="border-2 border-black p-4">
                  <p className="font-heading font-bold uppercase text-xs tracking-widest text-[#FF4500] mb-3">
                    Core Web Vitals
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { label: "LCP", value: scores.lcp, good: scores.lcp !== "N/A" && parseFloat(scores.lcp) < 2.5 },
                      { label: "CLS", value: scores.cls, good: scores.cls !== "N/A" && parseFloat(scores.cls) < 0.1 },
                      { label: "INP", value: scores.inp, good: scores.inp !== "N/A" && parseFloat(scores.inp) < 200 },
                      { label: "FCP", value: scores.fcp, good: scores.fcp !== "N/A" && parseFloat(scores.fcp) < 1.8 },
                      { label: "TTFB", value: scores.ttfb, good: scores.ttfb !== "N/A" && parseFloat(scores.ttfb) < 600 },
                    ].map((m) => (
                      <div key={m.label} className="bg-white border border-black p-3">
                        <p className="font-mono text-xs uppercase tracking-widest text-[#525252]">{m.label}</p>
                        <p className={`font-heading font-extrabold text-xl ${m.good ? "text-[#00B050]" : "text-[#FF4500]"}`}>
                          {m.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interpretation */}
                <div className="border-2 border-black bg-black text-white p-4">
                  <p className="font-heading font-bold uppercase text-xs tracking-widest text-[#FF4500] mb-2">
                    Wat betekent dit?
                  </p>
                  <ScoreInterpretation score={scores.performance} />
                </div>
              </div>
            )}

            {/* Lead Capture Form */}
            {showLeadForm && leadStatus !== "success" && (
              <div className="mt-6 border-2 border-[#FF4500] bg-[#FFF5F0] p-5" data-testid="lead-capture-form">
                <p className="font-heading font-bold uppercase text-sm tracking-widest text-[#FF4500] mb-3">
                  Wil je weten hoe je dit kunt verbeteren?
                </p>
                <p className="text-sm text-[#525252] mb-4">
                  Laat je gegevens achter en ik stuur je binnen 24 uur een persoonlijk adviesrapport — gratis en vrijblijvend.
                </p>
                <form onSubmit={handleLeadSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-heading uppercase text-xs font-bold tracking-widest mb-1">
                        Naam *
                      </label>
                      <input
                        type="text"
                        required
                        value={leadData.naam}
                        onChange={(e) => setLeadData(prev => ({ ...prev, naam: e.target.value }))}
                        className="w-full border-2 border-black p-3 bg-white focus:border-[#FF4500] outline-none transition-colors text-sm"
                        placeholder="Jouw naam"
                      />
                    </div>
                    <div>
                      <label className="block font-heading uppercase text-xs font-bold tracking-widest mb-1">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={leadData.email}
                        onChange={(e) => setLeadData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full border-2 border-black p-3 bg-white focus:border-[#FF4500] outline-none transition-colors text-sm"
                        placeholder="jouw@email.nl"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-heading uppercase text-xs font-bold tracking-widest mb-1">
                        Website URL *
                      </label>
                      <input
                        type="url"
                        required
                        value={leadData.website}
                        onChange={(e) => setLeadData(prev => ({ ...prev, website: e.target.value }))}
                        className="w-full border-2 border-black p-3 bg-white focus:border-[#FF4500] outline-none transition-colors text-sm"
                        placeholder="https://jouwbedrijf.nl"
                      />
                    </div>
                    <div>
                      <label className="block font-heading uppercase text-xs font-bold tracking-widest mb-1">
                        Telefoon
                      </label>
                      <input
                        type="tel"
                        value={leadData.telefoon}
                        onChange={(e) => setLeadData(prev => ({ ...prev, telefoon: e.target.value }))}
                        className="w-full border-2 border-black p-3 bg-white focus:border-[#FF4500] outline-none transition-colors text-sm"
                        placeholder="06-12345678"
                      />
                    </div>
                  </div>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={leadData.interesse}
                      onChange={(e) => setLeadData(prev => ({ ...prev, interesse: e.target.checked }))}
                      className="w-5 h-5 border-2 border-black accent-[#FF4500]"
                    />
                    <span className="text-sm">
                      Ja, ik wil graag weten hoe ik mijn website kan versnellen en meer klanten kan aantrekken.
                    </span>
                  </label>

                  {leadStatus === "error" && (
                    <div className="flex items-start gap-2 border-2 border-black bg-[#FFE5DA] p-3">
                      <AlertCircle size={18} className="text-[#FF4500] mt-0.5 shrink-0" />
                      <p className="text-sm font-medium">{leadError}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={leadStatus === "loading"}
                    className="inline-flex items-center gap-2 bg-[#FF4500] text-white font-heading font-bold uppercase tracking-wider border-2 border-black px-6 py-3 hover:bg-black hover:-translate-y-1 hover:shadow-brutal-sm transition-all disabled:opacity-60"
                  >
                    {leadStatus === "loading" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" /> Versturen...
                      </>
                    ) : (
                      <>
                        <Send size={16} /> Stuur mijn gratis adviesrapport
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}

            {/* Lead Success */}
            {leadStatus === "success" && (
              <div className="mt-6 border-2 border-black bg-white p-6 text-center" data-testid="lead-success">
                <CheckCircle2 size={40} className="text-[#FF4500] mx-auto mb-3" strokeWidth={2.5} />
                <h3 className="font-heading font-extrabold uppercase text-xl mb-2">
                  Bedankt!
                </h3>
                <p className="text-sm text-[#525252]">
                  Ik stuur je binnen 24 uur een persoonlijk adviesrapport met concrete verbeterpunten voor jouw website.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ScoreCircle({ score }: ScoreCircleProps) {
  const safeScore: number = typeof score === "number" ? score : 0;
  const color: string = safeScore >= 90 ? "#00B050" : safeScore >= 50 ? "#FF4500" : "#CC0000";
  const displayScore: number = Number.isFinite(safeScore) ? safeScore : 0;
  return (
    <div className="relative inline-flex items-center justify-center w-16 h-16">
      <svg className="w-16 h-16 -rotate-90" viewBox="0 0 36 36">
        <path
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#EBEBEB"
          strokeWidth="3"
        />
        <path
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeDasharray={`${displayScore}, 100`}
          strokeLinecap="butt"
        />
      </svg>
      <span className="absolute font-heading font-extrabold text-lg" style={{ color }}>
        {displayScore}
      </span>
    </div>
  );
}

function ScoreInterpretation({ score }: ScoreInterpretationProps) {
  if (score >= 90) {
    return (
      <p className="text-sm text-white/80">
        Uitstekend! Je site scoort <strong className="text-white">{score}/100</strong> op performance.
        Dit is beter dan de meeste websites. Blijf monitoren om deze score te behouden.
      </p>
    );
  }
  if (score >= 50) {
    return (
      <p className="text-sm text-white/80">
        Je site scoort <strong className="text-white">{score}/100</strong> — er is ruimte voor verbetering.
        Met een paar optimalisaties (afbeeldingen comprimeren, caching, script vertraging) kan je
        flink winnen. <a href="/contact" className="text-[#FF4500] underline">Neem contact op</a> voor een gratis advies.
      </p>
    );
  }
  return (
    <p className="text-sm text-white/80">
      Je site scoort <strong className="text-white">{score}/100</strong> — dit kost je bezoekers en rankings.
      Een trage site heeft directe impact op bounce rate en conversie.{" "}
      <a href="/contact" className="text-[#FF4500] underline">Laten we dit oplossen</a>.
    </p>
  );
}
