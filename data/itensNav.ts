// Importa icons
import {
  FaHome,
  FaUser,
  FaLaptopCode,
  FaBriefcase,
  FaPhone,
  FaCode,
} from "react-icons/fa";
import type { IconType } from "react-icons/lib";

type ItensNav = {
  label: string;
  to: string;
  icon: IconType;
};

// Armazenar links, destinos e icons
const itensNav: ItensNav[] = [
  { label: "Início", to: "home", icon: FaHome },
  { label: "Sobre", to: "sobre", icon: FaUser },
  { label: "Tecnologias", to: "tecnologias", icon: FaCode },
  { label: "Experiências", to: "experiencias", icon: FaBriefcase },
  { label: "Projetos", to: "projetos", icon: FaLaptopCode },
  { label: "Contato", to: "contato", icon: FaPhone },
];

export default itensNav;
