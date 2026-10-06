"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Cadastro realizado com sucesso! Entraremos em contato.");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section
      id="lista-espera"
      className="w-full py-24 bg-slate-50 flex justify-center items-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-slate-100"
      >
        <div className="md:w-5/12 bg-slate-900 p-10 flex flex-col justify-center text-white">
          <h2 className="text-3xl font-bold mb-4">Saia na frente.</h2>
          <p className="text-slate-300 mb-8 leading-relaxed">
            Estamos em fase de testes com atletas selecionados. Cadastre-se na
            lista de espera para ser um dos primeiros a revolucionar sua
            biomecânica.
          </p>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>{" "}
              Vagas limitadas no 1º lote
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>{" "}
              Suporte especializado da equipe
            </li>
          </ul>
        </div>

        <div className="md:w-7/12 p-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Nome completo
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                E-mail de contato
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                placeholder="atleta@email.com"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Perfil
                </label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                >
                  <option value="">Selecione...</option>
                  <option value="atleta_pro">Atleta Profissional</option>
                  <option value="atleta_amador">Atleta Amador</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Modalidade
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="Ex: Corrida"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors disabled:opacity-70"
            >
              {isSubmitting
                ? "Processando..."
                : "Entrar para a Lista de Espera"}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
