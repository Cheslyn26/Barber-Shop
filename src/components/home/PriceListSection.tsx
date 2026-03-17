import React from 'react';
import { motion } from 'motion/react';

const priceData = {
  haircuts: {
    title: "HAIRCUTS & SHAVES",
    items: [
      { name: "Classic Men's Cut", price: "R 100" },
      { name: "Kids Cut (under 12)", price: "R 80" },
      { name: "Scissor Cut", price: "R 120" },
      { name: "Buzz Cut", price: "R 100" },
      { name: "Fade/Taper/Undercut", price: "R 120" },
      { name: "Hair Art from", price: "R 40 - R 100" },
      { name: "Seniors Cut", price: "R 60" },
      { name: "Head Shave", price: "R 100" },
      { name: "Beard Trim", price: "R 50" },
      { name: "Blade Beard Hot Towel", price: "R 100" },
      { name: "Clipper Beard Cut", price: "R 60" },
      { name: "Hot Towel Shave", price: "R 60" },
      { name: "Haircut & Trim/Shave combo (excl hot towel)", price: "R 130" },
    ]
  },
  threading: {
    title: "THREADING & WAXING",
    items: [
      { name: "Eyebrow threading", price: "R 80" },
      { name: "Eyebrow Tint", price: "R 50" },
      { name: "Eyebrow thread & tint combo", price: "R 120" },
      { name: "Upper lip threading", price: "R 50" },
      { name: "Upper lip & chin threading", price: "R 80" },
      { name: "Full face threading", price: "R 100" },
      { name: "Nose Wax", price: "R 50" },
      { name: "Ear Wax", price: "R 50" },
      { name: "Ear & Nose Wax Combo", price: "R 80" },
      { name: "Ear, Nose & Thread Combo", price: "R 140" },
    ]
  },
  facial: {
    title: "FACIAL",
    items: [
      { name: "Facial incl steam", price: "R 120" },
      { name: "Facial only", price: "R 80" },
    ]
  }
};

export default function PriceListSection() {
  return (
    <section id="prices" className="py-24 px-6 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Texture/Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#E63946] text-xs font-black tracking-[0.5em] uppercase mb-4">
              The Full Menu
            </h2>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-[#E63946]" />
              <h3 className="text-5xl md:text-7xl font-serif font-bold text-white uppercase tracking-tight">
                Price List
              </h3>
              <div className="h-[1px] w-12 bg-[#E63946]" />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column: Haircuts & Shaves */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h4 className="text-xl font-bold text-white tracking-widest uppercase border-b-2 border-[#E63946] pb-2">
                  {priceData.haircuts.title}
                </h4>
              </div>
              <div className="space-y-4">
                {priceData.haircuts.items.map((item, idx) => (
                  <div key={idx} className="flex items-end justify-between group">
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                    <div className="flex-1 border-b border-dashed border-gray-700 mx-4 mb-1 opacity-50" />
                    <span className="text-[#E63946] font-mono font-bold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Threading & Facial */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            {/* Threading & Waxing */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h4 className="text-xl font-bold text-white tracking-widest uppercase border-b-2 border-[#E63946] pb-2">
                  {priceData.threading.title}
                </h4>
              </div>
              <div className="space-y-4">
                {priceData.threading.items.map((item, idx) => (
                  <div key={idx} className="flex items-end justify-between group">
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                    <div className="flex-1 border-b border-dashed border-gray-700 mx-4 mb-1 opacity-50" />
                    <span className="text-[#E63946] font-mono font-bold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Facial */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h4 className="text-xl font-bold text-white tracking-widest uppercase border-b-2 border-[#E63946] pb-2">
                  {priceData.facial.title}
                </h4>
              </div>
              <div className="space-y-4">
                {priceData.facial.items.map((item, idx) => (
                  <div key={idx} className="flex items-end justify-between group">
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                    <div className="flex-1 border-b border-dashed border-gray-700 mx-4 mb-1 opacity-50" />
                    <span className="text-[#E63946] font-mono font-bold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Note */}
            <div className="bg-[#1A1A1A] p-8 border-l-4 border-[#E63946] mt-8">
              <p className="text-gray-400 text-sm italic">
                * All prices are subject to change. Please confirm with your barber before the service begins.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
