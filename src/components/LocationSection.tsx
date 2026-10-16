import React, { useMemo } from 'react';
import { MapPin, Phone, Clock, ExternalLink, MessageCircle } from 'lucide-react';
import { siteData, createWhatsappUrl } from '../data/siteData';

export const LocationSection: React.FC = () => {
  // Check if currently open based on business hours (Cuiabá time UTC-4)
  const businessStatus = useMemo(() => {
    try {
      const now = new Date();
      // Get Cuiabá time (America/Cuiaba timezone)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Cuiaba',
        hour12: false,
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric'
      };
      const formatter = new Intl.DateTimeFormat('pt-BR', options);
      const parts = formatter.formatToParts(now);
      
      const weekday = parts.find((p) => p.type === 'weekday')?.value?.toLowerCase() || '';
      const hour = parseInt(parts.find((p) => p.type === 'hour')?.value || '0', 10);

      // Mon-Fri: 8:00 to 18:00
      // Sat: 8:00 to 12:00
      // Sun: closed
      const isSunday = weekday.includes('dom');
      const isSaturday = weekday.includes('sáb') || weekday.includes('sab');

      if (isSunday) {
        return { isOpen: false, text: 'Fechado hoje (Domingo)' };
      }
      if (isSaturday) {
        if (hour >= 8 && hour < 12) {
          return { isOpen: true, text: 'Aberto agora até às 12:00' };
        }
        return { isOpen: false, text: 'Fechado (Abre Segunda às 08:00)' };
      }
      // Weekdays
      if (hour >= 8 && hour < 18) {
        return { isOpen: true, text: 'Aberto agora até às 18:00' };
      }
      return { isOpen: false, text: 'Fechado no momento (Abre às 08:00)' };
    } catch {
      return { isOpen: true, text: 'Horário comercial: 08:00 às 18:00' };
    }
  }, []);

  return (
    <section id="localizacao" className="py-20 sm:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-3">
            <MapPin className="w-3.5 h-3.5 text-amber-700" />
            <span className="text-xs font-semibold text-slate-800 uppercase tracking-wider">
              Coxipó da Ponte · Cuiabá - MT
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight mb-4">
            Nossa Localização em Cuiabá
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Atendimento presencial e visita técnica para medição em toda a região de Cuiabá e Várzea Grande.
          </p>
        </div>

        {/* 2-Column Desktop Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Coluna 1: Dados Práticos */}
          <div className="lg:col-span-5 bg-[#FAFAFA] rounded-2xl p-7 sm:p-9 border border-slate-200 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Status Aberto/Fechado */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 border border-slate-200">
                <span
                  className={`w-2 h-2 rounded-full ${
                    businessStatus.isOpen ? 'bg-emerald-500' : 'bg-slate-400'
                  }`}
                />
                <span className={businessStatus.isOpen ? 'text-emerald-800' : 'text-slate-600'}>
                  {businessStatus.text}
                </span>
              </div>

              {/* Endereço */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shrink-0 shadow-2xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-slate-500 tracking-wider mb-1">
                    Endereço Completo
                  </h4>
                  <p className="text-sm font-semibold text-slate-900 leading-snug">
                    {siteData.company.address.street}
                  </p>
                  <p className="text-sm text-slate-600">
                    {siteData.company.address.neighborhood}, {siteData.company.address.city} - {siteData.company.address.state}
                  </p>
                  <p className="text-xs text-amber-800 font-medium mt-1">
                    Atendimento em toda a capital e municípios vizinhos
                  </p>
                </div>
              </div>

              {/* Telefone / WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shrink-0 shadow-2xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-slate-500 tracking-wider mb-1">
                    Telefone & WhatsApp
                  </h4>
                  <a
                    href={`tel:${siteData.company.phoneRaw}`}
                    className="text-base font-bold text-slate-900 hover:text-amber-800 transition-colors block"
                  >
                    {siteData.company.phoneFormatted}
                  </a>
                  <p className="text-xs text-slate-500">
                    Atendimento rápido para orçamentos e agendamento de medição
                  </p>
                </div>
              </div>

              {/* Horário de Funcionamento */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shrink-0 shadow-2xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <h4 className="text-xs uppercase font-bold text-slate-500 tracking-wider mb-1.5">
                    Horário de Funcionamento
                  </h4>
                  <div className="space-y-1.5 text-xs">
                    {siteData.company.hours.map((h, i) => (
                      <div key={i} className="flex items-center justify-between py-0.5 border-b border-slate-200/60 last:border-0">
                        <span className="text-slate-600">{h.days}:</span>
                        <span className="font-semibold text-slate-900">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Ações */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
              <a
                href={siteData.company.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors shadow-2xs"
              >
                <span>Como Chegar no Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              </a>
              <a
                href={createWhatsappUrl('Olá! Gostaria de agendar uma visita técnica ou medição no meu imóvel em Cuiabá.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors shadow-2xs"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>Agendar Medição</span>
              </a>
            </div>
          </div>

          {/* Coluna 2: Mapa Interativo Google Maps */}
          <div className="lg:col-span-7 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-xs relative min-h-[380px] lg:min-h-full flex flex-col">
            <iframe
              title="Localização Silvana Art Móveis Planejados - Coxipó da Ponte, Cuiabá"
              src={siteData.company.address.embedMapUrl}
              className="w-full h-full min-h-[380px] lg:min-h-[460px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="p-4 bg-white/95 backdrop-blur-md border-t border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-2">
              <span className="font-medium text-slate-800">
                {siteData.company.address.full}
              </span>
              <a
                href={siteData.company.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-800 hover:text-amber-900 font-semibold inline-flex items-center gap-1"
              >
                Abrir aplicativo do mapa <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
