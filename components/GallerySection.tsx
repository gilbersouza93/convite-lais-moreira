import React from 'react';
import { GalleryItem } from '../types';
import { motion } from 'framer-motion';

const GallerySection: React.FC<{ items: GalleryItem[] }> = ({ items }) => {
  return (
    <section id="galeria" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h3 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-gold-500 font-sans text-sm tracking-[0.3em] uppercase font-bold mb-3"
          >
            Momentos
          </motion.h3>
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="font-serif text-4xl md:text-5xl text-gray-800"
          >
            Galeria
          </motion.h2>
        </div>

        <div className="space-y-24 md:space-y-32">
          {items.map((item, index) => (
            <div 
                key={index} 
                className={`flex flex-col ${item.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16`}
            >
              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, x: item.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 relative group"
              >
                <div className={`absolute ${item.reverse ? '-bottom-4 -right-4' : '-top-4 -left-4'} w-full h-full border-2 border-gold-300 rounded-sm transition-transform duration-500 group-hover:scale-[1.02]`}></div>
                <div className="relative overflow-hidden rounded-sm shadow-xl">
                    <img 
                        src={item.image} 
                        alt={item.title} 
                        className="relative z-10 w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" 
                    />
                </div>
              </motion.div>

              {/* Text Side */}
              <motion.div 
                initial={{ opacity: 0, x: item.reverse ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`w-full md:w-1/2 text-center ${item.reverse ? 'md:text-right' : 'md:text-left'}`}
              >
                <h3 className="font-serif text-3xl text-gray-800 mb-6">{item.title}</h3>
                <div className={`w-16 h-1 bg-gold-500 mb-6 ${item.reverse ? 'mx-auto md:ml-auto md:mr-0' : 'mx-auto md:mx-0'}`}></div>
                <p className="text-gray-600 font-light leading-relaxed text-lg">
                  {item.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;