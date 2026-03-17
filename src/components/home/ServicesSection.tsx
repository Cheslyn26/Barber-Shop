import React from 'react';
import { motion } from 'motion/react';
import { Scissors, User, Zap, Sparkles } from 'lucide-react';

const services = [
  {
    title: "Classic Haircut",
    price: "R150",
    description: "Precision cut tailored to your face shape and style preference.",
    icon: Scissors
  },
  {
    title: "Beard Grooming",
    price: "R100",
    description: "Shape, trim, and line-up with premium beard oils and balms.",
    icon: User
  },
  {
    title: "The Royal Treatment",
    price: "R250",
    description: "Haircut, beard trim, hot towel shave, and scalp massage.",
    icon: Sparkles
  },
  {
    title: "Line Up & Fade",
    price: "R120",
    description: "Keep it sharp with a fresh line-up and seamless fade.",
    icon: Zap
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#E63946] text-xs font-black tracking-[0.5em] uppercase mb-4">
            Our Expertise
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">
            Premium Services
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1A1A1A] p-8 border border-white/5 hover:border-[#E63946]/30 transition-all group"
            >
              <service.icon className="w-10 h-10 text-[#E63946] mb-6 group-hover:scale-110 transition-transform" />
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-bold text-white">{service.title}</h4>
                <span className="text-[#E63946] font-mono font-bold">{service.price}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#prices"
            className="inline-block border border-[#E63946] text-[#E63946] px-8 py-3 text-xs font-bold tracking-widest hover:bg-[#E63946] hover:text-white transition-all"
          >
            VIEW FULL PRICE LIST
          </a>
        </div>
      </div>
    </section>
  );
}
