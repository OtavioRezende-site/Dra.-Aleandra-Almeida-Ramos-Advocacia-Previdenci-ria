import React from 'react';
import { MapPin, Phone, Mail, Instagram, Shield, Award } from 'lucide-react';
import { CLIENT_DATA } from '../data/clientData';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1F242D] border-t border-[#D49B28]/40 text-[#FAF7F2]/80 py-12 text-sm relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#FAF7F2]/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Logo variant="lightText" size="lg" />

            <p className="text-xs text-[#FAF7F2]/80 leading-relaxed max-w-md">
              Atuação especializada na concessão de aposentadorias, BPC/LOAS, auxílios do INSS e mentorias para advogados em todo o território nacional.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#D49B28] font-bold">
              <Award className="w-4 h-4 text-[#D49B28]" />
              <span>Inscrição OAB/RO • Atuação Presencial e EAD</span>
            </div>
          </div>

          {/* Location & Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif-gold font-bold text-[#E8AC33] text-sm uppercase tracking-wider">
              Endereço do Escritório
            </h4>
            <div className="space-y-2 text-xs text-[#FAF7F2]/90">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D49B28] shrink-0 mt-0.5" />
                <span>{CLIENT_DATA.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D49B28] shrink-0" />
                <span>{CLIENT_DATA.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D49B28] shrink-0" />
                <span>{CLIENT_DATA.email}</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif-gold font-bold text-[#E8AC33] text-sm uppercase tracking-wider">
              Redes Sociais
            </h4>
            <a
              href={CLIENT_DATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#171A21] border border-[#D49B28]/40 text-[#E8AC33] text-xs font-semibold hover:bg-[#D49B28]/20 transition-all"
            >
              <Instagram className="w-4 h-4" />
              <span>{CLIENT_DATA.instagram} ({CLIENT_DATA.instagramFollowers})</span>
            </a>
          </div>

        </div>

        {/* Bottom Legal Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F2]/70">
          <div>
            © {new Date().getFullYear()} Dra. Aleandra Almeida Ramos. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-4 text-[#FAF7F2]/70">
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-[#D49B28]" />
              Conforme as diretrizes do Código de Ética e Disciplina da OAB.
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
