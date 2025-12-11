import React from "react";
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
      <div className="mt-8 flex-1 md:mt-0 hero-fade-up">
        <div
          className="
            hero-float
            mx-auto h-48 w-48 rounded-3xl border
            border-slate-300 bg-gradient-to-tr from-sky-100 via-slate-200 to-fuchsia-200 shadow-md
            dark:border-slate-800 dark:bg-gradient-to-tr dark:from-sky-500/30 dark:via-slate-900 dark:to-fuchsia-500/30 dark:shadow-xl
            md:h-56 md:w-56
          "
        />

        <p className="mt-4 text-center text-xs text-slate-600 dark:text-slate-400">
          Snart: profilbild, kort fakta och länkar.
        </p>
      </div>
    </section>
  );
};
