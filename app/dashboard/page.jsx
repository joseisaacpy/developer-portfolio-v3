"use client";

// Importa o card
import CardProjeto from "@/components/CardProjeto";

// Importa o loader
import Loader from "@/components/Loader";

// Importa o Link
import Link from "next/link";

// Importa hooks
import { useState, useEffect, use } from "react";

export default function Dashboard() {
  // Estado para armazenar os projetos
  const [projetos, setProjetos] = useState([]);
  //   Estado para controlar o carregamento
  const [loader, setLoader] = useState(true);

  //   Função para buscar os projetos
  const getProjetos = async () => {
    try {
      const response = await fetch("/api/projetos");
      const data = await response.json();
      setProjetos(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoader(false);
    }
  };

  //   Chama a função ao montar o componente
  useEffect(() => {
    getProjetos();
  }, []);

  //   Se os dados estiverem carregando
  if (loader) {
    return <Loader />;
  }

  //   Se não tiver projetos
  if (projetos.length == 0) {
    return (
      <section className="p-2">
        {/* Título */}
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <h1 className="text-lg md:text-2xl font-bold">
            Você ainda não possui nenhum projeto.
          </h1>
          <p>
            Que tal criar um? <Link href="/dashboard/novo">Clique aqui</Link>
          </p>
        </div>
      </section>
    );
  }

  //   Se tiver projetos
  return (
    <>
      {/* Header */}
      <header className="p-2">
        {/* Título com a quantidade de projetos */}
        <h1 className="text-xl md:text-2xl font-bold text-center">
          Painel de projetos - ({projetos.length})
        </h1>
      </header>
      {/* Section */}
      <section className="p-2">
        {/* Grid de cards */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-2">
          {projetos.map((projeto) => (
            <CardProjeto
              key={projeto.id}
              isAdmin={true}
              id={projeto.id}
              title={projeto.nome}
              description={projeto.descricao}
              dateCreated={projeto.data_criacao}
              linkDemo={projeto.linkDemo}
              linkRepo={projeto.linkRepo}
              status={projeto.status}
            />
          ))}
        </div>
      </section>
    </>
  );
}
