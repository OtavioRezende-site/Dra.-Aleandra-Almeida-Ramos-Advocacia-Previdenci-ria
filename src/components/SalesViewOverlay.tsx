import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, DollarSign, ShieldCheck, Sparkles, MessageSquare, Phone, Server, Cpu, ExternalLink } from 'lucide-react';
import { CLIENT_DATA } from '../data/clientData';

interface SalesViewOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SalesViewOverlay: React.FC<SalesViewOverlayProps> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleContractClick = (modelName: string, price: string, setupPrice: string, monthlyPrice: string) => {
    const text = `Ol%C3%A1!%20Gostaria%20de%20solicitar%20os%20links%20de%20pagamento%20e%20contrata%C3%A7%C3%A3o%20para%20o%20projeto%20da%20*Dra.%20Aleandra%20Almeida%20Ramos*:%0A%0A*Modelo%20Escolhido:*%20${encodeURIComponent(modelName)}%0A*Investimento:*%20${encodeURIComponent(price)}%0A- Ades%C3%A3o/Dev:%20${encodeURIComponent(setupPrice)}%0A- Hospedagem/Suporte:%20${encodeURIComponent(monthlyPrice)}/m%C3%AAs%0A%0AEm%20quanto%20tempo%20podemos%20iniciar%20a%20publica%C3%A7%C3%A3o?`;
    window.open(`https://wa.me/${CLIENT_DATA.developerWhatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1F242D]/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 lg:p-8">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl rounded-3xl cream-card border border-[#D49B28]/50 p-6 sm:p-10 shadow-2xl space-y-8 my-8 text-[#1F242D]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-[#FAF0D9] border border-[#D49B28]/40 text-[#996B12] hover:bg-[#F5E5C4] transition-all z-10"
            aria-label="Fechar Proposta"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0D9] border border-[#D49B28]/40 text-[#996B12] text-xs font-bold uppercase tracking-wider">
              <DollarSign className="w-4 h-4 text-[#D49B28]" />
              <span>Painel Comercial Transparente</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold font-serif-gold text-[#1F242D]">
              Proposta Comercial & <span className="gold-text-gradient-dark">Modelos de Investimento</span>
            </h2>

            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              Compare as duas soluções desenvolvidas sob medida para a <strong className="text-[#996B12]">Dra. Aleandra Almeida Ramos</strong> e solicite os links de ativação com o desenvolvedor.
            </p>
          </div>

          {/* 2 Investment Tier Models Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            
            {/* MODEL 1: SITE INSTITUCIONAL COMPLETO */}
            <div className="relative rounded-2xl cream-card border-2 border-[#D49B28] p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl">
              <div className="absolute -top-3.5 left-6 px-3.5 py-1 rounded-full gold-btn-gradient text-[#1F242D] text-[11px] font-extrabold uppercase tracking-wider flex items-center gap-1 shadow-md">
                <Sparkles className="w-3.5 h-3.5 fill-current" />
                <span>Recomendado para Autoridade</span>
              </div>

              <div className="space-y-4 pt-2">
                <div>
                  <h3 className="font-serif-gold text-xl sm:text-2xl font-bold text-[#1F242D]">
                    Site Institucional Completo
                  </h3>
                  <p className="text-xs text-[#996B12] font-bold">
                    Estrutura Multi-Páginas (Navegação em Abas Dedicadas)
                  </p>
                </div>

                {/* Total Price Display */}
                <div className="p-4 rounded-xl bg-[#FAF0D9] border border-[#D49B28]/40 text-left space-y-2">
                  <span className="block text-xs uppercase text-slate-700 font-bold">Investimento Total Proposto:</span>
                  <div className="text-3xl sm:text-4xl font-black gold-text-gradient-dark">
                    R$ 1.997,00
                  </div>
                  
                  <div className="pt-2 border-t border-[#EADBCC] space-y-1.5 text-xs text-slate-800">
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-1 font-semibold">
                        <Cpu className="w-3.5 h-3.5 text-[#D49B28]" />
                        Desenvolvimento & Adesão:
                      </span>
                      <strong className="text-[#996B12] font-bold">R$ 1.800,00 (único)</strong>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-1 font-semibold">
                        <Server className="w-3.5 h-3.5 text-[#D49B28]" />
                        Hospedagem & Manutenção:
                      </span>
                      <strong className="text-[#996B12] font-bold">R$ 197,00 / mês</strong>
                    </div>
                  </div>
                </div>

                {/* Model Benefits */}
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#D49B28] shrink-0 mt-0.5" />
                    <span>Navegação independente em abas (Início, Sobre, Serviços, Cursos, Localização, Contato).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#D49B28] shrink-0 mt-0.5" />
                    <span>SEO otimizado individualmente para cada modalidade de benefício e curso.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#D49B28] shrink-0 mt-0.5" />
                    <span>Painel completo de Simulador BPC/LOAS integrado ao WhatsApp.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#D49B28] shrink-0 mt-0.5" />
                    <span>Suporte técnico contínuo, backup semanal e SSL de alta segurança.</span>
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleContractClick('Site Institucional Completo', 'R$ 1.997,00', 'R$ 1.800,00', 'R$ 197,00')}
                className="animate-shimmer w-full py-4 rounded-xl gold-btn-gradient text-[#1F242D] font-extrabold text-sm flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Contratar Site Institucional (R$ 1.997)</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            {/* MODEL 2: LANDING PAGE ÚNICA DE CONVERSÃO */}
            <div className="relative rounded-2xl cream-card border border-[#D49B28]/40 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-md">
              <div className="space-y-4">
                <div>
                  <h3 className="font-serif-gold text-xl sm:text-2xl font-bold text-[#1F242D]">
                    Landing Page Única
                  </h3>
                  <p className="text-xs text-[#996B12] font-bold">
                    Página Única Contínua (Foco em Tráfego Pago & Alta Conversão)
                  </p>
                </div>

                {/* Total Price Display */}
                <div className="p-4 rounded-xl bg-[#FAF0D9] border border-[#D49B28]/30 text-left space-y-2">
                  <span className="block text-xs uppercase text-slate-700 font-bold">Investimento Total Proposto:</span>
                  <div className="text-3xl sm:text-4xl font-black text-[#1F242D]">
                    R$ 1.497,00
                  </div>
                  
                  <div className="pt-2 border-t border-[#EADBCC] space-y-1.5 text-xs text-slate-800">
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-1 font-semibold">
                        <Cpu className="w-3.5 h-3.5 text-[#D49B28]" />
                        Desenvolvimento & Adesão:
                      </span>
                      <strong className="text-[#996B12] font-bold">R$ 1.348,00 (único)</strong>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-1 font-semibold">
                        <Server className="w-3.5 h-3.5 text-[#D49B28]" />
                        Hospedagem & Manutenção:
                      </span>
                      <strong className="text-[#996B12] font-bold">R$ 149,00 / mês</strong>
                    </div>
                  </div>
                </div>

                {/* Model Benefits */}
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#D49B28] shrink-0 mt-0.5" />
                    <span>Rolagem única fluida sem trocas de página (Scroll contínuo).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#D49B28] shrink-0 mt-0.5" />
                    <span>Ideal para campanhas imediatas de Google Ads e Instagram Ads.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#D49B28] shrink-0 mt-0.5" />
                    <span>Carregamento ultrarrápido com direcionamento direto para o WhatsApp.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#D49B28] shrink-0 mt-0.5" />
                    <span>Suporte de infraestrutura e hospedagem dedicada.</span>
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleContractClick('Landing Page Única', 'R$ 1.497,00', 'R$ 1.348,00', 'R$ 149,00')}
                className="w-full py-4 rounded-xl bg-[#FAF0D9] border border-[#D49B28]/40 text-[#996B12] font-extrabold text-sm flex items-center justify-center gap-2 hover:bg-[#F5E5C4] transition-all shadow-md"
              >
                <Phone className="w-4 h-4 fill-current text-[#D49B28]" />
                <span>Contratar Landing Page (R$ 1.497)</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Developer Contact Note */}
          <div className="p-4 rounded-xl bg-[#FAF0D9] border border-[#D49B28]/40 text-center text-xs text-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-left">
              <ShieldCheck className="w-5 h-5 text-[#D49B28] shrink-0" />
              <span>
                Atendimento direto com o desenvolvedor responsável: <strong>WhatsApp (21) 97362-9114</strong>. Emissão de nota fiscal e contrato de prestação de serviços.
              </span>
            </div>
            
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-[#1F242D] text-[#FAF7F2] hover:bg-slate-800 font-semibold shrink-0"
            >
              Voltar ao Site
            </button>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
};
