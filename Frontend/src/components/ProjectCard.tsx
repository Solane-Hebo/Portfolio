import React from "react";
import type { Project } from "../types";
import { useInView } from "../hooks/useInView";

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onClick,
}) => {
  const { ref, isVisible } = useInView({ threshold: 0.15 });

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    // så att t.ex. klick på länkar inte öppnar modal igen
    if ((e.target as HTMLElement).closest("a")) return;
    onClick?.();
  };

  return (
    <article
      ref={ref}
      onClick={handleClick}
      className={`
        flex cursor-pointer flex-col justify-between rounded-2xl border 
        p-4 shadow-sm transition hover:-translate-y-1 hover:border-sky-500/70 hover:shadow-lg
        ${isVisible ? "card-visible" : "card-hidden"}
        border-slate-200 bg-white/90 dark:border-slate-800 dark:bg-slate-900/40
      `}
    >
      {/* Projektbild */}
      {project.image && (
        <div className="mb-3 overflow-hidden rounded-xl">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-40 w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}

      <div className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
            {project.title}
          </h3>
          {project.highlight && (
            <span className="rounded-full bg-sky-100 px-2 py-0.5 text-xs font-medium text-sky-700 dark:bg-sky-500/15 dark:text-sky-300">
              LIA / Highlight
            </span>
          )}
        </div>

        <p className="text-sm text-slate-700 line-clamp-3 dark:text-slate-300">
          {project.description}
        </p>

        <div className="mt-2 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {(project.github || project.link) && (
        <div className="mt-4 flex gap-3 text-xs">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-sky-600 hover:underline dark:text-sky-400"
            >
              Live-demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-700 hover:underline dark:text-slate-300"
            >
              GitHub
            </a>
          )}
        </div>
      )}
    </article>
  );
};
