import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      stack_tech: "MERN Web Developer",
      a_cerca_de_mi: "Aboute me",
      contactame: "Contact me",
      proyectos: "Projects",
      inicio: "Home",
      modo_oscuro: "Dark Mode",
      modo_claro: "Light Mode",
      funciones: "Functions",
      soy: "I'm",
      tengo: "I'm",
      años: "years old",
      descripcionMia:
        "I am a full-stack developer. I specialize in JavaScript, React, Node.js, and databases, combining design and logic to build complete user experiences.",
      lenguajes_y_tecnologias:
        "The languages and technologies I work with are:",
      pagina_res: "Restaurant Page",
      desc_res:
        "Project where I created a website for a restaurant using React, with a reservation section and a complete CRUD.",
      pagina_e_comm: "E-commerce Page",
      desc_e_comm:
        "Project where I created an e-commerce website using JS, HTML, and CSS. Includes a complete CRUD.",
      pagina_dis: "Disney Plus Page",
      desc_dis:
        "Project where I recreated the Disney Plus website using HTML and CSS.",
      pagina_drugst: "Drugstore Page",
      des_drugst:
        "Project where I created a website for a drugstore using JS, HTML, and CSS. Includes a complete CRUD.",
      ir_front: "Go to Frontend",
      ir_back: "Go to Backend",
      titulo_formulario: "Contact Form",
      nombre: "Name",
      email: "Email",
      asunto: "Subject",
      desc: "Description",
      nom_obl: "Name is required",
      email_obl: "Email is required",
      asnt_obl: "Subject is required",
      desc_obl: "Description is required",
      email_inv: "Invalid email",
      enviar: "Send"
    },
  },
  es: {
    translation: {
      stack_tech: "Desarrollador Web Mern",
      a_cerca_de_mi: "A cerca de mi",
      contactame: "Contactame",
      proyectos: "Proyectos",
      inicio: "Inicio",
      modo_oscuro: "Modo Oscuro",
      modo_claro: "Modo Claro",
      funciones: "Funciones",
      soy: "Soy",
      tengo: "tengo",
      años: "años",
      descripcionMia:
        "soy desarrollador full-stack. Me especializo en JavaScript, React, Node.js y bases de datos, combinando diseño y lógica para construir experiencias completas.",
      lenguajes_y_tecnologias: "Los lenguajes y tecnologias que manejo son:",
      pagina_res: "Página para restaurante",
      desc_res:
        "Proyecto donde realice una página web sobre un restaurante usando React, con un apartado de reservas y un crud completo.",
      pagina_e_comm: "Página E-commerce",
      desc_e_comm:
        "Proyecto donde realice una página web E-commerce usando js,html y css. Con un crud completo.",
      pagina_dis: "Página Disney Plus",
      desc_dis:
        "Proyecto donde recreé la página web de Disney plus con html y css.",
      pagina_drugst: "Página Drugstore",
      des_drugst:
        "Proyecto donde realice una página web sobre un drugstore con js,html y css. Con un crud completo.",
      ir_front: "Ir al Front",
      ir_back: "Ir al Back",
      titulo_formulario: "Formulario para contactarme",
      nombre: "Nombre",
      email: "Email",
      asunto: "Asunto",
      desc: "Descripcion",
      nom_obl: "El nombre es obligatorio",
      email_obl: "El email es obligatorio",
      asnt_obl: "El asunto es obligatorio",
      desc_obl: "La descripción es obligatoria",
      email_inv: "Email inválido",
      enviar: "Enviar"
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
