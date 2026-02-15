import React, { useMemo, useState, useEffect } from 'react';

// CSS Puro para animação de partículas (Roda na GPU, não trava o Scroll)
const styles = `
  @keyframes float {
    0% { transform: translate3d(0, 0, 0); }
    50% { transform: translate3d(var(--move-x), var(--move-y), 0); }
    100% { transform: translate3d(0, 0, 0); }
  }
  
  @keyframes pulse-opacity {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.8; }
  }

  .particle-container {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
  }

  .particle {
    position: absolute;
    border-radius: 50%;
    background-color: #D4AF37;
    will-change: transform, opacity;
  }

  .bokeh {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(212, 175, 55, 0.1);
    filter: blur(40px);
    mix-blend-mode: screen;
    will-change: transform, opacity;
  }
`;

const ParticleBackground: React.FC<{ opacity?: number }> = React.memo(({ opacity = 1 }) => {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    // Debounce resize listener opcional, mas para simplificar, apenas check inicial
  }, []);

  // Redução drástica de elementos para garantir 60fps
  const particleCount = isMobile ? 12 : 25;
  const bokehCount = isMobile ? 3 : 6;

  const particles = useMemo(() => {
    return Array.from({ length: particleCount }).map((_, i) => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1 + 'px',
      // CSS Variables para movimento
      style: {
        '--move-x': `${Math.random() * 40 - 20}px`,
        '--move-y': `${Math.random() * 40 - 20}px`,
        animation: `float ${15 + Math.random() * 10}s infinite ease-in-out, pulse-opacity ${4 + Math.random() * 4}s infinite ease-in-out`,
        animationDelay: `-${Math.random() * 10}s`
      } as React.CSSProperties
    }));
  }, [particleCount]);

  const bokehs = useMemo(() => {
    return Array.from({ length: bokehCount }).map((_, i) => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: (isMobile ? Math.random() * 100 + 50 : Math.random() * 200 + 100) + 'px',
      style: {
        '--move-x': `${Math.random() * 60 - 30}px`,
        '--move-y': `${Math.random() * 60 - 30}px`,
        animation: `float ${20 + Math.random() * 10}s infinite ease-in-out`,
        animationDelay: `-${Math.random() * 10}s`
      } as React.CSSProperties
    }));
  }, [bokehCount, isMobile]);

  if (!mounted) return null;

  return (
    <>
      <style>{styles}</style>
      <div className="particle-container" style={{ opacity }}>
        {/* Camada Bokeh (Fundo) */}
        {bokehs.map((b, i) => (
          <div
            key={`bokeh-${i}`}
            className="bokeh"
            style={{
              left: `${b.left}%`,
              top: `${b.top}%`,
              width: b.size,
              height: b.size,
              ...b.style
            }}
          />
        ))}

        {/* Camada Partículas (Frente) */}
        {particles.map((p, i) => (
          <div
            key={`particle-${i}`}
            className="particle"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              opacity: i % 3 === 0 ? 0.8 : 0.4, // Variação de opacidade estática base
              backgroundColor: i % 2 === 0 ? '#FFF8E7' : '#D4AF37',
              ...p.style
            }}
          />
        ))}
      </div>
    </>
  );
});

export default ParticleBackground;