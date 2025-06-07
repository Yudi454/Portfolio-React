import React from "react";
import MainAboutMe from "./MainAboutMe";
import { useStore } from "../../store/AuthStore";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { nombre, apellido, edad, lenguajesYTecnologias } = JSON.parse(
    localStorage.getItem("datos")
  );

  const color = useStore((set) => set.color);

  const { t } = useTranslation();

  return (
    <div>
      <MainAboutMe
        nombre={nombre}
        apellido={apellido}
        edad={edad}
        lenguajesYTecnologias={lenguajesYTecnologias}
        color={color}
        t={t}
      />
    </div>
  );
};

export default AboutMe;
