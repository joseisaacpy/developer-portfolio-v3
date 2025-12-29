import { prisma } from "@/lib/prisma";

// READ (busca todos os projetos)
export async function GET() {
  try {
    // busca todos os projetos ordenando pela data de criação
    const projetos = await prisma.projeto.findMany({
      orderBy: {
        data_criacao: "desc",
      },
    });
    // retorna os projetos
    return Response.json({
      data: projetos,
      status: 200,
    });
  } catch (error) {
    // caso ocorra algum erro
    console.error(error);
    return new Response.json({
      error: "Erro ao buscar projetos",
      status: 500,
    });
  }
}

// CREATE (cria um novo projeto)
export async function POST(req) {
  try {
    const body = await req.json();
    const novoProjeto = await prisma.projeto.create({
      data: body,
    });
    return Response.json({
      message: "Projeto criado com sucesso",
      projeto: novoProjeto,
    });
  } catch (error) {
    console.error(error);
    return new Response.json({
      error: "Erro ao criar projeto",
      status: 500,
    });
  }
}
