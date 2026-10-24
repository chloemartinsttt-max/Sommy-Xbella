import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { logoImg } from '../data/content';

interface MotionLoadingScreenProps {
  onComplete?: () => void;
  durationSeconds?: number;
}

export const MotionLoadingScreen: React.FC<MotionLoadingScreenProps> = ({
  onComplete,
  durationSeconds = 5,
}) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  // Status message rotation aligned with the 5-second journey
  const getStatusText = (prog: number) => {
    if (prog < 25) return 'Weaving Precision Braid Artistry...';
    if (prog < 55) return 'Sculpting Lash & Brow Elegance...';
    if (prog < 85) return 'Tailoring Bespoke Couture Silhouettes...';
    return 'Beauty In Every Detail · Welcome';
  };

  useEffect(() => {
    const totalMs = durationSeconds * 1000;
    const intervalMs = 40;
    const increment = 100 / (totalMs / intervalMs);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }, 350);
          return 100;
        }
        return next;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [durationSeconds, onComplete]);

  const handleSkip = () => {
    setIsDone(true);
    if (onComplete) onComplete();
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="motion-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: 'blur(8px)',
            transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#000000] text-white overflow-hidden select-none"
          style={{ willChange: 'opacity, transform' }}
        >
          {/* Ambient Radial Luxury Gold Glows */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 50% 48%, rgba(212, 166, 74, 0.18) 0%, rgba(226, 149, 120, 0.08) 35%, rgba(0, 0, 0, 0.95) 75%)',
            }}
          />

          {/* Animated Gold Ring Pulses in Background */}
          <motion.div
            animate={{
              scale: [1, 1.45, 1],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute w-[360px] h-[360px] sm:w-[500px] sm:h-[500px] rounded-full border border-[#D4A64A]/30 pointer-events-none"
          />

          <motion.div
            animate={{
              scale: [1.2, 1.7, 1.2],
              opacity: [0.08, 0.2, 0.08],
              rotate: 360,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute w-[440px] h-[440px] sm:w-[620px] sm:h-[620px] rounded-full border border-dashed border-[#E29578]/25 pointer-events-none"
          />

          {/* Top Bar with Skip Action */}
          <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-30">
            <button
              onClick={handleSkip}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-[#D4A64A]/30 text-[11px] uppercase tracking-widest text-[#E7C275] hover:text-white transition-all cursor-pointer backdrop-blur-md"
              aria-label="Skip Loading Screen"
            >
              <span>Skip Intro</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Central Showcase Content */}
          <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-xl mx-auto space-y-6 sm:space-y-7">
            {/* Logo with Shimmering Gold Aura */}
            <div className="relative">
              {/* Outer Glow Halo */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 25px rgba(212, 166, 74, 0.3)',
                    '0 0 55px rgba(212, 166, 74, 0.65)',
                    '0 0 25px rgba(212, 166, 74, 0.3)',
                  ],
                }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-[#D4A64A] via-[#FFF2D1] to-[#E29578] shadow-2xl flex items-center justify-center"
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-black p-0.5 border border-black">
                  <img
                    src={logoImg || '/images/logo.jpg'}
                    alt="SOMMY XBELLA Official Logo"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </motion.div>

              {/* Orbiting Sparkle Star */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-3 pointer-events-none flex items-start justify-center"
              >
                <div className="w-3 h-3 rounded-full bg-[#FFF2D1] shadow-[0_0_12px_#FFF2D1] -mt-1.5" />
              </motion.div>
            </div>

            {/* Brand Title: SOMMY XBELLA with Cinzel / Display Serif */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 15, letterSpacing: '0.15em' }}
                animate={{ opacity: 1, y: 0, letterSpacing: '0.28em' }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-brand-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[0.28em] text-transparent bg-clip-text bg-gradient-to-r from-[#D4A64A] via-[#FFF8E7] to-[#E29578] drop-shadow-[0_4px_16px_rgba(212,166,74,0.35)]"
              >
                SOMMY XBELLA
              </motion.h1>

              {/* Sub-label */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="text-[10px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-[#D8BDB0]/90"
              >
                Atelier · Hair · Lashes · Fashion
              </motion.p>
            </div>

            {/* Signature Slogan: Beauty In Every Detail with Stylized Playfair Serif */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="relative inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/[0.04] border border-[#D4A64A]/40 backdrop-blur-md shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-[#D4A64A] animate-pulse shrink-0" />
              <span className="font-serif italic font-medium text-base sm:text-xl md:text-2xl text-[#F9D2BD] drop-shadow-sm tracking-wide">
                &ldquo;Beauty In Every Detail&rdquo;
              </span>
              <Sparkles className="w-4 h-4 text-[#D4A64A] animate-pulse shrink-0" />
            </motion.div>

            {/* Luxury Hairline Progress Indicator */}
            <div className="w-full max-w-xs sm:max-w-sm pt-4 space-y-2.5">
              {/* Animated Progress Bar */}
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden p-[1px] border border-white/5">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#D47A5B] via-[#D4A64A] to-[#FFF2D1] shadow-[0_0_12px_#D4A64A]"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ ease: 'linear' }}
                />
              </div>

              {/* Status and Percentage */}
              <div className="flex items-center justify-between text-[11px] text-[#A68A7C] font-light">
                <motion.span
                  key={getStatusText(progress)}
                  initial={{ opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="truncate pr-2 italic font-serif text-[#D8BDB0]"
                >
                  {getStatusText(progress)}
                </motion.span>
                <span className="font-mono text-[#D4A64A] font-semibold shrink-0">
                  {Math.round(progress)}%
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Atelier Seal */}
          <div className="absolute bottom-6 sm:bottom-8 text-center z-20">
            <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-500 font-light">
              Crafted for Elegance & Royalty
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
