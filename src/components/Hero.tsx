import React from 'react';
import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { getWhatsAppUrl, heroBraidsImg, logoImg } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-20 md:pb-28 bg-[#FFF7F2] dark:bg-[#000000] overflow-hidden transition-colors duration-300">
      {/* Decorative ambient background glows */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.6, 0.35],
          x: [-15, 15, -15],
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#FDE2D2] dark:bg-[#D4A64A]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.45, 0.25],
          x: [12, -12, 12],
          y: [8, -8, 8],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#FCD7C2] dark:bg-neutral-900/40 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Brand Message & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left"
          >
            {/* Elegant Tagline with Brand Logo */}
            <div className="flex flex-wrap items-center gap-3">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FFFFFF]/90 dark:bg-neutral-900/90 backdrop-blur-xs border border-[#F0D5C4] dark:border-neutral-800 shadow-xs w-fit"
              >
                <div className="w-5 h-5 rounded-full overflow-hidden border border-[#D47A5B] dark:border-[#D4A64A] shrink-0 bg-black">
                  <img src={logoImg || '/images/logo.jpg'} alt="SOMMY XBELLA" className="w-full h-full object-cover" />
                </div>
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#A95437] dark:text-[#D4A64A]">
                  SOMMY XBELLA Atelier
                </span>
              </motion.div>

              {/* Slogan Motion Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#FDF1E8] via-[#FFF7F2] to-[#FCE8DC] dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900 border border-[#E29578]/50 dark:border-[#D4A64A]/40 shadow-xs cursor-default"
              >
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="inline-block"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#D47A5B] dark:text-[#D4A64A]" />
                </motion.span>
                <span className="font-serif italic font-medium text-xs sm:text-sm tracking-wide text-[#A95437] dark:text-[#D4A64A]">
                  &ldquo;Beauty In Every Detail&rdquo;
                </span>
              </motion.div>
            </div>

            {/* Hero Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#2B160E] dark:text-white leading-[1.14] tracking-tight"
            >
              Beauty That Speaks{' '}
              <span className="italic font-normal text-[#D47A5B] dark:text-[#D4A64A] block sm:inline">
                for Itself.
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-[#55392D] dark:text-neutral-300 leading-relaxed max-w-2xl font-light"
            >
              From beautifully crafted braids to stunning lashes and custom outfits,
              <strong className="text-[#2B160E] dark:text-white font-semibold"> SOMMY XBELLA </strong>
              helps you express your beauty and personal style with effortless confidence — ensuring
              <span className="italic font-serif font-normal text-[#D47A5B] dark:text-[#D4A64A]"> Beauty In Every Detail</span>.
            </motion.p>

            {/* CTA Action Buttons with micro-motions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#booking"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#D47A5B] dark:bg-[#D4A64A] text-white dark:text-black font-semibold text-sm tracking-wider uppercase hover:bg-[#BF6545] dark:hover:bg-[#E7C275] active:bg-[#A95437] transition-all duration-200 shadow-md hover:shadow-xl whitespace-nowrap"
              >
                <span>Book Your Appointment</span>
                <ArrowRight className="w-4 h-4 text-current" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-[#E29578] dark:border-neutral-700 bg-[#FFFFFF]/70 dark:bg-neutral-900/80 backdrop-blur-xs text-[#2B160E] dark:text-white hover:text-[#D47A5B] dark:hover:text-[#D4A64A] hover:border-[#D47A5B] dark:hover:border-[#D4A64A] hover:bg-[#FFFFFF] dark:hover:bg-neutral-800 transition-all duration-200 text-sm font-medium tracking-wide shadow-xs whitespace-nowrap"
              >
                <span>Explore Our Services</span>
              </motion.a>
            </motion.div>

            {/* Clean Quick Proof / Services List */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-6 border-t border-[#F0D5C4] dark:border-neutral-800 flex flex-wrap items-center gap-y-2 gap-x-4 sm:gap-x-6 text-xs text-[#846658] dark:text-neutral-400"
            >
              <span className="font-medium">Braids & Hair Styling</span>
              <span className="text-[#D47A5B] dark:text-[#D4A64A]" aria-hidden="true">·</span>
              <span className="font-medium">Cluster Lashes</span>
              <span className="text-[#D47A5B] dark:text-[#D4A64A]" aria-hidden="true">·</span>
              <span className="font-medium">Eyebrow Trimming</span>
              <span className="text-[#D47A5B] dark:text-[#D4A64A]" aria-hidden="true">·</span>
              <span className="font-medium">Custom Outfits</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Hairstyle Photograph */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer Decorative Peach Frame Ring */}
              <motion.div
                animate={{ rotate: [-1.5, 1.5, -1.5], scale: [1, 1.015, 1] }}
                transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -inset-3 sm:-inset-4 rounded-[2rem] border border-[#E29578]/40 dark:border-neutral-800 pointer-events-none"
                aria-hidden="true"
              />

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden bg-[#FDF1E8] dark:bg-neutral-950 border-2 border-[#E29578]/50 dark:border-neutral-800 shadow-2xl aspect-[3/4] group">
                <img
                  src={heroBraidsImg || '/images/hero_model_braids_1792441907713.jpg'}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== '/images/hero_model_braids_1792441907713.jpg') {
                      target.src = '/images/hero_model_braids_1792441907713.jpg';
                    }
                  }}
                  alt="Model showcasing signature SOMMY XBELLA goddess braids with golden accents"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Official Brand Seal Badge with continuous gentle glow */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [1, 1.03, 1],
                    boxShadow: [
                      '0 0 10px rgba(212,166,74,0.25)',
                      '0 0 22px rgba(212,166,74,0.55)',
                      '0 0 10px rgba(212,166,74,0.25)',
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-[#D4A64A]/60 shadow-lg text-white"
                >
                  <img
                    src={logoImg || '/images/logo.jpg'}
                    alt="SOMMY XBELLA Certified"
                    className="w-5 h-5 rounded-full object-cover border border-[#D4A64A]"
                  />
                  <span className="text-[10px] font-brand-display tracking-widest text-[#FFF4E4] font-semibold">
                    SOMMY XBELLA
                  </span>
                </motion.div>

                {/* Subtle soft gradient scrim at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B160E]/70 dark:from-black/90 via-transparent to-transparent pointer-events-none" />

                {/* Image Overlay Glass Badge */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#FFFFFF]/90 dark:bg-[#0A0A0A]/90 backdrop-blur-md border border-[#F0D5C4] dark:border-neutral-800 shadow-lg flex items-center justify-between"
                >
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#A95437] dark:text-[#D4A64A] font-bold">
                      Signature Styling
                    </p>
                    <p className="text-sm font-serif font-bold text-[#2B160E] dark:text-white">
                      Knotless Braids & Glow
                    </p>
                    <p className="text-[10px] font-serif italic text-[#D47A5B] dark:text-[#D4A64A] mt-0.5">
                      &ldquo;Beauty In Every Detail&rdquo;
                    </p>
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={getWhatsAppUrl('Hello SOMMY XBELLA, I love the signature knotless braids look from your hero section. Can I book this style?')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-[#25D366] text-white hover:bg-[#20ba59] transition-colors shadow-sm"
                    aria-label="Inquire about this style on WhatsApp"
                    title="Book this style on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
