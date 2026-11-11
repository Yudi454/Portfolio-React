import React, { useEffect, useState } from "react";
import { experiencias } from "./experiencias";
import { proyectos } from "./proyectos";
import "../../../styles/rarezas/rarezas.css";
import { useStore } from "@/store/UseStore";
import { useTranslations } from "next-intl";

export const Trayectoria = ({
  trabajoSeleccionado,
  setTrabajoSeleccionado,
}) => {
  const { tema, setTema } = useStore();

  const [esCelular, setEsCelular] = useState(false);

  useEffect(() => {
    const comprobarAncho = () => {
      setEsCelular(window.innerWidth < 768);
    };

    comprobarAncho();

    window.addEventListener("resize", comprobarAncho);

    return () => {
      window.removeEventListener("resize", comprobarAncho);
    };
  }, []);

  const t = useTranslations("trayectoria");

  return (
    <div className="lg:grid lg:grid-cols-[33.33%_15%_48.33%]" id="trayecto">
      <div className="p-5">
        <div
          className={`
           border ${
             tema === "oscuro"
               ? "bg-[#172033]/40 border-[#93C5FD]/20"
               : "bg-[#60A5FA]/50 border-white/10"
           }
             backdrop-blur-lg  shadow-xl rounded-xl p-5 space-y-3`}
        >
          <h3 className="font-bold text-2xl">{t("experiencia.titulo")}:</h3>
          <div className="space-y-4">
            {experiencias.map((e, i) => (
              <div
                rareza={e.rareza}
                onClick={() => {
                  setTrabajoSeleccionado({ ...e, tipo: "experiencia" }),
                    document
                      .getElementById(
                        window.innerWidth < 768 ? "tecnologias" : "trayecto"
                      )
                      ?.scrollIntoView({ behavior: "smooth" });
                }}
                key={i}
                className="p-5 rounded-2xl font-bold text-white shadow-sm hover:scale-105 transform-scale duration-300 cursor-pointer"
              >
                {t(`experiencia.${e.nombre}`)}
              </div>
            ))}
          </div>
          <h3 className="font-bold text-2xl">{t("proyectos.titulo")}:</h3>
          <div className="space-y-4">
            {proyectos.map((p, i) => (
              <div
                rareza={p.rareza}
                onClick={() => {
                  setTrabajoSeleccionado({ ...p, tipo: "proyectos" }),
                    document
                      .getElementById(
                        window.innerWidth < 768 ? "tecnologias" : "trayecto"
                      )
                      ?.scrollIntoView({ behavior: "smooth" });
                }}
                key={i}
                className="p-5 rounded-2xl font-bold text-white shadow-sm hover:scale-105 transform-scale duration-300 cursor-pointer"
              >
                {t(`proyectos.${p.nombre}`)}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        id="tecnologias"
        className={`p-5 ${
          trabajoSeleccionado === undefined
            ? "-translate-y-10 lg:translate-y-0 lg:-translate-x-10 opacity-0"
            : "translate-y-0 lg:translate-x-0 opacity-100"
        } transition-all duration-500 flex overflow-x-auto space-x-2 lg:space-x-0 lg:flex-col lg:space-y-4 `}
      >
        {trabajoSeleccionado?.tecnologias.map((t, i) => (
          <div
            key={i}
            className={`
           border ${
             tema === "oscuro"
               ? "bg-[#172033]/40 border-[#93C5FD]/20"
               : "bg-[#60A5FA]/50 border-white/10"
           }
             backdrop-blur-lg  shadow-xl rounded-xl p-5 space-y-3`}
          >
            <div
              className={`${
                tema === "oscuro" ? "bg-[#172033]/40" : "bg-[#60A5FA]"
              }
               py-2 px-5 whitespace-nowrap w-fit rounded-xl text-white font-bold`}
            >
              {t}
            </div>
          </div>
        ))}
      </div>
      <div
        className={`p-5 ${
          trabajoSeleccionado === undefined
            ? "-translate-y-10 lg:translate-y-0 lg:-translate-x-10 opacity-0"
            : "translate-y-0 lg:translate-0 opacity-100"
        } transition-all duration-500 space-y-4`}
      >
        {trabajoSeleccionado && (
          <div
            className={`
           border ${
             tema === "oscuro"
               ? "bg-[#172033]/40 border-[#93C5FD]/20"
               : "bg-[#60A5FA]/50 border-white/10"
           }
             backdrop-blur-lg  shadow-xl rounded-xl p-5 space-y-3`}
          >
            <h3 className="text-2xl text-center md:text-start font-bold">
              {t(`${trabajoSeleccionado.tipo}.${trabajoSeleccionado.nombre}`)}
            </h3>
            {trabajoSeleccionado?.contratante &&
              trabajoSeleccionado?.modalidad && (
                <div className="md:flex text-center justify-between text-xl md:text-lg space-y-2 md:space-y-0 text-gray-600">
                  <p>
                    {t(
                      `${trabajoSeleccionado.tipo}.${trabajoSeleccionado.contratante}`
                    )}
                  </p>
                  <p>{trabajoSeleccionado.modalidad}</p>
                </div>
              )}
            {trabajoSeleccionado?.rareza && (
              <div className="flex justify-center md:justify-start">
                <div className="bg-white/40 backdrop-blur-sm shadow-sm rounded-md px-2 py-1 w-fit">
                  <p
                    className="text-lg capitalize font-bold"
                    text-rareza={trabajoSeleccionado.rareza}
                  >
                    {t("general.rareza")} - {trabajoSeleccionado.rareza}
                  </p>
                </div>
              </div>
            )}
            <div className="text-center md:text-start">
              <p className="text-xl font-medium md:font-normal md:text-lg">
                {t(
                  `${trabajoSeleccionado.tipo}.${trabajoSeleccionado.descripcion}`
                )}
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-5 md:space-y-0 md:space-x-5">
              {trabajoSeleccionado?.links?.map((l, i) => (
                <div
                  key={i}
                  className={`${
                    l.nombre != "ver_sitio"
                      ? tema === "oscuro"
                        ? "bg-[#172033]/40"
                        : "bg-[#60A5FA]"
                      : tema === "oscuro"
                      ? "bg-[#526783] text-white"
                      : "bg-white text-black"
                  } px-3 md:px-4 py-2 md:py-2 rounded-lg text-2xl md:text-lg font-bold capitalize shadow-sm hover:scale-105 transform-scale duration-300`}
                  onClick={() => window.open(l.direccion, "_blank")}
                >
                  {t(`general.${l.nombre}`)}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {esCelular && trabajoSeleccionado && (
        <div className="flex justify-center items-center pt-2 pb-5">
          <a
            className="bg-[#60A5FA] px-4 py-2 rounded-lg text-2xl font-bold hover:scale-105 transform-scale duration-300"
            href="#trayecto"
          >
            Volver a Mi Trayectoria
          </a>
        </div>
      )}
    </div>
  );
};
