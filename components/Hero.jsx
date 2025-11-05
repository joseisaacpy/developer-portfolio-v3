// imagem hero
import Image from "next/image";
import heroImage from "@/public/img/hero-image.webp";

// Link do scroll
import { Link } from "react-scroll";

export default function Home() {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center h-screen text-white">
        <Image
          src={heroImage}
          alt="Imagem Hero"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="absolute inset-0 bg-black/50"></div>
        <div className="p-2 relative z-10 flex flex-col gap-2 items-center justify-center h-full text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            Olá, me chamo <span className="text-blue-500">José Isaac</span>!
            <span className="wave-hand">👋🏽</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold">
            Desenvolvedor <span className="text-blue-500">Full Stack</span>
          </p>
          <p className="text-lg md:text-xl text-gray-200">
            Transformando ideias em códigos e tomando um cafezinho.
          </p>
          <p className="text-white">Vamos conversar?</p>
        </div>
      </section>
    </>
  );
}
