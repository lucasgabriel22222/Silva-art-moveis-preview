import React, { useState } from 'react';
import { MessageCircle, Check, ArrowRight, Sparkles } from 'lucide-react';
import { siteData, createWhatsappUrl, AmbientItem } from '../data/siteData';

interface AmbientsSectionProps {
  onOpenQuoteModal?: (ambientCategory?: string) => void;
}

export const AmbientsSection: React.FC<AmbientsSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todos os Ambientes' },
    { id: 'cozinhas', label: 'Cozinhas' },
    { id: 'dormitorios', label: 'Dormitórios & Closets' },
    { id: 'salas', label: 'Salas & Painéis' },
    { id: 'escritorios', label: 'Home Office' },
    { id: 'banheiros', label: 'Banheiros' },
    { id: 'projetos', label: 'Projetos 3D' }
  ];

  const filteredAmbients = selectedCategory === 'todos'
    ? siteData.ambients
    : siteData.ambients.filter((item) => item.category === selectedCategory);

  return (
    <section id="ambientes" className="py-20 sm:py-28 bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span className="text-xs font-semibold text-amber-800 uppercase tracking-wider">
              Móveis Sob Medida em Cuiabá
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight mb-4">
            Nossos Ambientes Planejados
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Soluções completas com marcenaria fina, ergonomia e design contemporâneo. 
            Cada detalhe é planejado para valorizar a arquitetura e o dia a dia da sua família.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-amber-400 shadow-md ring-2 ring-slate-900'
                    : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 shadow-2xs'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Grid de Cards (3 Colunas em Desktop, 1 em Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAmbients.map((ambient: AmbientItem) => (
            <div
              key={ambient.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-amber-400/80 hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
            >
              {/* Image Container with Badge */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
                <img
                  src={ambient.image}
                  alt={ambient.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-slate-900/85 backdrop-blur-md text-amber-400 text-xs font-semibold rounded-lg shadow-sm">
                    {ambient.tag}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 bg-white/90 backdrop-blur-md text-slate-800 text-[11px] font-medium rounded-lg shadow-sm">
                    {ambient.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-2 group-hover:text-amber-800 transition-colors">
                    {ambient.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                    {ambient.description}
                  </p>

                  {/* Bullet points of features */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                    {ambient.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href={createWhatsappUrl(ambient.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-amber-400 hover:text-amber-300 font-semibold text-xs sm:text-sm rounded-xl transition-all duration-200 shadow-2xs group/btn"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400 group-hover/btn:scale-110 transition-transform" />
                    <span>Orçar este Ambiente</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 ml-auto group-hover/btn:translate-x-1 transition-transform" />
                  </a>

                  {onOpenQuoteModal && (
                    <button
                      type="button"
                      onClick={() => onOpenQuoteModal(ambient.category)}
                      className="w-full py-1.5 text-center text-[12px] font-medium text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                    >
                      Personalizar medidas e opções
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner inside Ambients */}
        <div className="mt-14 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-7 sm:p-9 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg border border-slate-700">
          <div>
            <h4 className="text-xl sm:text-2xl font-heading font-bold text-white mb-2">
              Precisa planejar seu apartamento ou casa inteira?
            </h4>
            <p className="text-sm text-slate-300 max-w-xl">
              Fazemos o pacote completo integrado (cozinha + dormitórios + salas + banheiros) com condições diferenciadas e medição técnica presencial em Cuiabá.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href={createWhatsappUrl('Olá! Gostaria de um orçamento completo para todos os ambientes do meu imóvel na Silvana Art Móveis.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl shadow-md transition-all shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>Solicitar Orçamento Completo</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
