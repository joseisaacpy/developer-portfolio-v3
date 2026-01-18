"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FaCoffee, FaLaptop } from "react-icons/fa";
const curriculoPdf = "Jose-Isaac-Desenvolvedor.pdf";
import { toast } from "react-toastify";

export default function Sobre() {
  return (
    <section className="py-16 bg-white text-gray-900 mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-center gap-8">
      <div
        data-aos="fade-down"
        className="w-full flex justify-center items-center"
      >
        <DotLottieReact
          aria-hidden="true"
          src="https://lottie.host/70307135-523e-4663-93bd-03157061582f/gAH1c0RWfi.lottie"
          loop
          autoplay
        />
      </div>

      <div className="max-w-3xl p-2 text-center md:text-left">
        <h2
          data-aos="fade-up"
          className="text-3xl font-bold mb-4 text-blue-default"
        >
          Sobre mim
          <FaCoffee className="inline-block ml-2" />
          <FaLaptop className="inline-block ml-2" />
        </h2>
        <p data-aos="fade-up" className="text-lg leading-relaxed mb-4">
          Sou um
          <strong className="text-blue-default">
            {" "}
            desenvolvedor Full Stack
          </strong>{" "}
          focado em transformar ideias em experiências digitais com
          personalidade. Com o notebook sempre na tomada e uma xícara de café ao
          lado, crio interfaces modernas, funcionais, acessíveis e responsivas.
        </p>
        <p data-aos="fade-up" className="text-lg leading-relaxed">
          Apaixonado por{" "}
          <strong className="text-blue-default">tecnologia</strong>, estou em
          constante evolução — aprendendo novas ferramentas e em busca de novos
          desafios.
        </p>
        <a
          data-aos="fade-up"
          download
          href={curriculoPdf}
          onClick={() =>
            toast.success(
              "Currículo baixado com sucesso, agora vamos conversar!",
            )
          }
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-3 bg-blue-default/80 hover:bg-blue-default text-white font-medium rounded shadow transition duration-300 cursor-pointer"
        >
          Baixar Currículo
        </a>
      </div>
    </section>
  );
}
