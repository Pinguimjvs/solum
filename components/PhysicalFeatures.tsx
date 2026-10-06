import React from "react";

const features = [
  {
    title: "Design Ultra-fino",
    description:
      "Nossa palmilha inteligente (IoT) foi projetada com uma espessura mínima para ser imperceptível, garantindo o máximo conforto sem alterar a sua biomecânica natural.",
  },
  {
    title: "Sensores de Alta Precisão",
    description:
      "O produto é equipado fisicamente com uma matriz avançada de sensores de pressão e acelerômetros, captando os detalhes mais sensíveis do seu movimento.",
  },
  {
    title: "Formato Universal e Removível",
    description:
      "Diferente dos sensores embutidos diretamente em um único tênis, nossa tecnologia oferece independência em relação ao calçado. Você pode transferir a palmilha facilmente entre tênis de corrida, chuteiras, calçados de academia ou sapatos de uso diário.",
  },
  {
    title: "Economia Inteligente",
    description:
      "O investimento no sensor não se perde a cada troca de calçado. A mesma palmilha é amortizada ao longo do uso de vários pares de tênis.",
  },
];

export default function PhysicalFeatures() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Invisível no seu pé, implacável nos seus dados.
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Um design inteligente que acompanha você em qualquer esporte,
            sem limitar seus movimentos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Vídeo */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-slate-900 shadow-xl">
              <video
                className="w-full aspect-video object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls
              >
                <source src="/video_palmilha_3D.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>

            <div className="mt-6 text-center">
              <a
                href="https://empreendedorismo-snowy.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors"
              >
                Explorar modelo 3D
                <span className="ml-2">↗</span>
              </a>
            </div>
          </div>

          {/* Características */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}