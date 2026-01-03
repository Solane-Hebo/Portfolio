import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { useTranslation } from "../hooks/useTranslation";
import { useTheme } from "../context/ThemeContext";

export const Navbar: React.FC = () => {
  const { lang, toggleLang } = useLanguage();
   const { theme, toggleTheme } = useTheme();
  const t = useTranslation();

  const sections = [
    { id: "hero", label: t.nav.home },
    { id: "projects", label: t.nav.projects },
    { id: "about", label: t.nav.about },
    { id: "contact", label: t.nav.contact },
  ];

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="navbar-fade sticky top-0 z-20 border-b backdrop-blur  border-slate-300/80 dark:bg-brand.bg/90 dark:border-slate-700/70">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        {/* Vänster: logo / namn */}
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-2xl bg-gradient-to-tr from-brand.primary/80 via-brand.accent/70 to-fuchsia-500/70 shadow-soft" />
          <div className="flex flex-col leading-tight">
            <span className="text-md font-bold tracking-tight">
              Solane Hebo
            </span>
            <span className="text-[18px] text-slate-400">
             · Frontend & Fullstack Developer
            </span>
          </div>
        </div>

        {/* Höger: navigation + språkknapp */}
        <div className="flex items-center gap-3">
          <ul className="hidden items-center gap-5 md:flex">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => handleScroll(section.id)}
                  className="rounded-full border border-transparent px-4 py-2 text-base font-semibold text-slate-800 transition hover:border-brand.primary/60 dark:hover:bg-slate-700 hover:bg-sky-100 hover:text-brand.primary dark:text-slate-200 dark:hover:bg-brand.soft/70"

                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            className="flex items-center gap-1 rounded-full border hover:bg-sky-100  border-slate-300 bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-800 shadow-sm transition hover:border-brand.accent hover:text-brand.accent dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200"
            aria-label="Toggle theme"
          >
            <span className="text-base">
              {theme === "dark" ? "🌙" : "☀️"}
            </span>
          </button>

          {/* Språkknapp */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 rounded-full border hover:bg-slate-500 border-slate-700/80 bg-slate-900/80 px-3 py-1 text-[11px] font-medium text-slate-200 shadow-sm transition hover:border-brand.accent hover:text-brand.accent"
            aria-label="Switch language"
          >
            <span className="text-base">
              {lang === "sv" ? "🇸🇪" : "🇬🇧"}
            </span>
            <span>{lang === "sv" ? "SV" : "EN"}</span>
          </button>
        </div>
      </nav>
    </header>
  );
};
