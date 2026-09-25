import React from "react";

export default function ValuePillars() {
  const pillars = [
    {
      title: "Detalhes + Performance",
      desc: "Mapas de calor da pressão plantar e tempo de contato com o solo transmitidos em tempo real para o tablet da comissão técnica.",
      icon: "⚡",
    },
    {
      title: "Saúde e Prevenção",
      desc: "Identifique padrões de desgaste e assimetrias na marcha antes que eles se transformem em lesões severas e afastamentos.",
      icon: "🛡️",
    },
    {
      title: "Atendimento Humanizado",
      desc: "Suporte especializado para ajudar você e seu fisioterapeuta a interpretar os dados e ajustar a carga de treinamentos.",
      icon: "🤝",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 px-6 border-y border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
            >
              <div className="text-4xl mb-4">{pillar.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {pillar.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
