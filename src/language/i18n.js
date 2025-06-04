import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      a_cerca_de_mi: "Aboute me",
      contactame: "Contact me",
      proyectos: "Projects",
      inicio: "Home",
      modo_oscuro: "Dark Mode",
      modo_claro: "Light Mode",
      funciones: "Functions"
    },
  },
  es: {
    translation: {
      a_cerca_de_mi: "A cerca de mi",
      contactame: "Contactame",
      proyectos: "Proyectos",
      inicio: "Inicio",
      modo_oscuro: "Modo Oscuro",
      modo_claro: "Modo Claro",
      funciones: "Funciones"
      },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es", // idioma inicial
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
