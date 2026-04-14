import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-luxury-black text-luxury-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif tracking-tighter">
              <span className="text-luxury-gold">Dr</span> Fragrance
            </h2>
            <p className="text-luxury-gray text-sm leading-relaxed max-w-xs">
              Blending the precision of science with the artistry of luxury fragrance to create unforgettable olfactory experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-luxury-gray hover:text-luxury-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-luxury-gray hover:text-luxury-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-luxury-gray hover:text-luxury-gold transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm uppercase tracking-widest font-bold mb-6 text-luxury-gold">Explore</h3>
            <ul className="space-y-4 text-sm text-luxury-gray">
              <li><a href="#" className="hover:text-luxury-white transition-colors">Shop All</a></li>
              <li><a href="#" className="hover:text-luxury-white transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-luxury-white transition-colors">Fragrance Finder</a></li>
              <li><a href="#" className="hover:text-luxury-white transition-colors">New Arrivals</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm uppercase tracking-widest font-bold mb-6 text-luxury-gold">Support</h3>
            <ul className="space-y-4 text-sm text-luxury-gray">
              <li><a href="#" className="hover:text-luxury-white transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-luxury-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-luxury-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-luxury-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-widest font-bold mb-6 text-luxury-gold">Contact Us</h3>
            <div className="flex items-start space-x-3 text-sm text-luxury-gray">
              <MapPin size={18} className="text-luxury-gold shrink-0" />
              <span>123 Fragrance Avenue, Luxury District, Paris</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-luxury-gray">
              <Phone size={18} className="text-luxury-gold shrink-0" />
              <span>+33 1 23 45 67 89</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-luxury-gray">
              <Mail size={18} className="text-luxury-gold shrink-0" />
              <span>concierge@drfragrance.com</span>
            </div>
          </div>
        </div>

        <div className="border-t border-luxury-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-luxury-gray">
            © {new Date().getFullYear()} Dr Fragrance. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-luxury-gray">
            <a href="#" className="hover:text-luxury-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-luxury-white transition-colors">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
