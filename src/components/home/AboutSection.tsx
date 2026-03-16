import React from 'react';
import { motion } from 'motion/react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] bg-gray-800 rounded-sm overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800" 
              alt="Barber at work"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[#E63946] text-xs font-black tracking-[0.5em] uppercase mb-4">
            The Story
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
            Crafting Confidence Since 2025
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            At Elegant Edge, we believe a haircut is more than just a service—it's an experience. Our master barbers combine traditional techniques with modern style to ensure every client leaves looking and feeling their absolute best.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E63946]/10 flex items-center justify-center shrink-0">
                <span className="text-[#E63946] font-bold">01</span>
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Master Craftsmanship</h4>
                <p className="text-gray-500 text-sm">Every cut is executed with surgical precision and artistic flair.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E63946]/10 flex items-center justify-center shrink-0">
                <span className="text-[#E63946] font-bold">02</span>
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Premium Atmosphere</h4>
                <p className="text-gray-500 text-sm">Relax in our modern-industrial space designed for the modern man.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
