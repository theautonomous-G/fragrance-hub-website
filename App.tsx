/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { FragranceFinder } from './pages/FragranceFinder';
import { Blog } from './pages/Blog';
import { CartDrawer } from './components/CartDrawer';
import { CartProvider, useCart } from './context/CartContext';
import { Product } from './types';

type Page = 'home' | 'shop' | 'product' | 'finder' | 'about' | 'contact' | 'blog';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [pageParams, setPageParams] = useState<any>({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { addToCart } = useCart();

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigate = (page: string, params: any = {}) => {
    setCurrentPage(page as Page);
    setPageParams(params);
  };

  const handleAddToCart = (product: Product, size: string) => {
    addToCart(product, size);
    setIsCartOpen(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={navigate} onAddToCart={handleAddToCart} />;
      case 'shop':
        return <Shop onNavigate={navigate} onAddToCart={handleAddToCart} initialFilters={pageParams} />;
      case 'product':
        return <ProductDetail productId={pageParams.id} onNavigate={navigate} onAddToCart={handleAddToCart} />;
      case 'finder':
        return <FragranceFinder onNavigate={navigate} />;
      case 'blog':
        return <Blog />;
      case 'about':
        return (
          <div className="pt-40 pb-24 max-w-4xl mx-auto px-4 text-center space-y-8">
            <h1 className="text-5xl font-serif">Our Story</h1>
            <p className="text-lg text-luxury-gray font-light leading-relaxed">
              Dr Fragrance was founded on the belief that scent is the most powerful trigger for human emotion. 
              By combining cutting-edge molecular science with centuries-old artisanal techniques, 
              we create "prescriptions" that define your identity and leave an indelible mark on the world.
            </p>
            <div className="aspect-video bg-luxury-white luxury-shadow overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600611590798-fb833ff5eef4?auto=format&fit=crop&q=80&w=1200" 
                alt="Lab" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="pt-40 pb-24 max-w-4xl mx-auto px-4 text-center space-y-8">
            <h1 className="text-5xl font-serif">Contact Us</h1>
            <p className="text-lg text-luxury-gray font-light leading-relaxed">
              Our concierge team is available to assist you with your olfactory journey.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left pt-12">
              <div className="space-y-4">
                <h3 className="text-xl font-serif">Concierge Services</h3>
                <p className="text-sm text-luxury-gray">Email: concierge@drfragrance.com</p>
                <p className="text-sm text-luxury-gray">Phone: +33 1 23 45 67 89</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-serif">Visit Our Atelier</h3>
                <p className="text-sm text-luxury-gray">123 Fragrance Avenue, Luxury District, Paris</p>
                <p className="text-sm text-luxury-gray">Mon-Sat: 10:00 - 19:00</p>
              </div>
            </div>
          </div>
        );
      default:
        return <Home onNavigate={navigate} onAddToCart={handleAddToCart} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        currentPage={currentPage} 
        onNavigate={navigate} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        onCheckout={() => {
          setIsCartOpen(false);
          alert('Checkout functionality would be integrated here with a payment provider like Stripe.');
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
