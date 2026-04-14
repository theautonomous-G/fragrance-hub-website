import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft, FlaskConical, Sparkles, Droplets, Star, RefreshCw } from 'lucide-react';
import { products } from '../data';
import { Product } from '../types';

interface FragranceFinderProps {
  onNavigate: (page: string, params?: any) => void;
}

type Step = 'intro' | 'scent' | 'occasion' | 'personality' | 'result';

export const FragranceFinder: React.FC<FragranceFinderProps> = ({ onNavigate }) => {
  const [step, setStep] = useState<Step>('intro');
  const [answers, setAnswers] = useState({
    scent: '',
    occasion: '',
    personality: ''
  });
  const [recommendations, setRecommendations] = useState<Product[]>([]);

  const handleNext = (field: string, value: string, nextStep: Step) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
    setStep(nextStep);
    
    if (nextStep === 'result') {
      calculateResult({ ...answers, [field]: value });
    }
  };

  const calculateResult = (finalAnswers: typeof answers) => {
    // Simple matching logic
    const matches = products.filter(p => {
      const familyMatch = finalAnswers.scent === 'All' || p.family.toLowerCase() === finalAnswers.scent.toLowerCase();
      const occasionMatch = p.occasion.some(o => o.toLowerCase() === finalAnswers.occasion.toLowerCase());
      return familyMatch || occasionMatch;
    });
    
    setRecommendations(matches.length > 0 ? matches.slice(0, 2) : products.slice(0, 2));
  };

  const resetQuiz = () => {
    setStep('intro');
    setAnswers({ scent: '', occasion: '', personality: '' });
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-luxury-cream flex items-center justify-center">
      <div className="max-w-4xl w-full px-4">
        <AnimatePresence mode="wait">
          {step === 'intro' && (
            <motion.div 
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center space-y-8"
            >
              <div className="w-20 h-20 bg-luxury-gold text-white rounded-full flex items-center justify-center mx-auto luxury-shadow mb-8">
                <FlaskConical size={32} />
              </div>
              <h1 className="text-5xl md:text-6xl font-serif">The Fragrance Finder</h1>
              <p className="text-luxury-gray text-lg max-w-xl mx-auto font-light leading-relaxed">
                Answer a few questions about your preferences and lifestyle, and our molecular algorithm will prescribe your perfect signature scent.
              </p>
              <button 
                onClick={() => setStep('scent')}
                className="bg-luxury-black text-luxury-white px-12 py-5 text-sm uppercase tracking-widest font-bold hover:bg-luxury-gold transition-all flex items-center gap-3 mx-auto"
              >
                Start the Consultation <ArrowRight size={18} />
              </button>
            </motion.div>
          )}

          {step === 'scent' && (
            <motion.div 
              key="scent"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-12"
            >
              <div className="text-center">
                <span className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-bold mb-4 block">Question 01</span>
                <h2 className="text-4xl font-serif">Which scent profile do you naturally gravitate towards?</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { id: 'Fresh', icon: <Droplets />, desc: 'Clean, crisp, and revitalizing like ocean air.' },
                  { id: 'Floral', icon: <Sparkles />, desc: 'Romantic, blooming, and delicately sweet.' },
                  { id: 'Woody', icon: <FlaskConical />, desc: 'Earthy, grounded, and sophisticated.' },
                  { id: 'Spicy', icon: <Star />, desc: 'Bold, warm, and provocatively intense.' }
                ].map((opt) => (
                  <button 
                    key={opt.id}
                    onClick={() => handleNext('scent', opt.id, 'occasion')}
                    className="p-8 bg-luxury-white luxury-border hover:border-luxury-gold transition-all text-left group"
                  >
                    <div className="text-luxury-gold mb-4 group-hover:scale-110 transition-transform">{opt.icon}</div>
                    <h3 className="text-xl font-serif mb-2">{opt.id}</h3>
                    <p className="text-xs text-luxury-gray font-light">{opt.desc}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 'occasion' && (
            <motion.div 
              key="occasion"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-12"
            >
              <div className="text-center">
                <span className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-bold mb-4 block">Question 02</span>
                <h2 className="text-4xl font-serif">What is the primary occasion for this fragrance?</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { id: 'Daily', title: 'Everyday Luxury', desc: 'A versatile scent for your daily routine.' },
                  { id: 'Office', title: 'Professional Presence', desc: 'Sophisticated and subtle for the workplace.' },
                  { id: 'Date', title: 'Romantic Evening', desc: 'Intimate, alluring, and memorable.' },
                  { id: 'Party', title: 'Bold Statement', desc: 'High-energy and attention-grabbing.' }
                ].map((opt) => (
                  <button 
                    key={opt.id}
                    onClick={() => handleNext('occasion', opt.id, 'personality')}
                    className="p-8 bg-luxury-white luxury-border hover:border-luxury-gold transition-all text-left"
                  >
                    <h3 className="text-xl font-serif mb-2">{opt.title}</h3>
                    <p className="text-xs text-luxury-gray font-light">{opt.desc}</p>
                  </button>
                ))}
              </div>
              <button onClick={() => setStep('scent')} className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-luxury-gray hover:text-luxury-black transition-colors mx-auto">
                <ArrowLeft size={14} /> Back
              </button>
            </motion.div>
          )}

          {step === 'personality' && (
            <motion.div 
              key="personality"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-12"
            >
              <div className="text-center">
                <span className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-bold mb-4 block">Question 03</span>
                <h2 className="text-4xl font-serif">How would you describe your personality?</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { id: 'Bold', title: 'Bold & Daring', desc: 'You like to stand out and take risks.' },
                  { id: 'Calm', title: 'Calm & Composed', desc: 'You prefer understated elegance.' },
                  { id: 'Romantic', title: 'Romantic & Dreamy', desc: 'You are guided by emotion and beauty.' },
                  { id: 'Energetic', title: 'Energetic & Vibrant', desc: 'You are always on the move.' }
                ].map((opt) => (
                  <button 
                    key={opt.id}
                    onClick={() => handleNext('personality', opt.id, 'result')}
                    className="p-8 bg-luxury-white luxury-border hover:border-luxury-gold transition-all text-left"
                  >
                    <h3 className="text-xl font-serif mb-2">{opt.title}</h3>
                    <p className="text-xs text-luxury-gray font-light">{opt.desc}</p>
                  </button>
                ))}
              </div>
              <button onClick={() => setStep('occasion')} className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-luxury-gray hover:text-luxury-black transition-colors mx-auto">
                <ArrowLeft size={14} /> Back
              </button>
            </motion.div>
          )}

          {step === 'result' && (
            <motion.div 
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-12"
            >
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-bold mb-4 block">Your Prescription</span>
                <h2 className="text-5xl font-serif">Molecular Match Found</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                {recommendations.map(product => (
                  <motion.div 
                    key={product.id}
                    whileHover={{ y: -10 }}
                    className="bg-luxury-white luxury-shadow p-6 group cursor-pointer"
                    onClick={() => onNavigate('product', { id: product.id })}
                  >
                    <div className="aspect-[4/5] overflow-hidden mb-6">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <h3 className="text-2xl font-serif mb-2">{product.name}</h3>
                    <p className="text-sm text-luxury-gray italic mb-4">{product.tagline}</p>
                    <button className="text-xs uppercase tracking-widest font-bold border-b border-luxury-gold pb-1 text-luxury-gold">View Prescription</button>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <button 
                  onClick={resetQuiz}
                  className="flex items-center gap-2 text-sm uppercase tracking-widest font-bold text-luxury-gray hover:text-luxury-black transition-colors"
                >
                  <RefreshCw size={16} /> Retake Quiz
                </button>
                <button 
                  onClick={() => onNavigate('shop')}
                  className="bg-luxury-black text-luxury-white px-10 py-4 text-sm uppercase tracking-widest font-bold hover:bg-luxury-gold transition-colors"
                >
                  Explore All Scents
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
