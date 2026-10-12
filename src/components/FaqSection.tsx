import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { siteData, createWhatsappUrl } from '../data/siteData';

export const FaqSection: React.FC = () => {
  // First item open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FBFBFA] border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
            <span className="text-xs font-semibold text-slate-800 uppercase tracking-wider">
              Tire Suas Dúvidas
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Respostas diretas e transparentes sobre prazos, projetos, medição e pagamentos.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {siteData.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-slate-200/90 shadow-2xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-4.5 px-6 flex items-center justify-between text-left gap-4 hover:bg-slate-50/70 transition-colors focus:outline-hidden focus:ring-2 focus:ring-amber-500/40"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-slate-900 text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-amber-100 text-amber-800' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact direct note */}
        <div className="mt-10 p-6 bg-amber-50/60 rounded-2xl border border-amber-200/70 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-900">
              Ficou alguma dúvida específica sobre o seu espaço?
            </h4>
            <p className="text-xs text-slate-600">
              Converse direto com a equipe de marcenaria da Silvana Art Móveis no WhatsApp.
            </p>
          </div>
          <a
            href={createWhatsappUrl('Olá! Tenho uma dúvida sobre móveis planejados para o meu imóvel.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-amber-400 font-semibold text-xs sm:text-sm rounded-xl transition-colors shrink-0 shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
