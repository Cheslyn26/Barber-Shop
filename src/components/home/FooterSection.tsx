import React from 'react';
import { Scissors, Instagram, Facebook, Twitter } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="bg-[#0A0A0A] pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Scissors className="w-6 h-6 text-[#E63946]" />
              <span className="text-xl font-bold tracking-tighter text-white">Elegant Edge</span>
            </div>
            <p className="text-gray-500 max-w-sm mb-8">
              Redefining the classic barbershop experience with modern precision and timeless style. Join us for the ultimate grooming session.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white hover:bg-[#E63946] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white hover:bg-[#E63946] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white hover:bg-[#E63946] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-500 hover:text-[#E63946] transition-colors text-sm">Services</a></li>
              <li><a href="#about" className="text-gray-500 hover:text-[#E63946] transition-colors text-sm">About Us</a></li>
              <li><a href="#gallery" className="text-gray-500 hover:text-[#E63946] transition-colors text-sm">Gallery</a></li>
              <li><a href="#contact" className="text-gray-500 hover:text-[#E63946] transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-4">Get style tips and exclusive offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-[#1A1A1A] border-none px-4 py-2 text-white text-sm outline-none w-full"
              />
              <button className="bg-[#E63946] px-4 py-2 text-white font-bold text-xs">JOIN</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Elegant Edge Barbershop. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-white text-[10px] uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-white text-[10px] uppercase tracking-widest">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
