import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useStore } from "../../store/AuthStore";
import Formulario from "./Formulario";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [datos, setDatos] = useState();

  const color = useStore((state) => state.color);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("algo");
      const res = await emailjs.sendForm(
        "service_2huq26j",
        "template_9f33zae",
        e.target,
        {
          publicKey: "Li3Fk3GE7Vbe9Lf7H",
        }
      );

      console.log("Enviado con exito");
      e.target.reset()
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
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Contact;
