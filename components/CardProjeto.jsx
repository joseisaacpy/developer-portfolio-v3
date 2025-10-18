"use client";

// Icons
import { FaMessage } from "react-icons/fa6";
import { FaCalendar, FaStar, FaCode, FaLink } from "react-icons/fa";

export default function CardProjeto({
  id,
  title,
  description,
  dateCreated,
  status,
  linkDemo,
  linkRepo,
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
    <div
      className="flex flex-col justify-between gap-1.5 p-4 rounded-lg shadow-md bg-slate-800 text-white w-full h-full"
      key={title}
    >
      <h2 className="text-xl font-bold bg-gradient-to-r bg-clip-text from-blue-100 to-blue-500 text-transparent">
        <FaCode className="text-white inline-block mr-1" />
        {""}
        {title}
      </h2>
      <p>
        <FaMessage className="inline-block mr-1" /> {description}
      </p>
      <p>
        <FaCalendar className="inline-block mr-1" />
        Data de criação: {new Date(dateCreated).toLocaleDateString("pt-BR")}
      </p>
      <p>
        <FaStar className="inline-block mr-1" />
        Status:{" "}
        <span className={status ? "text-green-400" : "text-yellow-400"}>
          {status ? "Concluído" : "Em andamento"}
        </span>
      </p>
      <div className="flex flex-col gap-2 justify-between">
        {/* link de demonstração */}
        <a
          target="_blank"
          href={linkDemo}
          rel="noopener noreferrer"
          className={`flex items-center gap-2 px-2 py-1 rounded-md transition-colors duration-200 ${
            linkDemo
              ? "bg-blue-600 hover:bg-blue-700"
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
              ? "bg-blue-600 hover:bg-blue-700"
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
          className="flex items-center gap-2 px-2 py-1 rounded-md transition-colors duration-200 cursor-pointer bg-blue-600 hover:bg-blue-700"
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
