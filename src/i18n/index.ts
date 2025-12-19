import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "./resources";
const savedLang = localStorage.getItem("meow.lang");

i18n.use(initReactI18next).init({
  resources,
  lng: savedLang ?? "vi",
  fallbackLng: "en",
  ns: ["common"],
  defaultNS: "common",
  interpolation: { escapeValue: false },
});

export default i18n;
