"use client";
// Toast/Notificações
import { ToastContainer } from "react-toastify";

// Element do scroll
import { Element } from "react-scroll";

// Components
import Header from "@/Components/Header/page";
import Home from "@/Components/Home/page";
import Sobre from "@/Components/Sobre/page";
import Tecnologias from "@/Components/Tecnologias/page";
import Experiencias from "@/Components/Experiencia/page";
import Projetos from "@/Components/Projetos/page";
import Contato from "@/Components/Contato/page";
import Footer from "@/Components/Footer/page";

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

      <Footer />

      <ToastContainer autoClose={700} />
    </>
  );
}
