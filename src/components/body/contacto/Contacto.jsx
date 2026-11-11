import { useStore } from "@/store/UseStore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schema";
import { useTranslations } from "next-intl";

export const Contacto = () => {
  const { tema } = useStore();

  const t = useTranslations("contacto");

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
  };

  return (
    <div
      id="contacto"
      className="scroll-mt-30 mb-10 mt-5 text-center md:text-start"
    >
      <div className="text-center space-y-2">
        <h2 className="capitalize text-3xl font-bold md:ms-5">
          Enviame un mensaje
        </h2>
        <div className="flex justify-center items-center">
          <p className="text-xl w-3/4 text-gray-400 font-semibold mt-2 md:mt-0 mb-4 md:mb-0 md:ms-5">
            ¿Tenés alguna consulta, propuesta o simplemente querés contactarme?
            Podés escribirme mediante el siguiente formulario.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4"
        >
          <div className="flex flex-col text-center justify-center items-center">
            <label
              className={`${
                tema === "claro" ? "text-black" : "text-[#93C5FD]"
              } uppercase font-bold`}
            >
              {t("nombre_contacto")}:
            </label>
            <input
              {...register("nombre")}
              className={`border-2 border-[#93C5FD] focus:outline-[#7DB5F5] focus:border-3 rounded-xl px-5 py-2 me-2 text-center`}
            />
            <span>{errors.nombre && errors.nombre.message}</span>
          </div>
          <div className="flex flex-col text-center justify-center items-center">
            <label
              className={`${
                tema === "claro" ? "text-black" : "text-[#93C5FD]"
              } uppercase font-bold`}
            >
              {t("email_contacto")}:
            </label>
            <input
              {...register("email")}
              className={`border-2 border-[#93C5FD] focus:outline-[#7DB5F5] focus:border-3 rounded-xl px-5 py-2 me-2 text-center`}
            />
            <span>{errors.email && errors.email.message}</span>
          </div>
          <div className="flex flex-col text-center justify-center items-center">
            <label
              className={`${
                tema === "claro" ? "text-black" : "text-[#93C5FD]"
              } uppercase font-bold`}
            >
              {t("mensaje_contacto")}:
            </label>
            <input
              {...register("mensaje")}
              className={`border-2 border-[#93C5FD] focus:outline-[#7DB5F5] focus:border-3 rounded-xl px-5 py-2 me-2 text-center`}
            />
            <span>{errors.mensaje && errors.mensaje.message}</span>
          </div>
          <div className="flex flex-col text-center justify-center items-center">
            <button
              className={`border-2 border-[#93C5FD] ${
                tema === "claro"
                  ? "text-black hover:text-black"
                  : "text-[#93C5FD] hover:text-[#7DB5F5]"
              } uppercase py-2.5 px-6 rounded-xl text-xl font-bold hover:scale-101 hover:border-[#7DB5F5]  duration-300`}
            >
              {t("enviar_contacto")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
