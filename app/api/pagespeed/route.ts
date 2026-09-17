import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  const strategyParam = searchParams.get("strategy") || "mobile";

  if (!url) {
    return NextResponse.json(
      { error: "URL is verplicht" },
      { status: 400 }
    );
  }

  const apiKey = process.env.PAGESPEED_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "API key niet geconfigureerd. Voeg PAGESPEED_API_KEY toe aan je environment variables.",
      },
      { status: 500 }
    );
  }

  // Google's API verwacht HOOFDLETTERS: MOBILE of DESKTOP
  const googleStrategy =
    strategyParam.toUpperCase() === "DESKTOP" ? "DESKTOP" : "MOBILE";

  try {
    const apiUrl =
      `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?` +
      `url=${encodeURIComponent(url)}` +
      `&strategy=${googleStrategy}` +
      `&category=performance` +
      `&category=accessibility` +
      `&category=best-practices` +
      `&category=seo` +
      `&key=${apiKey}`;

    const response = await fetch(apiUrl, {
      // Voorkom alle caching (Next.js + Vercel edge + browser)
      cache: "no-store",
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        {
          error:
            errorData.error?.message ||
            "PageSpeed scan mislukt. Controleer of de URL bereikbaar is.",
        },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Normaliseer de response voor de frontend
    return NextResponse.json({
      lighthouseResult: {
        categories: data.lighthouseResult?.categories || {},
        audits: data.lighthouseResult?.audits || {},
        formFactor:
          data.lighthouseResult?.configSettings?.formFactor ||
          googleStrategy.toLowerCase(),
        requestedUrl: data.lighthouseResult?.requestedUrl || url,
        finalUrl: data.lighthouseResult?.finalUrl || url,
      },
    });
  } catch (error) {
    console.error("PageSpeed API error:", error);
    return NextResponse.json(
      { error: "Scan mislukt. Controleer de URL en probeer het opnieuw." },
      { status: 500 }
    );
  }
}
