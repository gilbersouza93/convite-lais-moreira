import React, { useState, useEffect } from 'react';
import { IMAGES } from '../constants';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
    setIsOpen(false); // Fecha o menu mobile ao clicar
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 300); // Pequeno delay para permitir que o menu feche visualmente
    }
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-700 ease-in-out border-b border-transparent ${
          scrolled 
            ? 'translate-y-0 opacity-100 bg-dark-900/95 shadow-lg backdrop-blur-sm border-white/5 py-2' 
            : '-translate-y-full opacity-0 pointer-events-none py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          
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
                scrolled ? 'h-11 md:h-16 opacity-100' : 'h-16 md:h-24 opacity-0'
              }`}
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white hover:text-gold-300 transition-colors duration-300 uppercase text-xs tracking-[0.2em] font-medium relative group cursor-pointer"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-white hover:text-gold-500 transition-colors p-2 pointer-events-auto"
            aria-label="Abrir menu"
          >
            <Menu size={28} />
          </button>

        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center md:hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-gold-500 hover:text-white transition-colors p-2"
              aria-label="Fechar menu"
            >
              <X size={32} />
            </button>

            {/* Logo in Menu */}
            <div className="mb-12">
               <img src={IMAGES.LOGO} alt="Logo" className="h-32 logo-white-filter opacity-90" />
            </div>

            {/* Menu Items */}
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="text-2xl font-serif text-white hover:text-gold-500 transition-colors tracking-widest uppercase"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Decorative bottom line */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gold-500/30 rounded-full"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;