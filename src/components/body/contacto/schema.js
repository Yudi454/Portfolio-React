import z from "zod";

export const schema = (t) =>
  z.object({
    nombre: z
      .string()
      .trim()
      .min(3, t("schema.min_nombre"))
      .max(50, t("schema.max_nombre")),

    email: z
      .email(t("schema.required_email"))
      .trim()
      .min(5, t("schema.min_email"))
      .max(120, t("schema.max_email")),

    mensaje: z
      .string()
      .trim()
      .min(10, t("schema.min_mensaje"))
      .max(1000, t("schema.max_mensaje")),
  });
