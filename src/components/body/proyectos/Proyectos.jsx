import { useStore } from "@/store/UseStore";
import Image from "next/image";
import {proyectos} from "./proyectos"

export const Proyectos = () => {
  const { tema, setTema } = useStore();

  return (
    <>
      <div>
        <h2 className="text-4xl font-bold ms-5">Proyectos</h2>
      </div>
      {proyectos.map((p, i) => (
        <div key={i} className="p-5 grid grid-cols-[20%_80%]">
          <div className="flex flex-col justify-center items-center">
            <Image
              className="transition-transform duration-300 hover:scale-102"
              src={p.link}
              alt={p.titulo}
              width={300}
              height={200}
            />
          </div>
          <div className="p-5">
            <h2>{p.titulo}</h2>
            <p className="mt-2">{p.descripcion}</p>
            {p.herramientas.map((h, i) => (
              <div key={i} className="relative inline-block group mt-4">
                <button
                  className={`border ${
                    tema === "claro"
                      ? "bg-white border-black"
                      : "bg-black border-white"
                  } rounded-xl p-2 me-2 transition-transform duration-300 hover:scale-101`}
                >
                  {h.nombre}
                </button>
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 border
                  ${
                    tema === "claro"
                      ? "bg-white border-black"
                      : "bg-black border-white"
                  } text-sm rounded px-3 py-2
                  whitespace-nowrap
                  opacity-0 invisible
                  group-hover:opacity-100 group-hover:visible
                  transition-all duration-200`}
                >
                  {h.descripcion}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
