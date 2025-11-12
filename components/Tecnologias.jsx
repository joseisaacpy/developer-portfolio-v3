// Importa o next/image
import Image from "next/image";

import tecnologias from "@/data/tecnologias";

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
