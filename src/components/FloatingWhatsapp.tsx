import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { siteData } from '../data/siteData';

export const FloatingWhatsapp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [notificationDismissed, setNotificationDismissed] = useState(false);

  const whatsappHref = `https://wa.me/${siteData.company.phoneRaw}?text=${encodeURIComponent(
    'Olá! Vim pelo site e gostaria de solicitar um orçamento de móveis planejados na Silvana Art Móveis.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 pointer-events-auto">
      {/* Speech Balloon / Notification Prompt */}
      {!notificationDismissed && (
        <div className="hidden sm:flex items-center gap-2.5 bg-white text-slate-900 px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200/80 mb-1 max-w-xs animate-fadeIn">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <div className="text-xs">
            <p className="font-bold text-slate-900 leading-tight">Orçamento Rápido</p>
            <p className="text-slate-500 leading-tight">Fale direto com a marcenaria</p>
          </div>
          <button
            type="button"
            onClick={() => setNotificationDismissed(true)}
            className="text-slate-400 hover:text-slate-600 p-1 -mr-1"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <div className="relative group">
        {/* Hover Tooltip */}
        <div
          role="tooltip"
          className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden group-hover:block whitespace-nowrap bg-slate-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg pointer-events-none transition-opacity"
        >
          Tire suas dúvidas no WhatsApp!
          {/* Arrow */}
          <div className="absolute left-full top-1/2 -translate-y-1/2 -ml-1 border-4 border-transparent border-l-slate-900" />
        </div>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir conversa no WhatsApp com Silvana Art Móveis"
          className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl hover:shadow-emerald-900/50 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-hidden focus:ring-4 focus:ring-emerald-400/50"
        >
          {/* Subtle pulse rings */}
          <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-emerald-600" />
        </a>
      </div>
    </div>
  );
};
