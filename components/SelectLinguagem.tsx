const linguagens = [
  {
    linguagem: "Espanhol",
    icon: "flags/pt.svg",
  },
  {
    linguagem: "Inglês",
    icon: "flags/en.svg",
  },
  {
    linguagem: "Português",
    icon: "flags/br.svg",
  },
];

export default function SelectLinguagem() {
  return (
    <div className="flex items-center gap-2">
      {linguagens.map((linguagem) => {
        return (
          <button key={linguagem.linguagem}>
            <img
              src={linguagem.icon}
              alt={linguagem.linguagem}
              className="w-6 h-6 rounded-full"
            />
          </button>
        );
      })}
    </div>
  );
}
