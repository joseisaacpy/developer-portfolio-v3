"use client";
import { ToastContainer } from "react-toastify";
import { Element } from "react-scroll";
// Components
import Header from "@/Components/Header";
import Home from "@/Components/Home";
import Sobre from "@/Components/Sobre";
import Tecnologias from "@/Components/Tecnologias";
import Projetos from "@/Components/Projetos";
import Contato from "@/Components/Contato";
import Footer from "@/Components/Footer";

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

      <Element name="contato">
        <Contato />
      </Element>

      <Footer />

      <ToastContainer autoClose={700} />
    </>
  );
}
