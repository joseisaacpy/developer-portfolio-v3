import prisma from "@/lib/prisma";

// busca todos os projetos
export async function GET() {
  try {
    // busca todos os projetos ordenando pela data de criação
    const projetos = await prisma.projeto.findMany({
      orderBy: {
        data_criacao: "desc",
      },
    });
    // retorna os projetos
    return Response.json(projetos);
  } catch (error) {
    // caso ocorra algum erro
    console.error(error);
    return new Response("Erro ao buscar projetos", { status: 500 });
  }
}
