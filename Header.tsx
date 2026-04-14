import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onCartClick: () => void;
  onNavigate: (page: string) => void;
  currentPage: string;
}

export const Header: React.FC<HeaderProps> = ({ onCartClick, onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Shop', id: 'shop' },
    { name: 'Fragrance Finder', id: 'finder' },
    { name: 'Blog', id: 'blog' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-luxury-cream/80 backdrop-blur-md border-b border-luxury-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-luxury-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div 
            className="flex-shrink-0 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <h1 className="text-2xl sm:text-3xl font-serif tracking-tighter flex items-center gap-2">
              <span className="text-luxury-gold">Dr</span>
              <span className="group-hover:text-luxury-gold transition-colors duration-500">Fragrance</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm uppercase tracking-widest font-medium transition-colors duration-300 ${
                  currentPage === item.id ? 'text-luxury-gold' : 'text-luxury-black hover:text-luxury-gold'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-luxury-black hover:text-luxury-gold transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 text-luxury-black hover:text-luxury-gold transition-colors hidden sm:block">
              <User size={20} />
            </button>
            <button 
              className="p-2 text-luxury-black hover:text-luxury-gold transition-colors relative"
              onClick={onCartClick}
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-luxury-gold text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-luxury-cream border-b border-luxury-black/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-4 text-base uppercase tracking-widest font-medium ${
                    currentPage === item.id ? 'text-luxury-gold' : 'text-luxury-black'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
