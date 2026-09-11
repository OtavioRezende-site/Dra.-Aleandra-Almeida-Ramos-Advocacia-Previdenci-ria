import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HeartHandshake, 
  ShieldCheck, 
  Stethoscope, 
  Users, 
  LineChart, 
  Briefcase, 
  ChevronDown, 
  Phone, 
  CheckCircle2, 
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { SERVICES_DATA } from '../data/clientData';
import { CLIENT_DATA } from '../data/clientData';

const iconMap: Record<string, React.ElementType> = {
  HeartHandshake,
  ShieldCheck,
  Stethoscope,
  Users,
  LineChart,
  Briefcase,
};

export const ServicesSection: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const toggleFaq = (faqId: string) => {
    setActiveFaq(activeFaq === faqId ? null : faqId);
  };

  return (
    <section id="services" className="relative py-20 bg-cream-canvas text-[#1F242D] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#D49B28]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#C88A1E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0D9] border border-[#D49B28]/40 text-[#996B12] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#D49B28]" />
            <span>Soluções Especializadas INSS & Justiça</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1F242D]">
            Serviços de <span className="gold-text-gradient-dark">Advocacia Previdenciária</span>
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
            Atuação técnica estratégica para garantir a concessão, restabelecimento ou revisão dos seus benefícios com rapidez e total transparência.
          </p>
        </div>

        {/* Services Grid with 3D Tilt Hover & Staggers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const Icon = iconMap[service.iconName] || ShieldCheck;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative rounded-2xl cream-card cream-card-hover p-6 flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-2xl hover:border-[#D49B28]"
              >
                {/* Badge if exists */}
                {service.badge && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#FAF0D9] border border-[#D49B28]/40 text-[#996B12] text-[11px] font-bold uppercase tracking-wider">
                    {service.badge}
                  </div>
                )}

                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#FAF0D9] border border-[#D49B28]/40 flex items-center justify-center text-[#D49B28] group-hover:scale-110 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Service Title */}
                  <div>
                    <h3 className="text-xl font-bold font-serif-gold text-[#1F242D] group-hover:text-[#D49B28] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#996B12] font-semibold pt-1">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Target Audience */}
                  <div className="p-3 rounded-xl bg-[#FAF0D9] border border-[#D49B28]/30 text-xs text-slate-800">
                    <strong className="text-[#996B12] font-bold block mb-1">Para quem é este serviço?</strong>
                    {service.whoIsItFor}
                  </div>

                  {/* Key Benefits List */}
                  <div className="space-y-1.5 pt-1">
                    {service.keyBenefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-[#D49B28] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* FAQs Accordion for this service */}
                  {service.faqs && service.faqs.length > 0 && (
                    <div className="pt-2 border-t border-[#EADBCC]">
                      {service.faqs.map((faq, fIndex) => {
                        const faqKey = `${service.id}-${fIndex}`;
                        const isOpen = activeFaq === faqKey;
                        return (
                          <div key={fIndex} className="mt-2 rounded-lg bg-[#FAF0D9] border border-[#D49B28]/30 overflow-hidden">
                            <button
                              onClick={() => toggleFaq(faqKey)}
                              className="w-full px-3 py-2 text-left text-xs font-semibold text-[#1F242D] flex items-center justify-between hover:bg-[#F5E5C4] transition-colors"
                            >
                              <span className="flex items-center gap-1.5">
                                <HelpCircle className="w-3.5 h-3.5 text-[#D49B28] shrink-0" />
                                {faq.question}
                              </span>
                              <ChevronDown className={`w-3.5 h-3.5 text-[#D49B28] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                              {isOpen && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="px-3 py-2 text-xs text-slate-700 bg-[#FFFFFF] border-t border-[#D49B28]/20 leading-relaxed"
                                >
                                  {faq.answer}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Service CTA Action */}
                <div className="pt-6 mt-4 border-t border-[#EADBCC]">
                  <a
                    href={`https://wa.me/${CLIENT_DATA.whatsappNumber}?text=Ol%C3%A1%20Dra.%20Aleandra,%20tenho%20interesse%20no%20servi%C3%A7o%20de%20*${encodeURIComponent(service.title)}*.%20Gostaria%20de%20uma%20consulta.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl gold-btn-gradient text-[#1F242D] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <Phone className="w-4 h-4 fill-current" />
                    <span>Consultar {service.title.split(' ')[0]}</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
