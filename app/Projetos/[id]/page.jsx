// Função para buscar um projeto pelo id
async function getProjeto(id) {
  try {
    const res = await fetch(`http://localhost:3000/api/projetos/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Erro ao buscar projeto");

    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Importa o Card
import CardProjeto from "@/Components/CardProjeto/page";

export default async function ProjetoPage({ params }) {
  // Pega o projeto com a função
  const projeto = await getProjeto(params.id);

  // Caso projeto não seja encontrado
  if (!projeto) {
    return (
      <section className="flex flex-col items-center gap-2 justify-center min-h-screen min-w-full bg-slate-800 text-white">
        {/* H1 informando projeto não encontrado */}
        <h1 className="text-2xl font-bold">Projeto não encontrado</h1>
        {/* Parágrafo com o id pesquisado */}
        <p>ID buscado: {params.id}</p>
        {/* Âncora de voltar pra página inicial */}
        <a
          href="/"
          className="underline px-6 py-2 bg-slate-200 text-black rounded-md"
        >
          Voltar
        </a>
      </section>
    );
  }

  //   Caso ache o projeto
  return (
    <section className="flex items-center justify-center min-h-screen w-full bg-slate-800">
      <CardProjeto
        key={projeto.id}
        title={projeto.nome}
        description={projeto.descricao}
        dateCreated={projeto.data_criacao}
        linkDemo={projeto.linkDemo}
        status={projeto.status}
      />
    </section>
  );
}
