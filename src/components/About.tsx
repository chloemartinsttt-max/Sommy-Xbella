import React from 'react';
import { Sparkles, CheckCircle2, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { getWhatsAppUrl, sommyPhotoImg, logoImg } from '../data/content';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#FFF7F2] dark:bg-[#000000] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Sommy - Founder & Stylist Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative order-2 lg:order-1"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative layered chic frames */}
              <div
                className="absolute -inset-3 sm:-inset-4 rounded-3xl border-2 border-dashed border-[#E29578]/40 dark:border-[#D4A64A]/30 -rotate-2 pointer-events-none transition-transform duration-500"
                aria-hidden="true"
              />
              <div
                className="absolute -inset-1.5 sm:-inset-2 rounded-3xl border border-[#D47A5B]/30 dark:border-neutral-800 rotate-1 pointer-events-none"
                aria-hidden="true"
              />

              {/* Main Chic Photo Container */}
              <div className="relative rounded-3xl overflow-hidden bg-[#FDF1E8] dark:bg-neutral-950 border-2 border-[#E29578]/50 dark:border-neutral-800 shadow-2xl aspect-square sm:aspect-[4/4.5] group">
                <img
                  src={sommyPhotoImg || '/assets/aistudio/762944462_1632041691862783_3361191198018152404_n_69bd342d.jpg'}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== '/assets/aistudio/762944462_1632041691862783_3361191198018152404_n_69bd342d.jpg') {
                      target.src = '/assets/aistudio/762944462_1632041691862783_3361191198018152404_n_69bd342d.jpg';
                    }
                  }}
                  alt="Sommy - Founder and Stylist behind SOMMY XBELLA"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Subtle soft vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent pointer-events-none" />

                {/* Cute Top Floating Badges */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 dark:bg-black/90 backdrop-blur-md border border-[#F0D5C4] dark:border-neutral-800 text-[11px] font-semibold text-[#A95437] dark:text-[#D4A64A] shadow-md tracking-wider uppercase">
                    <Sparkles className="w-3.5 h-3.5 text-[#D47A5B] dark:text-[#D4A64A]" />
                    <span>Meet Sommy</span>
                  </div>
                </div>

                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#D47A5B]/90 dark:bg-[#D4A64A]/90 text-white dark:text-black text-[10px] font-bold tracking-widest uppercase shadow-sm">
                    <Heart className="w-3 h-3 fill-current" />
                    <span>Founder</span>
                  </span>
                </div>

                {/* Atelier caption with Logo */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 sm:p-4 rounded-2xl bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-md border border-[#F0D5C4] dark:border-neutral-800 shadow-xl flex items-center gap-3.5">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-[#D47A5B] dark:border-[#D4A64A] overflow-hidden bg-black shrink-0 shadow-sm">
                    <img
                      src={logoImg || '/images/logo.jpg'}
                      alt="SOMMY XBELLA Official Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-xs uppercase tracking-wider text-[#A95437] dark:text-[#D4A64A] font-bold truncate">
                        Sommy • Creative Director
                      </p>
                      <span className="text-[10px] text-[#A95437] dark:text-[#D4A64A] font-medium hidden sm:inline">
                        ✨ SOMMY XBELLA
                      </span>
                    </div>
                    <p className="text-xs text-[#55392D] dark:text-neutral-300 mt-0.5 font-light leading-snug truncate">
                      Braids Stylist • Lash Artist • Bespoke Fashion
                    </p>
                    <p className="text-[10px] font-serif italic text-[#D47A5B] dark:text-[#D4A64A] mt-0.5">
                      &ldquo;Beauty In Every Detail&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Brand Story & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col space-y-6 text-left order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FFFFFF]/90 dark:bg-neutral-900/90 border border-[#F0D5C4] dark:border-neutral-800 text-xs uppercase tracking-[0.22em] text-[#A95437] dark:text-[#D4A64A] font-semibold w-fit shadow-xs">
              <div className="w-4 h-4 rounded-full overflow-hidden border border-[#D47A5B] dark:border-[#D4A64A] shrink-0">
                <img src={logoImg || '/images/logo.jpg'} alt="" className="w-full h-full object-cover" />
              </div>
              <span>About SOMMY XBELLA</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2B160E] dark:text-white leading-[1.18] tracking-tight">
              Your Beauty, Your Style,{' '}
              <span className="italic font-normal text-[#D47A5B] dark:text-[#D4A64A] block sm:inline">
                Your Confidence.
              </span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#55392D] dark:text-neutral-300 font-light leading-relaxed">
              <p>
                Welcome to <strong className="text-[#2B160E] dark:text-white font-semibold">SOMMY XBELLA</strong>,
                founded and curated by Sommy — an expert hair stylist, lash technician, and custom fashion designer
                dedicated to making you look and feel effortlessly captivating.
              </p>
              <p>
                We bring together hair artistry and bespoke fashion under one roof: from neat, pain-free knotless braids
                and show-stopping hair styling to wispy cluster lashes, precision eyebrow shaping, and custom dressmaking
                tailored to celebrate your unique curves and silhouette.
              </p>
              <p>
                Whether you are stepping into a wedding, celebrating a birthday, preparing for an editorial shoot, or
                refreshing your signature look, every appointment is delivered with attentive care, luxury finesse, and
                personalized perfection.
              </p>
            </div>

            {/* Chic Quote Callout */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/80 dark:bg-neutral-950/80 border-l-4 border-[#D47A5B] dark:border-[#D4A64A] border-y border-r border-[#F0D5C4] dark:border-neutral-800 shadow-sm backdrop-blur-xs">
              <p className="text-sm sm:text-base italic font-serif text-[#2B160E] dark:text-neutral-200">
                &ldquo;Every woman deserves to experience the confidence that comes with impeccable styling. We don&rsquo;t just do beauty — we create moments of radiant self-love.&rdquo;
              </p>
              <div className="flex flex-wrap items-center justify-between gap-2 mt-2 pt-2 border-t border-[#F0D5C4]/60 dark:border-neutral-800/60">
                <p className="text-xs font-semibold text-[#A95437] dark:text-[#D4A64A] uppercase tracking-wider">
                  — Sommy, Founder & Master Stylist
                </p>
                <span className="font-serif italic text-xs text-[#D47A5B] dark:text-[#D4A64A] font-medium">
                  &ldquo;Beauty In Every Detail&rdquo;
                </span>
              </div>
            </div>

            {/* Core Values Bullets */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2.5 text-sm text-[#2B160E] dark:text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-[#D47A5B] dark:text-[#D4A64A] shrink-0" />
                <span>Client-Centered Consultations</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#2B160E] dark:text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-[#D47A5B] dark:text-[#D4A64A] shrink-0" />
                <span>Impeccable Finishing & Neatness</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#2B160E] dark:text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-[#D47A5B] dark:text-[#D4A64A] shrink-0" />
                <span>Bespoke Fashion & Beauty Together</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#2B160E] dark:text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-[#D47A5B] dark:text-[#D4A64A] shrink-0" />
                <span>Warm, Respectful Studio Experience</span>
              </div>
            </div>

            {/* Direct Connect Buttons with Motion */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={getWhatsAppUrl('Hello Sommy, I read your story on the SOMMY XBELLA website and would love to consult with you!')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#D47A5B] dark:bg-[#D4A64A] text-white dark:text-black font-semibold text-xs tracking-wider uppercase hover:bg-[#BF6545] dark:hover:bg-[#E7C275] active:bg-[#A95437] transition-colors shadow-md"
              >
                <span>Chat with Sommy</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#booking"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#E29578] dark:border-neutral-700 text-[#2B160E] dark:text-white hover:text-[#D47A5B] dark:hover:text-[#D4A64A] hover:border-[#D47A5B] dark:hover:border-[#D4A64A] hover:bg-[#FFFFFF] dark:hover:bg-neutral-900 text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                <span>Schedule a Visit</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
