import React from 'react';
import { MessageCircle, CheckCircle2, PhoneCall } from 'lucide-react';
import { siteData, createWhatsappUrl } from '../data/siteData';

interface FinalCtaProps {
  onOpenQuoteModal?: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-700 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Trust pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
          <span>Atendimento Consultivo em Cuiabá e Coxipó da Ponte</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto mb-6">
          Quer transformar os ambientes da sua casa com móveis planejados?
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Fale diretamente com a Silvana Art Móveis pelo WhatsApp, envie seu projeto ou medidas e solicite um orçamento exclusivo.
        </p>

        {/* Features checkmarks */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-300 mb-10">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Resposta Rápida no WhatsApp</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Visita Técnica para Medição</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Sem Compromisso</span>
          </div>
        </div>

        {/* Big CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href={createWhatsappUrl('Olá! Vim pelo site e gostaria de solicitar um orçamento para o meu imóvel na Silvana Art Móveis.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base sm:text-lg rounded-xl shadow-xl hover:shadow-emerald-900/50 hover:-translate-y-0.5 transition-all duration-200 animate-[pulse_3s_ease-in-out_infinite]"
          >
            <MessageCircle className="w-6 h-6 fill-white text-emerald-600 shrink-0" />
            <span>Falar no WhatsApp Agora</span>
          </a>

          {onOpenQuoteModal && (
            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base rounded-xl backdrop-blur-md border border-white/20 transition-colors cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>Simular Projeto</span>
            </button>
          )}
        </div>

        <p className="text-xs text-slate-400 mt-6">
          Horário de atendimento: Seg a Sex 08h-18h | Sáb 08h-12h · Telefone: {siteData.company.phoneFormatted}
        </p>
      </div>
    </section>
  );
};
