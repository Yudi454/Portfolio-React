const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { nombre, email, mensaje } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev", //Despues cambiar a gmail de contacto
      to: ["lucasyudi445@gmail.com"],
      subject: `Nuevo mensaje de ${nombre}`,
      replyTo: email,
      html: `<h2>Nuevo contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    });

    if (error) {
      return Response.json(error, { status: 400 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: "Error interno" }, { status: 500 });
  }
}
