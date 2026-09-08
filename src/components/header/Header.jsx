"use client";

import { useStore } from "@/store/UseStore";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import React from "react";

export const Header = () => {
  const { thema, setThema } = useStore();
  const t = useTranslations("nav");

  const locale = useLocale();

  const links = [
    {
      nombre: t("experiencia"),
      direccion: "#experiencia",
    },
    {
      nombre: t("proyectos"),
      direccion: "#proyectos",
    },
    {
      nombre: t("habilidades"),
      direccion: "#habilidades",
    },
    {
      nombre: t("contacto"),
      direccion: "#contacto",
    },
  ];
  return (
    <header className="flex">
      <div>
        <h1 className="text-4xl font-bold">Lucas Yudi</h1>
        <h2 className="text-3xl">{t("profesion")}</h2>
      </div>
      <div className="flex gap-5">
        {links.map((l, i) => (
          <Link key={i} className="uppercase text-xl" href={l.direccion}>
            {l.nombre}
          </Link>
        ))}
        <div className="relative h-7 w-20 overflow-hidden rounded-xl border border-black bg-linear-to-r   from-slate-950 via-slate-500 to-slate-50">
          <div
            className={`absolute top-0 h-full w-1/2 rounded-xl transition-all duration-500 ${
              thema === "oscuro" ? "translate-x-0" : "translate-x-full text-end"
            }`}
          >
            <FontAwesomeIcon
              className={`cursor-pointer
                ${thema === "oscuro" ? "text-[#F8FAFC]" : "text-[#F59E0B]"}
              `}
              onClick={() =>
                thema === "oscuro" ? setThema("claro") : setThema("oscuro")
              }
              icon={thema === "oscuro" ? faMoon : faSun}
            />
          </div>
        </div>
        <Link href="/" locale={locale === "es" ? "en" : "es"}>
          {t("idioma")}
        </Link>
      </div>
    </header>
  );
};
