import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Phone, Calculator, Award, Instagram, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CLIENT_DATA } from '../data/clientData';

interface HeroSectionProps {
  onOpenCalculator: () => void;
  onOpenCourses: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenCalculator,
  onOpenCourses,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      videoRef.current.play().catch((err) => {
        console.log('Video autoplay prevented or handled:', err);
      });
    }
  }, []);

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-cream-canvas text-[#1F242D]">
      {/* BACKGROUND VIDEO LOOP WITH HIGH CLARITY AND ELEGANT OVERLAYS */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#0F131C]">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-65 scale-105 transform filter contrast-115 brightness-105 saturate-105"
        >
          <source src={CLIENT_DATA.heroVideoStream} type="video/mp4" />
          <source src={CLIENT_DATA.heroVideoFallback} type="video/mp4" />
        </video>

        {/* Soft gradient cream overlays tuned for video sharpness & text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/55 to-[#FAF7F2]/70" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#FAF7F2]/40 to-[#FAF7F2]/80" />

        {/* Ambient floating radial lights with warm noble gold hue */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D49B28]/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[200px] bg-[#C88A1E]/15 rounded-full blur-[90px] pointer-events-none" />
      </div>

      {/* Hero Content (Wide Layout) */}
      <div className="relative z-10 max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Central Copywriting & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6 flex flex-col items-center w-full"
        >
          {/* Authority Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF0D9]/90 backdrop-blur-md border border-[#D49B28]/50 text-[#996B12] text-xs sm:text-sm font-bold shadow-md">
            <Award className="w-4 h-4 text-[#D49B28]" />
            <span>Advocacia Previdenciária Nacional & Mentoria</span>
            <span className="w-2 h-2 rounded-full bg-[#D49B28] animate-ping" />
          </div>

          {/* Main Title - Expanded Horizontally */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#1F242D] leading-[1.12] max-w-5xl w-full">
            Sua Aposentadoria e Benefícios com a{' '}
            <span className="gold-text-gradient-dark">Segurança de uma Especialista</span>
          </h1>

          {/* Subtitle - Expanded */}
          <p className="text-base sm:text-xl text-slate-800 max-w-4xl font-normal leading-relaxed text-center drop-shadow-sm">
            Atuação humanizada e combativa no <strong className="text-[#996B12] font-bold">INSS e na Justiça</strong> para garantir BPC/LOAS, Aposentadorias e Auxílios em todo o Brasil. Cursos e Mentorias para advogados que buscam a excelência.
          </p>

          {/* Checklist items - Grid across full width */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-2 text-xs sm:text-sm text-slate-900 font-semibold max-w-5xl w-full justify-items-center">
            <div className="flex items-center gap-2 text-left">
              <CheckCircle2 className="w-4 h-4 text-[#D49B28] shrink-0" />
              <span>Análise gratuita BPC/LOAS</span>
            </div>
            <div className="flex items-center gap-2 text-left">
              <CheckCircle2 className="w-4 h-4 text-[#D49B28] shrink-0" />
              <span>Atendimento 100% Online</span>
            </div>
            <div className="flex items-center gap-2 text-left">
              <CheckCircle2 className="w-4 h-4 text-[#D49B28] shrink-0" />
              <span>Reversão de benefícios indeferidos</span>
            </div>
            <div className="flex items-center gap-2 text-left">
              <CheckCircle2 className="w-4 h-4 text-[#D49B28] shrink-0" />
              <span>+130 modelos & mentorias</span>
            </div>
          </div>

          {/* Hero CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
            <a
              href={`https://wa.me/${CLIENT_DATA.whatsappNumber}?text=Ol%C3%A1%20Dra.%20Aleandra,%20gostaria%20de%20consultar%20meu%20benef%C3%ADcio%20previdenci%C3%A1rio.`}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-shimmer w-full sm:w-auto px-7 py-4 rounded-full gold-btn-gradient text-[#1F242D] font-bold text-sm sm:text-base flex items-center justify-center gap-3 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>Consultar Meu Caso no WhatsApp</span>
            </a>

            <button
              onClick={onOpenCalculator}
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#FAF0D9]/90 backdrop-blur-md border border-[#D49B28]/60 text-[#996B12] font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 hover:bg-[#F5E5C4] transition-all shadow-md"
            >
              <Calculator className="w-5 h-5 text-[#D49B28]" />
              <span>Simular Meu Benefício</span>
            </button>
          </div>

          {/* Social Proof Bar */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-700 border-t border-[#D49B28]/30 w-full max-w-xl">
            <a
              href={CLIENT_DATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#996B12] transition-colors"
            >
              <div className="p-1.5 rounded-full bg-[#FAF0D9] text-[#D49B28] border border-[#D49B28]/40">
                <Instagram className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="font-bold text-[#1F242D] block text-xs sm:text-sm">{CLIENT_DATA.instagramFollowers}</span>
                <span className="text-[11px] text-slate-600">@advaleandraalmeida</span>
              </div>
            </a>
            <div className="h-8 w-px bg-[#D49B28]/30" />
            <div className="text-left">
              <span className="font-bold text-[#1F242D] block text-xs sm:text-sm">Atuação Nacional</span>
              <span className="text-[11px] text-slate-600">Presencial em Jaru - RO & Atendimento Online</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
