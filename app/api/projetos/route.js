import prisma from "@/lib/prisma";


export async function GET() {
  const projetos = await prisma.projeto.findMany();
  console.log(projetos);
  return Response.json(projetos);
}
