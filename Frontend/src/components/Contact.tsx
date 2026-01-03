import React from "react";
import { useTranslation } from "../hooks/useTranslation";
import { useLanguage } from "../context/LanguageContext";
import {
  FaEnvelope,
  FaLinkedin,
  FaFilePdf,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export const Contact: React.FC = () => {
  const t = useTranslation();
  const { lang } = useLanguage();

  const cta =
  lang === "sv"
    ? {
        message: "Skicka ett meddelande",
        linkedin: "Visa LinkedIn",
        upwork: "Visa Upwork-profil",
      }
    : {
        message: "Send me a message",
        linkedin: "View LinkedIn",
        upwork: "View Upwork profile",
      };


  const ui =
    lang === "sv"
      ? {
          open: "Öppen för jobb / frilans",
          replies: "Svarar oftast inom 24h",
          location: "Stockholm · Remote",
          servicesTitle: "Tjänster",
          services: ["Frontend", "Fullstack", "Landningssidor"],
          cv: "Ladda ner CV (PDF)",
        }
      : {
          open: "Open for job / freelance",
          replies: "Usually replies within 24h",
          location: "Stockholm · Remote",
          servicesTitle: "Services",
          services: ["Frontend", "Fullstack", "Landing pages"],
          cv: "Download CV (PDF)",
        };

  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-12 md:py-16">
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
        {t.contact.title}
      </h2>

      {/* Status row */}
      <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
        <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 font-medium text-green-700 dark:bg-green-500/15 dark:text-green-300">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          {ui.open}
        </span>

        <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
          <FaClock className="text-xs" />
          {ui.replies}
        </span>

        <span className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400">
          <FaMapMarkerAlt className="text-xs" />
          {ui.location}
        </span>
      </div>

      {/* Upwork-focused intro */}
      <p className="mt-4 max-w-xl text-sm text-slate-700 dark:text-slate-300 md:text-base">
        {t.contact.intro}
      </p>

      {/* Services */}
      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          {ui.servicesTitle}
        </p>

        <div className="mt-2 flex flex-wrap gap-2">
          {ui.services.map((s) => (
            <span
              key={s}
              className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* CTA buttons */}
<div className="mt-6 flex flex-wrap gap-3">
  {/* Email */}
  <a
    href="mailto:solanesani1@gmail.com?subject=Project%20inquiry"
    className="
      inline-flex items-center justify-center
      rounded-full bg-sky-600 px-6 py-2
      text-sm font-medium text-white shadow-sm transition
      hover:bg-sky-500
      dark:bg-sky-500 dark:hover:bg-sky-400
    "
  >
    {cta.message}
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/solane-hebo-056543244/"
    target="_blank"
    rel="noreferrer"
    className="
      inline-flex items-center gap-2
      rounded-full border border-slate-300 px-6 py-2
      text-sm font-medium text-slate-700 transition
      hover:border-sky-400 hover:text-sky-600
      dark:border-slate-700 dark:text-slate-200 dark:hover:border-sky-400
    "
  >
    <FaLinkedin />
    {cta.linkedin}
  </a>
</div>


      {/* Links */}
      <div className="mt-6 flex flex-col gap-4 text-sm">
        <a
          href="mailto:solanesani1@gmail.com"
          className="flex items-center gap-3 text-slate-700 transition hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            <FaEnvelope />
          </span>
          <span>
            {t.contact.emailLabel}:{" "}
            <span className="underline underline-offset-2">
              solanesani1@gmail.com
            </span>
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/solane-hebo-056543244/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 text-slate-700 transition hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            <FaLinkedin />
          </span>
          <span>
            {t.contact.linkedinLabel}:{" "}
            <span className="underline underline-offset-2">
              linkedin.com/in/solane-hebo
            </span>
          </span>
        </a>

        <a
          href="/cv/Solane-Hebo-CV.pdf"
          download
          className="flex items-center gap-3 text-slate-700 transition hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-red-600 dark:border-slate-700 dark:text-red-400">
            <FaFilePdf />
          </span>
          <span className="underline underline-offset-2">{ui.cv}</span>
        </a>
      </div>

      {/* Sticky mobile CTA */}
<div className="
  fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)]
  -translate-x-1/2 md:hidden
">
  <a
    href="mailto:solanesani1@gmail.com?subject=Project%20inquiry"
    className="
      flex w-full items-center justify-center
      rounded-full bg-sky-600 px-4 py-3
      text-sm font-semibold text-white shadow-lg
      transition hover:bg-sky-500
    "
  >
    {cta.message}
  </a>
</div>

    </section>
  );
};
