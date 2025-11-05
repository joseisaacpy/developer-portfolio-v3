import japanImg from "@/public/img/japan.webp";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import { toast } from "react-toastify";
import Image from "next/image";

export default function Contato() {
  // Função pra copiar o e-mail
  const handleEmailClick = () => {
    const email = "joseisaacnascimento@gmail.com";
    navigator.clipboard.writeText(email);
    toast.success("E-mail copiado com sucesso");
  };
  return (
    <section className="bg-black flex flex-col items-center justify-center p-4 md:p-10 gap-6">
      <h4 className="text-2xl md:text-3xl font-bold text-center text-white">
        Conexões constroem pontes — vamos conversar!
      </h4>
      <div className="flex flex-col items-center justify-center w-full md:max-w-[80%]">
        <Image
          src={japanImg}
          loading="lazy"
          alt="Imagem de um lugar japonês"
          className="w-full h-auto max-h-[350px] object-cover rounded-t-2xl"
        />
        <div className="p-2 bg-white flex items-center justify-center gap-6 rounded-b-2xl w-full">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/jos%C3%A9-isaac-nascimento/"
            className="hover:scale-105 transition duration-300 hover:text-blue-500"
          >
            <FaLinkedin className="text-4xl md:text-3xl" />
          </a>
          <a
            target="_blank"
            href="https://github.com/joseisaacpy"
            className="hover:scale-105 transition duration-300 hover:text-blue-500"
          >
            <FaGithub className="text-4xl md:text-3xl" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/j0se_isaacsn/"
            className="hover:scale-105 transition duration-300 hover:text-blue-500"
          >
            <FaInstagram className="text-4xl md:text-3xl" />
          </a>
          <a
            onClick={handleEmailClick}
            title="Copiar e-mail"
            className="cursor-pointer hover:scale-105 transition duration-300 hover:text-blue-500"
          >
            <FaEnvelope className="text-4xl md:text-3xl" />
          </a>
        </div>
      </div>
    </section>
  );
}
