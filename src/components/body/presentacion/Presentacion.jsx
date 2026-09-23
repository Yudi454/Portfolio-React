"use client";

import { useStore } from "@/store/UseStore";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

export const Presentacion = () => {
  const { tema, setTema } = useStore();
  const [ver, setVer] = useState(false);

  const locale = useLocale();
  const t = useTranslations("nav");

  const cvEspanol = process.env.NEXT_PUBLIC_CV_ESPANOL;
  const cvIngles = process.env.NEXT_PUBLIC_CV_INGLES;

  return (
    <article className="p-5 ">
      <h1 className="text-4xl font-bold w-[90%]">{t("titulo_presentacion")}</h1>
      <p className="text-xl w-[80%] mt-5">{t("descripcion1_presentacion")}</p>
      <br />
      <p className="text-xl w-[80%]">{t("descripcion2_presentacion")}</p>
      <div className="mt-5">
        <button
          className={`border ${
            tema === "claro" ? "bg-white border-black" : "bg-black border-white"
          } py-2.5 px-6 rounded-xl text-xl font-bold hover:scale-101 duration-300 me-5`}
          onClick={() => {
            setVer(true);
          }}
        >
          Ver Cv
        </button>
        <button
          className={`border ${
            tema === "claro" ? "bg-white border-black" : "bg-black border-white"
          } py-2.5 px-6 rounded-xl text-xl font-bold hover:scale-101 duration-300`}
          href={locale === "es" ? cvEspanol : cvIngles}
          download
        >
          Descargar Cv
        </button>
      </div>
      <p className="mt-5">Tucumán, Argentina</p>

      <div className={`${ver ? "" : "hidden"} fixed inset-0 z-50 p-10`}>
        <div className="absolute -z-1 inset-0 bg-black/60"></div>
        <div className=" border border-black rounded-2xl overflow-hidden h-full flex flex-col">
          <div className="bg-white flex justify-end ">
            <button
              onClick={() => {
                setVer(false);
              }}
              className=" me-5"
            >
              X
            </button>
          </div>

          <iframe
            src={locale === "es" ? cvEspanol : cvIngles}
            title="Cv"
            className=" w-full h-full"
          />
        </div>
      </div>
    </article>
  );
};
