"use client";

import React, { useState } from "react";
import { Presentacion } from "./presentacion/Presentacion";
import { useStore } from "@/store/UseStore";
import { Contacto } from "./contacto/Contacto";
import { Trayectoria } from "./trayectoria/Trayectoria";
import { Tecnologias } from "./tecnologias/Tecnologias";

export const Body = () => {
  const { tema, setTema } = useStore();

  const [trabajoSeleccionado, setTrabajoSeleccionado] = useState();

  return (
    <div
      className={`${
        tema === "oscuro" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Presentacion />
      <div className="bg-[#93C5FD]">
        <Trayectoria
          trabajoSeleccionado={trabajoSeleccionado}
          setTrabajoSeleccionado={setTrabajoSeleccionado}
        />
        <Tecnologias
          trabajoSeleccionado={trabajoSeleccionado}
          setTrabajoSeleccionado={setTrabajoSeleccionado}
        />
      </div>
      <Contacto />
    </div>
  );
};
