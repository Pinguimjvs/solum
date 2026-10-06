"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center bg-slate-900 text-white overflow-hidden pt-20">
      {/* Fundo Gradiente Animado (Dinamismo Visual) */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-gradient-to-tr from-blue-700 via-blue-900 to-slate-900 rounded-full mix-blend-screen filter blur-[100px] opacity-40"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          x: [0, 100, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-tl from-slate-800 via-blue-800 to-transparent rounded-full mix-blend-screen filter blur-[120px] opacity-50"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center flex-grow">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          className="flex flex-col items-start text-left"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-block py-1.5 px-4 rounded-full bg-blue-900/50 text-blue-300 text-xs font-bold tracking-widest border border-blue-700/50 uppercase backdrop-blur-sm"
          >
            Biomecânica IoT de Elite
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300"
          >
            Dados de laboratório.
            <br /> Direto na quadra.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg md:text-xl text-slate-300 max-w-lg mb-10 leading-relaxed"
          >
            Monitoramento inteligente de pisada em tempo real para otimizar sua
            performance e prevenir lesões no alto rendimento.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(37,99,235,0.5)",
            }}
            href="#lista-espera"
            className="bg-white text-slate-900 font-bold px-8 py-4 rounded-full shadow-xl transition-all"
          >
            Garantir Acesso Antecipado
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-full max-w-md aspect-square rounded-full bg-gradient-to-tr from-blue-900/40 to-slate-800/40 border border-slate-700/50 shadow-2xl overflow-hidden flex items-center justify-center backdrop-blur-md">
            <span className="absolute text-slate-400 font-mono text-sm">
              [ Espaço para GIF Interativo ]
            </span>
          </div>
        </motion.div>
      </div>

      {/* Esteira Animada Infinita (Ticker) */}
      <div className="w-full bg-blue-600/20 border-y border-blue-500/30 py-3 overflow-hidden backdrop-blur-md mt-10">
        <motion.div
          animate={{ x: [0, -1035] }} // Ajuste o valor final se o texto ficar cortado
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex whitespace-nowrap text-blue-200 font-bold tracking-widest text-sm uppercase items-center"
        >
          {/* O conteúdo é repetido para criar o efeito de loop perfeito */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-10 pr-10">
              <span>🔥 Prevenção de Lesões</span>
              <span>•</span>
              <span>⚡ Alta Performance</span>
              <span>•</span>
              <span>⏱️ Análise em Tempo Real</span>
              <span>•</span>
              <span>📱 Bluetooth 5.0 Low Energy</span>
              <span>•</span>
              <span>🧠 IoT Biomecânico</span>
              <span>•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
