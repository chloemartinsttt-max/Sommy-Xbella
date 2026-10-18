import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND_PHONE } from '../data/content';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFF7F2]/95 backdrop-blur-md border-b border-[#F0D5C4] py-3.5 shadow-sm'
          : 'bg-[#FFF7F2]/80 backdrop-blur-sm border-b border-[#F0D5C4]/60 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Brand Wordmark (Zone 1) */}
          <a
            href="#home"
            className="flex items-center gap-3 group whitespace-nowrap shrink-0"
            aria-label="SOMMY XBELLA Home"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 3 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className="w-10 h-10 rounded-full border border-[#E29578]/60 flex items-center justify-center bg-[#FDF1E8] text-[#D47A5B] font-serif font-bold text-lg shadow-sm group-hover:border-[#D47A5B] transition-colors"
            >
              SX
            </motion.div>
            <div className="flex flex-col">
              <span className="font-brand-display text-lg sm:text-xl font-bold tracking-[0.16em] text-[#2B160E] group-hover:text-[#D47A5B] transition-colors">
                SOMMY XBELLA
              </span>
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#A95437] font-semibold -mt-0.5">
                Beauty & Custom Styling
              </span>
            </div>
          </a>

          {/* Navigation Links (Zone 2) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#55392D]" aria-label="Main Navigation">
            <a
              href="#home"
              className="hover:text-[#D47A5B] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#D47A5B] after:absolute after:bottom-0 after:left-0 after:transition-all whitespace-nowrap shrink-0"
            >
              Home
            </a>
            <a
              href="#services"
              className="hover:text-[#D47A5B] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#D47A5B] after:absolute after:bottom-0 after:left-0 after:transition-all whitespace-nowrap shrink-0"
            >
              Our Services
            </a>
            <a
              href="#gallery"
              className="hover:text-[#D47A5B] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#D47A5B] after:absolute after:bottom-0 after:left-0 after:transition-all whitespace-nowrap shrink-0"
            >
              Gallery
            </a>
            <a
              href="#about"
              className="hover:text-[#D47A5B] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#D47A5B] after:absolute after:bottom-0 after:left-0 after:transition-all whitespace-nowrap shrink-0"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="hover:text-[#D47A5B] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#D47A5B] after:absolute after:bottom-0 after:left-0 after:transition-all whitespace-nowrap shrink-0"
            >
              Contact
            </a>
          </nav>

          {/* Primary Action Button (Zone 3) */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <motion.a
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.98 }}
              href="#booking"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D47A5B] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#BF6545] active:bg-[#A95437] transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap shrink-0"
            >
              <Calendar className="w-3.5 h-3.5 text-white" />
              <span>Book an Appointment</span>
            </motion.a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#booking"
              className="px-3 py-1.5 rounded-full bg-[#D47A5B] text-white text-xs font-semibold tracking-wide uppercase hover:bg-[#BF6545] transition-colors whitespace-nowrap shadow-sm"
            >
              Book
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-[#2B160E] hover:text-[#D47A5B] hover:bg-[#FDF1E8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D47A5B]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-[#FFF7F2] border-b border-[#F0D5C4] px-6 py-6 space-y-4 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col space-y-2 text-base font-medium text-[#2B160E]">
              <a
                href="#home"
                onClick={closeMenu}
                className="px-3 py-2 rounded-lg hover:bg-[#FDF1E8] hover:text-[#D47A5B] transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                onClick={closeMenu}
                className="px-3 py-2 rounded-lg hover:bg-[#FDF1E8] hover:text-[#D47A5B] transition-colors"
              >
                Our Services
              </a>
              <a
                href="#gallery"
                onClick={closeMenu}
                className="px-3 py-2 rounded-lg hover:bg-[#FDF1E8] hover:text-[#D47A5B] transition-colors"
              >
                Gallery
              </a>
              <a
                href="#about"
                onClick={closeMenu}
                className="px-3 py-2 rounded-lg hover:bg-[#FDF1E8] hover:text-[#D47A5B] transition-colors"
              >
                About Us
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="px-3 py-2 rounded-lg hover:bg-[#FDF1E8] hover:text-[#D47A5B] transition-colors"
              >
                Contact & Location
              </a>
            </div>

            <div className="pt-4 border-t border-[#F0D5C4] flex flex-col gap-3">
              <a
                href="#booking"
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#D47A5B] text-white font-semibold text-sm uppercase tracking-wider hover:bg-[#BF6545] transition-colors shadow-md"
              >
                <Calendar className="w-4 h-4 text-white" />
                Book an Appointment
              </a>
              <div className="flex items-center justify-center gap-2 text-xs text-[#846658]">
                <Phone className="w-3.5 h-3.5 text-[#D47A5B]" />
                <span>WhatsApp / Call: {BRAND_PHONE}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
