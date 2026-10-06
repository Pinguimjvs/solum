import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-slate-900 text-white overflow-hidden">
      {/* Elemento decorativo de fundo simulando um mapa de calor */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob [animation-delay:2.5s]"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        <span className="mb-4 inline-block py-1 px-3 rounded-full bg-blue-900/50 text-blue-300 text-sm font-semibold tracking-wider border border-blue-700/50">
          TECNOLOGIA WEARABLE DE ALTO RENDIMENTO
        </span>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Dados de laboratório.
          <br className="hidden md:block" /> Direto na quadra.
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
          Monitoramento inteligente de pisada em tempo real para otimizar sua
          performance e prevenir lesões no alto rendimento.
        </p>

        <a
          href="#lista-espera"
          className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-slate-900 bg-white rounded-full hover:bg-blue-50 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        >
          Garantir Acesso Antecipado
          <svg
            className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
