import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GalleryItem, getWhatsAppUrl } from '../data/content';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  isOpen: boolean;
  onClose: () => void;
  onSelectNext: () => void;
  onSelectPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  isOpen,
  onClose,
  onSelectNext,
  onSelectPrev,
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onSelectNext();
      if (e.key === 'ArrowLeft') onSelectPrev();
    },
    [isOpen, onClose, onSelectNext, onSelectPrev]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const whatsappUrl = getWhatsAppUrl(
    `Hello SOMMY XBELLA, I saw your portfolio photo "${item.title}" (${item.categoryLabel}) and I'd like to book a similar style!`
  );

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="lightbox-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#2B160E]/75 backdrop-blur-md"
        onClick={onClose}
      >
        {/* Modal Dialog Content with spring pop-in */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-4xl w-full bg-[#FFFFFF] dark:bg-[#0A0A0A] rounded-3xl border border-[#F0D5C4] dark:border-neutral-800 overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Control Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#F0D5C4] dark:border-neutral-800 bg-[#FFF7F2] dark:bg-black">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-[#A95437] dark:text-[#D4A64A] font-bold">
                {item.categoryLabel}
              </span>
              <span className="text-[#C58550] dark:text-[#D4A64A]" aria-hidden="true">·</span>
              <span className="text-xs text-[#846658] dark:text-neutral-400">
                {currentIndex + 1} of {items.length}
              </span>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={onClose}
              className="p-2 rounded-full text-[#2B160E] dark:text-white hover:text-[#D47A5B] dark:hover:text-[#D4A64A] hover:bg-[#FDF1E8] dark:hover:bg-neutral-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D47A5B] dark:focus:ring-[#D4A64A]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Media Frame with Prev/Next Controls */}
          <div className="relative flex-grow flex items-center justify-center bg-[#2B160E] dark:bg-black overflow-hidden min-h-[300px] sm:min-h-[420px]">
            <motion.img
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={item.image}
              onError={(e) => {
                const target = e.currentTarget;
                if (item.fallbackImage && target.src !== item.fallbackImage) {
                  target.src = item.fallbackImage;
                }
              }}
              alt={item.title}
              className="max-h-[62vh] w-auto max-w-full object-contain mx-auto"
              referrerPolicy="no-referrer"
            />

            {/* Navigation Controls */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelectPrev();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-[#FFFFFF]/90 dark:bg-black/90 text-[#2B160E] dark:text-white hover:text-[#D47A5B] dark:hover:text-[#D4A64A] hover:bg-[#FFFFFF] dark:hover:bg-neutral-800 border border-transparent dark:border-neutral-800 transition-all focus:outline-none shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelectNext();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-[#FFFFFF]/90 dark:bg-black/90 text-[#2B160E] dark:text-white hover:text-[#D47A5B] dark:hover:text-[#D4A64A] hover:bg-[#FFFFFF] dark:hover:bg-neutral-800 border border-transparent dark:border-neutral-800 transition-all focus:outline-none shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Footer Details & Action CTA */}
          <div className="p-5 sm:p-6 bg-[#FFFFFF] dark:bg-[#0A0A0A] border-t border-[#F0D5C4] dark:border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1 max-w-xl">
              <h3 id="lightbox-title" className="text-lg sm:text-xl font-serif font-bold text-[#2B160E] dark:text-white">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#55392D] dark:text-neutral-300 font-light">
                {item.description}
              </p>
            </div>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white font-medium text-xs tracking-wider uppercase hover:bg-[#20ba59] transition-colors shrink-0 shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book A Look Like This</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
