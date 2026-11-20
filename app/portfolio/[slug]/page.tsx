import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2, Quote } from "lucide-react";
import { projects } from "@/data/projects";
import FAQ from "@/components/FAQ";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return { title: "Project niet gevonden | WebBoost Partner" };
  }

  return {
    title: `${project.name} | Case Study | WebBoost Partner`,
    description: `Ontdek hoe ik ${project.name} heb geholpen met professioneel webdesign Rotterdam en een website die resultaat oplevert. ${project.tagline}`,
    alternates: { canonical: `/portfolio/${project.slug}` },
    openGraph: {
      title: `${project.name} | Case Study | WebBoost Partner`,
      description: `${project.tagline} — ${project.resultMetric}`,
      url: `https://www.webboostpartner.nl/portfolio/${project.slug}`,
      siteName: "WebBoost Partner",
      locale: "nl_NL",
      type: "article",
      images: [{ url: project.image, alt: `Website voor ${project.name}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | Case Study | WebBoost Partner`,
      description: `${project.tagline} — ${project.resultMetric}`,
      images: [project.image],
    },
  };
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const faqs = [
    {
      q: `Wat was het resultaat van het project voor ${project.name}?`,
      a: `${project.resultMetric}. ${project.tagline} Daarnaast is de website gebouwd op Next.js met 95+ PageSpeed, technische SEO en 100% eigenaarschap van de code.`,
    },
    {
      q: `Welke techniek is gebruikt voor ${project.name}?`,
      a: `De website van ${project.name} is gebouwd met Next.js en React. Dit zorgt voor snelle laadtijden, goede Core Web Vitals en een schone, onderhoudsarme codebase zonder plugin-afhankelijkheden.`,
    },
    {
      q: `Kan ik een vergelijkbaar project laten bouwen?`,
      a: `Ja. WebBoost Partner bouwt vergelijkbare Next.js-websites voor ZZP en MKB in Rotterdam en omgeving. Bekijk de pakketten of vraag een vrijblijvend adviesgesprek aan voor een plan op maat.`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `https://www.webboostpartner.nl/portfolio/${project.slug}#case`,
        name: `Case Study: ${project.name}`,
        description: project.tagline,
        creator: { "@id": "https://www.webboostpartner.nl/#organization" },
        author: { "@id": "https://www.webboostpartner.nl/over-mij#person" },
        ...(project.testimonial && {
          review: {
            "@type": "Review",
            reviewBody: project.testimonial.quote,
            author: { "@type": "Person", name: project.testimonial.author },
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          },
        }),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://www.webboostpartner.nl/portfolio/${project.slug}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.webboostpartner.nl/" },
          { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://www.webboostpartner.nl/portfolio" },
          { "@type": "ListItem", position: 3, name: project.name, item: `https://www.webboostpartner.nl/portfolio/${project.slug}` },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `https://www.webboostpartner.nl/portfolio/${project.slug}#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="bg-background min-h-screen">
        {/* Breadcrumb & Terugknop */}
        <div className="pt-32 pb-8">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 font-sans text-sm text-foreground-muted hover:text-brand transition-colors font-medium"
            >
              <ArrowLeft size={16} /> Terug naar overzicht
            </Link>
          </div>
        </div>

        {/* Hero Sectie */}
        <section className="pb-16 sm:pb-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-brand font-bold mb-6">Case Study</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[1.05] tracking-tight mb-8">
              {project.name}
            </h1>
            <p className="text-xl text-foreground-muted leading-relaxed max-w-3xl font-sans mb-10">
              {project.tagline}
            </p>

            {/* TL;DR */}
            <div className="mb-10 bg-background-secondary p-6 sm:p-8 rounded-sm border border-border-subtle max-w-3xl">
              <p className="font-sans text-xs uppercase tracking-widest text-brand font-bold mb-3">Kort antwoord</p>
              <p className="text-base leading-relaxed text-foreground-muted font-sans">
                WebBoost Partner bouwde voor <strong className="text-foreground font-semibold">{project.name}</strong> een Next.js-website met als resultaat <strong className="text-foreground font-semibold">{project.resultMetric}</strong>. {project.tagline}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-2 bg-background-secondary border border-border-subtle px-5 py-3 rounded-sm font-sans text-sm font-medium text-foreground">
                <CheckCircle2 size={18} className="text-brand" /> {project.resultMetric}
              </span>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-foreground text-white px-5 py-3 rounded-sm font-sans text-sm font-medium hover:bg-brand transition-colors"
              >
                Bezoek live website <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Grote Afbeelding */}
        <section className="bg-background-secondary py-12 sm:py-20 border-y border-border-subtle">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="relative w-full aspect-[16/9] border border-border-subtle bg-background rounded-sm shadow-soft overflow-hidden">
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
        <section className="py-24 sm:py-32">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            
            <p className="text-sm font-sans text-foreground-muted mb-10">
              Geschreven door{" "}
              <Link href="/over-mij" className="text-brand font-medium underline decoration-brand/30 underline-offset-4 hover:decoration-brand transition-colors">
                Ron — WebBoost Partner
              </Link>
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-12 mb-6">De <span className="text-brand italic">Uitdaging</span></h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-12">
              Elke ondernemer verdient een website die meegroeit met de ambities. Voor {project.name} was het tijd voor een digitale stap vooruit. De focus lag op het creëren van een uiterst betrouwbare en gebruiksvriendelijke omgeving, die direct vertrouwen wekt bij de bezoeker.
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-12 mb-6">Mijn <span className="text-brand italic">Aanpak</span></h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-8">
              Ik heb gekozen voor een moderne, bliksemsnelle technische basis zonder onnodige ballast. Dit betekent concreet:
            </p>
            <ul className="space-y-4 mb-12">
              <li className="flex items-start gap-4 text-lg text-foreground-muted">
                <CheckCircle2 className="text-brand shrink-0 mt-1" size={22} />
                <span><strong className="text-foreground font-semibold">Maatwerk design:</strong> Een unieke uitstraling die perfect aansluit bij de identiteit van het bedrijf.</span>
              </li>
              <li className="flex items-start gap-4 text-lg text-foreground-muted">
                <CheckCircle2 className="text-brand shrink-0 mt-1" size={22} />
                <span><strong className="text-foreground font-semibold">Optimale gebruikservaring:</strong> Een website die razendsnel laadt op zowel mobiel als desktop.</span>
              </li>
              <li className="flex items-start gap-4 text-lg text-foreground-muted">
                <CheckCircle2 className="text-brand shrink-0 mt-1" size={22} />
                <span><strong className="text-foreground font-semibold">Vindbaarheid:</strong> Een sterke structuur zodat potentiële klanten de website direct weten te vinden in Google.</span>
              </li>
            </ul>

            <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-12 mb-6">Het <span className="text-brand italic">Resultaat</span></h2>
            <div className="bg-background-secondary border-l-4 border-brand p-6 sm:p-8 rounded-r-sm mb-12">
              <p className="font-serif text-xl text-foreground mb-3">{project.resultMetric}</p>
              <p className="text-foreground-muted font-sans leading-relaxed">Een website die niet alleen technisch uitblinkt, maar vooral zorgt voor een betrouwbare online uitstraling en meer aanvragen.</p>
            </div>

            {/* Testimonial Highlight */}
            {project.testimonial && (
              <div className="relative bg-foreground text-white p-8 sm:p-12 rounded-sm mb-16 shadow-soft overflow-hidden">
                <Quote className="absolute top-6 left-6 text-brand opacity-20" size={64} />
                <blockquote className="relative z-10">
                  <p className="font-serif text-xl sm:text-2xl leading-relaxed mb-6">&ldquo;{project.testimonial.quote}&rdquo;</p>
                  <footer className="font-sans text-sm text-brand font-medium tracking-wide">
                    — {project.testimonial.author}, {project.testimonial.role}
                  </footer>
                </blockquote>
              </div>
            )}

            {/* FAQ-sectie */}
            <div className="pt-12 border-t border-border-subtle mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-8">Veelgestelde vragen</h2>
              <FAQ items={faqs} schemaId={`case-${project.slug}`} />
            </div>

            {/* Interne Link / CTA */}
            <div className="text-center pt-8">
              <h3 className="font-serif text-3xl sm:text-4xl text-foreground mb-6">
                Ook op zoek naar een website die <span className="text-brand italic">resultaat oplevert?</span>
              </h3>
              <p className="text-lg text-foreground-muted mb-10 font-sans">
                Of je nu een nieuwe website wilt voor je bedrijf, of op zoek bent naar professioneel <strong className="text-foreground font-semibold">webdesign Rotterdam</strong>: ik help je graag verder met een <strong className="text-foreground font-semibold">website laten maken in Rotterdam</strong> en omgeving.
              </p>
              <Link
                href="/contact?intent=advies"
                className="inline-flex items-center justify-center bg-brand text-white font-sans font-medium px-8 py-4 rounded-sm hover:bg-brand-hover transition-all duration-300"
              >
                Vraag een vrijblijvend adviesgesprek aan <ArrowRight size={18} className="ml-2" />
              </Link>
              <p className="mt-8 text-sm text-foreground-muted font-sans">
                Bekijk ook{" "}
                <Link href="/pakketten" className="text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand transition-colors">pakketten</Link>
                {" · "}
                <Link href="/website-laten-maken-rotterdam" className="text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand transition-colors">website laten maken Rotterdam</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
