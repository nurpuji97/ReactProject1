import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Indonesia from "./locale/Indonesia";
import English from "./locale/English";
import Arab from "./locale/Arab";

i18n.use(initReactI18next).init({
  lng: "id",
  fallbackLng: "id",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: English.translation,
    },
    ar: {
      translation: Arab.translation,
    },
    id: {
      translation: Indonesia.translation,
    },
  },
});

export default i18n;
