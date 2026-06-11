import Link from "next/link";
import { ArrowRight } from "lucide-react";
import USPGrid from "@/components/USPGrid";
import Marquee from "@/components/Marquee";
import PageSpeedTool from "@/components/PageSpeedTool";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Website laten maken Rotterdam | Next.js Webbouwer die scoort in Google",
  description:
    "Razendsnelle Next.js websites voor ondernemers in Rotterdam. Beter dan WordPress op snelheid, SEO en Core Web Vitals. Vrijblijvend kennismaken.",
};

// Interface voor Bar component props
interface BarProps {
  label: string;
  value: string;
}

function Bar({ label, value }: BarProps) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[#525252]">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#FAFAFA] border-b-2 border-black overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden="true">
          <div className="absolute top-10 right-10 w-[500px] h-[500px] border-[20px] border-black rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-24 sm:pt-24 sm:pb-32 grid lg:grid-cols-12 gap-10 items-center relative">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 border-2 border-black bg-white px-3 py-1 mb-6">
              <span className="w-2 h-2 bg-[#FF4500] rounded-full animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest">Next.js webbouwer · Rotterdam</span>
            </div>
            <h1 className="font-heading font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-7xl lg:text-[5.5rem]" data-testid="hero-h1">
              Website laten<br />
              maken in<br />
              <span className="text-[#FF4500]">Rotterdam</span><br />
              die scoort.
            </h1>
            <p className="mt-8 text-lg sm:text-xl max-w-2xl text-[#1a1a1a] leading-relaxed">
              WebBoost Partner ontwikkelt razendsnelle <strong>Next.js websites</strong> voor
              ondernemers in Rotterdam en omgeving. Voormalig WordPress webbouwer,
              nu gespecialiseerd in sites die beter presteren op snelheid, SEO en
              gebruikerservaring. <em>Geen plugins. Geen poespas. Wel resultaat.</em>
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#FF4500] text-white font-heading font-bold uppercase tracking-wider border-2 border-black px-8 py-4 hover:bg-black hover:-translate-y-1 hover:shadow-brutal-sm transition-all"
                data-testid="hero-cta-primary"
              >
                Plan een gesprek <ArrowRight size={18} />
              </Link>
              <Link
                href="/pakketten"
                className="inline-flex items-center justify-center gap-2 bg-white text-black font-heading font-bold uppercase tracking-wider border-2 border-black px-8 py-4 hover:bg-black hover:text-white hover:-translate-y-1 hover:shadow-brutal-sm transition-all"
                data-testid="hero-cta-secondary"
              >
                Bekijk pakketten
              </Link>
            </div>
          </div>

          {/* PageSpeed floating card */}
          <div className="lg:col-span-4">
            <div className="relative max-w-sm ml-auto">
              <div className="bg-white border-2 border-black shadow-brutal p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-[#525252] mb-2">
                  PageSpeed Insights
                </p>
                <div className="flex items-end gap-3 mb-3">
                  <span className="font-heading font-black text-7xl leading-none">100</span>
                  <span className="text-[#525252] font-mono text-sm mb-2">/100</span>
                </div>
                <div className="space-y-1 text-xs font-mono">
                  <Bar label="LCP" value="0.6s" />
                  <Bar label="CLS" value="0.00" />
                  <Bar label="FID" value="0ms" />
                </div>
                <div className="mt-4 pt-4 border-t-2 border-black">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#00B050]">
                    ● Sneller dan 98%
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full bg-[#FF4500] border-2 border-black" />
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      <PageSpeedTool />

      <USPGrid />

      {/* Website Rotterdam intro */}
      <section className="bg-white py-20 sm:py-28 border-y-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-3">
              // Website laten maken Rotterdam
            </p>
            <h2 className="font-heading font-extrabold uppercase text-4xl sm:text-5xl tracking-tight leading-[0.95]">
              Een mooie website<br />is niet genoeg.
            </h2>
          </div>
          <div className="lg:col-span-7 prose-brutal">
            <p>
              Een professionele website is meer dan alleen een mooi ontwerp. Hij moet
              bezoekers overtuigen, snel laden en goed gevonden worden in Google.
              Veel websites in Rotterdam zien er prima uit, maar leveren bedroevend
              weinig klanten op. Vaak komt dat door <strong>WordPress-erfenissen</strong>:
              trage plugins, opgeblazen thema&apos;s, en een SEO die geen prioriteit was.
            </p>
            <p>
              Mijn aanpak: een complete website, gebouwd in Next.js, met technische
              SEO én lokale SEO ingebakken vanaf de eerste regel code. Resultaat?
              Een site die laadt in een halve seconde en in Google omhoog beweegt
              in plaats van weg te zakken.
            </p>
            <Link href="/website-laten-maken-rotterdam" className="inline-flex items-center gap-2 mt-2 font-heading font-bold uppercase text-sm tracking-widest text-[#FF4500] hover:underline">
              Lees meer over de aanpak <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Next.js vs WordPress */}
      <section className="bg-[#FAFAFA] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-3">
            // Next.js vs WordPress
          </p>
          <h2 className="font-heading font-extrabold uppercase text-4xl sm:text-5xl tracking-tight leading-[0.95] max-w-3xl">
            Waarom Next.js<br />beter presteert.
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="border-2 border-black bg-white p-8" data-testid="compare-wordpress">
              <p className="font-mono text-xs uppercase tracking-widest text-[#525252] mb-2">WordPress</p>
              <h3 className="font-heading font-extrabold uppercase text-3xl mb-5">Traag<br/>& Kwetsbaar</h3>
              <ul className="space-y-3 text-sm">
                {[
                  ["LCP", "2.8s — 6s+"],
                  ["Plugins", "12+ nodig voor SEO/speed"],
                  ["Updates", "Wekelijks, vaak breuk"],
                  ["Hacks", "Plugin-exploits"],
                  ["Onderhoud", "€80-€150 per maand"],
                ].map(([k, v]) => (
                  <li key={k} className="flex justify-between border-b border-black/10 pb-2">
                    <span className="font-mono uppercase text-xs text-[#525252]">{k}</span>
                    <span className="font-semibold">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-2 border-black bg-black text-white p-8 shadow-brutal-orange" data-testid="compare-nextjs">
              <p className="font-mono text-xs uppercase tracking-widest text-[#FF4500] mb-2">Next.js</p>
              <h3 className="font-heading font-extrabold uppercase text-3xl mb-5">Snel<br/>& Solide</h3>
              <ul className="space-y-3 text-sm">
                {[
                  ["LCP", "< 0.8s"],
                  ["Plugins", "Geen — alles ingebouwd"],
                  ["Updates", "Geen breekbare plugins"],
                  ["Hacks", "Statische output = veilig"],
                  ["Onderhoud", "Minimaal"],
                ].map(([k, v]) => (
                  <li key={k} className="flex justify-between border-b border-white/10 pb-2">
                    <span className="font-mono uppercase text-xs text-white/60">{k}</span>
                    <span className="font-semibold">{v}</span>
                  </li>
                ))}
              </ul>
              <Link href="/nextjs-vs-wordpress" className="mt-6 inline-flex items-center gap-2 font-heading font-bold uppercase text-sm tracking-widest text-[#FF4500] hover:underline">
                Volledige vergelijking <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Rotterdam preview */}
      <section className="bg-white py-20 sm:py-28 border-y-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-3">
              // SEO Rotterdam
            </p>
            <h2 className="font-heading font-extrabold uppercase text-4xl sm:text-5xl tracking-tight leading-[0.95]">
              SEO die werkt.<br/>Vanaf dag één.
            </h2>
            <p className="mt-5 text-lg text-[#1a1a1a] leading-relaxed max-w-prose">
              Iedere website wordt gebouwd met technische SEO, lokale SEO en een
              sterke contentstructuur. Niet als losse dienst achteraf, maar als
              fundament onder elk project.
            </p>
            <Link href="/seo-rotterdam" className="inline-flex items-center gap-2 mt-6 font-heading font-bold uppercase text-sm tracking-widest bg-[#FF4500] text-white border-2 border-black px-5 py-3 hover:bg-black hover:-translate-y-1 hover:shadow-brutal-sm transition-all">
              Lees over SEO Rotterdam <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "Technische SEO", v: "Schema, sitemap, robots" },
              { k: "Lokale SEO", v: "Rotterdam & omgeving" },
              { k: "Core Web Vitals", v: "95+ scores" },
              { k: "Content strategie", v: "Per doelgroep" },
            ].map((c) => (
              <div key={c.k} className="border-2 border-black p-5 hover:bg-[#FF4500] hover:text-white transition-colors">
                <p className="font-heading font-extrabold uppercase text-lg mb-1">{c.k}</p>
                <p className="text-sm">{c.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voor wie */}
      <section className="bg-[#FAFAFA] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-3">
            // Voor wie
          </p>
          <h2 className="font-heading font-extrabold uppercase text-4xl sm:text-5xl tracking-tight leading-[0.95] mb-12">
            Voor ondernemers<br />die verder willen.
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {["ZZP'ers","MKB-bedrijven","Lokale bedrijven","Coaches","Dienstverleners","Bouwbedrijven","Zorgverleners","Webshops"].map((g, i) => (
              <div key={g} className="border-2 border-black bg-white p-6 text-center hover:bg-black hover:text-white transition-colors" data-testid={`audience-${i}`}>
                <p className="font-heading font-extrabold uppercase text-lg tracking-tight">{g}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PricingSection />

      <CTASection />
    </>
  );
}
