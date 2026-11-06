import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Rotterdam | Lokale SEO die uw website vindbaar maakt | WebBoost Partner",
  description:
    "SEO Rotterdam voor ondernemers die gevonden willen worden. Lokale SEO, technische SEO en Core Web Vitals. Specialist in Next.js websites met 95+ PageSpeed. Gratis analyse.",
  alternates: { canonical: "/seo-rotterdam" },
  keywords: [
    "SEO Rotterdam",
    "lokale SEO Rotterdam",
    "SEO specialist Rotterdam",
    "technische SEO",
    "vindbare website Rotterdam",
    "SEO bureau Rotterdam",
  ],
  openGraph: {
    title: "SEO Rotterdam | Lokale SEO die resultaat oplevert",
    description:
      "SEO voor Rotterdamse ondernemers. Technische SEO, lokale vindbaarheid en Core Web Vitals. Gratis analyse binnen 48 uur.",
    url: "https://www.webboostpartner.nl/seo-rotterdam",
    siteName: "WebBoost Partner",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Rotterdam | Lokale SEO die resultaat oplevert",
    description:
      "Technische SEO, lokale vindbaarheid en Core Web Vitals voor ondernemers in Rotterdam.",
  },
};

interface MetricItem {
  k: string;
  v: string;
  num: string;
}

