"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { contactos } from "./contactos";
import Link from "next/link";
import { navegacion } from "./navegacion";
import { useStore } from "@/store/UseStore";
import { useTranslations } from "next-intl";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  const { tema, setTema } = useStore();

  const t = useTranslations("footer");

  return (
    <footer
      className={`bg-[#172033] p-4 md:p-5 space-y-4 text-center md:text-start`}
    >
      <div className=" md:flex items-end space-x-4 space-y-4 md:space-y-0 ">
        <div className="text-white space-y-4">
          <h2 className="text-3xl font-bold">Lucas Yudi</h2>
          <h3 className="text-3xl md:text-4xl font-bold">{t("titulo")}</h3>
        </div>
        <div className="space-x-4">
          <FontAwesomeIcon icon={faLinkedin} className="text-white text-5xl" />
          <FontAwesomeIcon icon={faGithub} className="text-white text-5xl" />
        </div>
      </div>
      <p className="text-[#757575] text-xl font-bold">© 2026 Lucas Yudi</p>
    </footer>
  );
};
