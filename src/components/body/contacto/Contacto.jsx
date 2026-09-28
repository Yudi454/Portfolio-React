import { useStore } from "@/store/UseStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contactos } from "./contactos";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schema";

export const Contacto = () => {
  const { tema, setTema } = useStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
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
    <>
      <div>
        <h2 className="text-4xl font-bold ms-5">Contacto</h2>
        <p className="text-xl font-semibold ms-5">
          ¿Tenés una oportunidad laboral o un proyecto? Estoy disponible para
          colaborar.
        </p>
      </div>
      <div className="flex justify-center items-center mt-5 mb-5">
        {contactos.map((c, i) => (
          <button
            key={i}
            className={`border ${
              tema === "claro"
                ? "bg-white border-black"
                : "bg-black border-white"
            } rounded-xl px-5 py-2 me-2 transition-transform duration-300 hover:scale-101 text-center`}
          >
            {c.nombre}
            <FontAwesomeIcon className="" icon={c.icono} />
          </button>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center gap gap-5">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col text-center justify-center items-center">
            <label>Nombre</label>
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
            <label>Email</label>
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
            <label>Contame sobre tu proyecto o propuesta</label>
            <input
              {...register("contenido")}
              className={`border ${
                tema === "claro"
                  ? "bg-white border-black"
                  : "bg-black border-white"
              } rounded-xl px-5 py-2 me-2 text-center`}
            />
            <span>{errors.contenido && errors.contenido.message}</span>
          </div>
          <div className="flex flex-col text-center justify-center items-center">
            <button
              className={`border ${
                tema === "claro"
                  ? "bg-white border-black"
                  : "bg-black border-white"
              } py-2.5 px-6 rounded-xl text-xl font-bold hover:scale-101 duration-300 me-5`}
            >
              Enviar Mensaje
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
