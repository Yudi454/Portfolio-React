export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get("lang");

    let id = undefined;

    if (lang === "es") {
      id = process.env.NEXT_PUBLIC_CV_ESPANOL_ID;
    } else {
      id = process.env.NEXT_PUBLIC_CV_INGLES_ID;
    }

    const url = `https://drive.google.com/uc?export=download&id=${id}`;

    const response = await fetch(url);

    if (!response.ok) {
      return Response.json(
        {
          error: "Google Drive respondió con error",
          status: response.status,
        },
        { status: 500 }
      );
    }

    const pdf = await response.arrayBuffer();

    return new Response(pdf, {
      headers: {
        "Content-Type": "application/pdf",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    return Response.json({ error: "Error al obtener el CV" }, { status: 500 });
  }
}
