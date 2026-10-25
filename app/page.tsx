import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import USPGrid from "@/components/USPGrid";
import PageSpeedTool from "@/components/PageSpeedTool";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Website Laten Maken Rotterdam | Conversiegericht & Snel | WebBoost Partner",
  description: "Professionele website laten maken in Rotterdam. Binnen 2 seconden laadtijd, optimale lokale SEO en een modern ontwerp dat écht klanten oplevert.",
};

export default function HomePage() {
  return (
    <>
      <section className="relative bg-[#FAFAFA] border-b-2 border-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <h1 className="font-heading font-black uppercase text-4xl sm:text-6xl text-black">
              {/* ✅ FIX: text-[#FF4500] -> text-orange-accessible */}
              Een professionele website die écht <span className="text-orange-accessible">klanten oplevert</span>.
            </h1>
            <p className="mt-6 text-xl max-w-2xl text-[#1a1a1a] font-semibold leading-relaxed">
              Geen technisch jargon. Wel een bliksemsnelle website die jouw vakmanschap laat zien en bezoekers omzet in betalende klanten.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              {/* ✅ FIX: text-white -> text-black */}
              <Link 
                href="/contact?intent=quickscan" 
                className="bg-[#FF4500] text-black font-bold uppercase px-8 py-4 border-2 border-black hover:bg-black hover:text-white transition-all"
              >
                Vraag gratis adviesgesprek aan
              </Link>
            </div>
          </div>
        </div>
      </section>
      <USPGrid />
      <PageSpeedTool />
      <CTASection />
    </>
  );
}
