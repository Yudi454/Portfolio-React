"use client";

import React from "react";
import { Presentacion } from "./presentacion/Presentacion";
import { useStore } from "@/store/UseStore";
import { Experiencia } from "./experiencia/Experiencia";
import { Proyectos } from "./proyectos/Proyectos";

export const Body = () => {
  const { tema, setTema } = useStore();

  return (
    <div
      className={`${
        tema === "oscuro" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Presentacion />
      <Experiencia />
      <Proyectos />
    </div>
  );
};
