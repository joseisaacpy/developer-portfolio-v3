// Importa icons
import {
  FaHome,
  FaUser,
  FaLaptopCode,
  FaBriefcase,
  FaPhone,
  FaCode,
} from "react-icons/fa";

// Armazenar links, destinos e icons
const itensNav = [
  { label: "Início", to: "home", icon: <FaHome /> },
  { label: "Sobre", to: "sobre", icon: <FaUser /> },
  { label: "Tecnologias", to: "tecnologias", icon: <FaCode /> },
  { label: "Projetos", to: "projetos", icon: <FaLaptopCode /> },
  { label: "Experiências", to: "experiencias", icon: <FaBriefcase /> },
  { label: "Contato", to: "contato", icon: <FaPhone /> },
];

export default itensNav;
