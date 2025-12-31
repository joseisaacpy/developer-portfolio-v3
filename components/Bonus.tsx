export default function Bonus() {
  return (
    <section className="relative min-h-[60dvh] w-full flex flex-col gap-2 md:gap-0 md:flex-row items-center justify-center bg-center bg-cover bg-[url('/images/japan-2.webp')] bg-black">
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="p-2 relative z-10 flex flex-col gap-2 items-center justify-center h-full text-white text-center">
        <h1 className="text-2xl md:text-4xl max-w-2xl text-center font-bold text-white">
          “A vitória está em vencer hoje o que você era ontem.” - Miyamoto
          Musashi
        </h1>
      </div>
    </section>
  );
}
