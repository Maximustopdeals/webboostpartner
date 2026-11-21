import Link from "next/link";
import Image from "next/image";
import {
  ExternalLink,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({
  project,
  priority = false,
}: ProjectCardProps) {
  return (
    <article className="relative flex flex-col overflow-hidden rounded-sm border border-border-subtle bg-background shadow-sm transition-shadow duration-300 hover:shadow-soft">

      {/* CONCEPT LABEL */}
      {project.isDemo && (
        <span className="absolute right-4 top-4 z-20 rounded-full bg-brand-accessible px-3 py-1 font-sans text-xs font-semibold tracking-wide text-white shadow-sm">
          Concept
        </span>
      )}

      {/* WEBSITE SCREENSHOT */}
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border-subtle bg-background-secondary">
        <Image
          src={project.image}
          alt={`${project.name} - Next.js website ontworpen en gebouwd door WebBoost Partner`}
          fill
          className="object-contain object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
        />
      </div>

      {/* CONTENT AREA */}
      <div className="flex flex-grow flex-col bg-background p-8">

        {/* PROJECT TITLE & LIVE WEBSITE */}
        <div className="mb-3 flex items-center justify-between gap-3">
          <h3 className="font-serif text-2xl text-foreground">
            {project.name}
          </h3>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Bezoek de live website van ${project.name} (opent in nieuw tabblad)`}
            className="inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-foreground-muted transition-colors hover:text-brand-accessible focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accessible focus-visible:ring-offset-2"
          >
            Live site
            <ExternalLink
              size={14}
              aria-hidden="true"
            />
          </a>
        </div>

        {/* RESULT METRIC */}
        <p className="mb-4 flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-brand-accessible">
          <CheckCircle2
            size={16}
            aria-hidden="true"
            className="shrink-0"
          />
          {project.resultMetric}
        </p>

        {/* PROJECT DESCRIPTION */}
        <p className="mb-6 flex-grow text-sm leading-relaxed text-foreground-muted">
          {project.tagline}
        </p>

        {/* TESTIMONIAL */}
        {project.testimonial && (
          <blockquote className="mb-6 border-l-2 border-brand pl-4">
            <p className="mb-2 text-sm italic text-foreground-muted">
              &ldquo;{project.testimonial.quote}&rdquo;
            </p>

            <footer className="font-sans text-xs font-semibold text-foreground">
              {project.testimonial.author},{" "}
              {project.testimonial.role}
            </footer>
          </blockquote>
        )}

        {/* PRIMARY ACTION */}
        <Link
          href={`/portfolio/${project.slug}`}
          className="group/btn mt-auto inline-flex w-full items-center justify-center gap-2 rounded-sm bg-background-secondary px-4 py-3 font-sans text-sm font-medium text-foreground transition-colors hover:bg-border-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accessible focus-visible:ring-offset-2"
        >
          Bekijk case

          <ArrowRight
            size={16}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover/btn:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
}
