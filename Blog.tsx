import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Clock, User } from 'lucide-react';

export const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: 'How to Choose Your Signature Scent',
      excerpt: 'Finding the perfect fragrance is a journey of self-discovery. Learn how to navigate the molecular landscape of perfumery.',
      image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800',
      date: 'Oct 12, 2023',
      author: 'Dr. Elena Rossi'
    },
    {
      id: 2,
      title: 'The Difference Between EDT, EDP, and Parfum',
      excerpt: 'Concentration matters. Understand the science behind fragrance longevity and projection.',
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800',
      date: 'Nov 05, 2023',
      author: 'Marcus Thorne'
    },
    {
      id: 3,
      title: 'Top 5 Perfumes for the Modern Professional',
      excerpt: 'Command presence in the boardroom with these expertly curated molecular prescriptions.',
      image: 'https://images.unsplash.com/photo-1563170351-be82bc888bb4?auto=format&fit=crop&q=80&w=800',
      date: 'Dec 15, 2023',
      author: 'Dr. Elena Rossi'
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-luxury-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif mb-4">Fragrance Guide</h1>
          <p className="text-luxury-gray max-w-xl mx-auto font-light">
            Insights into the science and art of perfumery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {posts.map((post) => (
            <motion.article 
              key={post.id}
              whileHover={{ y: -10 }}
              className="bg-luxury-white luxury-shadow group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-luxury-gold font-bold">
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                </div>
                <h2 className="text-2xl font-serif group-hover:text-luxury-gold transition-colors">{post.title}</h2>
                <p className="text-sm text-luxury-gray font-light leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <button className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold border-b border-luxury-gold pb-1 hover:text-luxury-gold transition-all">
                  Read More <ArrowRight size={14} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};
