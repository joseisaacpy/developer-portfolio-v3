// Imagem de fundo
import techsBg from "@/public/images/background-techs.webp";

// Loader
import Loader from "./Loader";

// Card
import CardProjeto from "./CardProjeto";

// Hooks
import { useState, useEffect } from "react";

export default function Projetos() {
  const [projetos, setProjetos] = useState([]); // Estado para armazenar os projetos
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento (começa como true para mostrar o loader)

  // Função para buscar os projetos da API
  const fetchData = async () => {
    try {
      const response = await fetch("api/projetos");
      const data = await response.json();
      setProjetos(data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Desativa o carregamento quando os projetos forem carregados
    }
  };

  useEffect(() => {
    fetchData(); // Chama a função para buscar os projetos ao montar o componente
  }, []);

  // Se os dados estiverem carregando
  if (loading) {
    return <Loader />;
  }

  // Conteúdo principal
  return (
    <section
      id="projetos"
      className="relative py-16 bg-gray-100 text-gray-800 bg-cover bg-center"
      style={{ backgroundImage: `url(${techsBg.src})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <h2 className="relative z-10 text-3xl font-bold text-center text-white mb-5">
        Projetos
      </h2>

      <div
        id="container-projetos"
        className="relative grid p-2 items-center justify-center m-auto grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3"
      >
        {projetos.map((projeto) => (
          <CardProjeto
            key={projeto.id}
            nome={projeto.nome}
            descricao={projeto.descricao}
            data_criacao={projeto.data_criacao}
            tecnologias={projeto.tecnologias}
            linkDemo={projeto.linkDemo}
            linkRepo={projeto.linkRepo}
            status={projeto.status}
            id={projeto.id}
          />
        ))}
      </div>
    </section>
  );
}
