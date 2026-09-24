import { useStore } from "@/store/UseStore";

export const Habilidades = () => {
  const { tema, setTema } = useStore();

  const habilidades = [
    {
      titulo: "Lenguajes",
      tecnologias: [
        {
          nombre: "JavaScript",
          descripcion:
            "Lenguaje de programación utilizado para desarrollar aplicaciones web dinámicas tanto en el front-end como en el back-end.",
        },
        {
          nombre: "Java",
          descripcion:
            "Lenguaje de programación orientado a objetos utilizado para el desarrollo de aplicaciones y sistemas.",
        },
        {
          nombre: "C#",
          descripcion:
            "Lenguaje de programación orientado a objetos utilizado para el desarrollo de aplicaciones sobre el ecosistema .NET.",
        },
      ],
    },
    {
      titulo: "Back-end",
      tecnologias: [
        {
          nombre: "Node.js",
          descripcion:
            "Entorno de ejecución de JavaScript utilizado para desarrollar aplicaciones del lado del servidor.",
        },
        {
          nombre: "Express",
          descripcion:
            "Framework para Node.js utilizado para crear APIs REST y aplicaciones web de forma eficiente.",
        },
      ],
    },
    {
      titulo: "Front-end",
      tecnologias: [
        {
          nombre: "React.js",
          descripcion:
            "Biblioteca de JavaScript para construir interfaces de usuario interactivas y reutilizables.",
        },
        {
          nombre: "Next.js",
          descripcion:
            "Framework de React utilizado para crear aplicaciones web modernas con renderizado optimizado.",
        },
        {
          nombre: "Tailwind CSS",
          descripcion:
            "Framework CSS basado en clases utilitarias para desarrollar interfaces responsivas de forma rápida.",
        },
      ],
    },
    {
      titulo: "Bases de datos",
      tecnologias: [
        {
          nombre: "MySQL",
          descripcion:
            "Sistema de gestión de bases de datos relacional utilizado para almacenar información estructurada.",
        },
        {
          nombre: "MongoDB",
          descripcion:
            "Base de datos NoSQL orientada a documentos para almacenar información de forma flexible.",
        },
      ],
    },
    {
      titulo: "Herramientas",
      tecnologias: [
        {
          nombre: "Git",
          descripcion:
            "Sistema de control de versiones para gestionar el historial de cambios en proyectos.",
        },
        {
          nombre: "GitHub",
          descripcion:
            "Plataforma para alojar repositorios, colaborar en proyectos y gestionar versiones con Git.",
        },
        {
          nombre: "REST API",
          descripcion:
            "Arquitectura utilizada para diseñar e integrar servicios web mediante solicitudes HTTP.",
        },
      ],
    },
    {
      titulo: "Metodologías",
      tecnologias: [
        {
          nombre: "SCRUM",
          descripcion:
            "Metodología ágil utilizada para organizar el trabajo colaborativo y el desarrollo iterativo de proyectos.",
        },
      ],
    },
  ];

  return (
    <>
      <div>
        <h2 className="text-4xl font-bold ms-5">Habilidades</h2>
      </div>
      <div className="grid grid-cols-3 p-5 text-center gap gap-5">
        {habilidades.map((h, i) => (
          <div key={i}>
            <h3 className="text-3xl">{h.titulo}</h3>
            <ul className="flex flex-col items-center ">
              {h.tecnologias.map((t, i) => (
                <div key={i} className="relative inline-block group mt-4">
                  <li
                    className={`border ${
                      tema === "claro"
                        ? "bg-white border-black"
                        : "bg-black border-white"
                    } rounded-xl p-2 me-2 transition-transform duration-300 hover:scale-101 w-50 text-center`}
                  >
                    {t.nombre}
                  </li>
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-full z-2 mt-2 border w-full
                  ${
                    tema === "claro"
                      ? "bg-white border-black"
                      : "bg-black border-white"
                  } text-sm rounded px-3 py-2
                  opacity-0 invisible
                  group-hover:opacity-100 group-hover:visible
                  transition-all duration-200`}
                  >
                    {t.descripcion}
                  </div>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};
