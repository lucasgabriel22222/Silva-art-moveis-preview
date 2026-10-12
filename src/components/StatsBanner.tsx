import React, { useEffect, useState } from 'react';
import { Star, Ruler, ShieldCheck, MessageCircle } from 'lucide-react';
import { siteData } from '../data/siteData';

export const StatsBanner: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    {
      icon: Star,
      value: siteData.company.googleRating.score,
      subvalue: '/ 5.0',
      title: 'Nota Máxima no Google',
      desc: 'Excelência avaliada com 5 estrelas por clientes em Cuiabá'
    },
    {
      icon: Ruler,
      value: '100%',
      subvalue: 'Sob Medida',
      title: 'Projetos Personalizados',
      desc: 'Otimização inteligente e milimétrica de cada ambiente'
    },
    {
      icon: ShieldCheck,
      value: 'Padrão A',
      subvalue: 'Marcenaria',
      title: 'Acabamento Fino',
      desc: 'MDF de alta durabilidade e ferragens com amortecimento'
    },
    {
      icon: MessageCircle,
      value: 'Direto',
      subvalue: 'no WhatsApp',
      title: 'Atendimento Consultivo',
      desc: 'Orçamento ágil, medição técnica e suporte no Coxipó'
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-slate-900 text-white overflow-hidden border-y border-slate-800">
      {/* Subtle Parallax Decorative Background Elements */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          transform: `translate3d(0, ${(scrollY * 0.1) % 50}px, 0)`
        }}
      >
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-700 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            Compromisso e Confiança
          </p>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
            Excelência Comprovada em Cada Projeto
          </h2>
        </div>

        {/* Grid de 4 Cards em Glassmorphism Claro/Elegante */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200 text-slate-900 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shadow-xs group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  {idx === 0 && (
                    <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/80 px-2 py-0.5 rounded-md">
                      Google Review
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-1.5 mb-1.5">
                  <span className="text-3xl font-heading font-extrabold text-slate-900 tracking-tight">
                    {item.value}
                  </span>
                  <span className="text-sm font-semibold text-amber-700">
                    {item.subvalue}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
