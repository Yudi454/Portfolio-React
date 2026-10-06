"use client";

import dynamic from "next/dynamic";

import { useStore } from "@/store/UseStore";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { toast } from "react-toastify";

export const Presentacion = () => {
  const CvViewer = dynamic(() => import("@/hooks/pdf/CvViewer"), {
    ssr: false,
  });
  const { tema, setTema } = useStore();
  const [ver, setVer] = useState(false);

  const locale = useLocale();
  const t = useTranslations("presentacion");

  return (
    <article className="mt-5 md:mt-0 md:p-5 flex flex-col justify-center md:justify-start items-center md:items-start text-center  md:text-start ">
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
            (document.body.style.overflow = "hidden"),
              toast.info("Cargando ...");
          }}
        >
          {t("ver_cv")}
        </button>
        <a
          className={`border ${
            tema === "claro" ? "bg-white border-black" : "bg-black border-white"
          } py-3 px-6 rounded-xl text-xl font-bold hover:scale-101 duration-300`}
          href={locale === "es" ? "/api/cv?lang=es" : "/api/cv?lang=en"}
          download
        >
          {t("descargar_cv")}
        </a>
      </div>
      <p className="mt-5">Tucumán, Argentina</p>

      <div className={`${ver ? "" : "hidden"} fixed inset-0 z-50 p-2 md:p-10`}>
        <div className="absolute inset-0 -z-10 bg-black/60"></div>

        <div className="relative border border-black rounded-2xl z-50 overflow-hidden h-full flex flex-col">
          <div className="bg-white flex justify-end h-10 shrink-0">
            <button
              onClick={() => {
                setVer(false), (document.body.style.overflow = "");
              }}
              className="me-5 text-black text-xl font-bolds"
            >
              X
            </button>
          </div>

          <div className="flex-1 min-h-0">
            <CvViewer
              pdf={locale === "es" ? "/api/cv?lang=es" : "/api/cv?lang=en"}
            />
          </div>
        </div>
      </div>
    </article>
  );
};
