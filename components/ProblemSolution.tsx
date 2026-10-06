"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ProblemSolution() {
  return (
    <section id="problema" className="py-24 bg-white px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            O limite entre a alta performance e a lesão.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            No esporte de elite, desvios imperceptíveis na passada causam perda
            de potência e desgastes severos. A Solum transforma os seus dados
            biomecânicos na sua maior vantagem competitiva.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Card do Problema */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-red-50 rounded-2xl border border-red-100"
          >
            <h3 className="text-xl font-bold text-red-700 mb-3">
              O Risco Invisível
            </h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✕</span> Perda de potência
                por biomecânica ineficiente
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✕</span> Fadiga e sobrecarga
                mascaradas durante treinos
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✕</span> Intervenções
                médicas apenas após a lesão ocorrer
              </li>
            </ul>
          </motion.div>

          {/* Card da Solução */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 bg-blue-50 rounded-2xl border border-blue-100 shadow-lg relative transform md:-translate-y-4"
          >
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              A VANTAGEM SOLUM
            </div>
            <h3 className="text-xl font-bold text-blue-800 mb-3">
              Controle e Prevenção
            </h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span> Otimização da
                passada para máxima transferência de força
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span> Detecção imediata
                de assimetrias causadas por fadiga
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span> Ajuste da carga de
                treinos antes da lesão acontecer
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
