import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
export const runtime = "nodejs";

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
    return NextResponse.json({ data: projetos }, { status: 200 });
  } catch (error) {
    // caso ocorra algum erro
    console.error(error);
    return NextResponse.json(
      { error: "Erro ao buscar projetos" },
      { status: 500 }
    );
  }
}

// CREATE (cria um novo projeto)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const novoProjeto = await prisma.projeto.create({
      data: body,
    });
    return NextResponse.json(
      {
        message: "Projeto criado com sucesso",
        projeto: novoProjeto,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro ao criar projeto" },
      { status: 500 }
    );
  }
}
