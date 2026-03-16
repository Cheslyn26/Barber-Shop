import React from 'react';
import { motion } from 'motion/react';

const images = [
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1599351431247-f10b21ce53e2?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1593702295094-28258296548d?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1512690196252-751d077a76cf?auto=format&fit=crop&q=80&w=600"
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 px-6 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#E63946] text-xs font-black tracking-[0.5em] uppercase mb-4">
            Visuals
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">
            The Gallery
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="aspect-square overflow-hidden group relative cursor-pointer"
            >
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#E63946]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold tracking-widest text-xs border border-white px-4 py-2">VIEW</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
