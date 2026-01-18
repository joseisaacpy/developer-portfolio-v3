"use client";
import { experiencias } from "@/data/experiencias";

export default function Experiencias() {
  return (
    <>
      {/* Section */}
      <section className="py-12 bg-gray-50">
        {/* Titulo */}
        <h2 className="text-3xl font-bold text-center mb-10">Experiências</h2>
        {/* Container grid */}
        <div className="grid mx-auto max-w-6xl p-3 gap-4 grid-cols-1 md:grid-cols-3">
          {/* Map para retornar projetos */}
          {experiencias.map((exp, index) => {
            return (
              // Article
              <article
                key={index}
                className="relative bg-white p-6 rounded-lg shadow hover:shadow-lg hover:shadow-blue-default transition-all"
              >
                {/* Span para bolinha */}
                <span className="absolute w-8 h-8 -top-2 -left-2.5 rounded-full bg-linear-to-tl from-blue-default/50 to-blue-default font-bold text-white shadow-md"></span>
                <h3 className="font-bold">{exp.cargo}</h3>
                <p>{exp.empresa}</p>
                <p className="text-sm">
                  {exp.admissao} - {exp.fim == "" ? "Atual" : exp.fim}
                </p>
                <p>{exp.descricao}</p>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
