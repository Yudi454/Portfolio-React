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
  const [scrolleado, setScrolleado] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    locale === "es" ? setIdioma("español") : setIdioma("ingles");
  }, [locale]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolleado(window.scrollY === 0 ? 0 : window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [mostrarBurger, setMostrarBurger] = useState(false);

  return (
    <header
      className={`bg-[#172033] text-white flex flex-col md:flex-row justify-center items-center p-5 md:space-x-5 sticky top-0 z-50 ${
        scrolleado === 0 ? "opacity-100" : "opacity-50"
      } hover:opacity-100 ${
        isClicked && "opacity-100"
      } transition-opacity duration-400`}
    >
      <div className=" space-y-2 md:space-y-0 md:space-x-3 hidden md:flex flex-col md:flex-row items-center">
        {links.map((l, i) => (
          <a key={i} className="text-xl uppercase font-bold">
            {l.nombre}
          </a>
        ))}
      </div>
      <div
        className={`mt-4 mb-4 relative flex justify-between border rounded-full w-30 h-12 transition-colors duration-800 ${
          tema === "claro" ? "border-[#F6C177]" : "border-[#A78BFA]"
        }`}
      >
        <FontAwesomeIcon
          icon={faSun}
          onClick={() => {
            setTema(tema === "claro" ? "oscuro" : "claro");
          }}
          style={{ width: "50px", height: "50px" }}
          className={`${
            tema === "claro"
              ? "[transition:opacity_500ms_ease,scale_300ms_ease,translate_1000ms_ease] opacity-100 translate-x-0" //Sol de derecha a izquierda
              : "[transition:opacity_500ms_ease,scale_300ms_ease,translate_1000ms_ease] opacity-0 invisible translate-x-full" //Sol de izquierda a derecha
          } hover:scale-110 text-[#F6C177]`}
        />
        <FontAwesomeIcon
          icon={faMoon}
          onClick={() => setTema(tema === "claro" ? "oscuro" : "claro")}
          style={{ width: "50px", height: "50px" }}
          className={`${
            tema === "claro"
              ? "[transition:opacity_1000ms_ease,scale_300ms_ease,translate_1000ms_ease] opacity-0 invisible -translate-x-full" //Luna de derecha a izquierda
              : "[transition:opacity_1000ms_ease,scale_300ms_ease,translate_1000ms_ease] opacity-100 translate-x-0" //Luna de izquierda a derecha
          } hover:scale-110 text-[#A78BFA]`}
        />
      </div>
      <div className="relative">
        <button
          type="button"
          onClick={() => {
            setAbierto(abierto === true ? false : true),
              setIsClicked(isClicked ? false : true);
          }}
          className={`text-xl font-bold uppercase hover:border-x-2 hover:border-b-2 ${
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
                    onClick={() => {
                      setAbierto(false), setIsClicked(false);
                    }}
                    className="text-xl font-bold uppercase block px-4 py-2 "
                  >
                    {idioma.nombre}
                  </Link>
                </li>
              ))}
          </ul>
        )}
      </div>
      <div
        className="md:hidden flex mt-2"
        onClick={() => {
          setMostrarBurger(mostrarBurger ? false : true),
            setIsClicked(isClicked ? false : true);
        }}
      >
        <FontAwesomeIcon icon={faBars} className="text-4xl" />
        <p className="text-3xl">▾</p>
      </div>
      <div
        className={`grid md:hidden transition-[grid-template-rows] duration-500 ${
          mostrarBurger ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            className={`
            ${
              !mostrarBurger
                ? "-translate-y-10 opacity-0"
                : "translate-y-0 opacity-100"
            } transition-transform duration-500
          mt-4 space-y-4 md:space-y-0 md:space-x-3
          flex
          md:hidden flex-col md:flex-row items-center`}
          >
            {links.map((l, i) => (
              <a
                key={i}
                className="text-2xl uppercase font-bold"
                onClick={() => {
                  setIsClicked(false), setMostrarBurger(false);
                }}
              >
                {l.nombre}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
