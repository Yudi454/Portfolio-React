import React from "react";
import MainProjects from "./MainProjects";
import { useStore } from "../../store/AuthStore";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const color = useStore((state) => state.color);

  const datos = JSON.parse(localStorage.getItem("datos")) || {};
  const { proyectos = [] } = datos.datos;

  console.log(datos );
  

  const { t } = useTranslation();

  return (
    <div>
      <MainProjects color={color} proyectos={proyectos} t={t} />
    </div>
  );
};

export default Projects;
