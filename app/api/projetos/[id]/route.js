import prisma from "@/lib/prisma";

// busca o projeto pelo id
export async function GET(req, { params }) {
  // Pega o id nos parametros
  const { id } = params;
  // Faz a busca pelo id do projeto
  try {
    const projeto = await prisma.projeto.findUnique({
      where: { id: id },
    });

    // Se não houver projeto
    if (!projeto) {
      return new Response("Projeto não encontrado", { status: 404 });
    }
    // Retorna o projeto
    return Response.json(projeto);
  } catch (error) {
    console.error(error);
    return new Response("Erro ao buscar projeto", { status: 500 });
  }
}
