import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope } from 'lucide-react';

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
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5]
        }}
        transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut" 
        }}
        className="text-center flex flex-col items-center"
      >
        {/* Ícone de Medicina (Estetoscópio) ao invés do genérico */}
        <Stethoscope 
            size={64} 
            strokeWidth={1.5}
            className="text-gold-500 mb-4 drop-shadow-md" 
        />
        
        <h2 className="font-serif text-lg tracking-[0.3em] text-gold-700 uppercase">Carregando</h2>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;