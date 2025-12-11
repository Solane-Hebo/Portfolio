import React, { useEffect, useMemo, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { useTranslation } from "../hooks/useTranslation";
import type { Project } from "../types";
import { useLanguage } from "../context/LanguageContext";
import { projects as projectsSv } from "../data/projects";
import { projectsEn } from "../data/projects.en";

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const { lang } = useLanguage();
  const t = useTranslation();

  // Välj rätt projektdatabas baserat på språk
  const data = lang === "sv" ? projectsSv : projectsEn;

  // Label för "alla" beroende på språk
  const allLabel = lang === "sv" ? "Alla" : "All";

  const [selectedTech, setSelectedTech] = useState<string>(allLabel);

  // När man byter språk → reset filter till "Alla"/"All"
  useEffect(() => {
    setSelectedTech(allLabel);
  }, [allLabel]);

  const techFilters = useMemo(() => {
    if (!data || data.length === 0) return [allLabel];
    const techSet = new Set<string>();
    data.forEach((project) => {
      project.tech.forEach((t) => techSet.add(t));
    });
    return [allLabel, ...Array.from(techSet)];
  }, [data, allLabel]);

  const filteredProjects = useMemo(() => {
    if (!data) return [];
    if (selectedTech === allLabel) return data;
    return data.filter((project) => project.tech.includes(selectedTech));
  }, [data, selectedTech, allLabel]);

  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl px-4 py-12 md:py-16"
    >
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
        {t.projects.title}
      </h2>
      <p className="mt-2 max-w-xl text-sm text-slate-700 dark:text-slate-300 md:text-base">
        {t.projects.intro}
      </p>

      {/* Filter-knappar */}
      {data && data.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2 text-xs md:text-sm">
          {techFilters.map((tech) => {
            const isActive = tech === selectedTech;
            return (
              <button
                key={tech}
                type="button"
                onClick={() => setSelectedTech(tech)}
                className={[
                  "rounded-full border px-3 py-1 transition",
                  isActive
                    ? "border-sky-500 bg-sky-100 text-sky-700 dark:border-sky-400 dark:bg-sky-500/15 dark:text-sky-200"
                    : "border-slate-300 bg-slate-100 text-slate-700 hover:border-sky-400/60 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:text-sky-200",
                ].join(" ")}
              >
                {tech}
              </button>
            );
          })}
        </div>
      )}

      {/* Projektlista */}
      {filteredProjects.length === 0 ? (
        <p className="mt-6 text-sm text-slate-700 dark:text-slate-400">
          {t.projects.noMatchPrefix}{" "}
          <span className="font-semibold">{selectedTech}</span>
          {t.projects.noMatchSuffix}
        </p>
      ) : (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </div>
      )}

      {/* Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
};
