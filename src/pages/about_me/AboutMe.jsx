import React from "react";
import MainAboutMe from "./MainAboutMe";
import { useStore } from "../../store/AuthStore";

const AboutMe = () => {
  const { nombre, apellido, edad, lenguajesYTecnologias } = JSON.parse(
    localStorage.getItem("datos")
  );

  const color = useStore((set) => set.color);

  return (
    <div>
      <MainAboutMe
        nombre={nombre}
        apellido={apellido}
        edad={edad}
        lenguajesYTecnologias={lenguajesYTecnologias}
        color={color}
      />
    </div>
  );
};

export default AboutMe;
