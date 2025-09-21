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
      <h2 className="text-xl font-bold">
        <FaCode className="inline-block mr-1" />
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
        Status: {status ? "Concluído" : "Em andamento"}
      </p>
      <div className="flex gap-4">
        <a
          target="_blank"
          href={linkDemo}
          rel="noopener noreferrer"
          className="underline"
        >
          <FaLink className="inline-block mr-1" />
          Link do Projeto
        </a>
        <a
          target="_blank"
          href={linkRepo}
          rel="noopener noreferrer"
          className="underline"
        >
          <FaLink className="inline-block mr-1" />
          Link do Repositório
        </a>
      </div>
    </div>
  );
}
