import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, ShoppingBag, ArrowLeft, ChevronRight, Droplets, FlaskConical, ShieldCheck, Heart } from 'lucide-react';
import { products } from '../data';
import { Product } from '../types';

interface ProductDetailProps {
  productId: string;
  onNavigate: (page: string, params?: any) => void;
  onAddToCart: (product: Product, size: string) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ productId, onNavigate, onAddToCart }) => {
  const product = products.find(p => p.id === productId);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '100ml');
  const [activeTab, setActiveTab] = useState<'details' | 'notes' | 'reviews'>('details');

  if (!product) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h2 className="text-3xl font-serif mb-4">Product not found.</h2>
        <button onClick={() => onNavigate('shop')} className="text-luxury-gold uppercase tracking-widest font-bold">Back to Shop</button>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id && (p.family === product.family || p.gender === product.gender)).slice(0, 3);

  return (
    <div className="pt-32 pb-24 bg-luxury-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-luxury-gray mb-12">
          <button onClick={() => onNavigate('home')} className="hover:text-luxury-black transition-colors">Home</button>
          <ChevronRight size={10} />
          <button onClick={() => onNavigate('shop')} className="hover:text-luxury-black transition-colors">Shop</button>
          <ChevronRight size={10} />
          <span className="text-luxury-black font-bold">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Product Images */}
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-[4/5] bg-luxury-white luxury-shadow overflow-hidden"
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-square bg-luxury-white luxury-border cursor-pointer hover:border-luxury-gold transition-colors overflow-hidden">
                  <img src={product.image} alt="" className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-luxury-gold font-bold mb-2 block">{product.family} Collection</span>
                  <h1 className="text-4xl md:text-5xl font-serif mb-2">{product.name}</h1>
                  <p className="text-lg italic text-luxury-gray">{product.tagline}</p>
                </div>
                <button className="p-3 rounded-full border border-luxury-black/5 hover:bg-luxury-white transition-colors">
                  <Heart size={20} />
                </button>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1 text-luxury-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                  ))}
                </div>
                <span className="text-sm text-luxury-gray font-medium">{product.rating} / 5.0 ({product.reviews} Reviews)</span>
              </div>

              <p className="text-3xl font-medium mb-8">${product.price}</p>
              
              <div className="space-y-6 mb-10">
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-4">Select Size</h4>
                  <div className="flex gap-4">
                    {product.sizes.map(size => (
                      <button 
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-8 py-3 text-sm uppercase tracking-widest font-bold transition-all ${
                          selectedSize === size 
                            ? 'bg-luxury-black text-luxury-white' 
                            : 'bg-luxury-white text-luxury-black border border-luxury-black/10 hover:border-luxury-black'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={() => onAddToCart(product, selectedSize)}
                  className="flex-1 bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-white py-5 text-sm uppercase tracking-widest font-bold flex items-center justify-center gap-3 transition-all"
                >
                  <ShoppingBag size={18} />
                  Add to Cart
                </button>
                <button className="flex-1 bg-luxury-black hover:bg-luxury-black/90 text-luxury-white py-5 text-sm uppercase tracking-widest font-bold transition-all">
                  Buy Now
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 py-8 border-y border-luxury-black/5">
                <div className="text-center space-y-2">
                  <Droplets size={20} className="mx-auto text-luxury-gold" />
                  <span className="text-[10px] uppercase tracking-widest font-bold block">Long Lasting</span>
                </div>
                <div className="text-center space-y-2">
                  <FlaskConical size={20} className="mx-auto text-luxury-gold" />
                  <span className="text-[10px] uppercase tracking-widest font-bold block">Pure Essence</span>
                </div>
                <div className="text-center space-y-2">
                  <ShieldCheck size={20} className="mx-auto text-luxury-gold" />
                  <span className="text-[10px] uppercase tracking-widest font-bold block">Authentic</span>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-auto">
              <div className="flex border-b border-luxury-black/5 mb-8">
                {['details', 'notes', 'reviews'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`px-6 py-4 text-xs uppercase tracking-widest font-bold transition-all relative ${
                      activeTab === tab ? 'text-luxury-gold' : 'text-luxury-gray hover:text-luxury-black'
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-[2px] bg-luxury-gold" />
                    )}
                  </button>
                ))}
              </div>

              <div className="min-h-[200px]">
                {activeTab === 'details' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4 text-sm text-luxury-gray leading-relaxed font-light">
                    <p>{product.description}</p>
                    <ul className="space-y-2 list-disc pl-4 mt-4">
                      <li>Concentration: Eau de Parfum (EDP)</li>
                      <li>Occasion: {product.occasion.join(', ')}</li>
                      <li>Gender: {product.gender}</li>
                      <li>Longevity: 12+ Hours</li>
                    </ul>
                  </motion.div>
                )}

                {activeTab === 'notes' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                      <div>
                        <h5 className="text-[10px] uppercase tracking-widest font-bold text-luxury-gold mb-4">Top Notes</h5>
                        <ul className="space-y-2 text-sm text-luxury-black font-medium">
                          {product.notes.top.map(note => <li key={note}>{note}</li>)}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-[10px] uppercase tracking-widest font-bold text-luxury-gold mb-4">Heart Notes</h5>
                        <ul className="space-y-2 text-sm text-luxury-black font-medium">
                          {product.notes.heart.map(note => <li key={note}>{note}</li>)}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-[10px] uppercase tracking-widest font-bold text-luxury-gold mb-4">Base Notes</h5>
                        <ul className="space-y-2 text-sm text-luxury-black font-medium">
                          {product.notes.base.map(note => <li key={note}>{note}</li>)}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'reviews' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    {[1, 2].map(i => (
                      <div key={i} className="border-b border-luxury-black/5 pb-6 last:border-0">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-1 text-luxury-gold">
                            {[...Array(5)].map((_, j) => <Star key={j} size={12} fill="currentColor" />)}
                          </div>
                          <span className="text-[10px] text-luxury-gray uppercase tracking-widest">2 weeks ago</span>
                        </div>
                        <h6 className="font-bold text-sm mb-2">Absolutely stunning scent</h6>
                        <p className="text-xs text-luxury-gray leading-relaxed">
                          "I've never received so many compliments on a fragrance before. It's sophisticated, long-lasting, and truly unique. The oud is perfectly balanced with the rose notes."
                        </p>
                        <span className="text-[10px] font-bold uppercase tracking-widest mt-4 block">— Sarah L.</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section>
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-serif">You May Also Like</h2>
            <button onClick={() => onNavigate('shop')} className="text-xs uppercase tracking-widest font-bold border-b border-luxury-black pb-1">View All</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {relatedProducts.map((p) => (
              <div key={p.id} className="group cursor-pointer" onClick={() => onNavigate('product', { id: p.id })}>
                <div className="aspect-[4/5] overflow-hidden mb-6 bg-luxury-white">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="text-xl font-serif mb-1 group-hover:text-luxury-gold transition-colors">{p.name}</h3>
                <p className="text-sm text-luxury-gray mb-2 italic">{p.tagline}</p>
                <span className="font-medium">${p.price}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
