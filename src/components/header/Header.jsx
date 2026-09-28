"use client";

import { useStore } from "@/store/UseStore";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import React from "react";
import { links } from "./links";

export const Header = () => {
  const { tema, setTema } = useStore();
  const t = useTranslations("nav");

  const locale = useLocale();

  return (
    <header
      className={`p-5 grid z-1 grid-cols-[40%_60%] w-full ${
        tema === "oscuro"
          ? "bg-black text-white shadow-[0px_1px_10px_0px_white]"
          : "bg-white text-black shadow-[0px_1px_10px_0px_black]"
      }`}
    >
      {/* Datos mios */}
      <div>
        <h2 className="text-4xl font-bold">Lucas Yudi</h2>
        <h2 className="text-3xl">{t("profesion")}</h2>
      </div>
      <div className="flex items-center justify-end w-full gap-5">
        {/* Links */}
        {links.map((l, i) => (
          <Link
            key={i}
            className="uppercase font-semibold transition-transform duration-100 hover:scale-105 text-xl"
            href={l.direccion}
          >
            {t(l.nombre)}
          </Link>
        ))}

        {/* Contenedor de cambio de color */}
        <div
          className={`relative h-10 w-30 overflow-hidden rounded-xl border transition-colors duration-300 ${
            tema === "oscuro"
              ? "border-white/20 bg-zinc-900"
              : "border-black/50 bg-amber-50"
          }`}
        >
          {/* Track / fondo */}
          <div
            className={`absolute inset-0 bg-linear-to-r transition-all duration-500 ${
              tema === "oscuro"
                ? "from-zinc-950 via-zinc-800 to-zinc-700"
                : "from-amber-100 via-orange-50 to-white"
            }`}
          />

          {/* Contenedor del icono */}
          <div
            className={`absolute flex items-center top-0 h-full w-1/2 rounded-xl transition-all duration-600 ${
              tema === "oscuro"
                ? "translate-x-0"
                : "translate-x-full justify-end"
            }`}
          >
            <FontAwesomeIcon
              className={` cursor-pointer text-3xl h-full drop-shadow-sm transition-colors duration-300${
                tema === "oscuro"
                  ? "text-sky-200 hover:text-sky-100" // luna más suave y elegante
                  : "text-amber-500 hover:text-amber-400"
              }`}
              onClick={() =>
                tema === "oscuro" ? setTema("claro") : setTema("oscuro")
              }
              icon={tema === "oscuro" ? faMoon : faSun}
            />
          </div>
        </div>
        {/* Cambiar lenguaje */}
        <Link href="/" locale={locale === "es" ? "en" : "es"}>
          <span
            className={`transition-transform duration-100 hover:scale-105 text-4xl fi fi-${
              locale === "es" ? "gb" : "es"
            }`}
          ></span>
        </Link>
      </div>
    </header>
  );
};
