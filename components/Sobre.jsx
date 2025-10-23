import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FaCoffee, FaLaptop } from "react-icons/fa";

// Currículo para download
const curriculoPdf = "Jose-Isaac-Estagio-TI.pdf";

import { toast } from "react-toastify";

export default function Sobre() {
  // Função para baixar currículo
  function handleDownload() {
    try {
      // Checa se o caminho existe
      if (!curriculoPdf) {
        throw new Error("Arquivo não encontrado");
      }

      const link = document.createElement("a");
      link.href = curriculoPdf;
      link.download = "Jose-Isaac-Estagio-TI.pdf";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast.success("Currículo baixado com sucesso, agora vamos conversar!");
    } catch (err) {
      console.error(err);
      toast.error("Ops! Não foi possível baixar o currículo.");
    }
  }
  return (
    <div className="py-16 bg-white text-gray-900 mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
      <div data-aos="fade-left" className="w-full md:w-1/3 flex justify-center">
        <DotLottieReact
          src="https://lottie.host/70307135-523e-4663-93bd-03157061582f/gAH1c0RWfi.lottie"
          loop
          autoplay
        />
      </div>

      <div className="w-full md:w-2/3 text-center md:text-left">
        <h2
          data-aos="fade-right"
          className="text-3xl font-bold mb-4 text-blue-600"
        >
          Sobre mim
          <FaCoffee className="inline-block ml-2" />
          <FaLaptop className="inline-block ml-2" />
        </h2>
        <p data-aos="fade-right" className="text-lg leading-relaxed mb-4">
          Sou um
          <strong className="text-blue-600">
            {" "}
            desenvolvedor Full Stack
          </strong>{" "}
          focado em transformar ideias em experiências digitais com
          personalidade. Com o notebook sempre na tomada e uma xícara de café ao
          lado, crio interfaces modernas, funcionais, acessíveis e responsivas.
        </p>
        <p data-aos="fade-right" className="text-lg leading-relaxed">
          Apaixonado por <strong className="text-blue-600">tecnologia</strong>,
          estou em constante evolução — aprendendo novas ferramentas e em busca
          de novos desafios.
        </p>
        <a
          data-aos="fade-right"
          onClick={handleDownload}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded shadow transition duration-300 cursor-pointer"
        >
          Baixar Currículo
        </a>
      </div>
    </div>
  );
}
