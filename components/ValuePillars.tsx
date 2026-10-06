"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ValuePillars() {
  const pillars = [
    {
      title: "Máxima Potência",
      desc: "Analise a transferência de força e o tempo de contato com o solo para otimizar a mecânica de cada passada e melhorar suas marcas.",
      icon: "⚡",
    },
    {
      title: "Prevenção Ativa",
      desc: "Detecte assimetrias invisíveis e níveis de fadiga em tempo real, ajustando a carga de treinos antes que a lesão ocorra.",
      icon: "🛡️",
    },
    {
      title: "Suporte Especializado",
      desc: "Sua equipe técnica não está sozinha. Nossos especialistas auxiliam na interpretação dos dados para tomadas de decisão imediatas.",
      icon: "🤝",
    },
  ];

  return (
    <section
      id="solucao"
      className="py-24 bg-slate-50 px-6 border-y border-slate-200 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              A inteligência que redefine o seu limite.
            </h2>
            <p className="text-lg text-slate-600">
              Dados biomecânicos precisos para você extrair o máximo de potência
              de cada movimento, sem cruzar a linha da lesão.
            </p>
          </motion.div>

          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow:
                  "0 20px 25px -5px rgba(37, 99, 235, 0.1), 0 8px 10px -6px rgba(37, 99, 235, 0.1)",
                borderColor: "#93c5fd",
              }}
              className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-slate-100 cursor-pointer transition-colors duration-300 hover:bg-blue-50/50"
            >
              <div className="text-3xl mr-5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                {pillar.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center relative"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-[100px]"
          />

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="relative border-slate-900 bg-slate-900 border-[8px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl z-10 transform rotate-[-2deg]"
          >
            <div className="w-[148px] h-[18px] bg-slate-900 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-10"></div>
            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-slate-100 flex items-center justify-center">
              <div className="text-center p-4 text-slate-400 font-mono text-sm border-2 border-dashed border-slate-300 rounded-xl m-4">
                [ Mockup Figma Aqui ]
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
