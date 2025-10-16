"use client";

// Lenis Scroll
import Lenis from "@studio-freight/lenis";

// Toast/Notificações
import { ToastContainer } from "react-toastify";

// Element do scroll
import { Element } from "react-scroll";

// Hooks
import { useEffect } from "react";

// Components
import Header from "@/components/Header";
import Home from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Tecnologias from "@/components/Tecnologias";
import Experiencias from "@/components/Experiencias";
import Projetos from "@/components/Projetos";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import { ButtomPlayerSound } from "@/components/ButtomPlayerSound";

export default function SinglePage() {
  // Efeito para o scroll com lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2, // duração da animação em segundos
      smoothWheel: true, // Habilita a animação de rolagem suave
    });

    function ref(time) {
      lenis.raf(time);
      requestAnimationFrame(ref);
    }

    requestAnimationFrame(ref);

    return () => {
      lenis.destroy(); // Limpa o Lenis ao desmontar o componente
    };
  }, []);
  return (
    <>
      <Header />

      <Element name="home">
        <Home />
      </Element>

      <Element name="sobre">
        <Sobre />
      </Element>

      <Element name="tecnologias">
        <Tecnologias />
      </Element>

      <Element name="projetos">
        <Projetos />
      </Element>

      <Element name="experiencias">
        <Experiencias />
      </Element>

      <Element name="contato">
        <Contato />
      </Element>

      {/* Footer */}
      <Footer />

      {/* Toast / Notificação */}
      <ToastContainer autoClose={700} />

      {/* Botão para música */}
      <ButtomPlayerSound />
    </>
  );
}
