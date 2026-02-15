import React, { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// --- OTIMIZAÇÃO DE PERFORMANCE ---
// Envolvemos em React.memo para evitar re-renderizações desnecessárias
// quando o estado do componente pai (App) muda (ex: carrossel ou scroll).
const ParticleBackground: React.FC<{ opacity?: number }> = React.memo(({ opacity = 1 }) => {
  
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Detecta se é mobile para reduzir drasticamente a quantidade de partículas
  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Configurações baseadas no dispositivo
  // Mobile: 15 partículas / Desktop: 35 partículas (Reduzido de 80)
  const particleCount = isMobile ? 15 : 35; 
  // Mobile: 2 Bokehs / Desktop: 5 Bokehs (Reduzido de 15)
  const bokehCount = isMobile ? 2 : 5;

  // 1. Poeira Dourada (Partículas)
  const particles = useMemo(() => {
    if (!mounted) return [];
    return Array.from({ length: particleCount }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1, // 1px a 4px
      duration: Math.random() * 10 + 15, // 15s a 25s
      delay: Math.random() * 5,
      moveX: Math.random() * 50 - 25, // Reduzido o range de movimento
      moveY: Math.random() * 50 - 25, 
    }));
  }, [particleCount, mounted]);

  // 2. Bokehs (Atmosfera)
  const bokehs = useMemo(() => {
    if (!mounted) return [];
    return Array.from({ length: bokehCount }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: isMobile ? Math.random() * 150 + 100 : Math.random() * 300 + 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
  }, [bokehCount, isMobile, mounted]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0" style={{ opacity }}>
      
      {/* Camada 1: Atmosfera Bokeh (Fundo desfocado) */}
      {bokehs.map((b, i) => (
         <motion.div 
            key={`bokeh-${i}`}
            className="absolute rounded-full bg-gold-500/10 mix-blend-screen blur-[60px]" // Blur reduzido de 80 para 60
            style={{
                left: `${b.left}%`,
                top: `${b.top}%`,
                width: b.size,
                height: b.size,
            }}
            animate={{ 
                scale: [1, 1.2, 1], // Movimento simplificado no mobile
                opacity: [0.1, 0.25, 0.1],
                // No mobile, removemos o movimento X/Y dos Bokehs grandes para salvar GPU
                x: isMobile ? 0 : [0, 30, 0], 
            }}
            transition={{ 
                duration: b.duration, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: b.delay 
            }}
         />
      ))}

      {/* Camada 2: Poeira Dourada */}
      {particles.map((p, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            backgroundColor: i % 2 === 0 ? '#FFF8E7' : '#D4AF37',
            // REMOVIDO BOX-SHADOW: Era o maior causador de lag no mobile
          }}
          animate={{
            x: [0, p.moveX, 0],
            y: [0, p.moveY, 0],
            opacity: [0.2, 0.8, 0.2], 
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
});

export default ParticleBackground;