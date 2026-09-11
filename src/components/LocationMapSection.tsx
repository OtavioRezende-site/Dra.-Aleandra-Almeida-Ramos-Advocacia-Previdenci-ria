import React from 'react';
import { MapPin, Navigation, Compass, Clock, Phone, Mail, Building, ExternalLink } from 'lucide-react';
import { CLIENT_DATA } from '../data/clientData';

export const LocationMapSection: React.FC = () => {
  return (
    <section id="location" className="relative py-20 bg-cream-canvas text-[#1F242D] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0D9] border border-[#D49B28]/40 text-[#996B12] text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-[#D49B28]" />
            <span>Escritório Físico & Atendimento Presencial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1F242D]">
            Nossa Localização em <span className="gold-text-gradient-dark">Jaru - Rondônia</span>
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
            Estrutura acolhedora no Centro de Jaru/RO preparada para receber você e sua família, além de suporte digital seguro para todo o Brasil.
          </p>
        </div>

        {/* Location Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Office Details & Route Buttons */}
          <div className="lg:col-span-5 rounded-2xl cream-card p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#FAF0D9] text-[#D49B28] border border-[#D49B28]/40">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif-gold font-bold text-xl text-[#1F242D]">
                    Advocacia Previdenciária
                  </h3>
                  <p className="text-xs text-[#996B12] font-bold">
                    Dra. Aleandra Almeida Ramos
                  </p>
                </div>
              </div>

              {/* Address Details */}
              <div className="space-y-4 text-sm text-slate-700 pt-2 border-t border-[#EADBCC]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#D49B28] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1F242D] font-bold">Endereço do Escritório:</strong>
                    <span>{CLIENT_DATA.address}</span>
                    <span className="block text-xs text-slate-600 font-medium pt-0.5">CEP: {CLIENT_DATA.cep} - Jaru / RO</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#D49B28] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1F242D] font-bold">Horário de Atendimento:</strong>
                    <span>Segunda a Sexta-feira: 08:00 às 18:00</span>
                    <span className="block text-xs text-emerald-700 font-bold pt-0.5">Atendimento online contínuo via WhatsApp</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#D49B28] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1F242D] font-bold">Telefone / WhatsApp:</strong>
                    <span>{CLIENT_DATA.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#D49B28] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1F242D] font-bold">E-mail de Contato:</strong>
                    <span className="text-xs sm:text-sm font-mono">{CLIENT_DATA.email}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ROUTE BUTTONS (Google Maps & Waze) */}
            <div className="space-y-3 pt-4 border-t border-[#EADBCC]">
              <span className="block text-xs font-bold uppercase tracking-wider text-[#996B12]">
                Traçar Rota no Seu Aplicativo:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={CLIENT_DATA.googleMapsRouteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl bg-[#FAF0D9] border border-[#D49B28]/40 text-[#996B12] text-xs font-bold flex items-center justify-center gap-2 hover:bg-[#F5E5C4] transition-all shadow-sm"
                >
                  <Navigation className="w-4 h-4 text-emerald-700" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>

                <a
                  href={CLIENT_DATA.wazeRouteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl bg-[#FAF0D9] border border-[#D49B28]/40 text-[#996B12] text-xs font-bold flex items-center justify-center gap-2 hover:bg-[#F5E5C4] transition-all shadow-sm"
                >
                  <Compass className="w-4 h-4 text-sky-700" />
                  <span>Abrir no Waze</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Frame */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#D49B28]/40 shadow-xl relative min-h-[360px] lg:min-h-full cream-card">
            <iframe
              title="Localização do Escritório da Dra. Aleandra Almeida Ramos"
              src={CLIENT_DATA.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter saturate-100 contrast-105"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
