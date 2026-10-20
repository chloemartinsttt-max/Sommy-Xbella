import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SloganTicker } from './components/SloganTicker';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { WhyChoose } from './components/WhyChoose';
import { About } from './components/About';
import { BookingContact } from './components/BookingContact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>('Braids & Hair Styling');

  const handleSelectService = (serviceName: string) => {
    setSelectedServiceForBooking(serviceName);
  };

  return (
    <div className="min-h-screen bg-[#FFF7F2] dark:bg-[#000000] text-[#2B160E] dark:text-[#F5F5F5] flex flex-col selection:bg-[#F5C7B0] dark:selection:bg-[#D4A64A] selection:text-[#2B160E] dark:selection:text-[#000000] transition-colors duration-300">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Infinite Luxury Slogan Marquee */}
        <SloganTicker variant="primary" />

        {/* Services Section */}
        <Services onSelectServiceForBooking={handleSelectService} />

        {/* Gallery / Our Work Section */}
        <Gallery />

        {/* Why Choose SOMMY XBELLA */}
        <WhyChoose />

        {/* Secondary Chic Slogan Ribbon */}
        <SloganTicker variant="subtle" />

        {/* About Us Section */}
        <About />

        {/* Booking and Contact Section */}
        <BookingContact preselectedService={selectedServiceForBooking} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Quick Button */}
      <FloatingWhatsApp />
    </div>
  );
}
