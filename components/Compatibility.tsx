import React from "react";

const calcados = [
  "Tênis de corrida, chuteira, academia e uso diário",
  "Numeração 34 a 46, com recorte guiado",
  "Resistente a umidade e suor",
];

const dispositivos = [
  { camada: "Smartphone", valor: "iOS 15+ e Android 10+" },
  { camada: "Conexão", valor: "Bluetooth Low Energy 5.0" },
  { camada: "Wearables", valor: "Garmin, Polar, COROS, Apple Watch" },
  { camada: "Web", valor: "Dashboard da comissão técnica" },
];

const plataformas = [
  "Strava, Garmin Connect e TrainingPeaks",
  "Apple Health e Health Connect",
  "Exportação em CSV e JSON",
  "API para clubes, federações e clínicas",
];

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start text-slate-600">
      <span
        aria-hidden
        className="mt-2 mr-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500"
      />
      {children}
    </li>
  );
}

export default function Compatibility() {
  return (
    <section id="compatibilidade" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-semibold tracking-wider text-blue-700">
            COMPATIBILIDADE
          </span>
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Funciona com o que você já usa.
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            A Solum se conecta ao celular, ao relógio e às plataformas onde
            você já registra seus treinos.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="mb-5 text-xl font-bold text-slate-900">
              Dispositivos
            </h3>
            <dl className="space-y-4">
              {dispositivos.map(({ camada, valor }) => (
                <div key={camada}>
                  <dt className="text-sm text-slate-500">{camada}</dt>
                  <dd className="text-slate-700">{valor}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="mb-5 text-xl font-bold text-slate-900">
              Plataformas de treino
            </h3>
            <ul className="space-y-3">
              {plataformas.map((item) => (
                <Bullet key={item}>{item}</Bullet>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="mb-5 text-xl font-bold text-slate-900">Calçados</h3>
            <ul className="space-y-3">
              {calcados.map((item) => (
                <Bullet key={item}>{item}</Bullet>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-8 md:p-10">
          <h3 className="mb-3 text-xl font-bold text-blue-800">
            A Solum não substitui seu relógio
          </h3>
          <p className="max-w-3xl leading-relaxed text-slate-700">
            Seu relógio mede o que acontece no pulso. A Solum mede o que
            acontece onde o esporte realmente acontece: no contato com o chão.
            Os dados se somam.
          </p>
        </div>
      </div>
    </section>
  );
}
