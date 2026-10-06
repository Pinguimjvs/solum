"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      num: 1,
      title: "Equipe-se",
      desc: "Insira a palmilha ultrafina no seu tênis de competição padrão.",
    },
    {
      num: 2,
      title: "Sincronize",
      desc: "Conecte via Bluetooth com o nosso app de forma automática.",
    },
    {
      num: 3,
      title: "Monitore",
      desc: "Treine enquanto a comissão técnica analisa seus dados em tempo real.",
    },
  ];

  return (
    <section
      id="como-funciona"
      className="pt-12 pb-24 bg-slate-900 text-white px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-16"
        >
          Alta precisão. Configuração zero.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-blue-900 text-blue-400 flex items-center justify-center text-2xl font-bold mb-6 border border-blue-700">
                {step.num}
              </div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
