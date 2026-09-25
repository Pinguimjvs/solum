import React from "react";

export default function HowItWorks() {
  return (
    <section className="py-24 bg-slate-900 text-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          Alta precisão. Configuração zero.
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-blue-900 text-blue-400 flex items-center justify-center text-2xl font-bold mb-6 border border-blue-700">
              1
            </div>
            <h3 className="text-lg font-bold mb-2">Equipe-se</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Insira a palmilha ultrafina no seu tênis de competição padrão.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-blue-900 text-blue-400 flex items-center justify-center text-2xl font-bold mb-6 border border-blue-700">
              2
            </div>
            <h3 className="text-lg font-bold mb-2">Sincronize</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Conecte via Bluetooth com o nosso app de forma automática.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-blue-900 text-blue-400 flex items-center justify-center text-2xl font-bold mb-6 border border-blue-700">
              3
            </div>
            <h3 className="text-lg font-bold mb-2">Monitore</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Treine enquanto a comissão técnica analisa seus dados em tempo
              real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
