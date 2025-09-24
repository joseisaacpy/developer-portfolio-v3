import { FaMessage } from "react-icons/fa6";
import { FaCalendar, FaStar, FaCode, FaLink } from "react-icons/fa";

export default function CardProjeto({
  title,
  description,
  dateCreated,
  status,
  linkDemo,
  linkRepo,
}) {
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
      <div className="flex flex-col lg:flex-row gap-2 justify-between mt-1">
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
    </div>
  );
}
