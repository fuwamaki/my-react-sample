import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translation_en from "i18n/en.json";
import translation_ja from "i18n/ja.json";

const resources = {
  ja: {
    translation: translation_ja,
  },
  en: {
    translation: translation_en,
  },
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ja",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
