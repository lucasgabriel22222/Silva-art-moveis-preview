import React from 'react';
import { Layers, MapPin, Phone, Instagram, Star, Clock } from 'lucide-react';
import { siteData, createWhatsappUrl } from '../data/siteData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-base text-white uppercase tracking-tight">
                  Silvana Art Móveis
                </span>
                <span className="text-[10px] font-semibold text-amber-400 tracking-wider uppercase">
                  Móveis Planejados
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Fabricação e montagem de móveis sob medida, cozinhas, closets, dormitórios, salas e escritórios com alto padrão de acabamento no Coxipó da Ponte, Cuiabá - MT.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-semibold text-white">5.0 no Google</span>
            </div>
          </div>

          {/* Col 2: Ambientes */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Ambientes Planejados
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#ambientes" className="hover:text-amber-400 transition-colors">
                  Cozinhas Planejadas & Ilhas Gourmet
                </a>
              </li>
              <li>
                <a href="#ambientes" className="hover:text-amber-400 transition-colors">
                  Dormitórios & Closets Sob Medida
                </a>
              </li>
              <li>
                <a href="#ambientes" className="hover:text-amber-400 transition-colors">
                  Painéis Ripados para TV & Salas
                </a>
              </li>
              <li>
                <a href="#ambientes" className="hover:text-amber-400 transition-colors">
                  Home Office & Móveis Corporativos
                </a>
              </li>
              <li>
                <a href="#ambientes" className="hover:text-amber-400 transition-colors">
                  Gabinetes & Banheiros Planejados
                </a>
              </li>
              <li>
                <a href="#ambientes" className="hover:text-amber-400 transition-colors">
                  Projetos 3D & Instalação Completa
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navegação Rápida */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#inicio" className="hover:text-amber-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#ambientes" className="hover:text-amber-400 transition-colors">
                  Nossos Ambientes
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-amber-400 transition-colors">
                  Diferenciais Construtivos
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-amber-400 transition-colors">
                  Avaliações de Clientes
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-amber-400 transition-colors">
                  Localização & Contato
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contato & Endereço */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Localização & Contato
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  {siteData.company.address.full}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a
                  href={`tel:${siteData.company.phoneRaw}`}
                  className="hover:text-white font-medium transition-colors"
                >
                  {siteData.company.phoneFormatted}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p>Seg - Sex: 08:00 às 18:00</p>
                  <p>Sábado: 08:00 às 12:00</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={createWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300"
                >
                  <span>Chamar no WhatsApp direto</span> &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-footer bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} {siteData.company.name}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span>Cuiabá - Mato Grosso, Brasil</span>
            <span>·</span>
            <span className="text-slate-400">Móveis Sob Medida & Marcenaria Fina</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
