import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, Droplets, FlaskConical, Sparkles, ShieldCheck } from 'lucide-react';
import { products } from '../data';
import { Product } from '../types';

interface HomeProps {
  onNavigate: (page: string, params?: any) => void;
  onAddToCart: (product: Product, size: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate, onAddToCart }) => {
  const bestSellers = products.slice(0, 3);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Fragrance" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-luxury-black/40 backdrop-blur-[2px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-2xl text-luxury-white"
          >
            <span className="text-sm uppercase tracking-[0.3em] font-bold text-luxury-gold mb-4 block">
              Science Meets Luxury
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight mb-8 text-balance">
              Prescribe Your <br />
              <span className="italic">Signature Scent</span>
            </h1>
            <p className="text-lg md:text-xl text-luxury-white/80 mb-10 font-light leading-relaxed max-w-lg">
              Discover the molecular art of perfumery. Expertly crafted scents designed to evoke emotion and define your presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('shop')}
                className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-white px-8 py-4 text-sm uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Shop Collection
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => onNavigate('finder')}
                className="bg-transparent hover:bg-luxury-white/10 border border-luxury-white/30 text-luxury-white px-8 py-4 text-sm uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center gap-2"
              >
                Take Fragrance Quiz
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest text-luxury-white/60">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-luxury-white/60 to-transparent"></div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-luxury-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif mb-4">Curated Collections</h2>
            <div className="w-20 h-[1px] bg-luxury-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'For Him', image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800', filter: 'Men' },
              { name: 'For Her', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800', filter: 'Women' },
              { name: 'Unisex', image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800', filter: 'Unisex' }
            ].map((cat, idx) => (
              <motion.div 
                key={cat.name}
                whileHover={{ y: -10 }}
                className="relative h-[500px] group cursor-pointer overflow-hidden"
                onClick={() => onNavigate('shop', { gender: cat.filter })}
              >
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-luxury-black/20 group-hover:bg-luxury-black/40 transition-colors duration-500"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-luxury-white p-6">
                  <h3 className="text-3xl font-serif mb-4">{cat.name}</h3>
                  <span className="text-xs uppercase tracking-widest border-b border-luxury-white/50 pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Explore Now
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 bg-luxury-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-sm uppercase tracking-widest text-luxury-gold font-bold mb-2 block">Our Favorites</span>
              <h2 className="text-4xl md:text-5xl font-serif">Best Sellers</h2>
            </div>
            <button 
              onClick={() => onNavigate('shop')}
              className="text-sm uppercase tracking-widest font-bold border-b border-luxury-black pb-1 hover:text-luxury-gold hover:border-luxury-gold transition-all"
            >
              View All Products
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {bestSellers.map((product) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div 
                  className="relative aspect-[4/5] overflow-hidden mb-6 cursor-pointer"
                  onClick={() => onNavigate('product', { id: product.id })}
                >
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-luxury-white/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
                    {product.family}
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(product, product.sizes[0]);
                    }}
                    className="absolute bottom-0 left-0 w-full bg-luxury-black text-luxury-white py-4 text-xs uppercase tracking-widest font-bold translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  >
                    Quick Add to Cart
                  </button>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 
                      className="text-xl font-serif cursor-pointer hover:text-luxury-gold transition-colors"
                      onClick={() => onNavigate('product', { id: product.id })}
                    >
                      {product.name}
                    </h3>
                    <span className="font-medium">${product.price}</span>
                  </div>
                  <p className="text-sm text-luxury-gray line-clamp-1">{product.tagline}</p>
                  <div className="flex items-center gap-1 text-luxury-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                    ))}
                    <span className="text-[10px] text-luxury-gray ml-1">({product.reviews} reviews)</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Preview */}
      <section className="py-24 bg-luxury-black text-luxury-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-sm uppercase tracking-widest text-luxury-gold font-bold">The Alchemy of Scent</span>
              <h2 className="text-4xl md:text-6xl font-serif leading-tight">
                Where Science <br />
                <span className="italic text-luxury-gold">Meets Emotion</span>
              </h2>
              <p className="text-luxury-gray text-lg leading-relaxed font-light">
                At Dr Fragrance, we believe that perfume is more than just a scent—it's a chemical reaction that triggers memories and emotions. Our master perfumers use state-of-the-art molecular distillation to isolate the purest notes, blending them with traditional artistry to create scents that are both modern and timeless.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="space-y-2">
                  <FlaskConical className="text-luxury-gold" size={32} />
                  <h4 className="font-serif text-xl">Molecular Precision</h4>
                  <p className="text-xs text-luxury-gray">Isolated essences for unmatched purity.</p>
                </div>
                <div className="space-y-2">
                  <Sparkles className="text-luxury-gold" size={32} />
                  <h4 className="font-serif text-xl">Artisanal Blending</h4>
                  <p className="text-xs text-luxury-gray">Hand-crafted in small batches.</p>
                </div>
              </div>
              <button 
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold border-b border-luxury-gold pb-1 hover:text-luxury-gold transition-all pt-4"
              >
                Discover Our Story <ArrowRight size={16} />
              </button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full overflow-hidden border-8 border-luxury-white/5 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1600611590798-fb833ff5eef4?auto=format&fit=crop&q=80&w=1000" 
                  alt="Perfume Lab" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-luxury-gold/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-luxury-gold/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-luxury-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Droplets />, title: 'Long Lasting', desc: 'Formulas designed to linger for 12+ hours.' },
              { icon: <FlaskConical />, title: 'Pure Ingredients', desc: 'Ethically sourced, medical-grade essences.' },
              { icon: <Sparkles />, title: 'Unique Blends', desc: 'Signature scents you won\'t find anywhere else.' },
              { icon: <ShieldCheck />, title: 'Authenticity', desc: 'Guaranteed original molecular formulas.' }
            ].map((item, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-16 h-16 bg-luxury-white rounded-full flex items-center justify-center mx-auto text-luxury-gold luxury-shadow">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 28 })}
                </div>
                <h3 className="font-serif text-xl">{item.title}</h3>
                <p className="text-sm text-luxury-gray leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-luxury-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="luxury-border p-12 md:p-20 space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-luxury-gold"></div>
            <h2 className="text-3xl md:text-5xl font-serif">Join the Inner Circle</h2>
            <p className="text-luxury-gray max-w-lg mx-auto">
              Subscribe to receive exclusive molecular insights, early access to new prescriptions, and 10% off your first order.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="flex-1 bg-luxury-cream border-none px-6 py-4 text-sm focus:ring-1 focus:ring-luxury-gold outline-none"
              />
              <button className="bg-luxury-black text-luxury-white px-8 py-4 text-sm uppercase tracking-widest font-bold hover:bg-luxury-gold transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
