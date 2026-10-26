import { MapPin, Sparkles } from "lucide-react";
import CTASection from "@/components/CTASection";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import Link from "next/link";
import type { Metadata } from "next";

function NextjsLogoCard() {
  // ... (ongewijzigd)
}

export const metadata: Metadata = {
  title: "Over WebBoost Partner | Onze Visie & Werkwijze in Rotterdam",
  description:
    "Ontdek de visie achter WebBoost Partner. Wij bouwen moderne, conversiegerichte Next.js websites voor ambitieuze ZZP'ers en MKB-bedrijven in de regio Rotterdam.",
  alternates: { canonical: "https://webboostpartner.nl/over-mij" },
};

export default function OverMijPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#FAFAFA] border-b-2 border-black py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-4">// Persoonlijk & Direct</p>
            {/* ✅ AANGEPAST: Nieuwe titel die minder focust op de persoon en meer op de visie */}
            <h1 className="font-heading font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-7xl">
              De visie achter <span className="text-[#FF4500]">WebBoost</span> Partner
            </h1>

            <div className="mt-6 space-y-4 text-lg sm:text-xl max-w-2xl leading-relaxed text-[#1a1a1a]">
              <p>
                WebBoost Partner is opgericht met één helder doel: Rotterdamse ondernemers helpen aan een modern digitaal fundament dat niet alleen online hun vakmanschap laat zien, maar ook daadwerkelijk <strong>nieuwe klanten oplevert</strong>.
              </p>
              <p>
                Wat begon als een passie voor code, groeide uit tot een scherp specialisme. Inmiddels hebben we met succes maatwerk platforms mogen realiseren voor uiteenlopende lokale ondernemers — van rijscholen en zorgprofessionals tot schoonmaakbedrijven.
              </p>
              <p>
                We werken bewust kleinschalig en persoonlijk. Geen grote, anonieme projectteams of accountmanagers; <strong>u schakelt altijd rechtstreeks met de specialist achter het merk</strong>. Wel zo duidelijk, eerlijk en zonder gedoe.
              </p>
            </div>
          </div>

          {/* ... (rest van de code blijft ongewijzigd) ... */}
        </div>
      </section>

      {/* ... (rest van de code blijft ongewijzigd) ... */}
    </>
  );
}
