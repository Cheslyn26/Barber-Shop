import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#E63946] text-xs font-black tracking-[0.5em] uppercase mb-4">
              Get In Touch
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
              Visit The Shop
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-[#1A1A1A] flex items-center justify-center group-hover:bg-[#E63946] transition-colors">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Location</p>
                  <p className="text-white font-medium">MBT 5th Avenue Fuel Station, Parow</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-[#1A1A1A] flex items-center justify-center group-hover:bg-[#E63946] transition-colors">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Phone</p>
                  <p className="text-white font-medium">074 863 3574</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-[#1A1A1A] flex items-center justify-center group-hover:bg-[#E63946] transition-colors">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Hours</p>
                  <p className="text-white font-medium">Mon - Sat: 9am - 6pm</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A1A1A] p-10 border border-white/5"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Name</label>
                  <input type="text" className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-white focus:border-[#E63946] outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
                  <input type="email" className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-white focus:border-[#E63946] outline-none transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Service</label>
                <select className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-white focus:border-[#E63946] outline-none transition-colors">
                  <option>Classic Haircut</option>
                  <option>Beard Grooming</option>
                  <option>The Royal Treatment</option>
                  <option>Line Up & Fade</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-white focus:border-[#E63946] outline-none transition-colors"></textarea>
              </div>
              <button className="w-full bg-[#E63946] text-white py-4 font-bold tracking-widest hover:bg-[#C12E39] transition-colors">
                SEND MESSAGE
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
