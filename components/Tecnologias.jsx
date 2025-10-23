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
                  width={40}
                  height={40}
                  alt={`Ícone da linguagem ${tecnologia.nome}`}
                  className="h-16"
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
{
  /* 
          <div
            data-aos="fade-up"
            className="flex flex-col items-center justify-center bg-white border shadow-2xl p-4 rounded-2xl hover:scale-105 hover:shadow-lg transition duration-300"
          >
            <div className="flex space-x-3 mb-2">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                width={40}
                height={40}
                alt="Ícone da tecnologia HTML5"
                className="h-8 md:h-10"
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                width={40}
                height={40}
                alt="Ícone da tecnologia CSS3"
                className="h-8 md:h-10"
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                width={40}
                height={40}
                alt="Ícone da tecnologia Tailwind CSS"
                className="h-8 md:h-10"
              />
            </div>
            <p className="text-sm font-medium text-center">
              HTML, CSS e Tailwind CSS
            </p>
          </div>

          <div className="flex flex-col items-center bg-white border shadow-2xl p-4 rounded-2xl hover:scale-105 hover:shadow-lg transition duration-300">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              width={40}
              height={40}
              alt="Ícone da linguagem JavaScript"
              className="h-16"
            />
            <p className="mt-2 text-sm font-medium">JavaScript</p>
          </div>
          <div className="flex flex-col items-center bg-white border shadow-2xl p-4 rounded-2xl hover:scale-105 hover:shadow-lg transition duration-300">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              width={40}
              height={40}
              alt="Ícone da biblioteca React"
              className="h-16"
            />
            <p className="mt-2 text-sm font-medium">React</p>
          </div>
          <div className="flex flex-col items-center bg-white border shadow-2xl p-4 rounded-2xl hover:scale-105 hover:shadow-lg transition duration-300">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
              width={40}
              height={40}
              alt="Ícone do framework Next.js"
              className="h-16"
            />
            <p className="mt-2 text-sm font-medium">Next.js</p>
          </div>

          <div className="flex flex-col items-center bg-white border shadow-2xl p-4 rounded-2xl hover:scale-105 hover:shadow-lg transition duration-300">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
              width={40}
              height={40}
              alt="Ícone da tecnologia Node.js"
              className="h-16"
            />
            <p className="mt-2 text-sm font-medium">Node.js</p>
          </div>

          <div className="flex flex-col items-center bg-white border shadow-2xl p-4 rounded-2xl hover:scale-105 hover:shadow-lg transition duration-300">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
              width={40}
              height={40}
              alt="Ícone do framework Express.js"
              className="h-16"
            />

            <p className="mt-2 text-sm font-medium">Express.js</p>
          </div>

          <div className="flex flex-col items-center bg-white border shadow-2xl p-4 rounded-2xl hover:scale-105 hover:shadow-lg transition duration-300">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
              width={40}
              height={40}
              alt="Ícone do Prisma ORM"
              className="h-16"
            />
            <p className="mt-2 text-sm font-medium">Prisma ORM</p>
          </div>
          <div className="flex flex-col items-center bg-white border shadow-2xl p-4 rounded-2xl hover:scale-105 hover:shadow-lg transition duration-300">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
              width={40}
              height={40}
              alt="Ícone do banco MySQL"
              className="h-16"
            />
            <p className="mt-2 text-sm font-medium">MySQL</p>
          </div>

          <div className="flex flex-col items-center bg-white border shadow-2xl p-4 rounded-2xl hover:scale-105 hover:shadow-lg transition duration-300">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
              width={40}
              height={40}
              alt="Ícone do banco MongoDB"
              className="h-16"
            />
            <p className="mt-2 text-sm font-medium">MongoDB</p>
          </div>
          <div className="flex flex-col items-center bg-white border shadow-2xl p-4 rounded-2xl hover:scale-105 hover:shadow-lg transition duration-300">
            <div className="flex space-x-3 mb-2">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                width={40}
                height={40}
                alt="Logo do Git"
                className="h-10 md:h-16"
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                width={40}
                height={40}
                alt="Logo do GitHub"
                className="h-10 md:h-16"
              />
            </div>
            <p className="text-sm font-medium text-center">Git e GitHub</p>
          </div>
        </div> */
}
