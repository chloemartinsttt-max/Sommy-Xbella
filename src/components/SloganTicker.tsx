import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface SloganTickerProps {
  variant?: 'primary' | 'gold' | 'subtle';
  className?: string;
}

export const SloganTicker: React.FC<SloganTickerProps> = ({ variant = 'primary', className = '' }) => {
  const items = [
    { text: 'Beauty In Every Detail', highlight: true },
    { text: 'SOMMY XBELLA', highlight: false },
    { text: 'Beauty In Every Detail', highlight: true },
    { text: 'Luxury Knotless Braids', highlight: false },
    { text: 'Beauty In Every Detail', highlight: true },
    { text: 'Fluttery Cluster Lashes', highlight: false },
    { text: 'Beauty In Every Detail', highlight: true },
    { text: 'Bespoke Custom Couture', highlight: false },
    { text: 'Beauty In Every Detail', highlight: true },
    { text: 'Precision Eyebrow Grooming', highlight: false },
  ];

  // Duplicate for seamless infinite loop
  const duplicatedItems = [...items, ...items, ...items];

  const getVariantStyles = () => {
    switch (variant) {
      case 'gold':
        return 'bg-gradient-to-r from-[#D47A5B] via-[#E29578] to-[#D4A64A] text-white dark:from-[#D4A64A] dark:via-[#F3D592] dark:to-[#C69637] dark:text-black py-3.5 shadow-md';
      case 'subtle':
        return 'bg-[#FDF1E8]/90 dark:bg-[#080808] border-y border-[#F0D5C4] dark:border-neutral-800 text-[#2B160E] dark:text-neutral-200 py-3';
      case 'primary':
      default:
        return 'bg-[#2B160E] dark:bg-[#000000] border-y border-[#D47A5B]/40 dark:border-[#D4A64A]/30 text-[#FFF7F2] py-3.5 shadow-sm';
    }
  };

  return (
    <div
      className={`relative w-full overflow-hidden select-none z-20 group transition-colors duration-300 ${getVariantStyles()} ${className}`}
      aria-label="SOMMY XBELLA Slogan: Beauty In Every Detail"
    >
      {/* Soft gradient edge masks for luxury fade-out */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#2B160E] dark:from-black to-transparent z-10 pointer-events-none opacity-80" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#2B160E] dark:from-black to-transparent z-10 pointer-events-none opacity-80" />

      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 32,
        }}
        className="flex items-center whitespace-nowrap will-change-transform"
      >
        {duplicatedItems.map((item, index) => (
          <div key={index} className="inline-flex items-center mx-5 sm:mx-7 gap-3 sm:gap-4 shrink-0">
            {item.highlight ? (
              <span className="inline-flex items-center gap-2 font-serif italic text-sm sm:text-base md:text-lg tracking-wide text-[#F9D2BD] dark:text-[#D4A64A] font-medium drop-shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#D47A5B] dark:text-[#E7C275] animate-pulse shrink-0" />
                <span>&ldquo;{item.text}&rdquo;</span>
              </span>
            ) : (
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.24em] text-[#D8BDB0]/90 dark:text-neutral-300 font-semibold font-brand-display">
                {item.text}
              </span>
            )}
            <span className="text-xs sm:text-sm text-[#D47A5B] dark:text-[#D4A64A] opacity-70 font-serif" aria-hidden="true">
              ✦
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
