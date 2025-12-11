import { useLanguage } from "../context/LanguageContext";
import { sv } from "../i18n/sv";
import { en } from "../i18n/en";

export const useTranslation = () => {
  const { lang } = useLanguage();
  return lang === "sv" ? sv : en;
};
