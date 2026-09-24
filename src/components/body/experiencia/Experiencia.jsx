import { useStore } from "@/store/UseStore";

export const Experiencia = () => {
  const { tema, setTema } = useStore();

  const trabajos = [
    {
      periodo: "2025-2026",
      direccion: "Tucumán, Argentina",
      puesto: "Desarrollador Full Stack — Freelancer",
      lugar: "Dirección de Agricultura (División Tabaco)",
      descripcion:
        "Desarrollé en equipo una aplicación web para la Dirección de Agricultura – División Tabaco, destinada a administrar certificados para empresas y asesores que manejan agroquímicos. El sistema fue construido con React.js (front-end), Node.js + Express (back-end) y MySQL Workbench (base de datos). Incluye un módulo de inscripción donde los solicitantes pueden cargar información y documentos PDF, descargar certificados y visualizar inspecciones realizadas, con o sin multas. También implementamos un módulo para empleados, que permite gestionar empresas y asesores, validar documentación y generar inspecciones.",
      herramientas: [
        {
          nombre: "React.js",
          descripcion:
            "Biblioteca para crear interfaces web dinámicas y reutilizables.",
        },
        {
          nombre: "Node.js",
          descripcion:
            "Entorno para desarrollar aplicaciones y servicios del lado del servidor.",
        },
        {
          nombre: "Express",
          descripcion:
            "Framework para crear APIs y aplicaciones web con Node.js.",
        },
        {
          nombre: "MySQL",
          descripcion: "Sistema de gestión de bases de datos relacionales.",
        },
        {
          nombre: "Zustand",
          descripcion:
            "Librería ligera para gestionar el estado global de aplicaciones React.",
        },
        {
          nombre: "JavaScript",
          descripcion:
            "Lenguaje de programación para desarrollar aplicaciones web interactivas.",
        },
        {
          nombre: "REST API",
          descripcion:
            "Arquitectura para la comunicación entre aplicaciones mediante HTTP.",
        },
        {
          nombre: "Axios",
          descripcion:
            "Cliente HTTP para realizar solicitudes y consumir APIs.",
        },
        {
          nombre: "Git / GitHub",
          descripcion:
            "Control de versiones y colaboración en proyectos de software.",
        },
      ],
    },
    {
      periodo: "2026-2026",
      direccion: "Tucumán, Argentina",
      puesto: "Frontend Developer — Freelancer",
      lugar: "Sitio web profesional para Dr. Franco Fagetti – Urólogo",
      descripcion:
        "Desarrollé de forma independiente un sitio web profesional para un médico urólogo utilizando Next.js, React.js y Tailwind CSS. Implementé un diseño responsive, componentes reutilizables, navegación entre secciones, integración de mapas y enlaces de contacto. El proyecto me permitió profundizar mis conocimientos de JavaScript y React.js y adquirir experiencia con Next.js, Tailwind CSS, SEO, optimización web y librerías de scroll.",
      herramientas: [
        {
          nombre: "Next.js",
          descripcion:
            "Framework de React para desarrollar aplicaciones web modernas y optimizadas.",
        },
        {
          nombre: "Tailwind CSS",
          descripcion:
            "Framework CSS para crear interfaces personalizadas de forma rápida y consistente.",
        },
        {
          nombre: "React.js",
          descripcion:
            "Biblioteca para crear interfaces web dinámicas y reutilizables.",
        },
        {
          nombre: "JavaScript",
          descripcion:
            "Lenguaje de programación para desarrollar aplicaciones web interactivas.",
        },
        {
          nombre: "Responsive Design",
          descripcion:
            "Diseño adaptable a diferentes dispositivos y tamaños de pantalla.",
        },
      ],
    },
  ];

  return (
    <>
      <div>
        <h2 className="text-4xl font-bold ms-5">Experiencia</h2>
      </div>
      {trabajos.map((t, i) => (
        <div key={i} className="p-5">
          <div className="grid grid-cols-[20%_80%]">
            <div className="flex flex-col items-center">
              <p>{t.periodo}</p>
              <p className="mt-2">{t.direccion}</p>
            </div>
            <div>
              <h3>{t.puesto}</h3>
              <h4 className="mt-2">{t.lugar}</h4>
              <p>{t.descripcion}</p>
              <div className="mt-4">
                {t.herramientas.map((h, i) => (
                  <div className="relative inline-block group" key={i}>
                    <button
                      className={`border ${
                        tema === "claro"
                          ? "bg-white border-black"
                          : "bg-black border-white"
                      } rounded-xl p-2 me-2 transition-transform duration-300 hover:scale-101`}
                    >
                      {h.nombre}
                    </button>

                    <div
                      className={`absolute top-full mt-2 border sm:w-50 md:w-40 lg:w-max
        ${tema === "claro" ? "bg-white border-black" : "bg-black border-white"}
        text-sm rounded px-3 py-2
       sm:w-30 md:w-40  lg:w-80  text-center whitespace-normal wrap-break-word
        opacity-0 invisible
        group-hover:opacity-100 group-hover:visible
        transition-all duration-200 z-10
        ${i >= 7 ? "right-0" : "left-1/2 -translate-x-1/2"}`}
                    >
                      {h.descripcion}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-5 mb-5">
            <hr className="w-[80%]" />
          </div>
        </div>
      ))}
    </>
  );
};