export default function SeoRotterdamPage() {
  return (
    <>
      {/* Schema: Service + LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://www.webboostpartner.nl/seo-rotterdam#webpage",
                url: "https://www.webboostpartner.nl/seo-rotterdam",
                name: "SEO Rotterdam | Lokale SEO die uw website vindbaar maakt",
                description:
                  "SEO Rotterdam voor ondernemers. Lokale SEO, technische SEO en Core Web Vitals. Specialist in Next.js.",
                isPartOf: { "@id": "https://www.webboostpartner.nl/#website" },
                about: { "@id": "https://www.webboostpartner.nl/#organization" },
                inLanguage: "nl-NL",
              },
              {
                "@type": "Service",
                "@id": "https://www.webboostpartner.nl/seo-rotterdam#service",
                name: "SEO Rotterdam",
                description:
                  "Lokale en technische SEO voor ondernemers in Rotterdam. Inclusief Core Web Vitals, Google Business Profile en schema markup.",
                provider: { "@id": "https://www.webboostpartner.nl/#organization" },
                areaServed: [
                  { "@type": "City", name: "Rotterdam" },
                  { "@type": "City", name: "Capelle aan den IJssel" },
                  { "@type": "City", name: "Schiedam" },
                  { "@type": "City", name: "Barendrecht" },
                ],
                serviceType: [
                  "SEO",
                  "Lokale SEO",
                  "Technische SEO",
                  "Core Web Vitals optimalisatie",
                ],
              },
            ],
          }),
        }}
      />

      {/* HERO */}
      <section className="bg-[#FAFAFA] border-b-2 border-black py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-4">
            // SEO Rotterdam
          </p>

          <h1 className="font-heading font-black uppercase tracking-tight leading-[0.95] text-4xl sm:text-5xl lg:text-6xl max-w-none">
            SEO Rotterdam die uw website{" "}
            <span className="text-[#FF4500]">vindbaar maakt</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl max-w-3xl leading-relaxed font-semibold">
            Een website heeft pas waarde als hij gevonden wordt. WebBoost Partner helpt
            Rotterdamse ondernemers met <strong>SEO Rotterdam</strong>: technische SEO,
            lokale vindbaarheid en Core Web Vitals die meetbaar meer aanvragen opleveren.
          </p>

          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-mono uppercase tracking-wider text-[#525252]">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00B050] rounded-full" />
              Lokale SEO
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00B050] rounded-full" />
              Technische SEO
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00B050] rounded-full" />
              95+ PageSpeed
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00B050] rounded-full" />
              Gratis analyse
            </li>
          </ul>

          <div className="mt-9">
            <Link
              href="/contact?intent=analyse"
              className="inline-flex items-center justify-center gap-2 bg-[#FF4500] text-black font-heading font-bold uppercase tracking-wider border-2 border-black px-8 py-4 hover:bg-black hover:text-white hover:-translate-y-1 hover:shadow-brutal-sm transition-all"
            >
              Vraag gratis SEO-analyse aan <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="bg-white py-16 sm:py-24 border-y-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid md:grid-cols-3 gap-5">
          {[
            { k: "Technische SEO", v: "Schema, sitemap, semantische HTML", num: "100%" },
            { k: "Lokale SEO", v: "Rotterdam + regio focus", num: "Top 3" },
            { k: "Core Web Vitals", v: "LCP, INP, CLS optimalisatie", num: "95+" },
          ].map((m: MetricItem, index: number) => (
            <div
              key={index}
              className="border-2 border-black bg-[#FAFAFA] p-8 hover:bg-black hover:text-white transition-colors group"
            >
              <p className="font-mono uppercase text-xs tracking-widest text-[#FF4500] mb-2">
                {m.k}
              </p>
              <p className="font-heading font-extrabold text-5xl mb-2 text-[#FF4500] group-hover:text-white">
                {m.num}
              </p>
              <p className="text-sm">{m.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTENT */}
      <article className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 prose-brutal">
          <h2>Waarom SEO Rotterdam het verschil maakt</h2>
          <p>
            SEO is geen trucje. Het is een combinatie van techniek, structuur en
            autoriteit. Voor ondernemers in Rotterdam begint dat bij een website die
            Google goed kan lezen én die lokaal relevant is.
          </p>
          <p>
            Mijn aanpak rust op drie pijlers:{" "}
            <strong>technische SEO</strong> (hoe begrijpt Google uw site),{" "}
            <strong>lokale SEO</strong> (hoe zichtbaar bent u in Rotterdam) en{" "}
            <strong>contentstructuur</strong> (wat u vertelt aan bezoekers én
            zoekmachines).
          </p>

          <h2>Technische SEO</h2>
          <p>
            Technische SEO is het fundament van iedere vindbare website. Dit
            implementeer ik standaard:
          </p>
          <ul>
            <li>
              <strong>Schema.org markup</strong> — gestructureerde data voor rich
              snippets.
            </li>
            <li>
              <strong>Semantische HTML</strong> — correcte heading-structuur en
              toegankelijke markup.
            </li>
            <li>
              <strong>Sitemap.xml</strong> — direct ingediend bij Google Search
              Console.
            </li>
            <li>
              <strong>Robots.txt</strong> — duidelijke instructies voor crawlers.
            </li>
            <li>
              <strong>Open Graph tags</strong> — professionele previews op social
              media.
            </li>
            <li>
              <strong>Canonical URLs</strong> — voorkomt duplicate content.
            </li>
            <li>
              <strong>SSL/HTTPS</strong> — beveiligde verbinding als rankingfactor.
            </li>
          </ul>

          <h2>Lokale SEO Rotterdam</h2>
          <p>
            Voor lokale ondernemers is vindbaarheid in Rotterdam cruciaal. Wanneer
            iemand zoekt op “dienst + Rotterdam”, wilt u bovenaan staan. Daarom
            optimaliseer ik gericht op lokale signalen:
          </p>
          <ul>
            <li>
              <strong>Google Business Profile</strong> — volledig geoptimaliseerd
              profiel.
            </li>
            <li>
              <strong>Lokale schema markup</strong> — LocalBusiness structured data.
            </li>
            <li>
              <strong>NAP-consistentie</strong> — identieke bedrijfsgegevens overal.
            </li>
            <li>
              <strong>Rotterdam-gerichte content</strong> — pagina’s die uw regio
              benadrukken.
            </li>
            <li>
              <strong>Lokale linkbuilding</strong> — vermeldingen op regionale
              platforms.
            </li>
          </ul>
          <p>
            Ik werk voor klanten in heel Rotterdam en omgeving: Centrum, Kralingen,
            Hillegersberg, Feijenoord, Capelle aan den IJssel, Schiedam en
            Barendrecht. Elke wijk heeft eigen zoekpatronen — daar speel ik op in.
          </p>

          <h2>Core Web Vitals optimalisatie</h2>
          <p>
            Core Web Vitals zijn officiële Google rankingfactoren. Ze meten de echte
            gebruikerservaring:
          </p>
          <ul>
            <li>
              <strong>LCP</strong> — grootste element laadt snel.
            </li>
            <li>
              <strong>INP</strong> — snelle reactie op interacties.
            </li>
            <li>
              <strong>CLS</strong> — geen onverwachte layout-verschuivingen.
            </li>
          </ul>
          <p>
            Door te bouwen in <strong>Next.js</strong> behaal ik standaard PageSpeed
            scores van 95+. Dat komt door SSG, automatische image-optimalisatie en
            edge delivery.
          </p>

          <h2>SEO voor Next.js websites</h2>
          <p>Next.js biedt sterke SEO-voordelen ten opzichte van klassieke CMS’en:</p>
          <ul>
            <li>
              <strong>SSR / SSG</strong> — Google ziet direct volledige, snelle
              pagina’s.
            </li>
            <li>
              <strong>Metadata API</strong> — perfecte titles en descriptions per
              pagina.
            </li>
            <li>
              <strong>next/image</strong> — geoptimaliseerde afbeeldingen (AVIF/WebP).
            </li>
            <li>
              <strong>next/font</strong> — lokale fonts zonder vertraging.
            </li>
          </ul>
          <p>
            De combinatie van Next.js en technische SEO geeft de beste
            uitgangspositie in Google — zeker voor concurrentiegevoelige zoekwoorden
            in Rotterdam.
          </p>

          <h2>SEO-traject en werkwijze</h2>
          <p>
            Elk traject begint met een <strong>gratis SEO-analyse</strong>. Ik bekijk
            uw website, concurrentie en kansen in Rotterdam. Daarna volgt een
            helder plan:
          </p>
          <ul>
            <li>
              <strong>Maand 1</strong> — audit, keyword research, concurrentieanalyse.
            </li>
            <li>
              <strong>Maand 2</strong> — technische optimalisaties en lokale SEO.
            </li>
            <li>
              <strong>Maand 3</strong> — content, linkbuilding en monitoring.
            </li>
            <li>
              <strong>Doorlopend</strong> — rapportage en bijsturing.
            </li>
          </ul>
          <p>
            U krijgt maandelijks een overzichtelijk rapport met posities, verkeer en
            conversies.
          </p>

          <h2>Website laten maken + SEO in één</h2>
          <p>
            De sterkste resultaten ontstaan wanneer website en SEO vanaf het begin
            samen worden opgezet. Bekijk ook{" "}
            <Link href="/website-laten-maken-rotterdam">
              website laten maken in Rotterdam
            </Link>{" "}
            — dan start u met een technisch perfecte basis én een SEO-strategie die
            daarop aansluit.
          </p>
        </div>
      </article>

      <CTASection
        title="Gratis SEO-analyse aanvragen"
        subtitle="Stuur uw website-URL en ontvang binnen 48 uur een vrijblijvend advies met concrete actiepunten voor Rotterdam."
        button="Analyse aanvragen"
        href="/contact?intent=analyse"
      />
    </>
  );
}
