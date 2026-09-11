import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AppMode, InstitucionalPage } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { CoursesSection } from './components/CoursesSection';
import { CalculatorSection } from './components/CalculatorSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationMapSection } from './components/LocationMapSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingPillNav } from './components/FloatingPillNav';
import { SalesViewOverlay } from './components/SalesViewOverlay';
import { LGPDConsent } from './components/LGPDConsent';
import { GradientBridge } from './components/GradientBridge';

export function App() {
  const [appMode, setAppMode] = useState<AppMode>('institucional');
  const [currentPage, setCurrentPage] = useState<InstitucionalPage>('home');
  const [isSalesOverlayOpen, setIsSalesOverlayOpen] = useState(false);

  const handleSelectMode = (newMode: AppMode) => {
    setIsSalesOverlayOpen(false);
    setAppMode(newMode);
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPage = (page: InstitucionalPage) => {
    setIsSalesOverlayOpen(false);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCalculator = () => {
    if (appMode === 'institucional') {
      setCurrentPage('calculator');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById('calculator');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCourses = () => {
    if (appMode === 'institucional') {
      setCurrentPage('courses');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById('courses');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 flex flex-col font-sans relative selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Top Navbar Header */}
      <Navbar
        appMode={appMode}
        currentPage={currentPage}
        onSelectPage={handleSelectPage}
      />

      {/* Main Content Area with View Mode Transitions */}
      <main className="flex-grow relative z-0">
        <AnimatePresence mode="wait">
          {appMode === 'landing' ? (
            /* LANDING PAGE MODE (Single Continuous Page Layout) */
            <motion.div
              key="landing-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <HeroSection
                onOpenCalculator={handleOpenCalculator}
                onOpenCourses={handleOpenCourses}
              />
              <GradientBridge fromColor="from-[#FAF7F2]" toColor="to-[#1F242D]" />
              
              <AboutSection />
              <GradientBridge fromColor="from-[#1F242D]" toColor="to-[#FAF7F2]" />
              
              <ServicesSection />
              <GradientBridge fromColor="from-[#FAF7F2]" toColor="to-[#1F242D]" />
              
              <CoursesSection />
              <GradientBridge fromColor="from-[#1F242D]" toColor="to-[#FAF7F2]" />
              
              <CalculatorSection />
              <GradientBridge fromColor="from-[#FAF7F2]" toColor="to-[#1F242D]" />
              
              <TestimonialsSection />
              <GradientBridge fromColor="from-[#1F242D]" toColor="to-[#FAF7F2]" />
              
              <LocationMapSection />
              <GradientBridge fromColor="from-[#FAF7F2]" toColor="to-[#1F242D]" />
              
              <ContactSection />
            </motion.div>
          ) : (
            /* INSTITUCIONAL MODE (Multi-Page Tab View) */
            <motion.div
              key={`institucional-view-${currentPage}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              {currentPage === 'home' && (
                <>
                  <HeroSection
                    onOpenCalculator={handleOpenCalculator}
                    onOpenCourses={handleOpenCourses}
                  />
                  <GradientBridge fromColor="from-[#FAF7F2]" toColor="to-[#1F242D]" />
                  
                  <AboutSection />
                  <GradientBridge fromColor="from-[#1F242D]" toColor="to-[#FAF7F2]" />
                  
                  <ServicesSection />
                  <GradientBridge fromColor="from-[#FAF7F2]" toColor="to-[#1F242D]" />
                  
                  <CoursesSection />
                  <GradientBridge fromColor="from-[#1F242D]" toColor="to-[#FAF7F2]" />
                  
                  <CalculatorSection />
                  <GradientBridge fromColor="from-[#FAF7F2]" toColor="to-[#1F242D]" />
                  
                  <TestimonialsSection />
                  <GradientBridge fromColor="from-[#1F242D]" toColor="to-[#FAF7F2]" />
                  
                  <LocationMapSection />
                  <GradientBridge fromColor="from-[#FAF7F2]" toColor="to-[#1F242D]" />
                  
                  <ContactSection />
                </>
              )}

              {currentPage === 'about' && (
                <div className="pt-20">
                  <AboutSection />
                  <GradientBridge fromColor="from-[#1F242D]" toColor="to-[#1F242D]" />
                  <TestimonialsSection />
                  <GradientBridge fromColor="from-[#1F242D]" toColor="to-[#FAF7F2]" />
                  <ContactSection />
                </div>
              )}

              {currentPage === 'services' && (
                <div className="pt-20">
                  <ServicesSection />
                  <GradientBridge fromColor="from-[#FAF7F2]" toColor="to-[#FAF7F2]" />
                  <CalculatorSection />
                  <GradientBridge fromColor="from-[#FAF7F2]" toColor="to-[#1F242D]" />
                  <ContactSection />
                </div>
              )}

              {currentPage === 'courses' && (
                <div className="pt-20">
                  <CoursesSection />
                  <GradientBridge fromColor="from-[#1F242D]" toColor="to-[#1F242D]" />
                  <ContactSection />
                </div>
              )}

              {currentPage === 'calculator' && (
                <div className="pt-20">
                  <CalculatorSection />
                  <GradientBridge fromColor="from-[#FAF7F2]" toColor="to-[#FAF7F2]" />
                  <ServicesSection />
                  <GradientBridge fromColor="from-[#FAF7F2]" toColor="to-[#1F242D]" />
                  <ContactSection />
                </div>
              )}

              {currentPage === 'testimonials' && (
                <div className="pt-20">
                  <TestimonialsSection />
                  <GradientBridge fromColor="from-[#1F242D]" toColor="to-[#1F242D]" />
                  <ContactSection />
                </div>
              )}

              {currentPage === 'location' && (
                <div className="pt-20">
                  <LocationMapSection />
                  <GradientBridge fromColor="from-[#FAF7F2]" toColor="to-[#1F242D]" />
                  <ContactSection />
                </div>
              )}

              {currentPage === 'contact' && (
                <div className="pt-20">
                  <ContactSection />
                  <GradientBridge fromColor="from-[#1F242D]" toColor="to-[#FAF7F2]" />
                  <LocationMapSection />
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Bottom Navigation Pill (3 States: Institucional, Landing Page, Ver Valores) */}
      <FloatingPillNav
        appMode={appMode}
        onSelectMode={handleSelectMode}
        onOpenSalesOverlay={() => setIsSalesOverlayOpen(true)}
        isSalesOpen={isSalesOverlayOpen}
      />

      {/* Commercial Investment & Values Overlay Modal */}
      <SalesViewOverlay
        isOpen={isSalesOverlayOpen}
        onClose={() => setIsSalesOverlayOpen(false)}
      />

      {/* LGPD Cookie Consent Banner */}
      <LGPDConsent />

    </div>
  );
}

export default App;
