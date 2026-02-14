import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"
    >
      <motion.div
        animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
        }}
        transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut" 
        }}
        className="text-center"
      >
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-16 h-16 text-gold-500 mb-4 mx-auto"
        >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
        <h2 className="font-serif text-lg tracking-[0.3em] text-gold-700 uppercase">Carregando</h2>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;