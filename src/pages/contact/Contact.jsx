import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useStore } from "../../store/AuthStore";
import Formulario from "./Formulario";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [datos, setDatos] = useState();

  const color = useStore((state) => state.color);

  const {register,handleSubmit,formState: {errors},reset} = useForm()

  const onSubmit = async (data) => {

    try {
      console.log(data);
      const res = await emailjs.send(
        "service_2huq26j",
        "template_9f33zae",
        data,
        {
          publicKey: "Li3Fk3GE7Vbe9Lf7H",
        }
      );

      console.log("Enviado con exito");
      reset()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`fondoCuerpo${color} texto${color} d-flex flex-column align-items-center pt-4 pb-4`}
    >
      <h2>Formulario para contactarme</h2>
      <Formulario
        color={color}
        setDatos={setDatos}
        datos={datos}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Contact;
