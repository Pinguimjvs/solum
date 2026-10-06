import React from "react";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-extrabold text-white italic tracking-tighter">
          Solum<span className="text-blue-500">.</span>
        </div>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <a href="#problema" className="hover:text-blue-400 transition-colors">
            O Problema
          </a>
          <a href="#solucao" className="hover:text-blue-400 transition-colors">
            Tecnologia
          </a>
          <a
            href="#como-funciona"
            className="hover:text-blue-400 transition-colors"
          >
            Como Funciona
          </a>
        </nav>

        <a
          href="#lista-espera"
          className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]"
        >
          Acesso Antecipado
        </a>
      </div>
    </header>
  );
}
