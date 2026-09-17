import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Rotterdam | SEO die uw website vindbaar maakt",
  description:
    "SEO Rotterdam voor ondernemers die gevonden willen worden. Lokale SEO, technische SEO en Core Web Vitals. Specialist in Next.js websites met 95+ PageSpeed.",
  alternates: { canonical: "https://webboostpartner.nl/seo-rotterdam" },
  keywords: [
    "SEO Rotterdam",
    "lokale SEO Rotterdam",
    "technische SEO",
    "SEO specialist Rotterdam",
    "vindbare website Rotterdam",
  ],
};

interface MetricItem {
  k: string;
  v: string;
  num: string;
}

export default function VindbareSitePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#FAFAFA] border-b-2 border-black py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-4">
            // Vindbare website Rotterdam
          </p>

          <h1 className="font-heading font-black uppercase tracking-tight leading-[0.95] text-5xl sm:text-7xl">
            SEO die uw website
            <br />
            <span className="text-[#FF4500]">vindbaar maakt</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl max-w-3xl leading-relaxed">
            Een website heeft pas waarde als hij gevonden wordt. Ik help Rotterdamse 
            ondernemers om zichtbaar te worden in Google met een combinatie van 
            technische SEO, lokale vindbaarheid en prestaties die meetbaar resultaat 
            opleveren.
          </p>
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

          <h2>Meer klanten via Google</h2>
          <p>
            SEO is geen trucje. Het is een combinatie van techniek, structuur en autoriteit.  
            Voor Rotterdamse ondernemers begint dat bij een website die Google goed kan lezen en begrijpen.
          </p>

          <p>
            Mijn aanpak richt zich op drie pijlers:{" "}
            <strong>technische SEO</strong> (hoe begrijpt Google uw site),{" "}
            <strong>lokale SEO</strong> (hoe zichtbaar bent u in Rotterdam),{" "}
            <strong>contentstructuur</strong> (wat vertelt u aan bezoekers én zoekmachines).
          </p>

          <h2>Technische SEO</h2>
          <p>
            Technische SEO is het fundament van iedere vindbare website.  
            Dit implementeer ik standaard:
          </p>

          <ul>
            <li><strong>Schema.org markup</strong> — gestructureerde data voor rich snippets.</li>
            <li><strong>Semantische HTML</strong> — correcte heading-structuur en toegankelijke markup.</li>
            <li><strong>Sitemap.xml</strong> — direct ingediend bij Google Search Console.</li>
            <li><strong>Robots.txt</strong> — duidelijke instructies voor crawlers.</li>
            <li><strong>Open Graph tags</strong> — professionele previews op social media.</li>
            <li><strong>Canonical URLs</strong> — voorkomt duplicate content.</li>
            <li><strong>SSL/HTTPS</strong> — beveiligde verbinding als rankingfactor.</li>
          </ul>

          <h2>Lokale SEO Rotterdam</h2>
          <p>
            Voor lokale ondernemers is vindbaarheid in Rotterdam cruciaal.  
            Wanneer iemand zoekt op "dienst Rotterdam", wilt u bovenaan staan.
          </p>

          <ul>
            <li><strong>Google Business Profile</strong> — volledig geoptimaliseerd profiel.</li>
            <li><strong>Lokale schema markup</strong> — LocalBusiness structured data.</li>
            <li><strong>NAP-consistentie</strong> — identieke bedrijfsgegevens overal.</li>
            <li><strong>Rotterdam-gerichte content</strong> — pagina&apos;s die uw regio benadrukken.</li>
            <li><strong>Lokale linkbuilding</strong> — vermeldingen op regionale platforms.</li>
          </ul>

          <p>
            Ik werk voor klanten in heel Rotterdam: Centrum, Kralingen, Hillegersberg, 
            Feijenoord en meer. Elke wijk heeft eigen zoekpatronen — daar speel ik op in.
          </p>

          <h2>Core Web Vitals optimalisatie</h2>
          <p>
            Core Web Vitals zijn officiële Google rankingfactoren.  
            Ze meten echte gebruikerservaring:
          </p>

          <ul>
            <li><strong>LCP</strong> — grootste element laadt snel.</li>
            <li><strong>INP</strong> — snelle interacties.</li>
            <li><strong>CLS</strong> — geen verschuivende layout.</li>
          </ul>

          <p>
            Door te bouwen in <strong>Next.js</strong> behaal ik standaard PageSpeed 
            scores van 95+. Dit komt door SSG, automatische optimalisatie en edge delivery.
          </p>

          <h2>SEO voor Next.js websites</h2>
          <p>
            Next.js biedt unieke SEO-voordelen:
          </p>

          <ul>
            <li><strong>SSR</strong> — Google ziet direct volledige pagina&apos;s.</li>
            <li><strong>SSG</strong> — supersnelle CDN-delivery.</li>
            <li><strong>Metadata API</strong> — perfecte titles &amp; descriptions.</li>
            <li><strong>next/image</strong> — geoptimaliseerde afbeeldingen.</li>
            <li><strong>next/font</strong> — lokale fonts zonder vertraging.</li>
          </ul>

          <p>
            De combinatie van Next.js en technische SEO zorgt voor de beste 
            uitgangspositie in Google.
          </p>

          <h2>SEO traject en werkwijze</h2>
          <p>
            Elk traject begint met een <strong>gratis SEO-analyse</strong>.  
            Ik bekijk uw website, concurrentie en kansen in Rotterdam.
          </p>

          <ul>
            <li><strong>Maand 1</strong> — audit, keyword research, concurrentieanalyse.</li>
            <li><strong>Maand 2</strong> — technische optimalisaties, lokale SEO.</li>
            <li><strong>Maand 3</strong> — content, linkbuilding, monitoring.</li>
            <li><strong>Doorlopend</strong> — rapportage en bijsturing.</li>
          </ul>

          <p>
            U krijgt maandelijks een helder rapport met posities, verkeer en conversies.
          </p>

          {/* Interne link naar gerelateerde pagina's */}
          <h2>Meer weten?</h2>
          <p>
            Wilt u een website laten maken die direct vindbaar is? Bekijk dan onze 
            pagina over <Link href="/website-laten-maken-rotterdam">website laten maken in Rotterdam</Link>. 
            Wilt u meer weten over Core Web Vitals? Bekijk onze{" "}
            <Link href="/core-web-vitals">uitleg over Core Web Vitals</Link>.
          </p>
        </div>
      </article>

      <CTASection
        title="Gratis SEO analyse aanvragen"
        subtitle="Stuur uw website URL en ontvang binnen 48 uur een vrijblijvend advies met concrete actiepunten."
        button="Analyse aanvragen"
      />
    </>
  );
}
