import React, { useState, useEffect } from 'react';
import { IMAGES } from '../constants';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // O menu aparecerá após rolar 50px
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Jornada', href: '#sobre' },
    { name: 'Solenidades', href: '#solenidades' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Presença', href: '#rsvp' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-700 ease-in-out border-b border-transparent ${
        scrolled 
          ? 'translate-y-0 opacity-100 bg-dark-900/95 shadow-lg backdrop-blur-sm border-white/5 py-2' 
          : '-translate-y-full opacity-0 pointer-events-none py-4'
      }`}
    >
      <div className="container mx-auto px-2 md:px-6 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
        
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="relative z-50 cursor-pointer flex-shrink-0"
        >
          <img 
            src={IMAGES.LOGO} 
            alt="Logo LM" 
            className={`logo-white-filter hover:opacity-100 transition-all duration-500 ${
              scrolled ? 'h-8 md:h-14 opacity-90' : 'h-12 md:h-20 opacity-0'
            }`}
          />
        </a>

        {/* 
            Menu Otimizado
            Mobile: Flex-wrap centralizado, fonte menor (text-[9px]), espaçamento reduzido (gap-3), sem scroll.
            Desktop: Alinhado à direita, fonte normal, tracking largo.
        */}
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-8 px-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white hover:text-gold-300 transition-colors duration-300 uppercase text-[9px] md:text-xs tracking-wider md:tracking-[0.2em] font-medium relative group cursor-pointer whitespace-nowrap py-1"
              >
                {link.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navigation;