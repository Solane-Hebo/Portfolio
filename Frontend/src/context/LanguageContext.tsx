import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "sv" | "en";

interface LanguageContextValue {
  lang: Language;
  toggleLang: () => void;
  setLang: (l: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

const STORAGE_KEY = "portfolio_lang";

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // 🔹 Läs från localStorage direkt när state skapas
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window === "undefined") return "sv";
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "sv" || stored === "en") {
        return stored;
      }
    } catch {
      // om något felar, använd svenska
    }
    return "sv";
  });

  // 🔹 Spara i localStorage varje gång språket ändras
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const toggleLang = () => {
    setLangState((prev) => (prev === "sv" ? "en" : "sv"));
  };

  const setLang = (l: Language) => setLangState(l);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return ctx;
};
