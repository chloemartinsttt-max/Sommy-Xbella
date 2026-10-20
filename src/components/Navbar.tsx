import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND_PHONE, logoImg } from '../data/content';
import { ThemeToggle } from './ThemeToggle';

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
          ? 'bg-[#FFF7F2]/95 dark:bg-[#000000]/95 backdrop-blur-md border-b border-[#F0D5C4] dark:border-neutral-800 py-3 shadow-md'
          : 'bg-[#FFF7F2]/85 dark:bg-[#000000]/85 backdrop-blur-sm border-b border-[#F0D5C4]/60 dark:border-neutral-800/80 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 sm:gap-8">
          {/* Brand Wordmark & Official Logo (Zone 1) */}
          <a
            href="#home"
            className="flex items-center gap-3 group whitespace-nowrap shrink-0"
            aria-label="SOMMY XBELLA Home"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full p-0.5 border-2 border-[#E29578] dark:border-[#D4A64A] overflow-hidden bg-black shadow-sm group-hover:border-[#D47A5B] dark:group-hover:border-[#E7C275] transition-colors"
            >
              <img
                src={logoImg || '/images/logo.jpg'}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== '/images/logo.jpg') {
                    target.src = '/images/logo.jpg';
                  }
                }}
                alt="SOMMY XBELLA Logo"
                className="w-full h-full object-cover object-center rounded-full"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-brand-display text-lg sm:text-xl font-bold tracking-[0.16em] text-[#2B160E] dark:text-white group-hover:text-[#D47A5B] dark:group-hover:text-[#D4A64A] transition-colors">
                SOMMY XBELLA
              </span>
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#A95437] dark:text-[#D4A64A] font-semibold -mt-0.5">
                Beauty & Custom Styling
              </span>
            </div>

            {/* Slogan Pill with subtle motion */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDF1E8]/90 dark:bg-neutral-900 border border-[#F0D5C4] dark:border-neutral-800 text-[11px] font-serif italic text-[#D47A5B] dark:text-[#D4A64A] shadow-xs"
            >
              <Sparkles className="w-3 h-3 text-[#D47A5B] dark:text-[#D4A64A] animate-pulse" />
              <span>&ldquo;Beauty In Every Detail&rdquo;</span>
            </motion.div>
          </a>

          {/* Navigation Links (Zone 2) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#55392D] dark:text-neutral-300" aria-label="Main Navigation">
            <a
              href="#home"
              className="hover:text-[#D47A5B] dark:hover:text-[#D4A64A] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#D47A5B] dark:after:bg-[#D4A64A] after:absolute after:bottom-0 after:left-0 after:transition-all whitespace-nowrap shrink-0"
            >
              Home
            </a>
            <a
              href="#services"
              className="hover:text-[#D47A5B] dark:hover:text-[#D4A64A] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#D47A5B] dark:after:bg-[#D4A64A] after:absolute after:bottom-0 after:left-0 after:transition-all whitespace-nowrap shrink-0"
            >
              Our Services
            </a>
            <a
              href="#gallery"
              className="hover:text-[#D47A5B] dark:hover:text-[#D4A64A] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#D47A5B] dark:after:bg-[#D4A64A] after:absolute after:bottom-0 after:left-0 after:transition-all whitespace-nowrap shrink-0"
            >
              Gallery
            </a>
            <a
              href="#about"
              className="hover:text-[#D47A5B] dark:hover:text-[#D4A64A] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#D47A5B] dark:after:bg-[#D4A64A] after:absolute after:bottom-0 after:left-0 after:transition-all whitespace-nowrap shrink-0"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="hover:text-[#D47A5B] dark:hover:text-[#D4A64A] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#D47A5B] dark:after:bg-[#D4A64A] after:absolute after:bottom-0 after:left-0 after:transition-all whitespace-nowrap shrink-0"
            >
              Contact
            </a>
          </nav>

          {/* Primary Action Button & Theme Toggle (Zone 3) */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* Book Appointment CTA */}
            <motion.a
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.98 }}
              href="#booking"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D47A5B] dark:bg-[#D4A64A] text-white dark:text-black text-xs font-semibold tracking-wider uppercase hover:bg-[#BF6545] dark:hover:bg-[#E7C275] active:bg-[#A95437] transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap shrink-0"
            >
              <Calendar className="w-3.5 h-3.5 text-current" />
              <span>Book an Appointment</span>
            </motion.a>
          </div>

          {/* Mobile Right Controls: Theme Toggle + Book + Menu Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />

            <a
              href="#booking"
              className="px-3 py-1.5 rounded-full bg-[#D47A5B] dark:bg-[#D4A64A] text-white dark:text-black text-xs font-semibold tracking-wide uppercase hover:bg-[#BF6545] transition-colors whitespace-nowrap shadow-sm"
            >
              Book
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-[#2B160E] dark:text-white hover:text-[#D47A5B] dark:hover:text-[#D4A64A] hover:bg-[#FDF1E8] dark:hover:bg-neutral-900 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D47A5B]"
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
            className="md:hidden bg-[#FFF7F2] dark:bg-[#0A0A0A] border-b border-[#F0D5C4] dark:border-neutral-800 px-6 py-6 space-y-4 shadow-xl overflow-hidden"
          >
            {/* Mobile Header Brand with Logo */}
            <div className="flex items-center gap-3 pb-3 border-b border-[#F0D5C4] dark:border-neutral-800">
              <div className="w-10 h-10 rounded-full border-2 border-[#D47A5B] dark:border-[#D4A64A] overflow-hidden bg-black shrink-0 shadow-sm">
                <img
                  src={logoImg || '/images/logo.jpg'}
                  alt="SOMMY XBELLA Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-brand-display text-sm font-bold tracking-[0.14em] text-[#2B160E] dark:text-white">
                  SOMMY XBELLA
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#A95437] dark:text-[#D4A64A] font-semibold">
                  Beauty · Hair · Fashion
                </span>
              </div>
            </div>

            {/* Slogan Banner in Mobile Drawer */}
            <div className="py-2 px-3 rounded-xl bg-gradient-to-r from-[#FDF1E8] to-[#FFF7F2] dark:from-neutral-900 dark:to-neutral-950 border border-[#F0D5C4] dark:border-neutral-800 text-center shadow-xs">
              <p className="font-serif italic text-xs text-[#D47A5B] dark:text-[#D4A64A] flex items-center justify-center gap-1.5 font-medium">
                <Sparkles className="w-3 h-3 text-[#D47A5B] dark:text-[#D4A64A] animate-pulse" />
                <span>&ldquo;Beauty In Every Detail&rdquo;</span>
              </p>
            </div>

            <div className="flex flex-col space-y-2 text-base font-medium text-[#2B160E] dark:text-neutral-200">
              <a
                href="#home"
                onClick={closeMenu}
                className="px-3 py-2 rounded-lg hover:bg-[#FDF1E8] dark:hover:bg-neutral-900 hover:text-[#D47A5B] dark:hover:text-[#D4A64A] transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                onClick={closeMenu}
                className="px-3 py-2 rounded-lg hover:bg-[#FDF1E8] dark:hover:bg-neutral-900 hover:text-[#D47A5B] dark:hover:text-[#D4A64A] transition-colors"
              >
                Our Services
              </a>
              <a
                href="#gallery"
                onClick={closeMenu}
                className="px-3 py-2 rounded-lg hover:bg-[#FDF1E8] dark:hover:bg-neutral-900 hover:text-[#D47A5B] dark:hover:text-[#D4A64A] transition-colors"
              >
                Gallery
              </a>
              <a
                href="#about"
                onClick={closeMenu}
                className="px-3 py-2 rounded-lg hover:bg-[#FDF1E8] dark:hover:bg-neutral-900 hover:text-[#D47A5B] dark:hover:text-[#D4A64A] transition-colors"
              >
                About Us
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="px-3 py-2 rounded-lg hover:bg-[#FDF1E8] dark:hover:bg-neutral-900 hover:text-[#D47A5B] dark:hover:text-[#D4A64A] transition-colors"
              >
                Contact & Location
              </a>
            </div>

            <div className="pt-4 border-t border-[#F0D5C4] dark:border-neutral-800 flex flex-col gap-3">
              <a
                href="#booking"
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#D47A5B] dark:bg-[#D4A64A] text-white dark:text-black font-semibold text-sm uppercase tracking-wider hover:bg-[#BF6545] dark:hover:bg-[#E7C275] transition-colors shadow-md"
              >
                <Calendar className="w-4 h-4 text-current" />
                Book an Appointment
              </a>
              <div className="flex items-center justify-center gap-2 text-xs text-[#846658] dark:text-neutral-400">
                <Phone className="w-3.5 h-3.5 text-[#D47A5B] dark:text-[#D4A64A]" />
                <span>WhatsApp / Call: {BRAND_PHONE}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
