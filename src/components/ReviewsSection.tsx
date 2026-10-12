import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';
import { siteData } from '../data/siteData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-20 sm:py-28 bg-[#F8F9FA] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs font-semibold mb-3">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold ml-1">5.0 / 5.0</span>
            <span className="text-slate-600 font-normal">no Google Avaliações</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A opinião de quem já confiou o projeto e a marcenaria de sua casa à Silvana Art Móveis Planejados em Cuiabá.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {siteData.reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <div>
                {/* Header card with Stars and Verified Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200/60">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    <span>{review.date}</span>
                  </div>
                </div>

                {/* Quote Text */}
                <div className="relative mb-6">
                  <Quote className="w-7 h-7 text-amber-200 absolute -top-2 -left-2 -z-0 opacity-40" />
                  <p className="relative z-10 text-slate-700 text-base leading-relaxed italic">
                    "{review.text}"
                  </p>
                </div>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {review.name}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {review.location}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center font-bold text-xs">
                  {review.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Trust Banner */}
        <div className="max-w-2xl mx-auto bg-white rounded-xl p-5 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">
                100% de satisfação nas avaliações do Google
              </p>
              <p className="text-xs text-slate-500">
                Móveis planejados sob medida com seriedade em Cuiabá e Coxipó da Ponte
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold text-amber-800 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200 shrink-0">
            Nota 5.0 Estrelas
          </span>
        </div>
      </div>
    </section>
  );
};
