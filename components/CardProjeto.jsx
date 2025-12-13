"use client";

// Icons
import { FaMessage } from "react-icons/fa6";
import { FaCalendar, FaStar, FaCode, FaLink } from "react-icons/fa";

export default function CardProjeto({
  id,
  nome,
  descricao,
  data_criacao,
  tecnologias,
  linkDemo,
  linkRepo,
  status,
  isAdmin,
}) {
  // Função para deletar um projeto
  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/projetos/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Projeto deletado com sucesso");
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao deletar projeto");
    }
  };
  // Função para editar um projeto
  const handleEdit = async () => {
    try {
      const response = await fetch(`/api/projetos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          descricao,
          data_criacao,
          linkDemo,
          linkRepo,
          status,
        }),
      });
      if (response.ok) {
        alert("Projeto editado com sucesso");
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao editar projeto");
    }
  };

  return (
    <div data-aos="fade-up" className="card-projeto" key={id}>
      <h2 className="text-xl font-bold bg-linear-to-r bg-clip-text from-blue-100 to-blue-500 text-transparent">
        <FaCode className="text-white inline-block mr-1" />
        {nome}
      </h2>
      <p>
        <FaMessage className="inline-block mr-1" />
        {descricao}
      </p>
      <p>
        <FaCalendar className="inline-block mr-1" />
        Data de criação: {new Date(data_criacao).toLocaleDateString("pt-BR")}
      </p>
      <p>
        <FaStar className="inline-block mr-1" />
        Status:
        <span className={status ? "text-green-400" : "text-yellow-400"}>
          {status ? "Concluído" : "Em andamento"}
        </span>
      </p>

      {/* div com tecnologais */}
      {tecnologias && tecnologias.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {tecnologias.map((tec) => (
            <span
              key={tec}
              className="inline-block bg-slate-700 px-2 py-1 rounded-md text-sm"
            >
              {tec}
            </span>
          ))}
        </div>
      ) : (
        <p className="text-gray-400 italic">Nenhuma tecnologia informada</p>
      )}
      <div className="flex flex-col gap-2 justify-between">
        {/* link de demonstração */}
        <a
          target="_blank"
          href={linkDemo}
          rel="noopener noreferrer"
          className={`flex items-center gap-2 px-2 py-1 rounded-md transition-colors duration-200 ${
            linkDemo
              ? "bg-blue-default hover:bg-blue-default"
              : "bg-gray-500 cursor-not-allowed"
          }`}
        >
          <FaLink className="inline-block mr-1" />
          {!linkDemo ? "Sem link" : "Link do Projeto"}
        </a>
        {/* link do repositório */}
        <a
          target="_blank"
          href={linkRepo}
          rel="noopener noreferrer"
          className={`flex items-center gap-2 px-2 py-1 rounded-md transition-colors duration-200 ${
            linkRepo
              ? "bg-blue-default hover:bg-blue-default"
              : "bg-gray-500 cursor-not-allowed"
          }`}
        >
          <FaLink className="inline-block mr-1" />
          {!linkRepo ? "Sem link" : "Link do Repositório"}
        </a>
      </div>
      {/* Div de admin */}
      <div className={`${isAdmin ? "flex" : "hidden"} gap-2 flex-col`}>
        {/* botão de editar */}
        <button
          onClick={handleEdit}
          className="flex items-center gap-2 px-2 py-1 rounded-md transition-colors duration-200 cursor-pointer bg-blue-default hover:bg-blue-default"
        >
          Editar
        </button>
        {/* botão de excluir */}
        <button
          onClick={handleDelete}
          className="flex items-center gap-2 px-2 py-1 rounded-md transition-colors duration-200 cursor-pointer bg-red-600 hover:bg-red-700"
        >
          Excluir
        </button>
      </div>
    </div>
  );
}
