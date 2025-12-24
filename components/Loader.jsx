export default function Loader() {
  return (
    <div className="min-h-full min-w-full z-50 inset-0 fixed bg-gradient-to-br from-black to-blue-default flex flex-col gap-2 items-center justify-center transition-all duration-600">
      {/* Logo */}
      <img
        src="/images/dev-jose.webp"
        alt="Logo de José Isaac"
        className="h-20 w-20 animate-spin rounded-full border-2 border-white"
      />
      {/* Texto de carregamento */}
      <h1 className="text-lg text-white font-bold z-10">Carregando...</h1>
    </div>
  );
}
