import React from "react";
import { useTranslation } from "../hooks/useTranslation";

export const About: React.FC = () => {
  const t = useTranslation();

  return (
    <section
      id="about"
      className="mx-auto max-w-5xl px-4 py-12 md:py-16"
    >
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
        {t.about.title}
      </h2>
      <div className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-300 md:text-base">
        <p>{t.about.p1}</p>
        <p>{t.about.p2}</p>
        <p>{t.about.p3}</p>
      </div>
    </section>
  );
};
