import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, X, ChevronDown, Star, Search } from 'lucide-react';
import { products } from '../data';
import { Product, FragranceFamily, Gender } from '../types';

interface ShopProps {
  onNavigate: (page: string, params?: any) => void;
  onAddToCart: (product: Product, size: string) => void;
  initialFilters?: { gender?: string };
}

export const Shop: React.FC<ShopProps> = ({ onNavigate, onAddToCart, initialFilters }) => {
  const [selectedGender, setSelectedGender] = useState<Gender | 'All'>(
    (initialFilters?.gender as Gender) || 'All'
  );
  const [selectedFamily, setSelectedFamily] = useState<FragranceFamily | 'All'>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const families: FragranceFamily[] = ['Woody', 'Floral', 'Citrus', 'Oriental', 'Fresh', 'Spicy'];
  const genders: Gender[] = ['Men', 'Women', 'Unisex'];

  const filteredProducts = useMemo(() => {
    return products
      .filter(p => {
        const matchesGender = selectedGender === 'All' || p.gender === selectedGender;
        const matchesFamily = selectedFamily === 'All' || p.family === selectedFamily;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             p.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesGender && matchesFamily && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0; // featured
      });
  }, [selectedGender, selectedFamily, sortBy, searchQuery]);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-luxury-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif mb-4">The Collection</h1>
          <p className="text-luxury-gray max-w-xl mx-auto font-light">
            Explore our range of molecularly-precise fragrances, each designed to capture a unique olfactory landscape.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 bg-luxury-white p-6 luxury-shadow">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 text-sm uppercase tracking-widest font-bold border border-luxury-black/10 px-6 py-3 hover:bg-luxury-black hover:text-luxury-white transition-all"
            >
              <Filter size={16} />
              Filters
            </button>
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-luxury-gray" size={16} />
              <input 
                type="text" 
                placeholder="Search scents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-luxury-cream/50 border-none pl-12 pr-4 py-3 text-sm focus:ring-1 focus:ring-luxury-gold outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <span className="text-xs uppercase tracking-widest text-luxury-gray font-bold">Sort By:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent border-none text-sm font-bold uppercase tracking-widest focus:ring-0 outline-none cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Active Filters */}
        {(selectedGender !== 'All' || selectedFamily !== 'All') && (
          <div className="flex flex-wrap gap-2 mb-8">
            {selectedGender !== 'All' && (
              <span className="inline-flex items-center gap-2 bg-luxury-gold text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                {selectedGender}
                <X size={14} className="cursor-pointer" onClick={() => setSelectedGender('All')} />
              </span>
            )}
            {selectedFamily !== 'All' && (
              <span className="inline-flex items-center gap-2 bg-luxury-gold text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                {selectedFamily}
                <X size={14} className="cursor-pointer" onClick={() => setSelectedFamily('All')} />
              </span>
            )}
            <button 
              onClick={() => { setSelectedGender('All'); setSelectedFamily('All'); }}
              className="text-xs uppercase tracking-widest font-bold text-luxury-gray hover:text-luxury-black transition-colors ml-2"
            >
              Clear All
            </button>
          </div>
        )}

        {/* Filter Sidebar (Mobile/Overlay) */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="fixed inset-0 z-[60] bg-luxury-black/50 backdrop-blur-sm lg:relative lg:inset-auto lg:z-0 lg:bg-transparent lg:backdrop-none"
            >
              <div className="absolute left-0 top-0 h-full w-80 bg-luxury-white p-8 lg:hidden">
                <div className="flex justify-between items-center mb-10">
                  <h3 className="text-2xl font-serif">Filters</h3>
                  <X className="cursor-pointer" onClick={() => setIsFilterOpen(false)} />
                </div>
                
                <div className="space-y-10">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold mb-4 text-luxury-gold">Gender</h4>
                    <div className="space-y-3">
                      {['All', ...genders].map(g => (
                        <label key={g} className="flex items-center gap-3 cursor-pointer group">
                          <input 
                            type="radio" 
                            name="gender" 
                            checked={selectedGender === g}
                            onChange={() => setSelectedGender(g as any)}
                            className="w-4 h-4 border-luxury-black text-luxury-gold focus:ring-luxury-gold"
                          />
                          <span className={`text-sm uppercase tracking-widest ${selectedGender === g ? 'font-bold' : 'text-luxury-gray group-hover:text-luxury-black'}`}>
                            {g}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold mb-4 text-luxury-gold">Fragrance Family</h4>
                    <div className="space-y-3">
                      {['All', ...families].map(f => (
                        <label key={f} className="flex items-center gap-3 cursor-pointer group">
                          <input 
                            type="radio" 
                            name="family" 
                            checked={selectedFamily === f}
                            onChange={() => setSelectedFamily(f as any)}
                            className="w-4 h-4 border-luxury-black text-luxury-gold focus:ring-luxury-gold"
                          />
                          <span className={`text-sm uppercase tracking-widest ${selectedFamily === f ? 'font-bold' : 'text-luxury-gray group-hover:text-luxury-black'}`}>
                            {f}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full bg-luxury-black text-luxury-white py-4 mt-12 text-xs uppercase tracking-widest font-bold"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProducts.map((product) => (
              <motion.div 
                key={product.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="group"
              >
                <div 
                  className="relative aspect-[4/5] overflow-hidden mb-6 cursor-pointer bg-luxury-white"
                  onClick={() => onNavigate('product', { id: product.id })}
                >
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-luxury-white/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
                    {product.family}
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(product, product.sizes[0]);
                    }}
                    className="absolute bottom-0 left-0 w-full bg-luxury-black text-luxury-white py-4 text-xs uppercase tracking-widest font-bold translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  >
                    Add to Cart
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
                  <p className="text-sm text-luxury-gray line-clamp-1 italic">{product.tagline}</p>
                  <div className="flex items-center gap-1 text-luxury-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                    ))}
                    <span className="text-[10px] text-luxury-gray ml-1">({product.reviews})</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-serif mb-4">No scents found matching your criteria.</h3>
            <button 
              onClick={() => { setSelectedGender('All'); setSelectedFamily('All'); setSearchQuery(''); }}
              className="text-sm uppercase tracking-widest font-bold border-b border-luxury-black pb-1"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
