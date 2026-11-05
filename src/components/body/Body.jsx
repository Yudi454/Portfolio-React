"use client";

import React from "react";
import { Presentacion } from "./presentacion/Presentacion";
import { useStore } from "@/store/UseStore";
import { Habilidades } from "./habilidades/Habilidades.jsx";
import { Contacto } from "./contacto/Contacto";
import { Trayectoria } from "./trayectoria/Trayectoria";

export const Body = () => {
  const { tema, setTema } = useStore();

  return (
    <div
      className={`${
        tema === "oscuro" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Presentacion />
      <Trayectoria />
      <Habilidades />
      <Contacto />
    </div>
  );
};
