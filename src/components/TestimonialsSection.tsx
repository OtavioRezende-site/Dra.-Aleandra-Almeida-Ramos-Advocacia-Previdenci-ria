import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, CheckCircle2, Heart } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/clientData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="relative py-20 bg-[#1F242D] text-[#FAF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2A313D] border border-[#D49B28]/40 text-[#E8AC33] text-xs font-bold uppercase tracking-wider">
            <Heart className="w-4 h-4 text-[#D49B28] fill-current" />
            <span>Depoimentos & Histórias de Sucesso</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF7F2]">
            O Que Dizem Nossos <span className="gold-text-gradient">Clientes e Mentorados</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Reconhecimento de segurados que conquistaram seus benefícios e de advogados que transformaram sua atuação jurídica.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative rounded-2xl bg-[#171A21] border border-[#D49B28]/30 hover:border-[#D49B28] p-6 sm:p-8 flex flex-col justify-between shadow-xl hover:shadow-[0_10px_25px_rgba(212,155,40,0.18)] transition-all group"
            >
              <div className="space-y-4">
                {/* Header: Type and Stars */}
                <div className="flex items-center justify-between">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#2A313D] border border-[#D49B28]/40 text-[#E8AC33] text-xs font-bold uppercase tracking-wider">
                    {item.type}
                  </span>
                  
                  {/* 5 Stars */}
                  <div className="flex items-center gap-1 text-[#E8AC33]">
                    {[...Array(item.stars)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-current text-[#E8AC33]" />
                    ))}
                  </div>
                </div>

                {/* Text quote */}
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic relative pt-2">
                  <Quote className="w-8 h-8 text-[#D49B28]/20 absolute -top-2 -left-2 -z-10" />
                  "{item.text}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-6 mt-6 border-t border-[#D49B28]/20 flex items-center justify-between">
                <div>
                  <h3 className="font-serif-gold font-bold text-[#FAF7F2] text-base group-hover:text-[#E8AC33] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {item.role} • {item.location}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
