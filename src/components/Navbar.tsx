import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Phone, Menu, X, Instagram, MapPin } from 'lucide-react';
import { CLIENT_DATA } from '../data/clientData';
import { AppMode, InstitucionalPage } from '../types';
import { Logo } from './Logo';

interface NavbarProps {
  appMode: AppMode;
  currentPage: InstitucionalPage;
  onSelectPage: (page: InstitucionalPage) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  appMode,
  currentPage,
  onSelectPage,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  const navItems: { label: string; page: InstitucionalPage; sectionId: string }[] = [
    { label: 'Início', page: 'home', sectionId: 'hero' },
    { label: 'Sobre a Dra.', page: 'about', sectionId: 'about' },
    { label: 'Serviços INSS', page: 'services', sectionId: 'services' },
    { label: 'Cursos & Mentorias', page: 'courses', sectionId: 'courses' },
    { label: 'Simulador BPC', page: 'calculator', sectionId: 'calculator' },
    { label: 'Localização', page: 'location', sectionId: 'location' },
    { label: 'Contato', page: 'contact', sectionId: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // In landing mode, highlight active section according to scroll position
      if (appMode === 'landing') {
        const scrollPosition = window.scrollY + 140; // Navbar offset threshold
        const sections = navItems.map((item) => item.sectionId);

        for (let i = sections.length - 1; i >= 0; i--) {
          const element = document.getElementById(sections[i]);
          if (element) {
            const top = element.offsetTop;
            const height = element.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(sections[i]);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [appMode]);

  const handleNavClick = (page: InstitucionalPage, sectionId?: string) => {
    setMobileMenuOpen(false);
    if (appMode === 'institucional') {
      onSelectPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Landing Page mode: scroll to section
      const targetId = sectionId || page;
      setActiveSection(targetId);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#D49B28]/30 py-2.5 shadow-md'
          : 'bg-[#FAF7F2]/90 backdrop-blur-sm py-4 border-b border-[#EADBCC]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 group text-left focus:outline-none hover:opacity-95 transition-opacity"
        >
          <Logo variant="darkText" size="md" />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive =
              appMode === 'landing'
                ? activeSection === item.sectionId
                : currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page, item.sectionId)}
                className={`px-3 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-[#FAF0D9] text-[#996B12] border border-[#D49B28]/60 shadow-sm font-bold scale-[1.02]'
                    : 'text-[#1F242D] hover:text-[#D49B28] hover:bg-[#F3ECE0]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button - Direct WhatsApp to Dra. Aleandra */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={CLIENT_DATA.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#FAF0D9] border border-[#D49B28]/30 text-[#D49B28] hover:text-[#996B12] hover:bg-[#F3ECE0] transition-all"
            title="Instagram Oficial @advaleandraalmeida"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href={`https://wa.me/${CLIENT_DATA.whatsappNumber}?text=Ol%C3%A1%20Dra.%20Aleandra,%20estava%20no%20seu%20site%20e%20gostaria%20de%20uma%20consulta%20previdenci%C3%A1ria.`}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-shimmer px-4 py-2 rounded-full gold-btn-gradient text-[#1F242D] font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md hover:scale-105 active:scale-95 transition-transform"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Atendimento WhatsApp</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-[#FAF0D9] border border-[#D49B28]/40 text-[#1F242D] hover:bg-[#F3ECE0] transition-colors"
          aria-label="Abrir Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-[#FAF7F2] backdrop-blur-xl border-b border-[#D49B28]/30 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-xl"
        >
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive =
                appMode === 'landing'
                  ? activeSection === item.sectionId
                  : currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page, item.sectionId)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-[#FAF0D9] text-[#996B12] border border-[#D49B28]/60 font-bold shadow-sm'
                      : 'text-[#1F242D] hover:bg-[#F3ECE0] hover:text-[#D49B28]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className={isActive ? 'text-[#996B12] font-bold' : 'text-[#D49B28] text-xs'}>→</span>
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#EADBCC] flex flex-col gap-2">
            <a
              href={`https://wa.me/${CLIENT_DATA.whatsappNumber}?text=Ol%C3%A1%20Dra.%20Aleandra,%20gostaria%20de%20atendimento%20previdenci%C3%A1rio.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl gold-btn-gradient text-[#1F242D] font-bold text-center text-sm flex items-center justify-center gap-2 shadow-md"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Falar no WhatsApp com a Dra.</span>
            </a>
            <div className="flex items-center justify-between px-2 pt-1 text-xs text-[#1F242D]">
              <span className="flex items-center gap-1 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#D49B28]" />
                Jaru - RO & Atendimento Nacional
              </span>
              <a
                href={CLIENT_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#996B12] font-semibold hover:underline flex items-center gap-1"
              >
                <Instagram className="w-3.5 h-3.5 text-[#D49B28]" />
                @advaleandraalmeida
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};
