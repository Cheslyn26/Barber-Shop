import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onBookNow: () => void;
}

export default function HeroSection({ onBookNow }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E63946]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl w-full text-center">
        {/* Logo/Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex justify-center"
        >
          <div className="w-48 h-48 rounded-full bg-white p-4 flex flex-col items-center justify-center shadow-2xl border-4 border-[#E63946]/20">
            <div className="w-12 h-20 bg-[#0A0A0A] relative mb-2 overflow-hidden rounded-full">
              {/* Barber Pole Stripes */}
              <div className="absolute inset-0 flex flex-col gap-1 animate-slide-down">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className={`h-4 w-full ${i % 2 === 0 ? 'bg-[#E63946]' : 'bg-white'} transform -skew-y-12`} />
                ))}
              </div>
            </div>
            <span className="text-[10px] font-black tracking-[0.2em] text-[#0A0A0A] text-center leading-tight">
              ELEGANT EDGE<br/>BARBERSHOP
            </span>
          </div>
        </motion.div>

        {/* Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-[#E63946] text-xs font-black tracking-[0.5em] uppercase mb-4">
            Classic Cuts & Grooming
          </h2>
          <h1 className="text-7xl md:text-9xl font-serif font-bold text-white mb-2 tracking-tight">
            Elegant Edge
          </h1>
          <h3 className="text-2xl md:text-3xl font-light tracking-[0.4em] text-gray-400 uppercase mb-6">
            Barbershop
          </h3>
          <p className="text-[#E63946] italic font-serif text-lg mb-12">
            Your Style, Our Expertise
          </p>
        </motion.div>

        {/* Decorative Lines */}
        <div className="flex justify-center gap-4 mb-12">
          <div className="h-[1px] w-12 bg-[#E63946]" />
          <div className="h-[1px] w-12 bg-gray-600" />
          <div className="h-[1px] w-12 bg-blue-600" />
        </div>

        {/* Location Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-12"
        >
          <MapPin className="w-4 h-4 text-[#E63946]" />
          <span>MBT 5th Avenue Fuel Station, c/o Weimar Road and 5th Avenue, Parow</span>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={onBookNow}
            className="w-full md:w-auto bg-[#E63946] text-white px-12 py-4 font-bold tracking-widest hover:bg-[#C12E39] transition-all transform hover:scale-105"
          >
            VIEW SERVICES
          </button>
          <a 
            href="tel:0748633574"
            className="w-full md:w-auto border border-gray-700 text-white px-12 py-4 font-bold tracking-widest flex items-center justify-center gap-2 hover:bg-white/5 transition-all"
          >
            <Phone className="w-4 h-4" />
            074 863 3574
          </a>
        </motion.div>

        <p className="mt-8 text-gray-500 text-xs tracking-widest">
          WhatsApp for appointments: 074 863 3574
        </p>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[20px] h-[35px] border-2 border-gray-600 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-[#E63946] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
