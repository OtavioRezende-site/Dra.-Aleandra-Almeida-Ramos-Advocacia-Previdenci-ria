import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

export const LGPDConsent: React.FC = () => {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('lgpd_consent_accepted');
    if (!consent) {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('lgpd_consent_accepted', 'true');
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-40 p-4 rounded-2xl cream-card border border-[#D49B28]/40 text-[#1F242D] text-xs shadow-2xl flex flex-col space-y-3 animate-fade-in">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 text-[#996B12] font-bold">
          <ShieldCheck className="w-4 h-4 text-[#D49B28]" />
          <span>Privacidade & LGPD</span>
        </div>
        <button
          onClick={handleAccept}
          className="text-slate-500 hover:text-slate-800"
          aria-label="Fechar"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-slate-700 text-[11px] leading-relaxed">
        Este site utiliza cookies funcionais e de navegação para aprimorar sua experiência de atendimento e garantir a segurança das suas informações conforme a Lei Geral de Proteção de Dados (LGPD).
      </p>

      <button
        onClick={handleAccept}
        className="w-full py-2 rounded-xl gold-btn-gradient text-[#1F242D] font-extrabold text-xs shadow-sm hover:scale-[1.01] transition-transform"
      >
        Entendi e Aceito
      </button>
    </div>
  );
};
