"use client";

import dynamic from "next/dynamic";

import { useStore } from "@/store/UseStore";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";

export const Presentacion = () => {
  const CvViewer = dynamic(() => import("@/hooks/pdf/CvViewer"), {
    ssr: false,
  });
  const { tema, setTema } = useStore();
  const [ver, setVer] = useState(false);

  const locale = useLocale();
  const t = useTranslations("presentacion");

  return (
    <article className="flex justify-center items-center text-center">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 z-0 w-full h-full flex justify-center items-center opacity-30 md:opacity-50">
          <Image height={500} width={500} src={"/etiqueta.png"} alt="algo" />
        </div>
        <div className="relative z-20 flex flex-col justify-center items-center h-120 p-2 md:p-5 space-y-2">
          <h2 className=" font-bold uppercase text-4xl md:text-5xl">Lucas Yudi</h2>
          <h1 className="text-4xl md:text-5xl mt-2">
            Técnico Universitario en Programación
          </h1>
          <div className="flex justify-center">
            <div className="bg-[#60A5FA] text-white flex items-center px-10 py-2 mt-5 text-2xl md:text-5xl [clip-path:polygon(0%_0%,100%_0%,95%_100%,5%_100%)]">
              Full Stack Developer
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
