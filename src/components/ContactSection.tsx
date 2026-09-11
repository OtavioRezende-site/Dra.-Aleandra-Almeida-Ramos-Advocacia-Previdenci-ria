import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Instagram, Send, CheckCircle2, MessageSquare, Shield } from 'lucide-react';
import { CLIENT_DATA } from '../data/clientData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [city, setCity] = useState('');
  const [subject, setSubject] = useState('BPC / LOAS');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedText = `Ol%C3%A1%20Dra.%20Aleandra!%20Enviei%20uma%20mensagem%20pelo%20seu%20site:%0A%0A*Nome:*%20${encodeURIComponent(name)}%0A*Telefone:*%20${encodeURIComponent(userPhone)}%0A*Cidade/UF:*%20${encodeURIComponent(city)}%0A*Assunto:*%20${encodeURIComponent(subject)}%0A*Mensagem:*%20${encodeURIComponent(message)}`;
    
    window.open(`https://wa.me/${CLIENT_DATA.whatsappNumber}?text=${formattedText}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-20 bg-[#1F242D] text-[#FAF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2A313D] border border-[#D49B28]/40 text-[#E8AC33] text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-4 h-4 text-[#D49B28]" />
            <span>Fale com Nossos Especialistas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF7F2]">
            Agende Sua <span className="gold-text-gradient">Consulta Previdenciária</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Preencha o formulário para atendimento direto ou escolha um dos nossos canais oficiais de comunicação.
          </p>
        </div>

        {/* Grid: Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 rounded-2xl bg-[#171A21] border border-[#D49B28]/40 p-6 sm:p-8 shadow-2xl space-y-6"
          >
            <h3 className="font-serif-gold text-2xl font-bold text-[#FAF7F2]">
              Formulário de Atendimento Prioritário
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#E8AC33] uppercase tracking-wider">
                    Seu Nome Completo:
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Maria da Silva"
                    className="w-full px-4 py-3 rounded-xl bg-[#2A313D] border border-[#D49B28]/40 text-[#FAF7F2] font-semibold text-sm focus:border-[#E8AC33] focus:outline-none placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#E8AC33] uppercase tracking-wider">
                    Seu WhatsApp com DDD:
                  </label>
                  <input
                    type="tel"
                    required
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                    placeholder="(69) 99999-9999"
                    className="w-full px-4 py-3 rounded-xl bg-[#2A313D] border border-[#D49B28]/40 text-[#FAF7F2] font-semibold text-sm focus:border-[#E8AC33] focus:outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#E8AC33] uppercase tracking-wider">
                    Sua Cidade / Estado:
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Ex: Jaru - RO"
                    className="w-full px-4 py-3 rounded-xl bg-[#2A313D] border border-[#D49B28]/40 text-[#FAF7F2] font-semibold text-sm focus:border-[#E8AC33] focus:outline-none placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#E8AC33] uppercase tracking-wider">
                    Assunto Principal:
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#2A313D] border border-[#D49B28]/40 text-[#FAF7F2] font-semibold text-sm focus:border-[#E8AC33] focus:outline-none"
                  >
                    <option value="BPC / LOAS">BPC / LOAS (Benefício Idoso ou PCD)</option>
                    <option value="Aposentadoria">Aposentadoria por Idade / Especial / Tempo</option>
                    <option value="Auxílio-Doença">Auxílio-Doença ou Invalidez Cortados</option>
                    <option value="Planejamento Previdenciário">Planejamento Previdenciário</option>
                    <option value="Curso ou Mentoria">Cursos ou Mentoria para Advogados</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#E8AC33] uppercase tracking-wider">
                  Descreva Sucintamente o Seu Caso:
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Conte-nos se o INSS negou seu pedido ou se busca planejamento..."
                  className="w-full px-4 py-3 rounded-xl bg-[#2A313D] border border-[#D49B28]/40 text-[#FAF7F2] font-semibold text-sm focus:border-[#E8AC33] focus:outline-none placeholder:text-slate-400"
                />
              </div>

              <button
                type="submit"
                className="animate-shimmer w-full py-4 rounded-xl gold-btn-gradient text-[#1F242D] font-extrabold text-base flex items-center justify-center gap-2 shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                <Send className="w-5 h-5 fill-current" />
                <span>Enviar para WhatsApp da Dra. Aleandra</span>
              </button>
            </form>
          </motion.div>

          {/* Right: Direct Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-4"
          >
            {/* WhatsApp Card */}
            <motion.a
              whileHover={{ y: -4, scale: 1.02 }}
              href={`https://wa.me/${CLIENT_DATA.whatsappNumber}?text=Ol%C3%A1%20Dra.%20Aleandra,%20gostaria%20de%20atendimento%20previdenci%C3%A1rio.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[#171A21] border border-[#D49B28]/40 hover:border-[#D49B28] flex items-center justify-between group transition-all shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                  <Phone className="w-6 h-6 fill-current text-emerald-400" />
                </div>
                <div>
                  <span className="block text-xs text-[#E8AC33] font-bold uppercase tracking-wider">WhatsApp Oficial</span>
                  <span className="block text-lg font-bold text-[#FAF7F2]">{CLIENT_DATA.phone}</span>
                  <span className="block text-xs text-slate-300">Atendimento humanizado e rápido</span>
                </div>
              </div>
              <span className="text-[#E8AC33] group-hover:translate-x-1 transition-transform font-extrabold text-sm">
                Abrir →
              </span>
            </motion.a>

            {/* Instagram Card */}
            <motion.a
              whileHover={{ y: -4, scale: 1.02 }}
              href={CLIENT_DATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[#171A21] border border-[#D49B28]/40 hover:border-[#D49B28] flex items-center justify-between group transition-all shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-[#2A313D] text-[#E8AC33] border border-[#D49B28]/40">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs text-[#E8AC33] font-bold uppercase tracking-wider">Instagram Oficial</span>
                  <span className="block text-lg font-bold text-[#FAF7F2]">{CLIENT_DATA.instagram}</span>
                  <span className="block text-xs text-slate-300">{CLIENT_DATA.instagramFollowers}</span>
                </div>
              </div>
              <span className="text-[#E8AC33] group-hover:translate-x-1 transition-transform font-extrabold text-sm">
                Ver Perfil →
              </span>
            </motion.a>

            {/* Email Card */}
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-6 rounded-2xl bg-[#171A21] border border-[#D49B28]/30 flex items-center gap-4 shadow-xl"
            >
              <div className="p-3.5 rounded-xl bg-[#2A313D] text-[#E8AC33] border border-[#D49B28]/30">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-xs text-slate-300 font-bold uppercase tracking-wider">E-mail Jurídico</span>
                <span className="block text-sm sm:text-base font-bold text-[#FAF7F2] font-mono">{CLIENT_DATA.email}</span>
              </div>
            </motion.div>

            {/* Security Guarantee Box */}
            <div className="p-4 rounded-xl bg-[#2A313D] border border-[#D49B28]/40 text-xs text-slate-200 flex items-center gap-3">
              <Shield className="w-5 h-5 text-[#E8AC33] shrink-0" />
              <span>
                Seus dados e informações são protegidos com sigilo profissional total garantido pelo Código de Ética e Disciplina da OAB.
              </span>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
