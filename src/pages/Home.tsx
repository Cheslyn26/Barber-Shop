import React from 'react';
import Navbar from '../components/home/Navbar';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import AboutSection from '../components/home/AboutSection';
import GallerySection from '../components/home/GallerySection';
import ContactSection from '../components/home/ContactSection';
import FooterSection from '../components/home/FooterSection';
import ChatWidget from '../components/chat/ChatWidget';

export default function Home() {
  const scrollToServices = () => {
    const el = document.querySelector('#services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white font-sans">
      <Navbar onBookNow={scrollToServices} />
      <HeroSection onBookNow={scrollToServices} />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <ContactSection />
      <FooterSection />
      <ChatWidget />
    </div>
  );
}
