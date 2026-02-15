import React, { useState, useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import Countdown from './components/Countdown';
import EventCard from './components/EventCard';
import GallerySection from './components/GallerySection';
import LoadingScreen from './components/LoadingScreen';
import CoverCard from './components/CoverCard';
import ParticleBackground from './components/ParticleBackground';
import { EVENTS, GALLERY_ITEMS, IMAGES } from './constants';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Heart } from 'lucide-react';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { scrollY } = useScroll();
  const [isCoverMode, setIsCoverMode] = useState(false);

  // --- Lógica do Carrossel da Família ---
  const [currentFamilyIndex, setCurrentFamilyIndex] = useState(0);
  const familyImages = [IMAGES.FAMILY_BG, IMAGES.FAMILY_2];

  useEffect(() => {
    // Alterna a imagem a cada 5 segundos
    const interval = setInterval(() => {
      setCurrentFamilyIndex((prev) => (prev + 1) % familyImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [familyImages.length]);
  // --------------------------------------

  // Ref para efeito parallax da seção família
  const familyRef = useRef(null);

  // Verifica se estamos no modo "Gerador de Capa" (PDF)
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get('capa') === 'true') {
      setIsCoverMode(true);
      setLoading(false); // Não precisa de loading no modo capa
    } else {
      // Simulate loading time for assets only in main app
      const timer = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  // AJUSTES DE SCROLL OTIMIZADOS:
  const textOpacity = useTransform(scrollY, [0, 200, 600], [0, 0, 1]); 
  const textY = useTransform(scrollY, [0, 600], [100, 0]); 
  const textScale = useTransform(scrollY, [0, 600], [0.9, 1]);
  const overlayOpacity = useTransform(scrollY, [0, 400], [0, 0.7]);
  const arrowOpacity = useTransform(scrollY, [0, 300, 500], [1, 0, 0]);

  // Codificação segura da mensagem do WhatsApp
  const whatsappNumber = "5511956584146";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de confirmar minha presença na formatura da Laís!");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // SE ESTIVER NO MODO CAPA, RENDERIZA APENAS O CARTÃO
  if (isCoverMode) {
    return <CoverCard />;
  }

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      <div className={`min-h-screen ${loading ? 'overflow-hidden h-screen' : ''}`}>
        <Navigation />

        {/* Hero Section Wrapper */}
        <header id="home" className="relative h-[180vh]">
          
          {/* Sticky Container */}
          <div className="sticky top-0 h-screen flex flex-col items-center justify-start pt-20 md:justify-center md:pt-0 overflow-hidden bg-[#0a0a0a]">
            
            {/* 1. Background Estático */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 transform-gpu">
               <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-[#111] to-black opacity-90"></div>
               <div className="absolute inset-0 opacity-[0.03]" 
                    style={{ 
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)', 
                        backgroundSize: '4rem 4rem' 
                    }}>
               </div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[150vw] md:w-[60vw] h-[60vh] bg-gold-500/10 rounded-full blur-[80px] opacity-50 mix-blend-screen will-change-transform"></div>
               
               {/* LM Gigante */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center select-none z-0">
                  <span className="font-serif text-[40vh] md:text-[60vh] text-gold-300 opacity-[0.06] leading-none tracking-tighter will-change-transform">
                    LM
                  </span>
               </div>
               <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
            </div>

            {/* 2. Camada de Partículas */}
            <ParticleBackground opacity={1} />

            {/* 3. Imagem da Formanda */}
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
              className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-center pointer-events-none will-change-transform"
            >
               <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black via-black/40 to-transparent z-20"></div>
               
               <img 
                 src={IMAGES.HERO_PORTRAIT} 
                 alt="Dra. Laís Moreira" 
                 className="relative z-20 w-auto h-[70vh] md:h-[85vh] object-contain object-bottom max-w-none md:max-w-full drop-shadow-[0_10px_50px_rgba(0,0,0,0.9)] brightness-90 contrast-105 transform-gpu"
               />
            </motion.div>

            {/* 4. Dark Overlay */}
            <motion.div 
                style={{ opacity: overlayOpacity }}
                className="absolute inset-0 bg-black/85 z-30 pointer-events-none transition-colors duration-75 will-change-[opacity]"
            />

            {/* 5. Texto Principal */}
            <motion.div 
              style={{ opacity: textOpacity, y: textY, scale: textScale }}
              className="relative z-40 text-center text-white px-4 max-w-5xl mx-auto mb-auto md:mb-0 mt-8 md:mt-0 will-change-transform"
            >
              <p className="font-sans text-xs md:text-lg tracking-[0.3em] uppercase mb-2 md:mb-6 text-gold-300 drop-shadow-lg font-medium">
                Convite de Formatura
              </p>
              <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl font-bold mb-4 md:mb-6 tracking-wide text-gold-gradient drop-shadow-2xl">
                Laís Moreira
              </h1>
              
              <div className="h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto my-4 md:my-8 w-32 md:w-48 opacity-80" />
              
              <h2 className="font-sans text-lg md:text-3xl tracking-[0.3em] font-light uppercase text-gray-100 drop-shadow-md flex flex-col md:flex-row items-center justify-center gap-1 md:gap-4">
                <span>Medicina</span>
                <span className="hidden md:inline text-gold-500">•</span>
                <span className="text-gold-200 font-normal">2026</span>
              </h2>
            </motion.div>

            {/* 6. Indicador de Scroll */}
            <motion.div 
              style={{ opacity: arrowOpacity }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 1 }}
              className="absolute bottom-24 md:bottom-8 left-0 right-0 w-full flex justify-center z-50 will-change-[opacity]"
            >
              <div className="flex flex-col items-center gap-2 animate-bounce bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/5 shadow-lg">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold-300/90 text-center pl-1 font-bold shadow-black drop-shadow-md">
                    Deslize para ver
                  </span>
                  <ChevronDown size={28} strokeWidth={1} className="text-white drop-shadow-md" />
              </div>
            </motion.div>

          </div>
        </header>

        {/* Intro Quote Section */}
        <section className="py-24 bg-white text-center relative z-10 border-t border-gray-100">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.img 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 0.9, y: 0 }}
                        viewport={{ once: true }}
                        src={IMAGES.LOGO} 
                        alt="Logo Laís Moreira" 
                        className="h-64 md:h-80 mx-auto mb-12 object-contain" 
                    />
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="font-serif text-xl md:text-2xl text-gray-600 leading-relaxed italic"
                    >
                        "A medicina é a arte de preservar a vida e de aliviar o sofrimento. Chegar até aqui não foi apenas sobre estudar o corpo humano, mas sobre entender a alma humana."
                    </motion.p>
                    <div className="w-24 h-0.5 bg-gold-300 mx-auto mt-12"></div>
                </div>
            </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-12 lg:gap-20">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 flex justify-center relative"
                    >
                        <div className="relative w-full max-w-xl">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] aspect-square bg-gold-100/20 rounded-full blur-3xl -z-20"></div>
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] h-[90%] bg-gradient-to-t from-gold-100/30 to-transparent rounded-t-[10rem] border-t border-x border-gold-200/50 -z-10"></div>
                            <img 
                                src={IMAGES.PORTRAIT} 
                                alt="Dra. Laís Moreira" 
                                className="w-full h-auto object-contain drop-shadow-2xl relative z-10"
                            />
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 text-center md:text-left pt-4"
                    >
                        <h3 className="text-gold-500 font-sans text-sm tracking-[0.2em] uppercase font-bold mb-4">A Jornada</h3>
                        <h2 className="font-serif text-5xl md:text-6xl text-gray-800 mb-8">Dra. Laís Moreira</h2>
                        <div className="space-y-6 text-gray-600 text-lg font-light leading-relaxed">
                            <p>Foram anos de dedicação, noites em claro e muito estudo. A jornada da medicina é longa e desafiadora, mas cada passo valeu a pena.</p>
                            <p>Este convite é a celebração de um sonho que se tornou realidade, e sua presença tornará este momento ainda mais especial.</p>
                        </div>
                        <img src={IMAGES.LOGO} alt="Assinatura" className="h-40 mx-auto md:mx-0 object-contain opacity-80 mt-8 -ml-4" />
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Family Section */}
        <section ref={familyRef} className="relative py-24 bg-dark-900 overflow-hidden">
            <ParticleBackground opacity={0.6} />
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 text-center md:text-right order-1"
                    >
                        <h2 className="font-script text-6xl md:text-7xl lg:text-8xl text-gold-300 mb-8 drop-shadow-lg leading-tight">Gratidão à <br /> Família</h2>
                        <blockquote className="relative">
                            <p className="text-gray-200 text-xl md:text-2xl font-light italic leading-relaxed z-10 relative">Aos meus pais e familiares, que foram meu alicerce e minha força.</p>
                            <p className="text-gold-100 text-xl md:text-2xl font-normal mt-4">Essa vitória também é de vocês.</p>
                        </blockquote>
                        <div className="mt-8 flex justify-center md:justify-end gap-3">
                             {familyImages.map((_, idx) => (
                                <button key={idx} onClick={() => setCurrentFamilyIndex(idx)} className={`w-3 h-3 rounded-full transition-all duration-300 ${currentFamilyIndex === idx ? 'bg-gold-500 scale-125' : 'bg-gold-500/20'}`} />
                             ))}
                        </div>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 order-2"
                    >
                        <div className="relative p-2 md:p-3 bg-gradient-to-br from-gold-300/30 to-gold-900/10 rounded-sm shadow-2xl">
                             <div className="relative overflow-hidden rounded-sm bg-black aspect-[4/3] md:aspect-[3/2]">
                                <AnimatePresence mode="wait">
                                    <motion.img key={currentFamilyIndex} src={familyImages[currentFamilyIndex]} alt="Família" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="absolute inset-0 w-full h-full object-cover" />
                                </AnimatePresence>
                             </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Faith Section */}
        <section className="py-24 bg-gold-100/10 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full md:w-1/2 text-center md:text-right order-2 md:order-1">
                        <h3 className="text-gold-500 font-sans text-sm tracking-[0.2em] uppercase font-bold mb-4">Fé</h3>
                        <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-8">Gratidão a Deus</h2>
                        <p className="font-script text-3xl md:text-4xl text-gold-600 mb-6">"Até aqui o Senhor nos ajudou."</p>
                        <div className="space-y-6 text-gray-600 text-lg font-light leading-relaxed">
                            <p>Antes de ser médica, sou um milagre. Agradeço a Deus por ser a luz que ilumina o meu caminho.</p>
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full md:w-1/2 order-1 md:order-2">
                        <img src={IMAGES.FAITH} alt="Gratidão a Deus" className="w-full h-auto rounded-sm shadow-xl object-cover" />
                    </motion.div>
                </div>
            </div>
        </section>

        {/* JURAMENTO (Destaque para a foto solene) - AJUSTADO PARA MOBILE */}
        <section className="relative min-h-[80vh] bg-dark-900 flex items-center overflow-hidden border-y border-gold-500/20">
            <div className="absolute inset-0 z-0 opacity-20">
                <ParticleBackground />
            </div>
            <div className="container mx-auto px-0 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-stretch min-h-[600px]">
                    {/* Imagem Solene à Esquerda - Altura aumentada e enquadramento ajustado */}
                    <motion.div 
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="w-full md:w-1/2 relative overflow-hidden h-[70vh] md:h-auto"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/50 via-transparent to-dark-900/80 z-10"></div>
                        <img 
                            src={IMAGES.REFLECTION} 
                            alt="Juramento e Vocação" 
                            className="w-full h-full object-cover object-top scale-105 hover:scale-100 transition-transform duration-[3s]"
                        />
                    </motion.div>
                    
                    {/* Texto à Direita */}
                    <motion.div 
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                        className="w-full md:w-1/2 flex flex-col justify-center p-10 md:p-16 bg-dark-900/40 backdrop-blur-sm"
                    >
                        <div className="w-12 h-0.5 bg-gold-500 mb-8"></div>
                        <h3 className="text-gold-300 font-serif text-sm tracking-[0.4em] uppercase mb-4">A Vocação</h3>
                        <h2 className="text-white font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">O Juramento</h2>
                        
                        <div className="space-y-6 text-gray-300 text-lg md:text-xl font-light italic leading-relaxed">
                            <p>"Prometo solenemente consagrar a minha vida ao serviço da Humanidade. Guardarei respeito absoluto pela Vida Humana desde o seu início, mesmo sob ameaça, e não farei uso dos meus conhecimentos médicos contra as leis da Humanidade."</p>
                            <p className="text-gold-500/80 not-italic text-sm uppercase tracking-[0.2em] font-medium">— Juramento de Hipócrates</p>
                        </div>
                        
                        <div className="mt-12 flex items-center gap-4">
                            <div className="h-[1px] flex-grow bg-gold-500/30"></div>
                            <img src={IMAGES.LOGO} alt="Simbolo" className="h-10 opacity-30 logo-white-filter" />
                            <div className="h-[1px] flex-grow bg-gold-500/30"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Events Section */}
        <section id="solenidades" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h3 className="text-gold-500 font-sans text-sm tracking-[0.3em] uppercase font-bold mb-3">Cronograma</h3>
                    <h2 className="font-serif text-4xl md:text-5xl text-gray-800">Solenidades</h2>
                    <div className="w-24 h-1 bg-gold-500 mx-auto mt-6"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {EVENTS.map((event, index) => (
                        <EventCard key={index} event={event} index={index} />
                    ))}
                </div>
            </div>
        </section>

        <Countdown />
        <GallerySection items={GALLERY_ITEMS} />

        {/* RSVP Section */}
        <section id="rsvp" className="py-24 bg-dark-900 text-white text-center relative overflow-hidden">
            <ParticleBackground opacity={0.4} />
            <div className="container mx-auto px-6 relative z-10">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h2 className="font-serif text-3xl md:text-5xl mb-8 text-gold-300">Sua presença é essencial</h2>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-600 text-white font-sans font-bold py-5 px-10 rounded-sm tracking-[0.2em] transition">
                        CONFIRMAR PRESENÇA
                    </a>
                    <div className="mt-24 border-t border-gray-800 pt-10">
                        <img src={IMAGES.LOGO} alt="Logo" className="h-24 mx-auto mb-6 opacity-40 logo-white-filter" />
                        <p className="text-xs text-gray-500 uppercase tracking-widest">&copy; 2026 Laís Moreira - Medicina</p>
                        <p className="text-xs text-gray-600 mt-3 flex justify-center items-center gap-1">Feito com <Heart size={10} className="text-gold-500" /> por Gilber Souza</p>
                    </div>
                </motion.div>
            </div>
        </section>
      </div>
    </>
  );
};

export default App;