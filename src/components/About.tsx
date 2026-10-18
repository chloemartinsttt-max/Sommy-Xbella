import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { getWhatsAppUrl } from '../data/content';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#FFF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Stylist / Atelier Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative order-2 lg:order-1"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative offset peach frame */}
              <div
                className="absolute -inset-3 sm:-inset-4 rounded-3xl border border-[#E29578]/40 rotate-1 pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative rounded-3xl overflow-hidden bg-[#FDF1E8] border-2 border-[#E29578]/50 shadow-xl aspect-[4/5] group">
                <img
                  src="/src/assets/images/about_stylist_portrait_1792341041595.jpg"
                  alt="SOMMY XBELLA founder and stylist in the beauty and styling atelier"
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B160E]/70 via-transparent to-transparent pointer-events-none" />

                {/* Atelier caption */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#FFFFFF]/90 backdrop-blur-md border border-[#F0D5C4] shadow-md">
                  <p className="text-xs uppercase tracking-wider text-[#A95437] font-bold">
                    The SOMMY XBELLA Atelier
                  </p>
                  <p className="text-xs text-[#55392D] mt-0.5">
                    Where beauty styling and custom fashion meet under one roof.
                  </p>
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
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.22em] text-[#A95437] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#D47A5B]" />
              <span>About SOMMY XBELLA</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2B160E] leading-[1.18] tracking-tight">
              Your Beauty, Your Style,{' '}
              <span className="italic font-normal text-[#D47A5B] block sm:inline">
                Your Confidence.
              </span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#55392D] font-light leading-relaxed">
              <p>
                Welcome to <strong className="text-[#2B160E] font-semibold">SOMMY XBELLA</strong>,
                a dedicated beauty and styling destination founded on the belief that looking your best
                should feel effortless, luxurious, and uniquely personal.
              </p>
              <p>
                We specialize in complete personal transformations: from meticulously crafted braids and
                polished hair styling to fluttery cluster lashes, precision eyebrow shaping, and bespoke
                dressmaking and custom outfits designed around your distinct silhouette.
              </p>
              <p>
                Whether you are preparing for a wedding, milestone birthday, special celebration, or
                simply elevating your everyday beauty routine, we provide an unhurried, welcoming atmosphere
                where your comfort and personal aesthetic always come first.
              </p>
            </div>

            {/* Core Values Bullets */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2.5 text-sm text-[#2B160E]">
                <CheckCircle2 className="w-4 h-4 text-[#D47A5B] shrink-0" />
                <span>Client-Centered Consultations</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#2B160E]">
                <CheckCircle2 className="w-4 h-4 text-[#D47A5B] shrink-0" />
                <span>Impeccable Finishing & Neatness</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#2B160E]">
                <CheckCircle2 className="w-4 h-4 text-[#D47A5B] shrink-0" />
                <span>Bespoke Fashion & Beauty Together</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#2B160E]">
                <CheckCircle2 className="w-4 h-4 text-[#D47A5B] shrink-0" />
                <span>Warm, Respectful Studio Experience</span>
              </div>
            </div>

            {/* Direct Connect Buttons with Motion */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={getWhatsAppUrl('Hello SOMMY XBELLA, I read your story on the website and would love to consult with you!')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#D47A5B] text-white font-semibold text-xs tracking-wider uppercase hover:bg-[#BF6545] active:bg-[#A95437] transition-colors shadow-md"
              >
                <span>Chat with SOMMY XBELLA</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#booking"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#E29578] text-[#2B160E] hover:text-[#D47A5B] hover:border-[#D47A5B] hover:bg-[#FFFFFF] text-xs font-semibold tracking-wider uppercase transition-colors"
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
