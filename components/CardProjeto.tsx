"use client";

// Icons
import { FaMessage } from "react-icons/fa6";
import { FaCalendar, FaStar, FaCode, FaLink } from "react-icons/fa";

import { ProjetoProps } from "@/types/projeto";

export default function CardProjeto({
  id,
  nome,
  descricao,
  data_criacao,
  tecnologias,
  linkDemo,
  linkRepo,
  status,
}: ProjetoProps) {
  return (
    <div data-aos="fade-up" className="card-projeto" key={id}>
      <h2 className="text-xl font-bold bg-linear-to-r bg-clip-text from-blue-100 to-blue-default text-transparent">
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
        Status:{" "}
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
              ? "bg-blue-default hover:bg-blue-dark"
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
              ? "bg-blue-default hover:bg-blue-dark"
              : "bg-gray-500 cursor-not-allowed"
          }`}
        >
          <FaLink className="inline-block mr-1" />
          {!linkRepo ? "Sem link" : "Link do Repositório"}
        </a>
      </div>
    </div>
  );
}
