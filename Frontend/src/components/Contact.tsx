import React from "react";
import { useTranslation } from "../hooks/useTranslation";

export const Contact: React.FC = () => {
  const t = useTranslation();

  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl px-4 py-12 md:py-16"
    >
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
        {t.contact.title}
      </h2>
      <p className="mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-300 md:text-base">

        {t.contact.intro}
      </p>

      <div className="mt-4 space-y-2 text-sm text-slate-200">
        <p>
          📧{" "}
          <a
            href="mailto:solanesani1@gmail.com"
            className="text-sky-400 hover:underline"
          >
            {t.contact.emailLabel}: solanesani1@gmail.com
          </a>
        </p>
        <p>
          💼{" "}
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-sky-400 hover:underline"
          >
            {t.contact.linkedinLabel} : www.linkedin.com/in/solane-hebo-056543244
          </a>
        </p>
        <p>
          {/* 📷{" "} */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            className="text-sky-400 hover:underline"
          >
            {/* {t.contact.instagramLabel} */}
          </a>
        </p>
      </div>
    </section>
  );
};
