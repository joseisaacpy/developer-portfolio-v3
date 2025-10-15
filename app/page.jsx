"use client";
// Toast/Notificações
import { ToastContainer } from "react-toastify";

// Element do scroll
import { Element } from "react-scroll";

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
