import React from 'react';
import { motion } from 'motion/react';
import { Award, BookOpen, Users, ShieldCheck, Instagram, Check, Sparkles } from 'lucide-react';
import { CLIENT_DATA } from '../data/clientData';

export const AboutSection: React.FC = () => {
  const achievements = [
    {
      icon: Users,
      title: 'Atuação Nacional',
      description: 'Atendimento presencial no escritório em Jaru - RO e consultas 100% online para segurados de todo o Brasil.'
    },
    {
      icon: Award,
      title: 'Especialista em BPC/LOAS',
      description: 'Referência no encaminhamento e reversão de indeferimentos do Benefício de Prestação Continuada para idosos e PCD.'
    },
    {
      icon: BookOpen,
      title: 'Mentora de Advogados',
      description: 'Criadora do Treinamento Avançado e do Combo Previdenciário com mais de 130 peças utilizadas por advogados em todo o país.'
    },
    {
      icon: ShieldCheck,
      title: 'Defesa Combativa no INSS',
      description: 'Análise minuciosa de direitos, cálculos de RMI, averbação de tempo rural/insalubre e recursos judiciais céleres.'
    }
  ];

  return (
    <section id="about" className="relative py-20 bg-[#1F242D] text-[#FAF7F2] overflow-hidden">
      {/* Background ambient decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D49B28]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C88A1E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2A313D] border border-[#D49B28]/40 text-[#E8AC33] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D49B28]" />
            <span>Autoridade Previdenciária & Mentoria</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF7F2]">
            Conheça a <span className="gold-text-gradient">Dra. Aleandra Almeida Ramos</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Uma trajetória pautada na ética, rigor técnico e compromisso inarredável com a dignidade de trabalhadores, aposentados e beneficiários em todo o Brasil.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait & Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl bg-[#171A21] border border-[#D49B28]/40 p-4 shadow-2xl">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-900 border border-[#D49B28]/30">
                <img
                  src={CLIENT_DATA.portraitAltUrl}
                  alt="Dra. Aleandra Almeida Ramos em seu escritório"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = CLIENT_DATA.portraitUrl;
                  }}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121620] via-transparent to-transparent opacity-80" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#1F242D]/95 backdrop-blur-md p-3.5 rounded-xl border border-[#D49B28]/40 text-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-[#D49B28]/20 text-[#E8AC33] border border-[#D49B28]/40">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] text-[#E8AC33] font-bold uppercase tracking-wider">Advocacia Previdenciária</div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-100">Atuando em Todo o Brasil</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instagram Followers Box */}
              <a
                href={CLIENT_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 p-3.5 rounded-xl bg-[#2A313D] border border-[#D49B28]/40 flex items-center justify-between hover:bg-[#343D4C] transition-all group shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg gold-btn-gradient text-[#1F242D]">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="block font-bold text-[#FAF7F2] text-sm">{CLIENT_DATA.instagramFollowers}</span>
                    <span className="block text-xs text-slate-300">Comunidade e orientações no Instagram</span>
                  </div>
                </div>
                <span className="text-[#E8AC33] text-xs font-bold group-hover:translate-x-1 transition-transform">
                  Seguir →
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative & Key Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <h3 className="text-2xl sm:text-3xl font-serif-gold font-bold text-[#FAF7F2]">
              Defesa Humanizada e Técnica no Direito Previdenciário
            </h3>

            <p className="text-slate-300 text-base leading-relaxed">
              Com sede física estrategicamente localizada na <strong className="text-[#E8AC33]">Avenida Rio Branco, 1560 em Jaru - RO</strong> e estrutura digital preparada para atendimento nacional, a <strong className="text-[#FAF7F2]">Dra. Aleandra Almeida Ramos</strong> dedica sua atuação ao Direito Previdenciário com foco total em resultados concretos para o cidadão.
            </p>

            <p className="text-slate-300 text-base leading-relaxed">
              Além da prática advocatícia combatente contra o INSS e na Justiça Federal, a Dra. Aleandra é mentora e instrutora jurídica. Através do <strong className="text-[#E8AC33]">Curso Dominando o BPC/LOAS</strong> e do <strong className="text-[#E8AC33]">Treinamento Avançado em Direito Previdenciário</strong>, capacita centenas de advogados em todo o país para operarem com excelência e alcançarem resultados de destaque.
            </p>

            {/* Achievements Grid with Card Hover Animations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {achievements.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="p-5 rounded-2xl bg-[#171A21] border border-[#D49B28]/30 hover:border-[#D49B28] hover:shadow-[0_10px_25px_rgba(212,155,40,0.18)] transition-all space-y-2 group cursor-default"
                  >
                    <div className="flex items-center gap-2.5 text-[#E8AC33]">
                      <div className="p-2 rounded-xl bg-[#2A313D] border border-[#D49B28]/30 text-[#D49B28] group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 shrink-0" />
                      </div>
                      <h4 className="font-bold text-sm sm:text-base text-[#FAF7F2]">{item.title}</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Box */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={`https://wa.me/${CLIENT_DATA.whatsappNumber}?text=Ol%C3%A1%20Dra.%20Aleandra,%20gostaria%20de%20agendar%20uma%20consulta%20jur%C3%ADdica.`}
                target="_blank"
                rel="noopener noreferrer"
                className="animate-shimmer w-full sm:w-auto px-6 py-3.5 rounded-full gold-btn-gradient text-[#1F242D] font-bold text-sm flex items-center justify-center gap-2 shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Agendar Consulta com a Dra.</span>
              </a>
              <span className="text-xs text-slate-300 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                Atendimento rápido e direto no WhatsApp
              </span>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
