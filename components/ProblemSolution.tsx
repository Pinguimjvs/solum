import React from "react";

export default function ProblemSolution() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            A biomecânica não acontece na esteira.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Testes de laboratório não refletem a intensidade de uma partida
            oficial. Nós tiramos a tecnologia da clínica e levamos para o campo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="p-8 bg-red-50 rounded-2xl border border-red-100">
            <h3 className="text-xl font-bold text-red-700 mb-3">
              O Modelo Antigo
            </h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✕</span> Análise estática em
                esteiras
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✕</span> Dados que não
                refletem o terreno de jogo
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✕</span> Descoberta tardia
                de fadiga muscular
              </li>
            </ul>
          </div>

          <div className="p-8 bg-blue-50 rounded-2xl border border-blue-100 shadow-lg relative transform md:-translate-y-4">
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              NOSSA SOLUÇÃO
            </div>
            <h3 className="text-xl font-bold text-blue-800 mb-3">
              O Monitoramento Inteligente
            </h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span> Captação de dados
                durante treinos e jogos
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span> Mapeamento
                dinâmico da pisada real
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span> Prevenção imediata
                de lesões por impacto
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
