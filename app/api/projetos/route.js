import prisma from "@/lib/prisma";

// busca todos os projetos
export async function GET() {
  try {
    const projetos = await prisma.projeto.findMany();
    return Response.json(projetos);
  } catch (error) {
    console.error(error);
    return new Response("Erro ao buscar projetos", { status: 500 });
  }
}
