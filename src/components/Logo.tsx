import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'lightText' | 'darkText'; // 'lightText' for dark backgrounds, 'darkText' for cream backgrounds
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'lightText',
  size = 'md',
  showSubtitle = true,
}) => {
  // Dimensions according to size
  const sizeMap = {
    sm: { icon: 36, text: 'text-xs', sub: 'text-[8px]', titleGap: 'gap-2' },
    md: { icon: 48, text: 'text-base', sub: 'text-[10px]', titleGap: 'gap-3' },
    lg: { icon: 64, text: 'text-xl', sub: 'text-xs', titleGap: 'gap-4' },
    xl: { icon: 88, text: 'text-2xl sm:text-3xl', sub: 'text-xs sm:text-sm', titleGap: 'gap-5' },
  };

  const currentSize = sizeMap[size];
  const textColor = variant === 'darkText' ? 'text-[#1F242D]' : 'text-slate-100';

  return (
    <div className={`flex items-center ${currentSize.titleGap} ${className} select-none`}>
      {/* High-Quality Official Logo Image Seal */}
      <div
        className="relative shrink-0 flex items-center justify-center transition-transform hover:scale-105"
        style={{ width: currentSize.icon, height: currentSize.icon }}
      >
        <img
          src="./logo.jpeg"
          alt="Logo Dra. Aleandra Almeida Ramos"
          className="w-full h-full rounded-full object-cover shadow-md border border-[#D49B28]/60 p-0.5 bg-[#FAF7F2]"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span
          className={`font-serif-gold font-bold tracking-[0.12em] uppercase leading-tight ${currentSize.text} ${textColor}`}
        >
          Aleandra Almeida Ramos
        </span>
        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="h-[1px] w-3 bg-[#D49B28]" />
            <span
              className={`font-sans tracking-[0.18em] uppercase font-semibold text-[#D49B28] ${currentSize.sub}`}
            >
              Advogada Previdenciarista
            </span>
            <span className="h-[1px] w-3 bg-[#D49B28]" />
          </div>
        )}
      </div>
    </div>
  );
};
