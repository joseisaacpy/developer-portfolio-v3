import prisma from "@/lib/prisma";

export async function GET(req, { params }) {
  try {
    const projeto = await prisma.projeto.findUnique({
      where: { id: params.id },
    });

    if (!projeto) {
      return new Response("Projeto não encontrado", { status: 404 });
    }

    return new Response(JSON.stringify(projeto), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Erro ao buscar projeto", { status: 500 });
  }
}
