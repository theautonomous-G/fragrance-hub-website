import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, onCheckout }) => {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-luxury-black/40 backdrop-blur-sm z-[100]"
          />
          
          {/* Drawer */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-luxury-cream z-[101] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-luxury-black/5 flex justify-between items-center bg-luxury-white">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} className="text-luxury-gold" />
                <h2 className="text-xl font-serif">Your Cart ({cartCount})</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-luxury-cream transition-colors rounded-full">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {cart.length > 0 ? (
                cart.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4 group">
                    <div className="w-24 h-32 bg-luxury-white luxury-border overflow-hidden shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-serif text-lg">{item.name}</h3>
                          <button 
                            onClick={() => removeFromCart(item.id, item.selectedSize)}
                            className="text-luxury-gray hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold mb-2">{item.selectedSize}</p>
                        <p className="font-medium">${item.price}</p>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-luxury-black/10 bg-luxury-white">
                          <button 
                            onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                            className="p-2 hover:text-luxury-gold transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                            className="p-2 hover:text-luxury-gold transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-20 h-20 bg-luxury-white rounded-full flex items-center justify-center text-luxury-gray luxury-shadow">
                    <ShoppingBag size={32} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif">Your cart is empty</h3>
                    <p className="text-sm text-luxury-gray font-light">Discover your next signature scent in our collection.</p>
                  </div>
                  <button 
                    onClick={() => { onClose(); onCheckout(); }} // Navigate to shop
                    className="bg-luxury-black text-luxury-white px-8 py-4 text-xs uppercase tracking-widest font-bold hover:bg-luxury-gold transition-colors"
                  >
                    Start Shopping
                  </button>
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 bg-luxury-white border-t border-luxury-black/5 space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm uppercase tracking-widest font-bold text-luxury-gray">Subtotal</span>
                  <span className="text-2xl font-serif">${cartTotal}</span>
                </div>
                <p className="text-[10px] text-luxury-gray text-center uppercase tracking-widest">
                  Shipping and taxes calculated at checkout
                </p>
                <button 
                  onClick={onCheckout}
                  className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-white py-5 text-sm uppercase tracking-widest font-bold flex items-center justify-center gap-3 transition-all group"
                >
                  Proceed to Checkout
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
