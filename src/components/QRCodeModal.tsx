import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { X, QrCode as QrIcon, Download, Copy, Check, MessageCircle, Globe, Sparkles, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { WHATSAPP_BASE_URL, BRAND_PHONE, logoImg } from '../data/content';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type QRMode = 'whatsapp' | 'website';

export const QRCodeModal: React.FC<QRCodeModalProps> = ({ isOpen, onClose }) => {
  const [mode, setMode] = useState<QRMode>('whatsapp');
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const getWebsiteUrl = () => {
    if (typeof window !== 'undefined') {
      return window.location.origin + window.location.pathname;
    }
    return 'https://sommyxbella.com';
  };

  const getWhatsAppTarget = () => {
    return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
      'Hello SOMMY XBELLA! I scanned your QR code and would like to inquire about booking an appointment.'
    )}`;
  };

  const currentUrl = mode === 'whatsapp' ? getWhatsAppTarget() : getWebsiteUrl();

  // Generate luxury branded QR Code with logo in the center
  useEffect(() => {
    if (!isOpen) return;

    let isMounted = true;

    const generateBrandedQR = async () => {
      try {
        // High error correction so center logo doesn't break scanning
        const rawQrData = await QRCode.toDataURL(currentUrl, {
          width: 600,
          margin: 2,
          errorCorrectionLevel: 'H',
          color: {
            dark: '#1A0C06',
            light: '#FFFFFF',
          },
        });

        // Create canvas to composite logo in the center
        const canvas = document.createElement('canvas');
        canvas.width = 600;
        canvas.height = 600;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const qrImg = new Image();
        qrImg.crossOrigin = 'anonymous';
        qrImg.src = rawQrData;

        qrImg.onload = () => {
          if (!isMounted) return;
          ctx.drawImage(qrImg, 0, 0, 600, 600);

          // Draw center circular badge for SOMMY XBELLA logo
          const centerX = 300;
          const centerY = 300;
          const radius = 60;

          // Outer gold border ring
          ctx.beginPath();
          ctx.arc(centerX, centerY, radius + 8, 0, 2 * Math.PI);
          ctx.fillStyle = '#D4A64A';
          ctx.fill();

          // Inner white mask
          ctx.beginPath();
          ctx.arc(centerX, centerY, radius + 3, 0, 2 * Math.PI);
          ctx.fillStyle = '#FFFFFF';
          ctx.fill();

          // Clip for logo image
          const logo = new Image();
          logo.crossOrigin = 'anonymous';
          logo.src = logoImg || '/images/logo.jpg';

          logo.onload = () => {
            if (!isMounted) return;
            ctx.save();
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
            ctx.clip();
            ctx.drawImage(logo, centerX - radius, centerY - radius, radius * 2, radius * 2);
            ctx.restore();

            setQrDataUrl(canvas.toDataURL('image/png'));
          };

          logo.onerror = () => {
            // Fallback: draw initials SX in gold
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
            ctx.fillStyle = '#1A0C06';
            ctx.fill();

            ctx.fillStyle = '#D4A64A';
            ctx.font = 'bold 36px serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('SX', centerX, centerY);

            setQrDataUrl(canvas.toDataURL('image/png'));
          };
        };
      } catch (err) {
        console.error('Failed to generate QR code', err);
      }
    };

    generateBrandedQR();

    return () => {
      isMounted = false;
    };
  }, [isOpen, currentUrl]);

  // Handle Download Print Card
  const handleDownload = () => {
    if (!qrDataUrl) return;

    // Generate high-res printable 800x1100 luxury salon card
    const printCanvas = document.createElement('canvas');
    printCanvas.width = 800;
    printCanvas.height = 1100;
    const ctx = printCanvas.getContext('2d');
    if (!ctx) return;

    // Background gradient
    const bgGradient = ctx.createLinearGradient(0, 0, 0, 1100);
    bgGradient.addColorStop(0, '#120803');
    bgGradient.addColorStop(1, '#050201');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, 800, 1100);

    // Decorative outer gold borders
    ctx.strokeStyle = '#D4A64A';
    ctx.lineWidth = 4;
    ctx.strokeRect(30, 30, 740, 1040);

    ctx.strokeStyle = 'rgba(212, 166, 74, 0.4)';
    ctx.lineWidth = 1;
    ctx.strokeRect(40, 40, 720, 1020);

    // Brand Title
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 42px "Cinzel", Georgia, serif';
    ctx.textAlign = 'center';
    ctx.fillText('SOMMY XBELLA', 400, 120);

    // Slogan
    ctx.fillStyle = '#D4A64A';
    ctx.font = 'italic 28px "Playfair Display", Georgia, serif';
    ctx.fillText('“Beauty In Every Detail”', 400, 175);

    // Subtitle
    ctx.fillStyle = '#D8BDB0';
    ctx.font = '16px sans-serif';
    ctx.letterSpacing = '3px';
    ctx.fillText('HAIR STYLING · CLUSTER LASHES · BESPOKE COUTURE', 400, 220);

    // QR Container Box
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.roundRect(140, 270, 520, 520, [24]);
    ctx.fill();

    // Draw QR image
    const qrImage = new Image();
    qrImage.onload = () => {
      ctx.drawImage(qrImage, 160, 290, 480, 480);

      // Call to Action
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 26px sans-serif';
      ctx.fillText(
        mode === 'whatsapp' ? 'SCAN TO CHAT & BOOK ON WHATSAPP' : 'SCAN TO EXPLORE OUR PORTFOLIO',
        400,
        860
      );

      ctx.fillStyle = '#E29578';
      ctx.font = '18px sans-serif';
      ctx.fillText(`WhatsApp & Direct Call: ${BRAND_PHONE}`, 400, 910);

      ctx.fillStyle = '#998075';
      ctx.font = 'italic 16px sans-serif';
      ctx.fillText('Point your phone camera to scan · No app required', 400, 955);

      // Trigger download
      const link = document.createElement('a');
      link.download = `SOMMY_XBELLA_${mode.toUpperCase()}_QR_CODE.png`;
      link.href = printCanvas.toDataURL('image/png');
      link.click();
    };
    qrImage.src = qrDataUrl;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="SOMMY XBELLA QR Code"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-md w-full bg-[#FFFFFF] dark:bg-[#0A0A0A] rounded-3xl border border-[#F0D5C4] dark:border-neutral-800 shadow-2xl overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#F0D5C4] dark:border-neutral-800 bg-[#FFF7F2] dark:bg-black">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#D47A5B] dark:bg-[#D4A64A] text-white dark:text-black flex items-center justify-center shadow-xs">
                <QrIcon className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-sm text-[#2B160E] dark:text-white leading-tight">
                  SOMMY XBELLA QR Code
                </h3>
                <p className="text-[10px] font-serif italic text-[#A95437] dark:text-[#D4A64A]">
                  &ldquo;Beauty In Every Detail&rdquo;
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full text-[#55392D] dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
              aria-label="Close QR Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 flex flex-col items-center text-center space-y-5">
            {/* Mode Switcher Tabs */}
            <div className="inline-flex p-1 rounded-full bg-[#FDF1E8] dark:bg-neutral-900 border border-[#F0D5C4] dark:border-neutral-800 w-full max-w-xs">
              <button
                type="button"
                onClick={() => setMode('whatsapp')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-semibold transition-all ${
                  mode === 'whatsapp'
                    ? 'bg-[#25D366] text-white shadow-xs'
                    : 'text-[#55392D] dark:text-neutral-400 hover:text-[#2B160E] dark:hover:text-white'
                }`}
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp Booking</span>
              </button>

              <button
                type="button"
                onClick={() => setMode('website')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-semibold transition-all ${
                  mode === 'website'
                    ? 'bg-[#D47A5B] dark:bg-[#D4A64A] text-white dark:text-black shadow-xs'
                    : 'text-[#55392D] dark:text-neutral-400 hover:text-[#2B160E] dark:hover:text-white'
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Website Link</span>
              </button>
            </div>

            {/* QR Code Presentation Box */}
            <div className="relative p-4 rounded-3xl bg-white border-2 border-[#E29578]/40 dark:border-[#D4A64A]/40 shadow-xl flex items-center justify-center">
              {qrDataUrl ? (
                <img
                  src={qrDataUrl}
                  alt="SOMMY XBELLA Branded QR Code"
                  className="w-56 h-56 sm:w-64 sm:h-64 object-contain rounded-xl"
                />
              ) : (
                <div className="w-56 h-56 flex items-center justify-center text-neutral-400">
                  <span className="text-xs">Generating luxury QR...</span>
                </div>
              )}
            </div>

            {/* Explanatory Note */}
            <div className="space-y-1 max-w-xs">
              <p className="text-xs font-semibold text-[#2B160E] dark:text-white">
                {mode === 'whatsapp'
                  ? 'Scan to Chat Instantly on WhatsApp'
                  : 'Scan to Browse Portfolio & Services'}
              </p>
              <p className="text-[11px] text-[#846658] dark:text-neutral-400 font-light">
                Point your smartphone camera at the code. No app download needed.
              </p>
            </div>

            {/* Action Buttons: Download Card & Copy Link */}
            <div className="w-full grid grid-cols-2 gap-3 pt-1">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={handleDownload}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#D47A5B] dark:bg-[#D4A64A] text-white dark:text-black text-xs font-semibold uppercase tracking-wider hover:bg-[#BF6545] dark:hover:bg-[#E7C275] transition-colors shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Save Card</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={handleCopy}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-[#E29578] dark:border-neutral-700 bg-white dark:bg-neutral-900 text-[#2B160E] dark:text-white hover:text-[#D47A5B] dark:hover:text-[#D4A64A] hover:border-[#D47A5B] dark:hover:border-[#D4A64A] text-xs font-semibold tracking-wider transition-colors shadow-xs"
              >
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied!' : 'Copy Link'}</span>
              </motion.button>
            </div>

            {/* Printable Salon Tip */}
            <div className="w-full pt-3 border-t border-[#F0D5C4]/60 dark:border-neutral-800/60 text-left">
              <p className="text-[11px] text-[#A95437] dark:text-[#D4A64A] flex items-center gap-1.5 font-medium">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>Salon Tip:</span>
              </p>
              <p className="text-[10px] text-[#846658] dark:text-neutral-400 font-light mt-0.5">
                Click <strong>Save Card</strong> to download a high-resolution print image ready for salon reception desks, mirrors, or product tags.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
