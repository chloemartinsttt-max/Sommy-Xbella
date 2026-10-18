import React from 'react';
import { MessageCircle, Check, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES, getWhatsAppUrl, ServiceItem } from '../data/content';

interface ServicesProps {
  onSelectServiceForBooking?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForBooking }) => {
  return (
    <section id="services" className="py-24 bg-[#FBF0E8] dark:bg-[#050505] relative overflow-hidden transition-colors duration-300">
      {/* Delicate hairline borders */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#E29578]/30 dark:via-neutral-800 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#E29578]/30 dark:via-neutral-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4"
        >
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.22em] text-[#A95437] dark:text-[#D4A64A] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#D47A5B] dark:text-[#D4A64A]" />
            <span>Crafted for Elegance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2B160E] dark:text-white tracking-tight">
            Our Signature Services
          </h2>
          <div className="w-16 h-0.5 bg-[#D47A5B] dark:bg-[#D4A64A] mx-auto my-3" />
          <p className="text-[#55392D] dark:text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
            Every service is tailored with intentional artistry, meticulous detail,
            and gentle care to accentuate your natural beauty and individual style.
          </p>
        </motion.div>

        {/* 4 Service Cards Grid with Staggered Viewport Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES.map((service: ServiceItem, index: number) => {
            const whatsappLink = getWhatsAppUrl(service.whatsappMessage);

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group rounded-3xl bg-[#FFFFFF] dark:bg-[#0E0E0E] border border-[#F0D5C4] dark:border-neutral-800 overflow-hidden flex flex-col luxury-card-shadow transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#FDF1E8] dark:bg-neutral-950">
                  <img
                    src={service.image}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (service.fallbackImage && target.src !== service.fallbackImage) {
                        target.src = service.fallbackImage;
                      }
                    }}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Clean unboxed index chip */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#FFFFFF]/90 dark:bg-black/90 backdrop-blur-md border border-[#F0D5C4] dark:border-neutral-800 text-[11px] font-semibold text-[#A95437] dark:text-[#D4A64A] uppercase tracking-wider shadow-sm">
                    0{index + 1} · Service
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-serif font-bold text-[#2B160E] dark:text-white group-hover:text-[#D47A5B] dark:group-hover:text-[#D4A64A] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm sm:text-base text-[#55392D] dark:text-neutral-300 leading-relaxed font-light">
                      {service.description}
                    </p>

                    {/* Features / Highlights */}
                    <div className="pt-4 space-y-2 border-t border-[#F5E5DC] dark:border-neutral-800">
                      {service.highlights.map((item, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#55392D] dark:text-neutral-300">
                          <span className="w-4 h-4 rounded-full bg-[#FDF1E8] dark:bg-neutral-900 border border-[#E29578]/50 dark:border-neutral-700 flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 text-[#D47A5B] dark:text-[#D4A64A]" />
                          </span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking Actions */}
                  <div className="pt-6 border-t border-[#F5E5DC] dark:border-neutral-800 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    {/* Primary: WhatsApp with pre-filled message */}
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-full bg-[#D47A5B] dark:bg-[#D4A64A] text-white dark:text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#BF6545] dark:hover:bg-[#E7C275] active:bg-[#A95437] transition-colors shadow-sm text-center whitespace-nowrap"
                    >
                      <MessageCircle className="w-4 h-4 text-current" />
                      <span>Book This Service</span>
                    </motion.a>

                    {/* Secondary: Scroll to appointment form and prefill */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={() => {
                        if (onSelectServiceForBooking) {
                          onSelectServiceForBooking(service.name);
                        }
                        const elem = document.getElementById('booking');
                        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-full border border-[#E29578] dark:border-neutral-700 text-[#2B160E] dark:text-white hover:text-[#D47A5B] dark:hover:text-[#D4A64A] hover:border-[#D47A5B] dark:hover:border-[#D4A64A] hover:bg-[#FFF7F2] dark:hover:bg-neutral-800 text-xs font-medium tracking-wide transition-colors whitespace-nowrap"
                    >
                      <span>Fill Form</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pricing Transparency Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 max-w-2xl mx-auto text-center p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#0E0E0E] border border-[#F0D5C4] dark:border-neutral-800 shadow-xs"
        >
          <p className="text-xs sm:text-sm text-[#55392D] dark:text-neutral-300 leading-relaxed font-light">
            <strong className="text-[#A95437] dark:text-[#D4A64A] font-semibold">Personalized Consultations: </strong>
            Because hair lengths, cluster styles, and custom dress designs are unique to each client,
            quotes are provided during your initial consultation or chat. We welcome your ideas, inspo photos, and questions!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

