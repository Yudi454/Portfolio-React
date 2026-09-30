import { useStore } from "@/store/UseStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schema";
import { useTranslations } from "next-intl";

export const Contacto = () => {
  const { tema, setTema } = useStore();

  const t = useTranslations();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema(t)),
  });

  const onSubmit = async (data) => {
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      console.log("Correo enviado");
    } else {
      console.log(result);
    }
  };

  return (
    <div className="mb-5">
      <div>
        <h2 className="capitalize text-4xl font-bold ms-5">
          {t("global.contacto")}
        </h2>
        <p className="text-xl font-semibold ms-5">
          {t("contacto.subtitulo_contacto")}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap gap-5">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col text-center justify-center items-center">
            <label>{t("contacto.nombre_contacto")}</label>
            <input
              {...register("nombre")}
              className={`border ${
                tema === "claro"
                  ? "bg-white border-black"
                  : "bg-black border-white"
              } rounded-xl px-5 py-2 me-2 text-center`}
            />
            <span>{errors.nombre && errors.nombre.message}</span>
          </div>
          <div className="flex flex-col text-center justify-center items-center">
            <label>{t("contacto.email_contacto")}</label>
            <input
              {...register("email")}
              className={`border ${
                tema === "claro"
                  ? "bg-white border-black"
                  : "bg-black border-white"
              } rounded-xl px-5 py-2 me-2 text-center`}
            />
            <span>{errors.email && errors.email.message}</span>
          </div>
          <div className="flex flex-col text-center justify-center items-center">
            <label>{t("contacto.mensaje_contacto")}</label>
            <input
              {...register("mensaje")}
              className={`border ${
                tema === "claro"
                  ? "bg-white border-black"
                  : "bg-black border-white"
              } rounded-xl px-5 py-2 me-2 text-center`}
            />
            <span>{errors.mensaje && errors.mensaje.message}</span>
          </div>
          <div className="flex flex-col text-center justify-center items-center">
            <button
              className={`border ${
                tema === "claro"
                  ? "bg-white border-black"
                  : "bg-black border-white"
              } py-2.5 px-6 rounded-xl text-xl font-bold hover:scale-101 duration-300 me-5`}
            >
              {t("contacto.enviar_contacto")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
