import React, { useState, useEffect } from 'react';
import { MessageCircle, ChevronDown, CheckCircle2, MapPin } from 'lucide-react';
import { siteData, createWhatsappUrl } from '../data/siteData';

interface HeroProps {
  onOpenQuoteModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Parallax rate of 0.35 for subtle, premium visual depth
      setOffsetY(window.scrollY * 0.35);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      {/* Real Parallax Background Image Container */}
      <div
        className="absolute inset-0 -top-24 -bottom-24 w-full h-[125%] pointer-events-none will-change-transform z-0"
        style={{
          transform: `translate3d(0, ${offsetY}px, 0)`,
          transition: 'transform 0.05s cubic-bezier(0,0,0.2,1)'
        }}
      >
        <img
          src={siteData.images.heroKitchen}
          alt="Cozinha planejada moderna de alto padrão em madeira e grafite com ilha gourmet da Silvana Art Móveis"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Dual Soft Overlay: deep contrast gradient + subtle warm tint for pristine typography legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/80 to-slate-900/65" />
        <div className="absolute inset-0 bg-radial-[at_top_right] from-amber-950/20 via-transparent to-black/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
        <div className="max-w-3xl">
          {/* Badge superior */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/30 backdrop-blur-md mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-amber-300">
              Móveis Planejados de Alto Padrão em Cuiabá - MT
            </span>
          </div>

          {/* Headline H1 grande e de alto impacto */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Móveis Planejados Sob Medida, Cozinhas e Ambientes Exclusivos
          </h1>

          {/* Subtítulo objetivo */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed font-normal mb-8 max-w-2xl">
            Projetos 100% personalizados, marcenaria fina de alta durabilidade e acabamento impecável. 
            Atendimento consultivo especializado no Coxipó da Ponte para residências e empresas em toda a Grande Cuiabá.
          </p>

          {/* Destaques rápidos de credibilidade */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-300 mb-9">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Nota Máxima 5.0 no Google</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Projeto 3D e Instalação Inclusa</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Coxipó da Ponte, Cuiabá - MT</span>
            </div>
          </div>

          {/* Botões de Ação (CTAs) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={createWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base rounded-xl shadow-lg hover:shadow-emerald-900/40 hover:-translate-y-0.5 transition-all duration-200 focus:outline-hidden focus:ring-4 focus:ring-emerald-500/30 group"
            >
              <MessageCircle className="w-5 h-5 fill-white text-emerald-600 group-hover:scale-110 transition-transform" />
              <span>Solicitar Orçamento no WhatsApp</span>
            </a>

            <a
              href="#ambientes"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-medium text-base rounded-xl backdrop-blur-md border border-white/20 transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-white/40"
            >
              Ver Ambientes Planejados
            </a>

            {onOpenQuoteModal && (
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="hidden md:inline-flex items-center justify-center gap-2 px-5 py-4 text-amber-300 hover:text-white hover:bg-slate-900/60 rounded-xl transition-colors text-sm font-medium border border-amber-500/20"
              >
                Simular Projeto Online
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Indicador de scroll animado no rodapé */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none text-slate-300">
        <span className="text-[11px] font-medium tracking-widest uppercase mb-1 opacity-80">
          Role para explorar
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce text-amber-400" />
      </div>
    </section>
  );
};
