import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, CheckCircle2, ShoppingBag, ExternalLink, Sparkles, BookOpen, Star, Award } from 'lucide-react';
import { COURSES_DATA, CLIENT_DATA } from '../data/clientData';

export const CoursesSection: React.FC = () => {
  return (
    <section id="courses" className="relative py-20 bg-[#1F242D] text-[#FAF7F2] overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D49B28]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#C88A1E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2A313D] border border-[#D49B28]/40 text-[#E8AC33] text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4 text-[#D49B28]" />
            <span>Capacitação de Elite em Direito Previdenciário</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF7F2]">
            Cursos, Peças & <span className="gold-text-gradient">Mentorias Jurídicas</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Aprenda na prática as teses e estratégias de maior sucesso na Advocacia Previdenciária com a Dra. Aleandra Almeida Ramos.
          </p>
        </div>

        {/* Courses & Products Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COURSES_DATA.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative rounded-2xl bg-[#171A21] p-6 sm:p-8 flex flex-col justify-between transition-all group ${
                course.popular
                  ? 'border-2 border-[#D49B28] shadow-[0_10px_30px_rgba(212,155,40,0.2)]'
                  : 'border border-[#D49B28]/30 hover:border-[#D49B28] shadow-xl'
              }`}
            >
              {/* Popular Badge */}
              {course.popular && (
                <div className="absolute -top-3.5 right-6 px-4 py-1 rounded-full gold-btn-gradient text-[#1F242D] text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                  <Star className="w-3.5 h-3.5 fill-current text-[#1F242D]" />
                  <span>Mais Procurado</span>
                </div>
              )}

              <div className="space-y-6">
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4">
                  <div className="space-y-1">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#2A313D] border border-[#D49B28]/40 text-[#E8AC33] text-xs font-bold uppercase">
                      {course.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-serif-gold text-[#FAF7F2] group-hover:text-[#E8AC33] transition-colors">
                      {course.title}
                    </h3>
                  </div>

                  {/* Price Tag */}
                  <div className="sm:text-right shrink-0 mt-2 sm:mt-0">
                    <span className="inline-block text-xl sm:text-2xl font-extrabold text-[#E8AC33] break-words">
                      {course.price}
                    </span>
                    {course.checkoutUrl ? (
                      <span className="block text-[10px] text-emerald-400 font-bold">Acesso Imediato</span>
                    ) : (
                      <span className="block text-[10px] text-amber-300 font-semibold">Personalizada</span>
                    )}
                  </div>
                </div>

                {/* Course Image Banner */}
                <div className="relative h-48 rounded-xl overflow-hidden bg-slate-900 border border-[#D49B28]/30">
                  <img
                    src={course.image}
                    alt={course.title}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop';
                    }}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F242D] via-transparent to-transparent opacity-80" />
                  
                  {/* Category overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-[#1F242D]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#D49B28]/40 text-xs text-amber-200 font-medium">
                    <div className="flex items-center gap-1.5 truncate">
                      <Award className="w-3.5 h-3.5 text-[#E8AC33] shrink-0" />
                      <span className="truncate">Dra. Aleandra Almeida Ramos</span>
                    </div>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#D49B28]/20 text-amber-300 shrink-0">
                      OAB/RO
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {course.description}
                </p>

                {/* Target Audience */}
                <div className="p-3.5 rounded-xl bg-[#2A313D] border border-[#D49B28]/30 text-xs text-slate-200">
                  <strong className="text-[#E8AC33] block mb-1 font-bold">Para quem é indicado:</strong>
                  {course.targetAudience}
                </div>

                {/* Features List */}
                <div className="space-y-2 pt-2">
                  <strong className="text-xs uppercase tracking-wider text-[#E8AC33] font-bold block">
                    O que você recebe:
                  </strong>
                  {course.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#D49B28] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-[#D49B28]/20">
                {course.checkoutUrl ? (
                  <a
                    href={course.checkoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animate-shimmer w-full py-3.5 px-4 rounded-xl gold-btn-gradient text-[#1F242D] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all text-center leading-tight"
                  >
                    <ShoppingBag className="w-4 h-4 shrink-0 fill-current" />
                    <span>Comprar no Kiwify ({course.price})</span>
                    <ExternalLink className="w-4 h-4 shrink-0" />
                  </a>
                ) : (
                  <a
                    href={`https://wa.me/${CLIENT_DATA.whatsappNumber}?text=Ol%C3%A1%20Dra.%20Aleandra,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20*${encodeURIComponent(course.title)}*.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-[#2A313D] border border-[#D49B28] text-[#E8AC33] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-[#343D4C] transition-all shadow-sm text-center leading-tight"
                  >
                    <BookOpen className="w-4 h-4 text-[#D49B28] shrink-0" />
                    <span>Solicitar Informações no WhatsApp</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
