"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { contactos } from "./contactos";
import Link from "next/link";
import { navegacion } from "./navegacion";
import { useStore } from "@/store/UseStore";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const { tema, setTema } = useStore();

  const t = useTranslations();

  return (
    <footer
      className={`p-5 grid grid-cols-3  ${
        tema === "oscuro"
          ? "bg-black text-white shadow-[0px_1px_10px_0px_white]"
          : "bg-white text-black shadow-[0px_1px_10px_0px_black]"
      } `}
    >
      <div className="ms-3">
        <h2 className="text-3xl font-bold">Lucas Yudi</h2>
        <h3 className="text-2xl">{t("global.profesion")}</h3>
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">{t("footer.contactos")}</h3>
        <ul className="flex flex-col gap-2">
          {contactos.map((c, i) => (
            <div key={i} className="flex justify-center items-center">
              <li className="text-xl me-2">{c.nombre}</li>
              <FontAwesomeIcon icon={c.icono} />
            </div>
          ))}
        </ul>
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">{t("footer.navegacion")}</h3>
        <ul className="flex flex-col gap-2">
          {navegacion.map((n, i) => (
            <li key={i}>
              <Link href={n.link} className="capitalize text-xl me-2">
                {t(`global.${n.nombre}`)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
