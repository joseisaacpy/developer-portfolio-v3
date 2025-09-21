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
            onClick={() => setIsOpen(!isOpen)}
          />
          {/* Ul */}
          <ul className="hidden md:flex items-center gap-4">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer transition-all hover:underline"
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                to="sobre"
                smooth={true}
                duration={500}
                offset={-64}
                className="cursor-pointer transition-all hover:underline"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="tecnologias"
                smooth={true}
                duration={500}
                offset={-64}
                className="cursor-pointer transition-all hover:underline"
              >
                Tecnologias
              </Link>
            </li>
            <li>
              <Link
                to="projetos"
                smooth={true}
                duration={500}
                offset={-64}
                className="cursor-pointer transition-all hover:underline"
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                to="contato"
                smooth={true}
                duration={500}
                offset={-64}
                className="cursor-pointer transition-all hover:underline"
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Menu mobile (só aparece no mobile e quando isOpen for true) */}
      {isOpen && (
        <div className="md:hidden w-full h-screen fixed top-0 left-0 bg-slate-950 text-white z-50 transition-all duration-300">
          <button
            className="absolute top-4 right-4 text-3xl cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <IoMdClose />
          </button>
          <ul className="h-full flex flex-col items-center justify-center gap-6">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                onClick={() => {
                  setIsOpen(false);
                }}
                className="text-2xl flex items-center justify-center gap-2 hover:scale-105 transition-transform"
              >
                <FaHome /> Início
              </Link>
            </li>
            <li>
              <Link
                to="sobre"
                smooth={true}
                duration={500}
                onClick={() => {
                  setIsOpen(false);
                }}
                className="text-2xl flex items-center justify-center gap-2 hover:scale-105 transition-transform"
              >
                <FaUser /> Sobre
              </Link>
            </li>
            <li>
              <Link
                to="tecnologias"
                smooth={true}
                duration={500}
                onClick={() => {
                  setIsOpen(false);
                }}
                className="text-2xl flex items-center justify-center gap-2 hover:scale-105 transition-transform"
              >
                <FaCode /> Tecnologias
              </Link>
            </li>
            <li>
              <Link
                to="projetos"
                smooth={true}
                duration={500}
                onClick={() => {
                  setIsOpen(false);
                }}
                className="text-2xl flex items-center justify-center gap-2 hover:scale-105 transition-transform"
              >
                <FaBriefcase /> Projetos
              </Link>
            </li>
            <li>
              <Link
                to="contato"
                smooth={true}
                duration={500}
                onClick={() => {
                  setIsOpen(false);
                }}
                className="text-2xl flex items-center justify-center gap-2 hover:scale-105 transition-transform"
              >
                <FaPhone /> Contato
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
