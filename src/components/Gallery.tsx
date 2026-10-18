import React, { useState } from 'react';
import { Maximize2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS, GalleryItem } from '../data/content';
import { LightboxModal } from './LightboxModal';

type FilterCategory = 'all' | 'hair' | 'lashes-brows' | 'fashion';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  };

  return (
    <section id="gallery" className="py-24 bg-[#FFF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-4"
        >
          <div className="inline-flex items-center justify-center gap-1.5 text-xs uppercase tracking-[0.22em] text-[#A95437] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#D47A5B]" />
            <span>Our Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2B160E] tracking-tight">
            Our Work in the Spotlight
          </h2>
          <div className="w-16 h-0.5 bg-[#D47A5B] mx-auto my-3" />
          <p className="text-[#55392D] text-base sm:text-lg font-light leading-relaxed">
            Explore a curated selection of our braiding artistry, cluster lash enhancements,
            brow precision, and custom-tailored occasion attire. Click any image for a closer view.
          </p>
        </motion.div>

        {/* Filter Controls (Interactive Segmented Buttons with Motion Layout) */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-[#FDF1E8] border border-[#F0D5C4] overflow-x-auto max-w-full shadow-inner">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`relative px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap shrink-0 ${
                activeFilter === 'all'
                  ? 'bg-[#D47A5B] text-white font-semibold shadow-sm'
                  : 'text-[#55392D] hover:text-[#2B160E]'
              }`}
            >
              All Styles
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('hair')}
              className={`relative px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap shrink-0 ${
                activeFilter === 'hair'
                  ? 'bg-[#D47A5B] text-white font-semibold shadow-sm'
                  : 'text-[#55392D] hover:text-[#2B160E]'
              }`}
            >
              Braids & Hair
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('lashes-brows')}
              className={`relative px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap shrink-0 ${
                activeFilter === 'lashes-brows'
                  ? 'bg-[#D47A5B] text-white font-semibold shadow-sm'
                  : 'text-[#55392D] hover:text-[#2B160E]'
              }`}
            >
              Lashes & Brows
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('fashion')}
              className={`relative px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap shrink-0 ${
                activeFilter === 'fashion'
                  ? 'bg-[#D47A5B] text-white font-semibold shadow-sm'
                  : 'text-[#55392D] hover:text-[#2B160E]'
              }`}
            >
              Custom Outfits
            </button>
          </div>
        </div>

        {/* Gallery Grid with Animated Transitions */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedItem(item)}
                className="group relative rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#F0D5C4] cursor-pointer luxury-card-shadow"
              >
                <div className="aspect-[3/4] overflow-hidden bg-[#FDF1E8]">
                  <img
                    src={item.image}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (item.fallbackImage && target.src !== item.fallbackImage) {
                        target.src = item.fallbackImage;
                      }
                    }}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>

                {/* Hover overlay with details & expand icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B160E]/90 via-[#2B160E]/30 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="space-y-1 transform sm:translate-y-2 sm:group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[10px] uppercase tracking-wider text-[#F9D2BD] font-semibold block">
                      {item.categoryLabel}
                    </span>
                    <h3 className="text-base font-serif font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-xs text-[#FFF7F2] pt-2 border-t border-white/20">
                    <span className="text-[11px] text-[#F9D2BD]">Tap to view</span>
                    <div className="p-1.5 rounded-full bg-[#D47A5B] text-white shadow-sm">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedItem}
        items={filteredItems}
        isOpen={Boolean(selectedItem)}
        onClose={() => setSelectedItem(null)}
        onSelectNext={handleNext}
        onSelectPrev={handlePrev}
      />
    </section>
  );
};
