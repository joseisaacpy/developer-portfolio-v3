import "dotenv/config";
import { MongoClient } from "mongodb";
import { prisma } from "../lib/prisma.js";

const mongo = new MongoClient(process.env.MONGODB_URI);

async function migrate() {
  await mongo.connect();
  const db = mongo.db();

  const projects = await db.collection("projetos").find().toArray();

  for (const project of projects) {
    await prisma.projeto.createMany({
      data: {
        nome: project.nome,
        descricao: project.descricao,
        data_criacao: project.data_criacao ?? new Date(),
        tecnologias: project.tecnologias,
        linkDemo: project.linkDemo,
        linkRepo: project.linkRepo,
        status: project.status,
      },
    });
  }
}

migrate()
  .then(() => console.log("Migração concluída 🚀"))
  .catch(console.error)
  .finally(async () => {
    await mongo.close();
    await prisma.$disconnect();
  });
