import { Button, Form } from "react-bootstrap";

const Formulario = ({ color, register, handleSubmit, errors, onSubmit, t }) => {
  return (
    <div className="contenedorFormulario">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>{t("nombre")}</Form.Label>
          <Form.Control
            className={`input${color} texto${color}`}
            {...register("name", { required: `${t("nom_obl")}` })}
            name="name"
          />
          {errors.name && (
            <p className={`mensajeError${color}`}>{errors.name.message}</p>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>{t("email")}</Form.Label>
          <Form.Control
            className={`input${color} texto${color}`}
            {...register("email", {
              required: `${t("email_obl")}`,
              pattern: {
                value: /^\S+@\S+$/i,
                message: `${t("email_inv")}`,
              },
            })}
            name="email"
          />
          {errors.email && (
            <p className={`mensajeError${color}`}>{errors.email.message}</p>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>{t("asunto")}</Form.Label>
          <Form.Control
            className={`input${color} texto${color}`}
            {...register("title", { required: `${t("asnt_obl")}` })}
            name="title"
          />
          {errors.title && (
            <p className={`mensajeError${color}`}>{errors.title.message}</p>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>{t("desc")}</Form.Label>
          <Form.Control
            as="textarea"
            className={`input${color} texto${color}`}
            {...register("message", {
              required: `${t("desc_obl")}`,
            })}
            name="message"
          />
          {errors.title && (
            <p className={`mensajeError${color}`}>{errors.title.message}</p>
          )}
        </Form.Group>
        <Button type="submit" className={`btn${color} mt-4`}>
          {t("enviar")}
        </Button>
      </Form>
    </div>
  );
};

export default Formulario;
