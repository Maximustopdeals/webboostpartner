import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  const strategy = searchParams.get("strategy") || "mobile";

  if (!url) {
    return NextResponse.json(
      { error: "Geen URL opgegeven." },
      { status: 400 }
    );
  }

  // Valideer dat het een echte URL is
  let validatedUrl;
  try {
    validatedUrl = new URL(url).toString();
  } catch {
    return NextResponse.json(
      { error: "Ongeldige URL. Voer een volledige URL in inclusief https://" },
      { status: 400 }
    );
  }

  const apiKey = process.env.PAGESPEED_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "API key niet geconfigureerd." },
      { status: 500 }
    );
  }

  try {
    // Bouw de API URL handmatig zodat categorieen correct worden doorgegeven
    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(validatedUrl)}&key=${encodeURIComponent(apiKey)}&strategy=${strategy}&category=PERFORMANCE&category=ACCESSIBILITY&category=BEST_PRACTICES&category=SEO`;

    const res = await fetch(apiUrl, { next: { revalidate: 0 } });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      const msg = err.error?.message || `Google API fout (${res.status})`;
      return NextResponse.json({ error: msg }, { status: res.status });
    }

    const data = await res.json();

    // Valideer dat we de benodigde data hebben
    if (!data.lighthouseResult) {
      return NextResponse.json(
        { error: "Geen lighthouse resultaten ontvangen van Google." },
        { status: 500 }
      );
    }

    // Normaliseer de scores naar 0-100
    const cats = data.lighthouseResult.categories || {};
    const audits = data.lighthouseResult.audits || {};

    const normalizeScore = (score) => {
      if (score === null || score === undefined) return null;
      if (typeof score === "number") {
        return score <= 1 ? Math.round(score * 100) : Math.round(score);
      }
      return null;
    };

    const normalized = {
      lighthouseResult: {
        categories: {
          performance: { score: normalizeScore(cats.performance?.score) },
          accessibility: { score: normalizeScore(cats.accessibility?.score) },
          "best-practices": { score: normalizeScore(cats["best-practices"]?.score) },
          seo: { score: normalizeScore(cats.seo?.score) },
        },
        audits: {
          "largest-contentful-paint": {
            displayValue: audits["largest-contentful-paint"]?.displayValue || "N/A",
            score: audits["largest-contentful-paint"]?.score ?? null,
          },
          "cumulative-layout-shift": {
            displayValue: audits["cumulative-layout-shift"]?.displayValue || "N/A",
            score: audits["cumulative-layout-shift"]?.score ?? null,
          },
          "interaction-to-next-paint": {
            displayValue: audits["interaction-to-next-paint"]?.displayValue || "N/A",
            score: audits["interaction-to-next-paint"]?.score ?? null,
          },
          "first-contentful-paint": {
            displayValue: audits["first-contentful-paint"]?.displayValue || "N/A",
            score: audits["first-contentful-paint"]?.score ?? null,
          },
          "server-response-time": {
            displayValue: audits["server-response-time"]?.displayValue || "N/A",
            score: audits["server-response-time"]?.score ?? null,
          },
        },
      },
    };

    return NextResponse.json(normalized);
  } catch (err) {
    console.error("PageSpeed API error:", err);
    return NextResponse.json(
      { error: "Er ging iets mis bij het ophalen van de data. Probeer het later opnieuw." },
      { status: 500 }
    );
  }
}
