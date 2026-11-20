import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";
import { Project } from "@/data/projects";

export default function ProjectCard({ project, priority = false }: { project: Project, priority?: boolean }) {
  return (
    <div className="relative bg-background border border-border-subtle rounded-sm shadow-sm hover:shadow-soft transition-all duration-300 flex flex-col group overflow-hidden">
      {project.isDemo && (
        <span className="absolute top-4 right-4 z-20 bg-brand text-white font-sans text-xs font-semibold tracking-wide px-3 py-1 rounded-full shadow-sm">
          Concept
        </span>
      )}

      {/* AFBEELDING CONTAINER */}
      <div className="relative w-full aspect-[4/3] bg-background-secondary overflow-hidden border-b border-border-subtle">
        <Image
          src={project.image}
          alt={`${project.name} — Next.js website ontworpen en gebouwd door WebBoost Partner`}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
        />
      </div>

      {/* CONTENT AREA */}
      <div className="p-8 flex flex-col flex-grow bg-background">
        <div className="flex items-center justify-between gap-3 mb-3">
          <h3 className="font-serif text-2xl text-foreground">
            {project.name}
          </h3>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Bezoek de live website van ${project.name} (opent in nieuw tabblad)`}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground-muted hover:text-brand transition-colors shrink-0"
          >
            Live site <ExternalLink size={14} />
          </a>
        </div>

        {/* METRIC BADGE */}
        <p className="font-sans text-xs tracking-wider text-brand font-semibold mb-4 uppercase flex items-center gap-1.5">
          <CheckCircle2 size={16} aria-hidden="true" /> {project.resultMetric}
        </p>

        <p className="text-sm text-foreground-muted leading-relaxed mb-6 flex-grow">
          {project.tagline}
        </p>

        {/* TESTIMONIAL AREA */}
        {project.testimonial && (
          <blockquote className="border-l-2 border-brand pl-4 mb-6">
            <p className="text-sm italic text-foreground-muted mb-2">
              &ldquo;{project.testimonial.quote}&rdquo;
            </p>
            <footer className="font-sans text-xs font-semibold text-foreground">
              — {project.testimonial.author}, {project.testimonial.role}
            </footer>
          </blockquote>
        )}

        {/* PRIMARY ACTION */}
        <Link
          href={`/portfolio/${project.slug}`}
          className="mt-auto inline-flex items-center justify-center gap-2 bg-background-secondary text-foreground font-sans font-medium text-sm py-3 px-4 rounded-sm hover:bg-border-subtle transition-colors w-full group/btn"
        >
          Bekijk case <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
