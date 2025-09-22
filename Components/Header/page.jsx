"use client";

// Imports
import Image from "next/image";
import logoImg from "@/public/img/dev-jose.webp";

import { FaHome, FaUser, FaBriefcase, FaPhone, FaCode } from "react-icons/fa";
import { IoMdMenu, IoMdClose } from "react-icons/io";

import { useState } from "react";
import { Link } from "react-scroll";
import { useEffect } from "react";

export default function Header() {
  // Estado pra controlar o menu
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Armazenar links, destinos e icons
  const links = [
    { label: "Início", to: "home", icon: <FaHome /> },
    { label: "Sobre", to: "sobre", icon: <FaUser /> },
    { label: "Tecnologias", to: "tecnologias", icon: <FaCode /> },
    { label: "Projetos", to: "projetos", icon: <FaBriefcase /> },
    { label: "Contato", to: "contato", icon: <FaPhone /> },
  ];

  // useEffect
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900 shadow-md backdrop-blur-sm"
            : "bg-slate-800"
        }`}
      >
        {/* Navigation */}
        <nav className="w-full text-white p-4 flex items-center justify-between md:justify-around">
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
          {/* Menu burguer */}
          <IoMdMenu
            className="md:hidden cursor-pointer text-3xl font-bold"
            aria-label="Abrir menu"
            onClick={() => setIsOpen(!isOpen)}
          />
          {/* Ul */}
          <ul className="hidden md:flex items-center gap-4">
            {links.map((link) => {
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
          </ul>
        </nav>
      </header>

      {/* Menu mobile (só aparece no mobile e quando isOpen for true) */}
      {isOpen && (
        <div className="md:hidden w-full h-screen fixed top-0 left-0 bg-slate-950 text-white z-50 transition-all duration-300">
          <button
            className="absolute top-4 right-4 text-3xl cursor-pointer"
            aria-label="Fechar menu"
            onClick={() => setIsOpen(false)}
          >
            <IoMdClose />
          </button>
          <ul className="h-full flex flex-col items-center justify-center gap-6">
            {links.map((link) => {
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className="text-2xl flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
