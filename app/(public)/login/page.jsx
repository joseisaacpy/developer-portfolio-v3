"use client";

// Toast
import { toast } from "react-toastify";
// Hooks
import { useState } from "react";
// Router
import { useRouter } from "next/navigation";
// Icon
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginPage() {
  // Estado para armazenar a senha
  const [password, setPassword] = useState("");
  // Estado para controlar a visibilidade da senha
  const [showPassword, setShowPassword] = useState(false);
  // Router
  const router = useRouter();

  // Função para lidar com o envio do form
  const handleSubmit = async (e) => {
    // Previne o envio do form
    e.preventDefault();

    // Validação de senha
    // Se a senha estiver vazia
    if (!password.trim()) {
      toast.error("Digite sua senha");
      return;
    }
    // Se a senha estiver correta
    if (password.trim() === process.env.NEXT_PUBLIC_PASSWORD_LOCAL) {
      // Cria o cookie auth
      document.cookie = "auth=true; path=/";

      // Mensagem de sucesso
      toast.success("Redirecionando...");

      // Aguarda 500ms para redirecionar
      setTimeout(() => {
        // Redireciona para a dashboard
        router.push("/dashboard");
      }, 1000);
    } else {
      // Se a senha estiver incorreta
      toast.error("Senha incorreta!");
    }
  };
  return (
    <section className="min-h-screen w-screen flex flex-col items-center justify-center text-center bg-slate-800 text-white">
      <h1 className="text-2xl md:text-4xl font-bold">Login</h1>
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-4 bg-slate-300 text-slate-800 p-4 rounded-md flex flex-col"
      >
        <label htmlFor="senha">Digite sua senha:</label>
        <div className="relative flex items-center justify-center">
          <input
            id="senha"
            type={showPassword ? "text" : "password"}
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 pr-10 rounded-md bg-slate-700 text-white mt-2"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-[40%] text-white cursor-pointer"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <button
          type="submit"
          className="p-2 rounded-md bg-slate-800 text-white mt-2 cursor-pointer hover:bg-slate-600 transition duration-300"
        >
          Entrar
        </button>
      </form>
    </section>
  );
}
