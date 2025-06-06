import { useStore } from "../../store/AuthStore";
import Formulario from "./Formulario";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import "../../css/formulario/Formulario.css"

const Contact = () => {
  const color = useStore((state) => state.color);

  const MySwal = withReactContent(Swal);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

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

      MySwal.fire({
        title: "¡Envio Exitoso!",
        html: "El email fue enviado con éxito",
        icon: "success",
      });

      reset();
    } catch (error) {
      MySwal.fire({
        title: "Ocurrio algun error",
        html: error,
        icon: "error",
      });
    }
  };

  return (
    <div
      className={`fondoCuerpo${color} texto${color} d-flex flex-column align-items-center pt-4 pb-4`}
    >
      <h2>Formulario para contactarme</h2>
      <Formulario
        color={color}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Contact;
