/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBanner } from './components/StatsBanner';
import { AmbientsSection } from './components/AmbientsSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { FloatingWhatsapp } from './components/FloatingWhatsapp';
import { QuoteSimulatorModal } from './components/QuoteSimulatorModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [initialCategory, setInitialCategory] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (category?: string) => {
    setInitialCategory(category);
    setModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setModalOpen(false);
    setInitialCategory(undefined);
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-slate-900 flex flex-col font-sans selection:bg-amber-600 selection:text-white">
      {/* 1. Navbar (Header Fixo com Barra de Progresso) */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero (Seção Principal com Parallax Real) */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 3. Seção de Estatísticas e Destaques (Banner Parallax) */}
        <StatsBanner />

        {/* 4. Seção Ambientes & Produtos (Filtros e Cards) */}
        <AmbientsSection onOpenQuoteModal={(category) => handleOpenQuoteModal(category)} />

        {/* 5. Seção Diferenciais */}
        <DifferentialsSection />

        {/* 6. Seção de Prova Social (Avaliações do Google) */}
        <ReviewsSection />

        {/* 7. Seção de Localização & Horários */}
        <LocationSection />

        {/* 8. Seção FAQ (Perguntas Frequentes Accordion) */}
        <FaqSection />

        {/* 9. CTA Final */}
        <FinalCta onOpenQuoteModal={() => handleOpenQuoteModal()} />
      </main>

      {/* 10. Footer (Rodapé Premium) */}
      <Footer />

      {/* 11. Botão Flutuante do WhatsApp */}
      <FloatingWhatsapp />

      {/* Modal Interativo de Simulação de Orçamento */}
      <QuoteSimulatorModal
        isOpen={modalOpen}
        onClose={handleCloseQuoteModal}
        initialCategory={initialCategory}
      />
    </div>
  );
}
