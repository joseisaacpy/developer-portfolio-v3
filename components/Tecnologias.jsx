// Importa o next/image
import Image from "next/image";

// Array de tecnologias
const tecnologias = [
  {
    nome: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    nome: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    nome: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    nome: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    nome: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    nome: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    nome: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    nome: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    nome: "Prisma ORM",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
  },
  {
    nome: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    nome: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    nome: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    nome: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
];

export default function Tecnologias() {
  return (
    <section
      id="tecnologias"
      className="py-16 bg-cover text-gray-900 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-5">
          Tecnologias e Ferramentas
        </h2>

        <div
          id="container-tecnologias"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-center"
        >
          {/* Renderiza as tecnologias */}
          {tecnologias.map((tecnologia, index) => {
            return (
              <div
                key={tecnologia.nome}
                data-aos="fade-up"
                data-aos-delay={index * 100} // atraso progressivo
                data-aos-duration="600"
                className="flex flex-col items-center bg-white border border-blue-600 shadow-2xl p-4 rounded-2xl hover:scale-105 hover:shadow-lg transition duration-300"
              >
                <Image
                  src={tecnologia.icon}
                  width={80} // precisa manter algum valor mínimo para otimização
                  height={80}
                  className="w-16 h-auto"
                  alt={`Ícone da linguagem ${tecnologia.nome}`}
                />
                <p className="mt-2 text-sm font-medium">{tecnologia.nome}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
