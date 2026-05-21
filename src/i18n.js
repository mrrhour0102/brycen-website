import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json";
import kh from "./locales/kh/translation.json";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    kh: {
      translation: kh,
    },
    // ja: {
    //   translation: ja,
    // },
    // vi: {
    //   translation: vi,
    //},
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});
export default i18next;
