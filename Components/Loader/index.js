import Image from "next/image";
import logoImg from "@/public/img/dev-jose.webp";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        className="h-20 w-20 animate-spin rounded-full border-2 border-white"
        src={logoImg}
        alt="Logo de José Isaac"
        width={50}
        height={50}
      />
      <h1 className="text-lg text-white font-bold z-10">Carregando...</h1>
    </div>
  );
}
