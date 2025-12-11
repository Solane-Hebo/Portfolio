import React from "react";
import type { Project } from "../types";
import { useLanguage } from "../context/LanguageContext";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  const { lang } = useLanguage();

  const labels =
    lang === "sv"
      ? {
          client: "Kund",
          period: "Period",
          role: "Roll",
          lia: "LIA-projekt",
          close: "Stäng",
          liveDemo: "Live-demo",
          githubRepo: "GitHub-repo",
        }
      : {
          client: "Client",
          period: "Period",
          role: "Role",
          lia: "Internship project",
          close: "Close",
          liveDemo: "Live demo",
          githubRepo: "GitHub repo",
        };

  const mainImage =
    (project.images && project.images[0]) || project.image || null;
  const extraImages =
    project.images && project.images.length > 1
      ? project.images.slice(1)
      : [];

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/70 px-4 md:px-6 dark:bg-slate-950/70">
      {/* Klick utanför = stäng */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-50 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
              {project.title}
            </h3>

            {project.client && (
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {labels.client}:{" "}
                <span className="text-slate-900 dark:text-slate-200">
                  {project.client}
                </span>
              </p>
            )}

            {project.period && (
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {labels.period}: {project.period}
              </p>
            )}

            {project.role && (
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {labels.role}: {project.role}
              </p>
            )}

            {project.lia && (
              <p className="text-xs text-sky-700 dark:text-sky-300">
                {labels.lia}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="self-start rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700 transition hover:border-sky-400 hover:text-sky-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-sky-400 dark:hover:text-sky-200"
          >
            {labels.close}
          </button>
        </div>

        {/* Huvudbild – större nu */}
        {mainImage && (
          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
            <img
              src={mainImage}
              alt={project.title}
              className="w-full max-h-80 object-cover"
            />
          </div>
        )}

        <p className="mt-5 text-sm md:text-[15px] leading-relaxed text-slate-700 dark:text-slate-200">
          {project.longDescription ?? project.description}
        </p>

        {/* Extra bilder */}
        {extraImages.length > 0 && (
          <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3">
            {extraImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${project.title} – image ${i + 2}`}
                className="h-24 w-full rounded-xl object-cover border border-slate-200 dark:border-slate-800"
              />
            ))}
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              {t}
            </span>
          ))}
        </div>

        {(project.link || project.github) && (
          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-sky-600 hover:underline dark:text-sky-400"
              >
                {labels.liveDemo}
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-700 hover:underline dark:text-slate-300"
              >
                {labels.githubRepo}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
