import React from "react";
import MainProjects from "./MainProjects";
import { useStore } from "../../store/AuthStore";

const Projects = () => {
  const color = useStore((state) => state.color);

    const { proyectos } = JSON.parse(
    localStorage.getItem("datos")
    )

  return (
    <div>
      <MainProjects color={color} proyectos={proyectos} />
    </div>
  );
};

export default Projects;
