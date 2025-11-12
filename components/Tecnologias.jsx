"use client";

// Importa hooks
import { useState } from "react";

// Importa o next/image
import Image from "next/image";

// Importa array de tecnologias
import tecnologias from "@/data/tecnologias";

// Array de categorias de tecnologias
const categorias = [
  "Todas",
  ...new Set(tecnologias.map((tecnologia) => tecnologia.categoria)),
];

export default function Tecnologias() {
  const [categoriaFiltrada, setCategoriaFiltrada] = useState("Todas");
  const [tecnologiaFiltrada, setTecnologiaFiltrada] = useState(tecnologias);

  return (
    <section
      id="tecnologias"
      className="py-16 bg-cover text-gray-900 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-5">
          Tecnologias e Ferramentas
        </h2>

        {/* Botões para filtrar as tecnologias */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-2 mb-5">
          {categorias.map((categoria) => {
            return (
              <button
                key={categoria}
                aria-pressed={categoria === categoriaFiltrada}
                onClick={() => {
                  setCategoriaFiltrada(categoria);
                  if (categoria === "Todas") {
                    setTecnologiaFiltrada(tecnologias);
                  } else {
                    setTecnologiaFiltrada(
                      tecnologias.filter(
                        (tecnologia) => tecnologia.categoria === categoria
                      )
                    );
                  }
                }}
                className={`p-2 bg-blue-600 rounded-2xl text-white cursor-pointer hover:scale-105 transition-all ${
                  categoria === categoriaFiltrada ? "opacity-100" : "opacity-50"
                }`}
              >
                {categoria}
              </button>
            );
          })}
        </div>

        <div
          id="container-tecnologias"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-center"
        >
          {/* Renderiza as tecnologias filtradas */}
          {tecnologiaFiltrada.map((tecnologia, index) => {
            return (
              <div
                key={tecnologia.nome}
                data-aos="fade-up"
                data-aos-delay={index * 100} // atraso progressivo
                data-aos-duration="300"
                className="card-tecnologia"
              >
                <Image
                  src={tecnologia.icon}
                  width={80} // precisa manter algum valor mínimo para otimização
                  height={80}
                  className="w-16 h-auto"
                  alt={`Ícone representando ${tecnologia.nome}`}
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
