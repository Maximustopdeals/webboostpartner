import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2, Quote } from "lucide-react";
import { projects } from "@/data/projects";

// Genereer statische routes voor alle projecten (goed voor snelheid en SEO)
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Dynamische metadata per case
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  // Next.js 15: we moeten wachten tot de params beschikbaar zijn
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return {
      title: "Project niet gevonden | WebBoost Partner",
    };
  }

  return {
    title: `${project.name} | Case Study | WebBoost Partner`,
    description: `Ontdek hoe wij ${project.name} hebben geholpen met professioneel webdesign Rotterdam en een website die resultaat oplevert. ${project.tagline}`,
    alternates: {
      canonical: `https://www.webboostpartner.nl/portfolio/${project.slug}`,
    },
  };
}

// Next.js 15: Ook hier moeten we de params eerst resolven
export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  // Schema markup voor de case study en review
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `https://www.webboostpartner.nl/portfolio/${project.slug}#case`,
        name: project.name,
        description: project.tagline,
        creator: {
          "@type": "Organization",
          name: "WebBoost Partner",
          url: "https://www.webboostpartner.nl",
        },
        ...(project.testimonial && {
          review: {
            "@type": "Review",
            reviewBody: project.testimonial.quote,
            author: {
              "@type": "Person",
              name: project.testimonial.author,
            },
          },
        }),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-white min-h-screen">
        {/* Breadcrumb & Terugknop */}
        <div className="border-b-2 border-black bg-[#FAFAFA] py-4">
          <div className="max-w-5xl mx-auto px-4 sm:px-8">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#525252] hover:text-[#FF4500] transition-colors font-bold"
            >
              <ArrowLeft size={14} /> Terug naar overzicht
            </Link>
          </div>
        </div>

        {/* Hero Sectie */}
        <section className="bg-white py-16 sm:py-24 border-b-2 border-black">
          <div className="max-w-5xl mx-auto px-4 sm:px-8">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-4">
              // Case Study
            </p>
            <h1 className="font-heading font-black uppercase text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.95] text-black mb-6">
              {project.name}
            </h1>
            
            <p className="text-xl text-[#4a4a48] leading-relaxed max-w-3xl font-medium mb-8">
              {project.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-2 bg-[#FAFAFA] border-2 border-black px-4 py-2 font-mono text-sm font-bold text-black shadow-[2px_2px_0px_0px_#1A1A19]">
                <CheckCircle2 size={16} className="text-[#FF4500]" /> {project.resultMetric}
              </span>
              
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 font-heading font-bold uppercase text-sm tracking-wider border-2 border-black hover:bg-[#FF4500] transition-colors"
              >
                Bezoek live website <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Grote Afbeelding */}
        <section className="border-b-2 border-black bg-[#F5F5F3] p-4 sm:p-8">
          <div className="max-w-5xl mx-auto">
            <div className="relative w-full aspect-[16/9] border-2 border-black bg-white shadow-[6px_6px_0px_0px_#1A1A19] overflow-hidden">
              <Image
                src={project.image}
                alt={`Ontwerp en ontwikkeling van de website voor ${project.name}`}
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </section>

        {/* Content & Resultaten Sectie */}
        <section className="py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-8">
            
            <h2 className="font-heading font-black uppercase text-3xl mb-6">
              De <span className="text-[#FF4500]">Uitdaging</span>
            </h2>
            <p className="text-lg text-[#4a4a48] leading-relaxed mb-12">
              Elke ondernemer verdient een website die meegroeit met de ambities. Voor {project.name} was het tijd voor een digitale stap vooruit. De focus lag op het creëren van een uiterst betrouwbare en gebruiksvriendelijke omgeving, die direct vertrouwen wekt bij de bezoeker.
            </p>

            <h2 className="font-heading font-black uppercase text-3xl mb-6">
              Onze <span className="text-[#FF4500]">Aanpak</span>
            </h2>
            <p className="text-lg text-[#4a4a48] leading-relaxed mb-6">
              Wij hebben gekozen voor een moderne, bliksemsnelle technische basis zonder onnodige ballast. Dit betekent:
            </p>
            <ul className="space-y-4 mb-12">
              <li className="flex items-start gap-3 text-lg text-[#4a4a48]">
                <CheckCircle2 className="text-[#FF4500] shrink-0 mt-1" size={20} />
                <span><strong>Maatwerk design:</strong> Een unieke uitstraling die perfect aansluit bij de identiteit van het bedrijf.</span>
              </li>
              <li className="flex items-start gap-3 text-lg text-[#4a4a48]">
                <CheckCircle2 className="text-[#FF4500] shrink-0 mt-1" size={20} />
                <span><strong>Optimale gebruikservaring:</strong> Een website die razendsnel laadt op zowel mobiel als desktop.</span>
              </li>
              <li className="flex items-start gap-3 text-lg text-[#4a4a48]">
                <CheckCircle2 className="text-[#FF4500] shrink-0 mt-1" size={20} />
                <span><strong>Vindbaarheid:</strong> Een sterke structuur zodat potentiële klanten de website direct weten te vinden in Google.</span>
              </li>
            </ul>

            <h2 className="font-heading font-black uppercase text-3xl mb-6">
              Het <span className="text-[#FF4500]">Resultaat</span>
            </h2>
            <div className="bg-[#FAFAFA] border-2 border-black p-6 sm:p-8 shadow-[4px_4px_0px_0px_#1A1A19] mb-12">
              <p className="font-heading font-bold text-xl uppercase tracking-wide mb-2">
                {project.resultMetric}
              </p>
              <p className="text-[#4a4a48]">
                Een website die niet alleen technisch uitblinkt, maar vooral zorgt voor een betrouwbare online uitstraling en meer aanvragen.
              </p>
            </div>

            {/* Testimonial Highlight */}
            {project.testimonial && (
              <div className="relative bg-black text-white p-8 sm:p-12 border-2 border-black mb-16 shadow-[6px_6px_0px_0px_#FF4500]">
                <Quote className="absolute top-6 left-6 text-[#FF4500] opacity-20" size={64} />
                <blockquote className="relative z-10">
                  <p className="text-xl sm:text-2xl font-medium leading-relaxed mb-6">
                    &ldquo;{project.testimonial.quote}&rdquo;
                  </p>
                  <footer className="font-mono text-sm text-[#FF4500] font-bold uppercase tracking-widest">
                    - {project.testimonial.author}, {project.testimonial.role}
                  </footer>
                </blockquote>
              </div>
            )}

            {/* Interne Link / CTA naar contact met focus op regio */}
            <div className="text-center">
              <h3 className="font-heading font-black uppercase text-2xl sm:text-3xl mb-4">
                Ook op zoek naar een website die <span className="text-[#FF4500]">resultaat oplevert?</span>
              </h3>
              <p className="text-lg text-[#525252] mb-8">
                Of je nu een nieuwe website wilt voor je bedrijf, of op zoek bent naar professioneel <strong>webdesign Rotterdam</strong>: wij helpen je graag verder met een <strong>website laten maken in Rotterdam</strong> en omgeving.
              </p>
              <Link
                href="/contact?intent=advies"
                className="inline-flex items-center justify-center bg-[#FF4500] text-black font-heading font-bold uppercase tracking-wider px-8 py-4 border-2 border-black hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_#1A1A19]"
              >
                Vraag een vrijblijvend adviesgesprek aan <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}
