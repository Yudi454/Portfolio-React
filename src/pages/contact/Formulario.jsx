import React from "react";
import { Button, Form } from "react-bootstrap";
import "../../css/formulario/formulario.css"

const Formulario = ({
  color,
  setDatos,
  datos,
  register,
  handleSubmit,
  errors,
  onSubmit,
}) => {
  return (
    <div className="w-25">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            className={`input${color} texto${color}`}
            {...register("name", { required: "El nombre es obligatorio" })}
            name="name"
            onChange={(e) =>
              setDatos({ ...datos, [e.target.name]: e.target.value })
            }
          />
          {errors.name && <p className={`mensajeError${color}`}>{errors.name.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            className={`input${color} texto${color}`}
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Email inválido",
              },
            })}
            name="email"
            onChange={(e) =>
              setDatos({ ...datos, [e.target.name]: e.target.value })
            }
          />
          {errors.email && <p className={`mensajeError${color}`}>{errors.email.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Asunto</Form.Label>
          <Form.Control
            className={`input${color} texto${color}`}
            {...register("title",{required: "El asunto es obligatorio"})}
            name="title"
            onChange={(e) =>
              setDatos({ ...datos, [e.target.name]: e.target.value })
            }
          />
          {errors.title && <p className={`mensajeError${color}`}>{errors.title.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            as="textarea"
            className={`input${color} texto${color}`}
            {...register("message",{required:"La descripcion es obligatoria"})}
            name="message"
            onChange={(e) =>
              setDatos({ ...datos, [e.target.name]: e.target.value })
            }
          />
          {errors.title && <p className={`mensajeError${color}`}>{errors.title.message}</p>}
        </Form.Group>
        <Button type="submit" className={`btn${color} mt-4`}>
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default Formulario;
