import React from 'react';
import { Sparkles, Scissors, Layers, ShieldCheck, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_US, StrengthItem } from '../data/content';

const iconMap = {
  Sparkles: Sparkles,
  Scissors: Scissors,
  Layers: Layers,
  ShieldCheck: ShieldCheck,
  HeartHandshake: HeartHandshake,
};

export const WhyChoose: React.FC = () => {
  return (
    <section className="py-24 bg-[#FBF0E8] dark:bg-[#050505] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.22em] text-[#A95437] dark:text-[#D4A64A] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#D47A5B] dark:text-[#D4A64A]" />
            <span>The SOMMY XBELLA Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2B160E] dark:text-white tracking-tight">
            Why Choose SOMMY XBELLA?
          </h2>
          <div className="w-16 h-0.5 bg-[#D47A5B] dark:bg-[#D4A64A] mx-auto my-3" />
          <p className="text-[#55392D] dark:text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
            We are dedicated to personal beauty and bespoke craftsmanship, combining hair styling,
            eyelash and brow definition, and custom dressmaking in an environment where you are truly valued.
          </p>
        </motion.div>

        {/* 5 Strengths Grid with Staggered Viewport Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item: StrengthItem, index: number) => {
            const IconComponent = iconMap[item.iconName] || Sparkles;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className={`p-8 rounded-3xl bg-[#FFFFFF] dark:bg-[#0E0E0E] border border-[#F0D5C4] dark:border-neutral-800 luxury-card-shadow flex flex-col space-y-5 transition-all duration-300 ${
                  index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Icon in refined warm peach ring */}
                <div className="w-14 h-14 rounded-2xl bg-[#FDF1E8] dark:bg-neutral-900 border border-[#E29578]/50 dark:border-neutral-700 flex items-center justify-center text-[#D47A5B] dark:text-[#D4A64A] shadow-xs shrink-0">
                  <IconComponent className="w-6 h-6 text-current" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-bold text-[#2B160E] dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#55392D] dark:text-neutral-300 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 text-xs text-[#846658] dark:text-neutral-400 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D47A5B] dark:bg-[#D4A64A]" />
                  <span>Curated for your comfort</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
