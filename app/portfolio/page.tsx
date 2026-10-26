import { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio | Webdesign Rotterdam | WebBoost Partner",
  description: "Bekijk het portfolio van WebBoost Partner. Ontdek onze maatwerk Next.js websites, conversiegerichte ontwerpen en bewezen resultaten voor ondernemers in Rotterdam.",
};

export default function PortfolioPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Header Sectie */}
      <section className="bg-[#FAFAFA] border-b-2 border-black py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-orange-accessible mb-3">
            // Bewezen Resultaten
          </p>
          <h1 className="font-heading font-black uppercase text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.95] text-black mb-6">
            Ons <span className="text-[#FF4500]">Portfolio</span>.
          </h1>
          <p className="text-lg sm:text-xl text-[#4a4a48] leading-relaxed max-w-2xl font-medium">
            Geen loze beloftes, maar tastbaar bewijs. Ontdek een selectie van
            maatwerk projecten die we volledig hebben geoptimaliseerd voor
            snelheid, conversie en lokale SEO.
          </p>
        </div>
      </section>

      {/* Grid Sectie */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.slug} 
                project={project} 
                priority={index === 0} // Alleen de eerste afbeelding krijgt prioriteit
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Sectie */}
      <section className="bg-[#FAFAFA] border-t-2 border-black py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <h2 className="font-heading font-black uppercase text-3xl sm:text-4xl mb-4">
            Klaar om jouw project hier <span className="text-[#FF4500]">tussen te zetten?</span>
          </h2>
          <p className="text-lg text-[#525252] mb-8">
            Laten we samen bouwen aan een website die jouw vakmanschap laat zien en structureel nieuwe klanten oplevert.
          </p>
          <Link
            href="/contact?intent=quickscan"
            className="inline-flex items-center justify-center bg-[#FF4500] text-black font-heading font-bold uppercase tracking-wider px-8 py-4 border-2 border-black hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_#1A1A19]"
          >
            Vraag gratis adviesgesprek aan <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </main>
  );
}
