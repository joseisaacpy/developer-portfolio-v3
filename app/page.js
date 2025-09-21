"use client";
import { ToastContainer } from "react-toastify";
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
      <Home />
      <Sobre />
      <Tecnologias />
      <Projetos />
      <Contato />
      <Footer />
      <ToastContainer autoClose={700} />
    </>
  );
}
