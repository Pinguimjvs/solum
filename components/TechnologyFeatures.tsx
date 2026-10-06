import React from "react";

const features = [
  {
    number: "01",
    title: "Conexão 100% Wireless",
    description:
      "O hardware embarcado capta os dados da sua pisada e os transmite instantaneamente via Bluetooth para o seu celular.",
  },
  {
    number: "02",
    title: "Integração Completa",
    description:
      "A base de dados alimenta um aplicativo mobile feito para o atleta e um dashboard web gerencial projetado para análises profundas da comissão técnica.",
  },
  {
    number: "03",
    title: "Mapas de Calor em Tempo Real",
    description:
      "A plataforma gera mapas de calor dinâmicos da sola do seu pé, permitindo visualizar exatamente como o peso e o impacto estão sendo distribuídos durante a atividade.",
  },
  {
    number: "04",
    title: "Comparador de Calçados",
    description:
      "O aplicativo mensura objetivamente como cada modelo de calçado altera a distribuição de pressão e a força de impacto no seu corpo, ajudando você a escolher o melhor equipamento.",
  },
];

export default function TechnologyFeatures() {
  return (
    <section className="py-24 bg-slate-900 text-white px-6">
      <div className="max-w-6xl mx-auto">

        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O ecossistema de alta performance do seu esporte.
          </h2>

          <p className="text-lg text-slate-400 leading-relaxed">
            Mais do que uma palmilha, uma plataforma completa que conecta
            seus dados diretamente ao seu celular e à sua comissão técnica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:border-blue-500 transition-colors"
            >
              <span className="text-sm font-bold text-blue-400">
                {feature.number}
              </span>

              <h3 className="text-xl font-bold mt-4 mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}