import { useStore } from "@/store/UseStore";
import { useTranslations } from "next-intl";
import { experiencias } from "./experiencia";

export const Experiencia = () => {
  const { tema, setTema } = useStore();

  const t = useTranslations();

  return (
    <>
      <div>
        <h2 className="capitalize text-4xl font-bold ms-5">
          {t("global.experiencia")}
        </h2>
      </div>
      {experiencias.map((e, i) => (
        <div key={i} className="p-5">
          <div className="grid grid-cols-[20%_80%]">
            <div className="flex flex-col items-center">
              <p>{e.periodo}</p>
              <p className="mt-2">{e.direccion}</p>
            </div>
            <div>
              <h3>{t(`experiencia.${e.puesto}`)}</h3>
              <h4 className="mt-2">{t(`experiencia.${e.lugar}`)}</h4>
              <p>{t(`experiencia.${e.descripcion}`)}</p>
              <div className="mt-4">
                {e.herramientas.map((h, i) => (
                  <div className="relative inline-block group" key={i}>
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
                      className={`absolute top-full mt-2 border sm:w-50 md:w-40 lg:w-max
        ${tema === "claro" ? "bg-white border-black" : "bg-black border-white"}
        text-sm rounded px-3 py-2
       sm:w-30 md:w-40  lg:w-80  text-center whitespace-normal wrap-break-word
        opacity-0 invisible
        group-hover:opacity-100 group-hover:visible
        transition-all duration-200 z-10
        ${i >= 7 ? "right-0" : "left-1/2 -translate-x-1/2"}`}
                    >
                      {t(`descripciones_generales.${h.descripcion}`)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-5 mb-5">
            <hr className="w-[80%]" />
          </div>
        </div>
      ))}
    </>
  );
};
