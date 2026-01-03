import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";

export const Hero: React.FC = () => {
  const t = useTranslation();

  return (
    <section
      id="hero"
      className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-16 md:flex-row md:items-center"
    >
      {/* Vänster: text */}
      <div className="flex-1 space-y-6 hero-stagger">
        {/* Badge */}
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-sky-400">
          {t.hero.badge}
        </p>

        {/* Titel */}
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
          {t.hero.hello}{" "}
          <span className="text-sky-600 dark:text-sky-400">Solane Hebo</span>,{" "}
          {t.hero.path}{" "}
          <span className="underline decoration-sky-500/60">
            {t.hero.emphasis}
          </span>
          .
        </h1>

        {/* Beskrivning */}
        <p className="max-w-xl text-sm text-slate-700 dark:text-slate-300 md:text-base">
          {t.hero.description}
        </p>

        {/* Knappar */}
        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-full bg-sky-600 px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400"
          >
            {t.hero.viewProjects}
          </a>

          <a
            href="#contact"
            className="rounded-full border border-slate-400 px-5 py-2 text-sm font-medium text-slate-700 transition hover:border-sky-400 hover:text-sky-600 dark:border-slate-600 dark:text-slate-200 dark:hover:border-sky-400"
          >
            {t.hero.contactMe}
          </a>
        </div>
      </div>

      {/* Höger: bildkort */}
    {/* Höger: bild + social */}
<div className="flex flex-col items-center hero-fade-up">
  {/* Klickbar profilbild */}
  <a
    href="#about"
    aria-label="Go to about section"
    className="relative hero-float mx-auto h-48 w-48 md:h-56 md:w-56 group"
  >
    <div className="absolute inset-0 rounded-3xl bg-sky-400/20 blur-xl transition-opacity group-hover:opacity-80 dark:bg-sky-500/20" />

    <img
      src="/images/projects/profile pic.png"
      alt="Solane Hebo"
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).src =
          "/images/profile-placeholder.png";
      }}
      className="
        relative h-full w-full object-cover rounded-3xl border 
        border-slate-300 bg-white shadow-lg transition
        group-hover:scale-[1.02]
        dark:border-slate-800
      "
    />
  </a>

 <p className="mt-3 text-center text-xs text-slate-600 dark:text-slate-400">
  {t.hero.clickToReadMore}
</p>
      {/* Sociala länkar */}
 <div className="mt-3 flex items-center gap-4">
  <a
    href="https://www.linkedin.com/in/solane-hebo-056543244/"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
    className="
      flex h-9 w-9 items-center justify-center rounded-full
      border border-slate-300 text-slate-600 transition
      hover:border-sky-500 hover:text-sky-600 hover:bg-sky-50
      dark:border-slate-700 dark:text-slate-400
      dark:hover:border-sky-400 dark:hover:text-sky-400 dark:hover:bg-sky-500/10
    "
  >
    <FaLinkedin className="text-lg" />
  </a>

  <a
    href="https://github.com/Solane-Hebo"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
    className="
      flex h-9 w-9 items-center justify-center rounded-full
      border border-slate-300 text-slate-600 transition
      hover:border-slate-900 hover:text-slate-900 hover:bg-slate-100
      dark:border-slate-700 dark:text-slate-400
      dark:hover:border-slate-300 dark:hover:text-white dark:hover:bg-slate-800
    "
  >
    <FaGithub className="text-lg" />
  </a>
</div>
 </div>
</section>
  );
};
