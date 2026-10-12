import React from 'react';
import { ShieldCheck, Home, Layers, Clock, MapPin, MessageCircle, Wrench, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';

export const DifferentialsSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    ShieldCheck,
    Home,
    Layers,
    Clock,
    MapPin,
    MessageCircle
  };

  return (
    <section id="diferenciais" className="py-20 sm:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-3">
            <Wrench className="w-3.5 h-3.5 text-amber-700" />
            <span className="text-xs font-semibold text-slate-800 uppercase tracking-wider">
              Qualidade e Rigor Construtivo
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight mb-4">
            Por Que Escolher a Silvana Art Móveis
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Diferenciais objetivos baseados em precisão de fabricação, matéria-prima certificada e atendimento direto sem intermediários.
          </p>
        </div>

        {/* Grid de Diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.differentials.map((item, index) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={index}
                className="p-7 sm:p-8 rounded-2xl bg-[#FAFAFA] border border-slate-200 hover:border-amber-400 hover:bg-white hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors shadow-2xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-slate-900 mb-3 group-hover:text-amber-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs font-semibold text-amber-700">
                  <span>Padrão Silvana Art Móveis</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
