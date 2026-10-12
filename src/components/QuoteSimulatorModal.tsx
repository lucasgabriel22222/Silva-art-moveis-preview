import React, { useState } from 'react';
import { X, MessageCircle, Check, Send, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';

interface QuoteSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export const QuoteSimulatorModal: React.FC<QuoteSimulatorModalProps> = ({
  isOpen,
  onClose,
  initialCategory
}) => {
  const [selectedRooms, setSelectedRooms] = useState<string[]>(() => {
    if (initialCategory === 'cozinhas') return ['Cozinha Planejada'];
    if (initialCategory === 'dormitorios') return ['Dormitório / Closet'];
    if (initialCategory === 'salas') return ['Painel de TV / Sala'];
    if (initialCategory === 'escritorios') return ['Home Office'];
    if (initialCategory === 'banheiros') return ['Banheiro / Lavatório'];
    return ['Cozinha Planejada'];
  });

  const [propertyType, setPropertyType] = useState('Apartamento');
  const [bairro, setBairro] = useState('Coxipó da Ponte / Cuiabá');
  const [statusObra, setStatusObra] = useState('Imóvel Pronto para Medição');
  const [observacoes, setObservacoes] = useState('');

  if (!isOpen) return null;

  const roomOptions = [
    'Cozinha Planejada',
    'Ilha Gourmet / Bancada',
    'Dormitório / Closet',
    'Painel de TV / Sala',
    'Banheiro / Lavatório',
    'Home Office / Escritório',
    'Área de Serviço / Lavanderia'
  ];

  const toggleRoom = (room: string) => {
    if (selectedRooms.includes(room)) {
      if (selectedRooms.length > 1) {
        setSelectedRooms(selectedRooms.filter((r) => r !== room));
      }
    } else {
      setSelectedRooms([...selectedRooms, room]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = [
      `*Olá, Silvana Art Móveis!*`,
      `Gostaria de solicitar um orçamento personalizado:`,
      ``,
      `*Ambientes desejados:* ${selectedRooms.join(', ')}`,
      `*Tipo de Imóvel:* ${propertyType}`,
      `*Localização/Bairro:* ${bairro || 'Cuiabá - MT'}`,
      `*Fase da Obra:* ${statusObra}`,
      observacoes ? `*Detalhes adicionais:* ${observacoes}` : '',
      ``,
      `Aguardo o retorno para conversarmos sobre o projeto!`
    ]
      .filter((line) => line !== '')
      .join('\n');

    const url = `https://wa.me/${siteData.company.phoneRaw}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Fechar formulário"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wide">
              Simulador Rápido de Projeto
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900">
            Personalize seu Orçamento
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Selecione seus ambientes e envie diretamente para o WhatsApp da Silvana Art Móveis.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Room Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Quais ambientes você deseja planejar?
            </label>
            <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto p-1 border border-slate-200 rounded-xl bg-slate-50/50">
              {roomOptions.map((room) => {
                const isSelected = selectedRooms.includes(room);
                return (
                  <button
                    key={room}
                    type="button"
                    onClick={() => toggleRoom(room)}
                    className={`flex items-center gap-2 p-2 rounded-lg text-xs font-semibold text-left transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-slate-900 text-amber-300 shadow-2xs'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/60'
                    }`}
                  >
                    <div
                      className={`w-3.5 h-3.5 rounded flex items-center justify-center shrink-0 border ${
                        isSelected ? 'bg-amber-400 border-amber-400 text-slate-950' : 'border-slate-300'
                      }`}
                    >
                      {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                    </div>
                    <span className="truncate">{room}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Property Type and Phase */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Tipo de Imóvel
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full text-xs font-medium bg-white border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
              >
                <option value="Apartamento">Apartamento</option>
                <option value="Casa Residencial">Casa Residencial</option>
                <option value="Condomínio Fechado">Condomínio Fechado</option>
                <option value="Comercial / Escritório">Comercial / Escritório</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Fase do Imóvel
              </label>
              <select
                value={statusObra}
                onChange={(e) => setStatusObra(e.target.value)}
                className="w-full text-xs font-medium bg-white border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
              >
                <option value="Pronto para Medição">Pronto para Medição</option>
                <option value="Em Reforma / Obra">Em Reforma / Obra</option>
                <option value="Na Planta / Futuro">Na Planta / Futuro</option>
                <option value="Apenas Pesquisa de Preço">Apenas Pesquisando</option>
              </select>
            </div>
          </div>

          {/* Bairro / Localização */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Bairro ou Região em Cuiabá
            </label>
            <input
              type="text"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
              placeholder="Ex: Coxipó da Ponte, CPA, Jardim das Américas..."
              className="w-full text-xs font-medium bg-white border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Observações Opcionais */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Observações (opcional)
            </label>
            <textarea
              rows={2}
              value={observacoes}
              onChange={(e) => setObservacoes(e.target.value)}
              placeholder="Ex: Já tenho a planta; prefiro acabamento ripado com iluminação LED..."
              className="w-full text-xs font-medium bg-white border border-slate-200 rounded-lg p-2 text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-amber-500 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer"
            >
              <Send className="w-4 h-4 fill-white text-emerald-600" />
              <span>Enviar Projeto Formatado no WhatsApp</span>
            </button>
            <p className="text-[11px] text-center text-slate-400 mt-2">
              Seus dados serão abertos diretamente no seu aplicativo do WhatsApp.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
