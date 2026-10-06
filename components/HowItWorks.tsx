import React from "react";

const steps = [
  {
    number: "1",
    title: "Equipe-se",
    shortDescription:
      "Insira a palmilha ultrafina no seu tênis de competição padrão.",
    detailedTitle: "Coleta em Ambiente Real",
    detailedDescription:
      "Nós levamos a tecnologia de dados para o ambiente natural do seu esporte (campo, quadra ou pista). A cada passada, o sensor captura métricas fundamentais como a pressão plantar, força de impacto, simetria, variação de carga e tempo de contato com o solo.",
  },
  {
    number: "2",
    title: "Sincronize",
    shortDescription:
      "Conecte via Bluetooth com o nosso app de forma automática.",
    detailedTitle: "A Conversão Inteligente",
    detailedDescription:
      "Nossa plataforma automatizada não entrega apenas gráficos difíceis de interpretar. O sistema traduz as métricas brutas de biomecânica em insights práticos, democratizando a informação para atletas amadores e profissionais. Além disso, ao trocar de tênis, o atleta não reinicia a base de dados, mantendo seu histórico e a precisão da avaliação contínua.",
  },
  {
    number: "3",
    title: "Monitore",
    shortDescription:
      "Treine enquanto a comissão técnica analisa seus dados em tempo real.",
    detailedTitle: "Ação e Prevenção no App",
    detailedDescription:
      "O aplicativo e o dashboard geram recomendações diretas, como ajustes de cadência, melhoria na distribuição de apoio e controle do volume semanal de treinos. Se o atleta sobrecarregar uma parte do pé por fadiga muscular, o sistema alerta, em tempo real, para intervenções imediatas, como correção de postura ou redução de carga, prevenindo lesões graves.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-slate-900 text-white px-6">
      <div className="max-w-5xl mx-auto">

        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Do impacto na pista à recomendação na sua tela.
          </h2>

          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Entenda como tiramos a análise de dentro do laboratório e a
            levamos para o campo, traduzindo métricas complexas em ações
            práticas.
          </p>
        </div>

        {/* Etapas principais - mantém o que você já tinha */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-blue-900 text-blue-400 flex items-center justify-center text-2xl font-bold mb-6 border border-blue-700">
                {step.number}
              </div>

              <h3 className="text-lg font-bold mb-2">
                {step.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                {step.shortDescription}
              </p>
            </div>
          ))}
        </div>

        {/* Explicação detalhada */}
        <div className="space-y-6">
          {steps.map((step) => (
            <div
              key={step.detailedTitle}
              className="p-8 rounded-2xl bg-slate-800 border border-slate-700"
            >
              <div className="flex flex-col md:flex-row gap-6">

                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">
                    {step.detailedTitle}
                  </h3>

                  <p className="text-slate-400 leading-relaxed">
                    {step.detailedDescription}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}