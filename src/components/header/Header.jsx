"use client";

import { useStore } from "@/store/UseStore";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import React, { useEffect, useState } from "react";
import { links } from "./links";
import Image from "next/image";

export const Header = () => {
  const { tema, setTema } = useStore();
  const t = useTranslations("global");

  const locale = useLocale();

  const [mostrar, setMostrar] = useState(false);

  const idiomas = [
    {
      nombre: "español",
      etiqueta: "es",
    },
    {
      nombre: "ingles",
      etiqueta: "en",
    },
  ];

  const [abierto, setAbierto] = useState(false);
  const [idioma, setIdioma] = useState("español");

  useEffect(() => {
    locale === "es" ? setIdioma("español") : setIdioma("ingles");
  }, [locale]);

  return (
    <header
      className={`bg-[#172033] text-white flex flex-col md:flex-row justify-center items-center p-5 md:space-x-5 `}
    >
      <div className="space-y-2 md:space-y-0 md:space-x-3 flex flex-col md:flex-row items-center">
        {links.map((l, i) => (
          <a key={i}>{l.nombre}</a>
        ))}
      </div>
      <div
        className={`mt-4 mb-4 relative flex justify-between border rounded-full w-30 h-12 ${
          tema === "claro" ? "border-[#8B7355]" : "border-[#514174]"
        }`}
      >
        {/* Circulo */}
        <div
          className={`rounded-full border w-12 h-12 transition-all hover:scale-110 [transition:left_1000ms_ease,scale_300ms_ease] absolute top-0  ${
            tema === "claro"
              ? "left-0 border-[#8B7355]"
              : `left-[calc(100%-3rem)] border-[#514174]`
          }`}
          onClick={() => setTema(tema === "claro" ? "oscuro" : "claro")}
        ></div>
        <Image
          src="/sol.png"
          width={50}
          height={50}
          alt="modo claro"
          className={`${
            tema === "claro"
              ? "transition-opacity duration-1500 opacity-100"
              : "opacity-0"
          }`}
        />
        <Image
          src="/luna.png"
          width={50}
          height={50}
          alt="modo claro"
          className={`${
            tema === "oscuro"
              ? `transition-opacity duration-1500 opacity-100`
              : "opacity-0"
          }`}
        />
      </div>
      <div className="relative">
        <button
          type="button"
          onClick={() => setAbierto(abierto === true ? false : true)}
          className={`hover:border-x-2 hover:border-b-2 ${
            abierto && "border-x-2 border-b-2"
          } duration-70 px-4 py-2`}
        >
          {idioma} ▾
        </button>

        {abierto && (
          <ul
            className={`absolute z-10 bg-[#172033]/50 backdrop-blur-md hover:border-x-2 hover:border-b-2 shadow-lg duration-70`}
          >
            {idiomas
              .filter((i) => i.nombre != idioma)
              .map((idioma, i) => (
                <li key={i}>
                  <Link
                    href={"/"}
                    locale={idioma.etiqueta}
                    onClick={() => setAbierto(false)}
                    className="block px-4 py-2 "
                  >
                    {idioma.nombre}
                  </Link>
                </li>
              ))}
          </ul>
        )}
      </div>
    </header>
  );
};
