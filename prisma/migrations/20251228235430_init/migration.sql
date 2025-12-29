-- CreateTable
CREATE TABLE "Projeto" (
    "id" TEXT NOT NULL,
    "tecnologias" TEXT[],
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "linkDemo" TEXT NOT NULL,
    "linkRepo" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "Projeto_pkey" PRIMARY KEY ("id")
);
