import React from 'react';
import { motion } from 'motion/react';
import { LayoutGrid, FileText, DollarSign, Sparkles } from 'lucide-react';
import { AppMode } from '../types';

interface FloatingPillNavProps {
  appMode: AppMode;
  onSelectMode: (mode: AppMode) => void;
  onOpenSalesOverlay: () => void;
  isSalesOpen: boolean;
}

export const FloatingPillNav: React.FC<FloatingPillNavProps> = ({
  appMode,
  onSelectMode,
  onOpenSalesOverlay,
  isSalesOpen,
}) => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-[calc(100vw-24px)] w-auto">
      <div className="relative p-1.5 rounded-full bg-[#1F242D]/95 border border-[#D49B28]/50 backdrop-blur-xl shadow-2xl flex items-center gap-1 glow-gold">
        
        {/* Tab 1: Institucional */}
        <button
          onClick={() => onSelectMode('institucional')}
          className={`relative px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 sm:gap-2 ${
            appMode === 'institucional' && !isSalesOpen
              ? 'text-[#1F242D]'
              : 'text-[#FAF7F2] hover:text-[#E8AC33]'
          }`}
        >
          {appMode === 'institucional' && !isSalesOpen && (
            <motion.div
              layoutId="activePillBg"
              className="absolute inset-0 rounded-full gold-btn-gradient -z-10 shadow-lg"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          <LayoutGrid className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
          <span>Institucional</span>
        </button>

        {/* Tab 2: Landing Page */}
        <button
          onClick={() => onSelectMode('landing')}
          className={`relative px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 sm:gap-2 ${
            appMode === 'landing' && !isSalesOpen
              ? 'text-[#1F242D]'
              : 'text-[#FAF7F2] hover:text-[#E8AC33]'
          }`}
        >
          {appMode === 'landing' && !isSalesOpen && (
            <motion.div
              layoutId="activePillBg"
              className="absolute inset-0 rounded-full gold-btn-gradient -z-10 shadow-lg"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
          <span>Landing Page</span>
        </button>

        {/* Tab 3: Ver Valores (Sales Matrix) */}
        <button
          onClick={onOpenSalesOverlay}
          className={`relative px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 sm:gap-2 ${
            isSalesOpen
              ? 'text-[#1F242D]'
              : 'text-[#E8AC33] hover:text-[#FAF7F2] bg-[#D49B28]/20 border border-[#D49B28]/50'
          }`}
        >
          {isSalesOpen && (
            <motion.div
              layoutId="activePillBg"
              className="absolute inset-0 rounded-full gold-btn-gradient -z-10 shadow-lg"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          <DollarSign className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-[#E8AC33]" />
          <span>Ver Valores</span>
          <span className="w-2 h-2 rounded-full bg-[#E8AC33] animate-ping hidden sm:block" />
        </button>

      </div>
    </div>
  );
};
