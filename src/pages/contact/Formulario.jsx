import React from "react";
import { Button, Form } from "react-bootstrap";

const Formulario = ({ color, setDatos, datos, handleSubmit }) => {
  return (
    <div className="w-25">
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            className={`input${color} texto${color}`}
            name="name"
            onChange={(e) =>
              setDatos({ ...datos, [e.target.name]: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            className={`input${color} texto${color}`}
            name="email"
            onChange={(e) =>
              setDatos({ ...datos, [e.target.name]: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Asunto</Form.Label>
          <Form.Control
            className={`input${color} texto${color}`}
            name="title"
            onChange={(e) =>
              setDatos({ ...datos, [e.target.name]: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            as="textarea"
            className={`input${color} texto${color}`}
            name="message"
            onChange={(e) =>
              setDatos({ ...datos, [e.target.name]: e.target.value })
            }
          />
        </Form.Group>
        <Button
          type="submit"
          className={`btn${color} mt-4`}
        >
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default Formulario;
