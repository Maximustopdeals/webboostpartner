import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";
import { Project } from "@/data/projects";

export default function ProjectCard({ project, priority = false }: { project: Project, priority?: boolean }) {
  return (
    <div className="relative border-2 border-black bg-white shadow-[4px_4px_0px_0px_#1A1A19] flex flex-col group overflow-hidden">
      {project.isDemo && (
        <span className="absolute top-4 right-4 z-20 bg-black text-white font-mono text-[9px] uppercase tracking-widest px-2 py-1 border-2 border-white">
          Concept Showcase
        </span>
      )}

      {/* AFBEELDING CONTAINER */}
      <div className="relative w-full h-52 border-b-2 border-black bg-[#F5F5F3] p-4 flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src={project.image}
            alt={`Screenshot van ${project.name}`}
            fill
            className="object-contain object-top group-hover:scale-102 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
          />
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="p-6 flex flex-col flex-grow bg-white">
        <div className="flex items-center justify-between gap-2 mb-2">
          <h3 className="font-heading font-black uppercase text-xl text-black">
            {project.name}
          </h3>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-mono text-gray-600 hover:text-[#FF4500] transition-colors"
          >
            Live site <ExternalLink size={12} />
          </a>
        </div>

        {/* METRIC BADGE */}
        <p className="font-mono text-[11px] uppercase tracking-wider text-[#FF4500] font-bold mb-3 flex items-center gap-1.5">
          <CheckCircle2 size={14} /> {project.resultMetric}
        </p>

        <p className="text-sm text-[#4a4a48] leading-relaxed mb-6 font-medium">
          {project.tagline}
        </p>

        {/* TESTIMONIAL AREA */}
        {project.testimonial && (
          <blockquote className="border-l-2 border-[#FF4500] pl-4 mb-6 italic text-xs text-gray-600 bg-[#FFE5DA]/20 py-2 pr-2">
            <p className="mb-2">
              &ldquo;{project.testimonial.quote}&rdquo;
            </p>
            <footer className="font-mono text-[10px] uppercase tracking-wider not-italic text-black font-bold">
              - {project.testimonial.author}, {project.testimonial.role}
            </footer>
          </blockquote>
        )}

        {/* PRIMARY ACTION */}
        {/* De knop linkt nu direct naar de dynamische case-pagina */}
        <Link
          href={`/portfolio/${project.slug}`}
          className="mt-auto inline-flex items-center justify-center gap-2 bg-[#FF4500] text-black font-heading font-bold uppercase text-xs tracking-wider border-2 border-black py-3 hover:bg-black hover:text-white transition-all shadow-[2px_2px_0px_0px_#1A1A19] group/btn"
        >
          Bekijk case <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
