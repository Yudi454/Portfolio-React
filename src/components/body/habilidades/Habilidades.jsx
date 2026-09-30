import { useStore } from "@/store/UseStore";
import { habilidades } from "./habilidades";
import { useTranslations } from "next-intl";

export const Habilidades = () => {
  const { tema, setTema } = useStore();
  const t = useTranslations();

  return (
    <>
      <div>
        <h2 className="capitalize text-4xl font-bold ms-5">
          {t("global.habilidades")}
        </h2>
      </div>
      <div className="grid grid-cols-3 p-5 text-center gap gap-5">
        {habilidades.map((h, i) => (
          <div key={i}>
            <h3 className=" text-3xl">{t(`habilidades.${h.titulo}`)}</h3>
            <ul className="flex flex-col items-center ">
              {h.tecnologias.map((tec, i) => (
                <div key={i} className="relative inline-block group mt-4">
                  <li
                    className={`border ${
                      tema === "claro"
                        ? "bg-white border-black"
                        : "bg-black border-white"
                    } rounded-xl p-2 me-2 transition-transform duration-300 hover:scale-101 w-50 text-center`}
                  >
                    {tec.nombre}
                  </li>
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-full z-2 mt-2 border w-full
                  ${
                    tema === "claro"
                      ? "bg-white border-black"
                      : "bg-black border-white"
                  } text-sm rounded px-3 py-2
                  opacity-0 invisible
                  group-hover:opacity-100 group-hover:visible
                  transition-all duration-200`}
                  >
                    {t(`descripciones_generales.${tec.descripcion}`)}
                  </div>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};
