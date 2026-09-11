import React from 'react';

interface GradientBridgeProps {
  fromColor?: string; // e.g. 'from-[#FAF7F2]' or 'from-[#1F242D]'
  toColor?: string;   // e.g. 'to-[#1F242D]' or 'to-[#FAF7F2]'
  height?: string;
  className?: string;
  showOrbs?: boolean;
}

export const GradientBridge: React.FC<GradientBridgeProps> = ({
  fromColor = 'from-[#FAF7F2]',
  toColor = 'to-[#1F242D]',
  height = 'h-16 sm:h-24',
  className = '',
  showOrbs = true
}) => {
  return (
    <div className={`relative w-full overflow-hidden pointer-events-none select-none z-10 ${height} ${className}`}>
      {/* Smooth gradient transition directly matching section colors */}
      <div className={`absolute inset-0 bg-gradient-to-b ${fromColor} via-[#D49B28]/10 ${toColor}`} />
      
      {showOrbs && (
        <div className="absolute inset-0 flex items-center justify-center opacity-25 pointer-events-none">
          <div className="w-[500px] h-16 bg-[#D49B28]/20 rounded-full blur-2xl transform -rotate-2" />
        </div>
      )}
    </div>
  );
};


