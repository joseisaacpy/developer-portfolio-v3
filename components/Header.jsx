"use client";

// Importar motion
import { motion } from "framer-motion";

// Importa imagens
import Image from "next/image";
import logoImg from "@/public/img/dev-jose.webp";

// Importa icones
import { IoMdMenu, IoMdClose } from "react-icons/io";

// Importa hooks
import { useState, useEffect } from "react";

// Importa Link
import { Link } from "react-scroll";

// Importa os links
import itensNav from "@/data/itensNav";
// Animação fadeIn
const fadeIn = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export default function Header() {
  // Estado pra controlar o menu
  const [isOpen, setIsOpen] = useState(false);

  // Estado pra controlar o scroll
  const [isScrolled, setIsScrolled] = useState(false);

  // useEffect para controlar o scroll ao abrir e fechar o menu
  useEffect(() => {
    // Se menu estiver aberto, adicionar a classe para bloquear o scroll
    if (isOpen) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }
    // Função de limpeza
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  useEffect(() => {
    // Função de scroll
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Adicionar o listener
    window.addEventListener("scroll", onScroll);

    // Função de limpeza
    return () => {
      // Remover o listener
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* Header */}
      <header>
        {/* Navigation */}
        <nav
          className={`w-full text-white p-4 flex items-center justify-between md:justify-around fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
            isScrolled
              ? "bg-slate-900 shadow-md backdrop-blur-sm"
              : "bg-slate-800"
          }`}
        >
          <motion.div variants={fadeIn} initial="hidden" animate="show">
            {/* Logo */}
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer flex items-center gap-1 hover:scale-110 transition-all duration-300"
            >
              <Image
                src={logoImg}
                alt="Logo de José Isaac"
                className="rounded-full w-12 h-12"
              />

              <span className="hidden md:flex text-lg font-bold">
                joseisaacpy
              </span>
            </Link>
          </motion.div>

          {/* Menu burguer */}
          <motion.div variants={fadeIn} initial="hidden" animate="show">
            <IoMdMenu
              className="md:hidden cursor-pointer text-3xl font-bold"
              aria-label="Abrir menu"
              onClick={() => setIsOpen(!isOpen)}
            />
          </motion.div>

          {/* Ul */}
          <motion.ul
            variants={fadeIn}
            initial="hidden"
            animate="show"
            className="hidden md:flex items-center gap-4"
          >
            {itensNav.map((link) => {
              return (
                <li key={link.to}>
                  <Link
                    className="cursor-pointer transition-all hover:underline"
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-64}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </motion.ul>
        </nav>
        {/* Menu mobile */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={isOpen ? "show" : "hidden"}
          className="md:hidden backdrop-blur-2xl bg-black/50 w-full h-screen inset-0 fixed text-white z-50"
        >
          {/* Botão de fechar menu */}
          <button
            className="absolute top-4 right-4 text-3xl cursor-pointer"
            aria-label="Fechar menu"
            onClick={() => setIsOpen(false)}
          >
            <IoMdClose />
          </button>
          {/* Lista de links */}
          <ul className="h-full flex flex-col items-center justify-center gap-6">
            {itensNav.map((link) => {
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-64}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className="cursor-pointer text-2xl flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </header>
    </>
  );
}
