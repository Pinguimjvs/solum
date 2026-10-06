"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TechSpecs() {
  const specs = [
    {
      title: "Design Ultrafino",
      desc: "Apenas 3mm de espessura. Não altera o drop do tênis nem a percepção de pisada.",
      icon: "📏",
    },
    {
      title: "Matriz de Sensores",
      desc: "48 sensores piezoelétricos mapeando cada milímetro do seu pé.",
      icon: "🎯",
    },
    {
      title: "Formato Universal",
      desc: "Adaptável a chuteiras, sapatilhas de ciclismo e tênis de corrida.",
      icon: "👟",
    },
    {
      title: "Bateria Invisível",
      desc: "Até 40 horas de treino contínuo com carregamento magnético rápido.",
      icon: "🔋",
    },
  ];

  return (
    <section className="pt-24 pb-12 bg-slate-900 text-white px-6 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Cabeçalho da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-bold tracking-widest text-sm uppercase mb-3 block">
            Engenharia de Hardware
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Invisível no pé. <br className="hidden md:block" />
            Implacável nos dados.
          </h2>
        </motion.div>

        {/* Vídeo 3D Centralizado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center mb-20"
        >
          {/* Efeito de luz atrás do vídeo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-blue-600/30 rounded-full blur-[120px] pointer-events-none"></div>

          {/* Tag de vídeo otimizada para reprodução automática estilo "GIF" */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="relative z-10 w-full max-w-4xl rounded-3xl border border-slate-800 shadow-2xl bg-slate-950/50"
          >
            <source src="/solum-palmilha.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
        </motion.div>

        {/* Grade de Especificações em 4 Colunas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-2xl backdrop-blur-sm hover:bg-slate-800 transition-colors"
            >
              <div className="text-3xl mb-4 bg-slate-900 w-14 h-14 flex items-center justify-center rounded-xl border border-slate-700">
                {spec.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{spec.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {spec.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
