"use client";
import Image from "next/image";
import heroImage from "@/public/images/hero-image.webp";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center h-screen text-white hero-overlay">
        <Image
          src={heroImage}
          alt="Desenvolvedor trabalhando em um notebook em ambiente de programação"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="absolute inset-0 bg-black/60"></div>
        <div className="p-2 relative z-10 flex flex-col gap-2 items-center justify-center h-full text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            Olá, me chamo <span className="text-blue-default">José Isaac</span>!
            <span className="wave-hand">👋🏽</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold">
            Desenvolvedor <span className="text-blue-default">Full Stack</span>
          </p>
          <p className="text-lg md:text-xl text-gray-200">
            Entre códigos, ideias e café, construo aplicações web modernas.
          </p>
          {/* div de links call to action */}
          <div className="flex gap-4">
            <Link
              to="projetos"
              smooth
              offset={-64}
              duration={500}
              className="link-call-to-action"
            >
              Ver projetos
            </Link>
            <Link
              to="contato"
              smooth
              offset={-64}
              duration={500}
              className="link-call-to-action"
            >
              Fale comigo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
