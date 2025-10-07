// Image
import Image from "next/image";

// Logo
import logoImg from "@/public/img/dev-jose.webp";

export default function Loader() {
  return (
    <div className="min-h-full min-w-full z-50 inset-0 fixed bg-gradient-to-br from-black to-blue-500 flex flex-col gap-2 items-center justify-center transition-all duration-600">
      {/* Logo */}
      <Image
        className="h-20 w-20 animate-spin rounded-full border-2 border-white"
        src={logoImg}
        alt="Logo de José Isaac"
        width={50}
        height={50}
      />
      {/* Texto de carregamento */}
      <h1 className="text-lg text-white font-bold z-10">Carregando...</h1>
    </div>
  );
}
