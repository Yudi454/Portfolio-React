import z from "zod";

export const schema = z.object({
  nombre: z
    .string()
    .trim()
    .min(3, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre es demasiado largo"),

  email: z
    .email("Ingresá un correo electrónico válido")
    .trim()
    .min(5, "El email debe tener al menos 5 caracteres")
    .max(120, "El email es demasiado largo"),
    
  contenido: z
    .string()
    .trim()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(1000, "El mensaje no puede superar los 1000 caracteres"),
});
