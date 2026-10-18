import React, { useState } from 'react';
import { MessageCircle, Phone, Calendar, Clock, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { BRAND_PHONE, BRAND_PHONE_CLEAN, WHATSAPP_BASE_URL, SERVICES } from '../data/content';

interface BookingContactProps {
  preselectedService?: string;
}

export const BookingContact: React.FC<BookingContactProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    service: preselectedService || 'Braids & Hair Styling',
    date: '',
    timePreference: 'Morning (10:00 AM - 1:00 PM)',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedBooking, setSubmittedBooking] = useState<{
    fullName: string;
    phone: string;
    service: string;
    date: string;
    timePreference: string;
    notes: string;
    whatsappUrl: string;
  } | null>(null);

  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number or WhatsApp number.';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      newErrors.phone = 'Please enter a valid phone number with area/country code.';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a preferred service.';
    }

    if (!formData.date) {
      newErrors.date = 'Please select your preferred appointment date.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const formattedMessage = [
      `✨ *NEW APPOINTMENT INQUIRY - SOMMY XBELLA* ✨`,
      ``,
      `*Client Name:* ${formData.fullName.trim()}`,
      `*Phone Number:* ${formData.phone.trim()}`,
      `*Selected Service:* ${formData.service}`,
      `*Preferred Date:* ${formData.date}`,
      `*Time Window:* ${formData.timePreference}`,
      formData.notes.trim() ? `*Additional Notes:* ${formData.notes.trim()}` : null,
      ``,
      `Hello SOMMY XBELLA, please confirm availability for my session!`,
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(formattedMessage)}`;

    setSubmittedBooking({
      fullName: formData.fullName.trim(),
      phone: formData.phone.trim(),
      service: formData.service,
      date: formData.date,
      timePreference: formData.timePreference,
      notes: formData.notes.trim(),
      whatsappUrl,
    });
  };

  const handleReset = () => {
    setSubmittedBooking(null);
    setFormData({
      fullName: '',
      phone: '',
      service: 'Braids & Hair Styling',
      date: '',
      timePreference: 'Morning (10:00 AM - 1:00 PM)',
      notes: '',
    });
    setErrors({});
  };

  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <section id="contact" className="py-24 bg-[#FBF0E8] relative overflow-hidden">
      {/* Decorative hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#E29578]/30 to-transparent" />

      <div id="booking" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center justify-center gap-1.5 text-xs uppercase tracking-[0.22em] text-[#A95437] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#D47A5B]" />
            <span>Consultation & Appointments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2B160E] tracking-tight">
            Ready for Your Next Look?
          </h2>
          <div className="w-16 h-0.5 bg-[#D47A5B] mx-auto my-3" />
          <p className="text-[#55392D] text-base sm:text-lg font-light leading-relaxed">
            Let's create a look you'll love. Contact SOMMY XBELLA to discuss your preferred service
            and arrange your appointment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct WhatsApp & Call Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#F0D5C4] luxury-card-shadow space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-widest text-[#A95437] font-bold block">
                  Fastest Booking Method
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#2B160E]">
                  Chat Directly with Sommy
                </h3>
                <p className="text-sm text-[#55392D] font-light leading-relaxed">
                  WhatsApp is our primary and quickest communication channel. Chat with us directly to send style inspiration, ask questions, or lock in your appointment slot.
                </p>
              </div>

              {/* Large Visible Green WhatsApp Button */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-full bg-[#25D366] text-white hover:bg-[#20ba59] active:bg-[#1caa4f] transition-all duration-200 font-semibold text-sm sm:text-base tracking-wide shadow-md hover:shadow-lg text-center"
              >
                <MessageCircle className="w-6 h-6 shrink-0 fill-current" />
                <span>Chat on WhatsApp</span>
              </motion.a>

              {/* Contact Card */}
              <div className="pt-4 border-t border-[#F5E5DC] space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#FDF1E8] border border-[#E29578]/50 flex items-center justify-center text-[#D47A5B] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#846658]">
                      WhatsApp / Phone
                    </p>
                    <a
                      href={`tel:+${BRAND_PHONE_CLEAN}`}
                      className="text-base sm:text-lg font-serif font-bold text-[#2B160E] hover:text-[#D47A5B] transition-colors"
                    >
                      {BRAND_PHONE}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#FDF1E8] border border-[#E29578]/50 flex items-center justify-center text-[#D47A5B] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#846658]">
                      Appointment Schedule
                    </p>
                    <p className="text-sm text-[#2B160E] font-medium">
                      By Appointment & Reservation
                    </p>
                    <p className="text-xs text-[#846658]">
                      Monday – Saturday sessions available
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reassurance Banner */}
            <div className="p-6 rounded-2xl bg-[#FFFFFF]/80 border border-[#F0D5C4] space-y-2 shadow-xs">
              <h4 className="text-sm font-serif font-bold text-[#A95437]">
                Studio Location & Visit Policy
              </h4>
              <p className="text-xs text-[#55392D] leading-relaxed font-light">
                To guarantee personalized attention and uninterrupted one-on-one sessions for each client, our studio location and fitting details are shared directly upon booking confirmation.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Appointment Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#F0D5C4] luxury-card-shadow">
              {submittedBooking ? (
                /* Success State with WhatsApp dispatch */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 text-center py-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#25D366]/15 border border-[#25D366] text-[#25D366] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif font-bold text-[#2B160E]">
                      Appointment Details Ready!
                    </h3>
                    <p className="text-sm text-[#55392D] font-light max-w-md mx-auto">
                      Thank you, <strong className="text-[#2B160E]">{submittedBooking.fullName}</strong>.
                      To instantly lock in your appointment with SOMMY XBELLA, click below to confirm via WhatsApp:
                    </p>
                  </div>

                  {/* Summary Slip */}
                  <div className="p-5 rounded-2xl bg-[#FFF7F2] border border-[#F0D5C4] text-left space-y-2 text-xs sm:text-sm text-[#2B160E]">
                    <div className="flex justify-between py-1 border-b border-[#F0D5C4]">
                      <span className="text-[#846658]">Service:</span>
                      <span className="font-semibold text-[#2B160E]">{submittedBooking.service}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#F0D5C4]">
                      <span className="text-[#846658]">Date:</span>
                      <span className="font-semibold text-[#2B160E]">{submittedBooking.date}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#F0D5C4]">
                      <span className="text-[#846658]">Time Window:</span>
                      <span className="font-semibold text-[#2B160E]">{submittedBooking.timePreference}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-[#846658]">Phone:</span>
                      <span className="font-semibold text-[#2B160E]">{submittedBooking.phone}</span>
                    </div>
                    {submittedBooking.notes && (
                      <div className="pt-2 border-t border-[#F0D5C4] text-xs">
                        <span className="text-[#846658] block">Notes:</span>
                        <p className="italic text-[#2B160E] mt-0.5">{submittedBooking.notes}</p>
                      </div>
                    )}
                  </div>

                  {/* One-Click WhatsApp Action */}
                  <div className="space-y-3 pt-2">
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={submittedBooking.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-full bg-[#25D366] text-white hover:bg-[#20ba59] transition-all font-semibold text-sm sm:text-base tracking-wider uppercase shadow-lg"
                    >
                      <MessageCircle className="w-5 h-5 fill-current" />
                      <span>Confirm Now on WhatsApp</span>
                    </motion.a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-xs text-[#846658] hover:text-[#D47A5B] transition-colors underline pt-2"
                    >
                      Submit another inquiry or change details
                    </button>
                  </div>

                  <p className="text-[11px] text-[#846658] italic">
                    Note: Direct WhatsApp confirmation secures your date and time immediately. Form entries are not sent to a remote server.
                  </p>
                </motion.div>
              ) : (
                /* Interactive Booking Form */
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="border-b border-[#F5E5DC] pb-4">
                    <h3 className="text-xl font-serif font-bold text-[#2B160E]">
                      Schedule Your Appointment
                    </h3>
                    <p className="text-xs text-[#846658] mt-1 font-light">
                      Fill out your preferred details below, and we'll format your inquiry directly for WhatsApp confirmation.
                    </p>
                  </div>

                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-[#55392D]">
                      Full Name <span className="text-[#D47A5B]">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: '' });
                      }}
                      placeholder="e.g. Somtochukwu Adebayo"
                      className={`w-full px-4 py-3 rounded-xl bg-[#FFF7F2] border ${
                        errors.fullName ? 'border-rose-500 focus:ring-rose-500' : 'border-[#F0D5C4] focus:border-[#D47A5B]'
                      } text-[#2B160E] placeholder-[#846658]/40 text-sm focus:outline-none focus:ring-1 focus:ring-[#D47A5B] transition-all`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-rose-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone / WhatsApp Number */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#55392D]">
                      Phone Number / WhatsApp <span className="text-[#D47A5B]">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="+234 800 000 0000"
                      className={`w-full px-4 py-3 rounded-xl bg-[#FFF7F2] border ${
                        errors.phone ? 'border-rose-500 focus:ring-rose-500' : 'border-[#F0D5C4] focus:border-[#D47A5B]'
                      } text-[#2B160E] placeholder-[#846658]/40 text-sm focus:outline-none focus:ring-1 focus:ring-[#D47A5B] transition-all`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-rose-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Preferred Service */}
                  <div className="space-y-1.5">
                    <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-[#55392D]">
                      Preferred Service <span className="text-[#D47A5B]">*</span>
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => {
                        setFormData({ ...formData, service: e.target.value });
                        if (errors.service) setErrors({ ...errors, service: '' });
                      }}
                      className="w-full px-4 py-3 rounded-xl bg-[#FFF7F2] border border-[#F0D5C4] text-[#2B160E] text-sm focus:outline-none focus:ring-1 focus:ring-[#D47A5B] focus:border-[#D47A5B] transition-all"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.name} className="bg-white text-[#2B160E]">
                          {s.name}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-xs text-rose-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.service}</span>
                      </p>
                    )}
                  </div>

                  {/* Date & Time Window */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="date" className="block text-xs font-semibold uppercase tracking-wider text-[#55392D]">
                        Preferred Date <span className="text-[#D47A5B]">*</span>
                      </label>
                      <input
                        id="date"
                        type="date"
                        min={todayStr}
                        value={formData.date}
                        onChange={(e) => {
                          setFormData({ ...formData, date: e.target.value });
                          if (errors.date) setErrors({ ...errors, date: '' });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-[#FFF7F2] border ${
                          errors.date ? 'border-rose-500 focus:ring-rose-500' : 'border-[#F0D5C4] focus:border-[#D47A5B]'
                        } text-[#2B160E] text-sm focus:outline-none focus:ring-1 focus:ring-[#D47A5B] transition-all`}
                      />
                      {errors.date && (
                        <p className="text-xs text-rose-500 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.date}</span>
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="timePreference" className="block text-xs font-semibold uppercase tracking-wider text-[#55392D]">
                        Time Preference
                      </label>
                      <select
                        id="timePreference"
                        value={formData.timePreference}
                        onChange={(e) => setFormData({ ...formData, timePreference: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FFF7F2] border border-[#F0D5C4] text-[#2B160E] text-sm focus:outline-none focus:ring-1 focus:ring-[#D47A5B] focus:border-[#D47A5B] transition-all"
                      >
                        <option value="Morning (10:00 AM - 1:00 PM)" className="bg-white text-[#2B160E]">
                          Morning (10:00 AM - 1:00 PM)
                        </option>
                        <option value="Afternoon (1:00 PM - 4:00 PM)" className="bg-white text-[#2B160E]">
                          Afternoon (1:00 PM - 4:00 PM)
                        </option>
                        <option value="Evening (4:00 PM - 7:00 PM)" className="bg-white text-[#2B160E]">
                          Evening (4:00 PM - 7:00 PM)
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Additional Details */}
                  <div className="space-y-1.5">
                    <label htmlFor="notes" className="block text-xs font-semibold uppercase tracking-wider text-[#55392D]">
                      Additional Details (Optional)
                    </label>
                    <textarea
                      id="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Specify your desired braid length, lash volume, outfit design idea, or special requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-[#FFF7F2] border border-[#F0D5C4] text-[#2B160E] placeholder-[#846658]/40 text-sm focus:outline-none focus:ring-1 focus:ring-[#D47A5B] focus:border-[#D47A5B] transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-[#D47A5B] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#BF6545] active:bg-[#A95437] transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <Calendar className="w-4 h-4 text-white" />
                    <span>Review & Format Appointment Request</span>
                  </motion.button>

                  <p className="text-center text-[11px] text-[#846658] font-light">
                    Direct WhatsApp consultation guarantees priority confirmation. Form submissions format your message without storing data on a remote server.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
