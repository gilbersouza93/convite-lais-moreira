import React from 'react';
import { IMAGES } from '../constants';
import { Download, Share2, ChevronRight } from 'lucide-react';

const CoverCard: React.FC = () => {
  const siteUrl = "https://convite-lais-moreira.vercel.app/";

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-0 md:p-8 overflow-y-auto">
      
      {/* 
        Container PRINCIPAL (Onde vai virar o PDF/Imagem)
        Aspect Ratio 9:16 (Stories/Mobile Fullscreen)
      */}
      <div id="pdf-content" className="relative w-full max-w-[400px] aspect-[9/16] bg-[#0f0f0f] shadow-[0_0_60px_rgba(212,175,55,0.1)] overflow-hidden flex flex-col border border-gray-800 md:rounded-2xl">
        
        {/* === PARTE SUPERIOR: FOTO (70% da altura) === */}
        <div className="relative h-[68%] w-full overflow-hidden group">
            {/* Foto com Zoom suave ao passar o mouse (efeito apenas web) */}
            <img 
                src={IMAGES.COVER_DISPLAY} 
                alt="Dra Laís com Diploma" 
                className="w-full h-full object-cover object-top transition-transform duration-1000 md:group-hover:scale-105"
            />
            
            {/* Gradiente Inferior para suavizar encontro com a barra dourada */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/80 to-transparent"></div>

            {/* Logo sutil no topo */}
            <div className="absolute top-6 left-0 w-full flex justify-center opacity-90 drop-shadow-md">
                 <img src={IMAGES.LOGO} className="h-10 logo-white-filter" alt="Logo" />
            </div>
        </div>

        {/* === DIVISÓRIA DOURADA & SELO === */}
        <div className="relative z-20">
            {/* Linha Dourada com Brilho */}
            <div className="h-1.5 w-full bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600 shadow-[0_0_15px_rgba(212,175,55,0.6)]"></div>
            
            {/* O SELO (Botão de Ação) - Centralizado na linha */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <a 
                    href={siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-gold-700 shadow-[0_4px_20px_rgba(0,0,0,0.5)] border-2 border-gold-100 active:scale-95 transition-transform duration-300"
                >
                    {/* Efeito de "Cera" / Relevo */}
                    <div className="absolute inset-1 rounded-full border border-gold-600/50"></div>
                    <div className="absolute inset-0 rounded-full bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-30 mix-blend-multiply"></div>
                    
                    {/* Ícone/Texto do Selo */}
                    <div className="flex flex-col items-center justify-center text-gold-900 drop-shadow-sm">
                        <span className="text-[10px] font-bold uppercase tracking-widest mb-0.5">Abrir</span>
                        <ChevronRight size={24} strokeWidth={3} className="animate-pulse ml-0.5" />
                    </div>

                    {/* Brilho Animado no Selo */}
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                        <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] animate-[shimmer_2.5s_infinite]"></div>
                    </div>
                </a>
            </div>
        </div>

        {/* === PARTE INFERIOR: TEXTO (30% da altura) === */}
        <div className="relative h-[32%] bg-[#121212] flex flex-col items-center justify-center px-6 pt-8 pb-4 text-center">
            {/* Textura de fundo sutil */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            
            <p className="font-sans text-gold-500/80 text-[10px] uppercase tracking-[0.4em] mb-2">
                Convite Oficial
            </p>

            <h1 className="font-script text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-100 to-gold-300 drop-shadow-sm mb-3 py-1 leading-none">
                Dra. Laís Moreira
            </h1>

            <div className="flex items-center gap-3 mb-4 opacity-80">
                <div className="w-8 h-[1px] bg-gold-600"></div>
                <h2 className="font-serif text-white text-sm tracking-[0.2em] uppercase">
                    Medicina • 2026
                </h2>
                <div className="w-8 h-[1px] bg-gold-600"></div>
            </div>

            <p className="text-[9px] text-gray-500 uppercase tracking-widest mt-auto">
                Clique no selo dourado para acessar
            </p>
        </div>

      </div>

      {/* Instruções de Uso (Apenas visualização web) */}
      <div className="mt-8 grid gap-4 w-full max-w-md px-4 print:hidden">
         <div className="bg-dark-800/50 border border-gray-700 rounded-lg p-4 flex items-start gap-4 backdrop-blur-sm">
            <div className="p-2 bg-gold-500/10 rounded-full text-gold-500">
                <Download size={20} />
            </div>
            <div>
                <h3 className="text-white font-bold text-sm mb-1">Passo 1: Salvar</h3>
                <p className="text-gray-400 text-xs">Tire um Print Screen (Captura de Tela) desta página ou use a função "Imprimir como PDF".</p>
            </div>
         </div>

         <div className="bg-dark-800/50 border border-gray-700 rounded-lg p-4 flex items-start gap-4 backdrop-blur-sm">
            <div className="p-2 bg-gold-500/10 rounded-full text-gold-500">
                <Share2 size={20} />
            </div>
            <div>
                <h3 className="text-white font-bold text-sm mb-1">Passo 2: Enviar</h3>
                <p className="text-gray-400 text-xs">Envie a imagem para seus convidados. O link funcionará ao clicarem no selo.</p>
            </div>
         </div>
      </div>

    </div>
  );
};

export default CoverCard;