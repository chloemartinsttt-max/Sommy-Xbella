import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { WHATSAPP_BASE_URL } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip on hover/focus */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.18 }}
            className="hidden sm:block px-3.5 py-1.5 rounded-full bg-[#FFFFFF] dark:bg-[#0A0A0A] text-[#2B160E] dark:text-white border border-[#F0D5C4] dark:border-neutral-800 text-xs font-medium shadow-xl pointer-events-none"
          >
            Chat with SOMMY XBELLA
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        {/* Soft Ambient Cinematic Pulse Ring */}
        <motion.div
          animate={{
            scale: [1, 1.45, 1],
            opacity: [0.35, 0, 0.35],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 rounded-full bg-[#25D366] pointer-events-none"
        />

        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          href={WHATSAPP_BASE_URL}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onFocus={() => setShowTooltip(true)}
          onBlur={() => setShowTooltip(false)}
          className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:bg-[#20ba59] active:scale-95 transition-colors focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 group"
          aria-label="Direct WhatsApp Chat with SOMMY XBELLA"
        >
          <MessageCircle className="w-7 h-7 fill-current group-hover:scale-110 transition-transform duration-200" />
        </motion.a>
      </motion.div>
    </div>
  );
};
