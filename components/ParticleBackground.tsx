import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

// --- Componente de Fundo com Partículas Douradas e Atmosfera (Bokeh) ---
const ParticleBackground: React.FC<{ opacity?: number }> = ({ opacity = 1 }) => {
  
  // 1. Poeira Dourada (Partículas pequenas com movimento de flutuação)
  const particles = useMemo(() => {
    return Array.from({ length: 80 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1, // 1px a 4px
      duration: Math.random() * 15 + 20, // Movimento bem lento (20s a 35s)
      delay: Math.random() * 5,
      moveX: Math.random() * 100 - 50, // Flutua para os lados
      moveY: Math.random() * 100 - 50, // Flutua para cima/baixo
    }));
  }, []);

  // 2. Bokehs (Atmosfera - Manchas de luz grandes e desfocadas)
  const bokehs = useMemo(() => {
    return Array.from({ length: 15 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 300 + 100, // 100px a 400px
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0" style={{ opacity }}>
      
      {/* Camada 1: Atmosfera Bokeh (Fundo desfocado) */}
      {bokehs.map((b, i) => (
         <motion.div 
            key={`bokeh-${i}`}
            className="absolute rounded-full bg-gold-500/10 mix-blend-screen blur-[80px]"
            style={{
                left: `${b.left}%`,
                top: `${b.top}%`,
                width: b.size,
                height: b.size,
            }}
            animate={{ 
                scale: [1, 1.3, 0.9, 1],
                opacity: [0.1, 0.3, 0.1],
                x: [0, 20, -20, 0],
            }}
            transition={{ 
                duration: b.duration, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: b.delay 
            }}
         />
      ))}

      {/* Camada 2: Poeira Dourada (Partículas Nítidas em Movimento) */}
      {particles.map((p, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            // Alterna entre branco quente e dourado puro para realismo
            backgroundColor: i % 2 === 0 ? '#FFF8E7' : '#D4AF37', 
            boxShadow: `0 0 ${p.size * 2}px ${i % 2 === 0 ? 'rgba(255,248,231,0.8)' : 'rgba(212,175,55,0.8)'}`,
          }}
          animate={{
            x: [0, p.moveX, 0], // Movimento lateral lento
            y: [0, p.moveY, 0], // Movimento vertical lento
            opacity: [0.2, 1, 0.2], // Cintilação
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Brilho extra na base (opcional, removido aqui para não conflitar com cartões pequenos) */}
    </div>
  );
};

export default ParticleBackground;