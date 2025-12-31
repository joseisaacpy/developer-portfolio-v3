import Image from "next/image";
import type { CardTecProps } from "@/types/cardTec";

export default function CardTec({ nome, icon, index }: CardTecProps) {
  return (
    <div
      key={nome}
      data-aos="fade-up"
      data-aos-delay={index * 100} // atraso progressivo
      data-aos-duration="300"
      className="card-tecnologia"
    >
      <Image
        src={icon}
        width={80} // precisa manter algum valor mínimo para otimização
        height={80}
        className="w-16 h-auto"
        alt={`Ícone representando ${nome}`}
      />
      <p className="mt-2 text-sm font-medium">{nome}</p>
    </div>
  );
}
