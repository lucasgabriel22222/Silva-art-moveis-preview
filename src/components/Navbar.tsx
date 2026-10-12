import React, { useState, useEffect } from 'react';
import { Layers, MessageCircle, Menu, X, Phone } from 'lucide-react';
import { siteData, createWhatsappUrl } from '../data/siteData';

interface NavbarProps {
  onOpenQuoteModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
      setScrolled(currentScroll > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Ambientes', href: '#ambientes' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'FAQ', href: '#faq' }
  ];

  return (
    <>
      {/* Scroll Progress Bar at very top */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-100 z-50">
        <div
          className="h-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Navbar */}
      <header
        className={`fixed top-1 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-md bg-white/95 border-b border-slate-200/90 shadow-xs py-3'
            : 'backdrop-blur-sm bg-white/90 border-b border-slate-200/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            {/* Brand Logo Zone */}
            <a
              href="#inicio"
              className="flex items-center gap-2.5 text-slate-900 group focus:outline-hidden focus:ring-2 focus:ring-amber-600/50 rounded-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-900 text-amber-500 flex items-center justify-center shadow-xs group-hover:bg-slate-800 transition-colors">
                <Layers className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold tracking-tight text-lg text-slate-900 leading-none uppercase">
                  Silvana Art Móveis
                </span>
                <span className="text-[11px] font-medium text-amber-700 tracking-wider uppercase mt-1">
                  Marcenaria Sob Medida
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-700 hover:text-amber-700 transition-colors relative py-1 focus:outline-hidden focus:ring-2 focus:ring-amber-600/50 rounded-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Zone */}
            <div className="hidden sm:flex items-center gap-3">
              {onOpenQuoteModal && (
                <button
                  type="button"
                  onClick={onOpenQuoteModal}
                  className="px-3.5 py-2 text-xs font-semibold text-slate-800 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200/80 cursor-pointer"
                >
                  Simular Projeto
                </button>
              )}
              <a
                href={createWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-amber-400 hover:text-amber-300 text-xs sm:text-sm font-semibold rounded-lg shadow-xs hover:shadow-md transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Solicitar Orçamento</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${siteData.company.phoneRaw}`}
                className="p-2 text-slate-700 hover:text-amber-700 sm:hidden"
                aria-label="Ligar para a Silvana Art Móveis"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors focus:outline-hidden focus:ring-2 focus:ring-amber-600/50"
                aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-md px-4 pt-3 pb-6 shadow-xl transition-all">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-base font-medium text-slate-800 hover:text-amber-700 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              {onOpenQuoteModal && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuoteModal();
                  }}
                  className="w-full text-center py-2.5 px-4 text-sm font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
                >
                  Simular Projeto Online
                </button>
              )}
              <a
                href={createWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-slate-900 text-amber-400 font-semibold text-sm rounded-lg shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Solicitar Orçamento no WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
