import React, { useEffect, useState } from "react";
import { experiencias } from "../trayectoria/experiencias";
import { proyectos } from "../trayectoria/proyectos";
import "../../../styles/rarezas/rarezas.css";
import { lenguajes } from "./lenguajes";
import { backEnd } from "./backEnd";
import { frontEnd } from "./frontEnd";
import { dbs } from "./dbs";
import { herramientas } from "./herramientas";
import { metodologias } from "./metodologias";
import { useStore } from "@/store/UseStore";
import { useTranslations } from "next-intl";
import { categorias } from "./categorias";

export const Tecnologias = ({ setTrabajoSeleccionado }) => {
  const { tema, setTema } = useStore();

  const [categoria, setCategoria] = useState();
  const [seleccionado, setSeleccionado] = useState();
  const [trabajos, setTrabajos] = useState([]);

  const datos = {
    lenguajes: lenguajes,
    "back": backEnd,
    "front": frontEnd,
    "dbs": dbs,
    herramientas: herramientas,
    metodologias: metodologias,
  };

  useEffect(() => {
    const data1 = experiencias
      .filter((e) => e.tecnologias.some((t) => t === seleccionado?.nombre))
      .map((e) => ({
        nombre: e.nombre,
        tipo: "experiencia",
        rareza: e.rareza,
      }));
    const data2 = proyectos
      .filter((p) => p.tecnologias.some((t) => t === seleccionado?.nombre))
      .map((e) => ({
        nombre: e.nombre,
        tipo: "proyectos",
        rareza: e.rareza,
      }));

    const result = [...data1, ...data2];

    setTrabajos(result);
  }, [seleccionado]);

  const t = useTranslations("tecnologias");
  const trayectoria = useTranslations("trayectoria");
  return (
    <div className="lg:grid lg:grid-cols-[33.33%_15%_48.33%]">
      <div className="p-5">
        <div
          className={`
           border ${
             tema === "oscuro"
               ? "bg-[#172033]/40 border-[#93C5FD]/20"
               : "bg-[#60A5FA]/50 border-white/10"
           } backdrop-blur-lg  shadow-xl rounded-xl p-5 space-y-3`}
        >
          <h3 className="font-bold text-2xl">{t("categorias.titulo")}:</h3>
          <div className="space-y-4">
            {categorias?.map((c, i) => (
              <div
                key={i}
                className={`p-5 rounded-2xl font-bold border-b-3 ${
                  categoria === c
                    ? tema === "oscuro"
                      ? "border-[#93C5FD] shadow-xl"
                      : "border-[#3B6F9F] shadow-xl"
                    : "border-transparent"
                } ${
                  tema === "oscuro"
                    ? "hover:border-[#93C5FD]"
                    : "hover:border-[#3B6F9F]"
                } transition-colors duration-500 cursor-pointer`}
                onClick={() => {
                  setCategoria(c);
                }}
              >
                <p className="cursor-pointer">{t(`categorias.${c}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`p-5 ${
          categoria === undefined
            ? "-translate-y-10 lg:translate-y-0 lg:-translate-x-10 opacity-0"
            : "translate-y-0 lg:translate-x-0 opacity-100"
        } transition-all duration-500 flex overflow-x-auto space-x-2 lg:space-x-0 lg:flex-col lg:space-y-4 `}
      >
        {categoria &&
          datos[categoria]?.map((c, i) => (
            <div
              key={i}
              className={`border ${
                tema === "oscuro"
                  ? "bg-[#172033]/40 border-[#93C5FD]/20"
                  : "bg-[#60A5FA]/50 border-white/10"
              } backdrop-blur-lg  shadow-xl rounded-xl p-5 space-y-3`}
            >
              <div
                className={`p-5 rounded-2xl font-bold border-b-3 ${
                  seleccionado?.nombre === c.nombre
                    ? tema === "oscuro"
                      ? "border-[#93C5FD] shadow-xl"
                      : "border-[#3B6F9F] shadow-xl"
                    : "border-transparent"
                } ${
                  tema === "oscuro"
                    ? "hover:border-[#93C5FD]"
                    : "hover:border-[#3B6F9F]"
                } whitespace-nowrap transition-colors duration-500 cursor-pointer`}
                onClick={() => {
                  setSeleccionado(c);
                }}
              >
                {c.nombre}
              </div>
            </div>
          ))}
      </div>

      <div
        className={`p-5 ${
          seleccionado === undefined
            ? "-translate-y-10 lg:translate-y-0 lg:-translate-x-10 opacity-0"
            : "translate-y-0 lg:translate-x-0 opacity-100"
        } transition-all duration-500 flex overflow-x-auto space-x-2 lg:space-x-0 lg:flex-col lg:space-y-4 `}
      >
        <div
          className={`border ${
            tema === "oscuro"
              ? "bg-[#172033]/40 border-[#93C5FD]/20"
              : "bg-[#60A5FA]/50 border-white/10"
          } backdrop-blur-lg  shadow-xl rounded-xl p-5 space-y-3`}
        >
          {seleccionado && (
            <div className="p-2 clear-start space-y-5">
              <h3 className="text-2xl text-center md:text-start font-bold">
                {seleccionado.nombre}
              </h3>
              <p className="text-xl font-medium md:font-normal md:text-lg">
                {t(`descripciones.${seleccionado.descripcion}`)}
              </p>
              {trabajos.length > 0 && (
                <div>
                  <h2 className="text-2xl text-center md:text-start font-bold mb-2">
                    Proyectos donde lo uso:
                  </h2>
                  <div className="space-y-3">
                    {trabajos.map((tr, i) => (
                      <div
                        rareza={tr.rareza}
                        key={i}
                        onClick={() => {
                          setTrabajoSeleccionado(t),
                            document
                              .getElementById("tecnologias")
                              ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="p-5 rounded-2xl font-bold text-white shadow-sm hover:scale-105 transform-scale duration-300 cursor-pointer"
                      >
                        {trayectoria(`${tr.tipo}.${tr.nombre}`)}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
