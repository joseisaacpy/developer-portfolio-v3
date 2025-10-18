import prisma from "@/lib/prisma";

// DELETE (deleta um projeto pelo id vindo pela url)
export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await prisma.projeto.delete({
      where: { id: id },
    });

    return new Response("Projeto deletado com sucesso", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Erro ao deletar projeto", { status: 500 });
  }
}
