"use client";

// Import icon
import { FaMusic, FaPause } from "react-icons/fa";

// Hooks
import { useState, useRef } from "react";

export function ButtomPlayerSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Estado para controlar o som
  const [isPlaying, setIsPlaying] = useState(false); // Começa com o som desligado

  const togglePlay = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((error) => {
        console.log("Autoplay bloqueado", error);
      });
    }

    setIsPlaying(!isPlaying);
  };
  return (
    <div>
      <audio
        ref={audioRef}
        src="/audios/nocturnal-slowed.mp3"
        loop
        preload="auto"
      />
      <button
        onClick={togglePlay}
        className="fixed bottom-5 right-5 flex items-center justify-center w-12 h-12 bg-black text-white rounded-full shadow-lg hover:scale-110 hover:bg-gray-900 active:scale-95 transition-all duration-300 ease-in-out z-10"
        aria-label="Tocar ou pausar música de fundo"
      >
        {isPlaying ? <FaPause /> : <FaMusic />}
      </button>
    </div>
  );
}
