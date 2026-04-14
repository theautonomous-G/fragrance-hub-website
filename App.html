/**
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

/** Pages allowed in app */
type Page =
  | 'home'
  | 'shop'
  | 'product'
  | 'finder'
  | 'about'
  | 'contact'
  | 'blog';

/** Safer page params typing */
type PageParams = {
  id?: string;
  [key: string]: unknown;
};

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [pageParams, setPageParams] = useState<PageParams>({});
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { addToCart } = useCart();

  /** Scroll to top on route change */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  /** Navigation handler */
  const navigate = (page: Page, params: PageParams = {}) => {
    setCurrentPage(page);
    setPageParams(params);
  };

  /** Add product to cart */
  const handleAddToCart = (product: Product, size: string) => {
    addToCart(product, size);
    setIsCartOpen(true);
  };

  /** Page renderer */
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Home onNavigate={navigate} onAddToCart={handleAddToCart} />
        );

      case 'shop':
        return (
          <Shop
            onNavigate={navigate}
            onAddToCart={handleAddToCart}
            initialFilters={pageParams}
          />
        );

      case 'product':
        return (
          <ProductDetail
            productId={pageParams.id as string}
            onNavigate={navigate}
            onAddToCart={handleAddToCart}
          />
        );

      case 'finder':
        return <FragranceFinder onNavigate={navigate} />;

      case 'blog':
        return <Blog />;

      case 'about':
        return (
          <div className="pt-40 pb-24 max-w-4xl mx-auto px-4 text-center space-y-8">
            <h1 className="text-5xl font-serif">Our Story</h1>

            <p className="text-lg text-luxury-gray font-light leading-relaxed">
              Dr Fragrance was founded on the belief that scent is the most
              powerful trigger for human emotion. By combining molecular science
              with artisanal techniques, we create fragrances that define identity.
            </p>

            <div className="aspect-video bg-luxury-white luxury-shadow overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600611590798-fb833ff5eef4?auto=format&fit=crop&q=80&w=1200"
                alt="Atelier"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="pt-40 pb-24 max-w-4xl mx-auto px-4 text-center space-y-8">
            <h1 className="text-5xl font-serif">Contact Us</h1>

            <p className="text-lg text-luxury-gray font-light">
              Our concierge team is available to assist you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left pt-12">
              <div className="space-y-3">
                <h3 className="text-xl font-serif">Concierge</h3>
                <p className="text-sm text-luxury-gray">
                  concierge@drfragrance.com
                </p>
                <p className="text-sm text-luxury-gray">
                  +33 1 23 45 67 89
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-serif">Atelier</h3>
                <p className="text-sm text-luxury-gray">
                  123 Fragrance Avenue, Paris
                </p>
                <p className="text-sm text-luxury-gray">
                  Mon–Sat: 10:00 - 19:00
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <Home onNavigate={navigate} onAddToCart={handleAddToCart} />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        currentPage={currentPage}
        onNavigate={navigate}
        onCartClick={() => setIsCartOpen(true)}
      />

      <main className="flex-grow">{renderPage()}</main>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={() => {
          setIsCartOpen(false);
          alert('Checkout integration (Stripe) goes here.');
        }}
      />
    </div>
  );
}

/** Root App */
export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
