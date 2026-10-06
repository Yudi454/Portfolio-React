import { useStore } from "@/store/UseStore";
import { useTranslations } from "next-intl";
import { experiencias } from "./experiencia";

export const Experiencia = () => {
  const { tema, setTema } = useStore();

  const t = useTranslations();

  return (
    <div id="experiencia" className="scroll-mt-30 mt-5 md:mt-0 flex flex-col justify-center md:justify-start items-center md:items-start text-center md:text-start">
      <div className="">
        <h2 className="capitalize text-4xl font-bold ms-5">
          {t("global.experiencia")}
        </h2>
      </div>
      {experiencias.map((e, i) => (
        <div key={i} className="p-5">
          <div className="grid md:grid-cols-[20%_80%]">
            <div className="flex flex-col items-center mb-5 md:mb-0 text-xl md:text-x font-semibold">
              <p>{e.periodo}</p>
              <p className="mt-2">{e.direccion}</p>
            </div>
            <div>
              <h3 className="flex flex-col md:flex-row text-xl font-bold mb-4 md:mb-0">
                {t(`experiencia.${e.puesto}`)}{" "}
                <span className="hidden md:block md:ms-2 md:me-2">-</span>
                {t(`experiencia.${e.modalidad}`)}
              </h3>
              <h4 className="mt-2 text-xl font-bold mb-4 md:mb-0">
                {t(`experiencia.${e.lugar}`)}
              </h4>
              <p className="text-lg font-semibold">
                {t(`experiencia.${e.descripcion}`)}
              </p>

              <div
                className={`mt-4 grid grid-cols-6 gap-y-4 md:flex md:gap-y-0 text-center`}
              >
                {e.herramientas.map((h, i) => {
                  const remainder = e.herramientas.length % 3;
                  const isLast = i >= e.herramientas.length - remainder;

                  const colSpan =
                    remainder === 1 && isLast
                      ? "col-span-6"
                      : remainder === 2 && isLast
                      ? "col-span-3"
                      : "col-span-2";
                  return (
                    <div
                      className={`${colSpan} flex justify-center items-center relative group`}
                      key={i}
                    >
                      <button
                        className={`border ${
                          tema === "claro"
                            ? "bg-white border-black"
                            : "bg-black border-white"
                        } rounded-xl p-3 md:me-2 transition-transform duration-300 hover:scale-101`}
                      >
                        {h.nombre}
                      </button>

                      <div
                        className={`absolute top-full mt-2 border sm:w-50 md:w-40 lg:w-max
                        ${
                          tema === "claro"
                            ? "bg-white border-black"
                            : "bg-black border-white"
                        }
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
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-5 mb-5">
            <hr className="w-[80%]" />
          </div>
        </div>
      ))}
    </div>
  );
};
