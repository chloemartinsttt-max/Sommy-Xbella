import React, { useState } from 'react';
import { MessageCircle, Phone, Instagram, Facebook, ArrowUp, Sparkles, QrCode } from 'lucide-react';
import { motion } from 'motion/react';
import { BRAND_PHONE, BRAND_PHONE_CLEAN, SERVICES, WHATSAPP_BASE_URL, logoImg } from '../data/content';
import { QRCodeModal } from './QRCodeModal';

interface FooterProps {
  onReplayIntro?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReplayIntro }) => {
  const [isQrOpen, setIsQrOpen] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2B160E] dark:bg-[#000000] text-[#FFF7F2] border-t border-[#D47A5B]/30 dark:border-neutral-800 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Grand Typography Motion Ribbon in Footer */}
        <div className="py-8 mb-12 border-b border-[#43251A] dark:border-neutral-800 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex flex-col items-center space-y-2"
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#D4A64A] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A64A] animate-pulse" />
              <span>The SOMMY XBELLA Signature</span>
              <Sparkles className="w-3.5 h-3.5 text-[#D4A64A] animate-pulse" />
            </div>
            <motion.h3
              animate={{ scale: [1, 1.015, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="font-serif italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#FFF7F2] font-normal tracking-wide"
            >
              &ldquo;Beauty In Every Detail&rdquo;
            </motion.h3>
            <motion.div
              animate={{ width: ['7rem', '12rem', '7rem'], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="h-0.5 bg-gradient-to-r from-transparent via-[#D4A64A] to-transparent mx-auto mt-2"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#43251A] dark:border-neutral-800">
          {/* Brand Info (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border-2 border-[#D47A5B] dark:border-[#D4A64A] overflow-hidden bg-black shadow-md shrink-0">
                <img
                  src={logoImg || '/images/logo.jpg'}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== '/images/logo.jpg') {
                      target.src = '/images/logo.jpg';
                    }
                  }}
                  alt="SOMMY XBELLA Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-brand-display text-xl font-bold tracking-[0.2em] text-[#FFF7F2]">
                SOMMY XBELLA
              </span>
            </div>

            <p className="text-sm text-[#D8BDB0] leading-relaxed max-w-sm font-light">
              Premium beauty and bespoke styling brand. Specializing in braids, hair styling,
              cluster lashes, eyebrow trimming, dressmaking, and custom outfits.
            </p>

            <p className="text-xs italic text-[#F5C7B0] font-serif">
              "Beauty That Speaks for Itself."
            </p>

            <div className="pt-1">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D8BDB0] font-semibold block">
                Official Motto
              </span>
              <p className="text-base sm:text-lg font-serif italic text-[#D4A64A] font-medium tracking-wide">
                &ldquo;Beauty In Every Detail&rdquo;
              </p>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="pt-2 flex items-center gap-2">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20ba59] transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp: {BRAND_PHONE}</span>
              </motion.a>
            </div>
          </div>

          {/* Quick Navigation (Cols 6-7) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#F5C7B0] font-bold">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-[#D8BDB0]">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Booking
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links (Cols 8-10) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#F5C7B0] font-bold">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-[#D8BDB0]">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Social (Cols 11-12) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#F5C7B0] font-bold">
              Connect
            </h4>
            <p className="text-xs text-[#D8BDB0] font-light">
              Follow our latest styling showcases and creative process.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#3D2016] dark:bg-neutral-900 border border-[#D47A5B]/40 dark:border-neutral-700 flex items-center justify-center text-[#F9D2BD] hover:text-white hover:border-[#F5C7B0] transition-colors"
                aria-label="SOMMY XBELLA on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={`tel:+${BRAND_PHONE_CLEAN}`}
                className="w-9 h-9 rounded-full bg-[#3D2016] dark:bg-neutral-900 border border-[#D47A5B]/40 dark:border-neutral-700 flex items-center justify-center text-[#F9D2BD] hover:text-white hover:border-[#F5C7B0] transition-colors"
                aria-label="Call SOMMY XBELLA"
              >
                <Phone className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#3D2016] dark:bg-neutral-900 border border-[#D47A5B]/40 dark:border-neutral-700 flex items-center justify-center text-[#F9D2BD] hover:text-white hover:border-[#F5C7B0] transition-colors"
                aria-label="SOMMY XBELLA on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#3D2016] dark:bg-neutral-900 border border-[#D47A5B]/40 dark:border-neutral-700 flex items-center justify-center text-[#F9D2BD] hover:text-white hover:border-[#F5C7B0] transition-colors"
                aria-label="SOMMY XBELLA on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8BDB0]">
          <p>© 2026 SOMMY XBELLA. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span>By Appointment Only</span>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => setIsQrOpen(true)}
              className="inline-flex items-center gap-1.5 text-[#F5C7B0] hover:text-white transition-colors focus:outline-none cursor-pointer"
              title="Open Salon QR Code"
            >
              <QrCode className="w-3.5 h-3.5 text-[#D4A64A]" />
              <span>Salon QR Code</span>
            </button>
            {onReplayIntro && (
              <>
                <span aria-hidden="true">·</span>
                <button
                  type="button"
                  onClick={onReplayIntro}
                  className="inline-flex items-center gap-1.5 text-[#D4A64A] hover:text-[#FFF2D1] transition-colors focus:outline-none cursor-pointer"
                  title="Replay Motion Loading Screen"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#D4A64A]" />
                  <span>Replay Intro</span>
                </button>
              </>
            )}
            <span aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-[#F5C7B0] transition-colors focus:outline-none cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Salon QR Code Modal */}
      <QRCodeModal isOpen={isQrOpen} onClose={() => setIsQrOpen(false)} />
    </footer>
  );
};
