import React from 'react';
import { IMAGES } from '../constants';
import { Download, Share2, Stethoscope, MousePointerClick } from 'lucide-react';

const CoverCard: React.FC = () => {
  const siteUrl = "https://convite-lais-moreira.vercel.app/";

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-0 md:p-8 overflow-y-auto">
      
      {/* 
        Container PRINCIPAL (Onde vai virar o PDF/Imagem)
        Aspect Ratio 9:16 (Stories/Mobile Fullscreen)
      */}
      <div id="pdf-content" className="relative w-full max-w-[400px] aspect-[9/16] bg-[#0f0f0f] shadow-[0_0_60px_rgba(212,175,55,0.1)] overflow-hidden flex flex-col border border-gray-800 md:rounded-2xl">
        
        {/* === PARTE SUPERIOR: FOTO (60% da altura) === */}
        <div className="relative h-[60%] w-full overflow-hidden group">
            <img 
                src={IMAGES.COVER_DISPLAY} 
                alt="Dra Laís com Diploma" 
                className="w-full h-full object-cover object-top"
            />
            
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/90 to-transparent"></div>

            <div className="absolute top-6 left-0 w-full flex justify-center opacity-90 drop-shadow-md">
                 <img src={IMAGES.LOGO} className="h-10 logo-white-filter" alt="Logo" />
            </div>
        </div>

        {/* === DIVISÓRIA DOURADA & SELO === */}
        <div className="relative z-20">
            <div className="h-1.5 w-full bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600 shadow-[0_0_15px_rgba(212,175,55,0.6)]"></div>
            
            {/* O SELO (Botão de Ação) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <a 
                    href={siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-gold-700 shadow-[0_4px_20px_rgba(0,0,0,0.5)] border-2 border-gold-100 active:scale-95 transition-transform duration-300"
                >
                    <div className="absolute inset-1 rounded-full border border-gold-600/50"></div>
                    <div className="absolute inset-0 rounded-full bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-30 mix-blend-multiply"></div>
                    
                    <div className="flex flex-col items-center justify-center text-gold-900 drop-shadow-sm">
                        <Stethoscope size={24} strokeWidth={2.5} className="mb-0.5" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Abrir</span>
                    </div>

                    <div className="absolute inset-0 rounded-full overflow-hidden">
                        <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] animate-[shimmer_2.5s_infinite]"></div>
                    </div>
                </a>
            </div>
        </div>

        {/* === PARTE INFERIOR: TEXTO (40% da altura) === */}
        <div className="relative h-[40%] bg-[#121212] flex flex-col px-6 pt-12 pb-8 text-center justify-between">
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            
            {/* Aviso Explicito de Clique Logo Abaixo do Selo */}
            <div className="relative z-10 -mt-2 mb-2 animate-pulse">
                <p className="flex items-center justify-center gap-1 text-[11px] text-gold-200 font-bold uppercase tracking-widest drop-shadow-md">
                    <MousePointerClick size={14} /> CLIQUE NO SELO PARA ABRIR
                </p>
            </div>

            {/* Bloco de Título */}
            <div className="relative z-10 flex flex-col items-center justify-center flex-grow">
                <p className="font-sans text-gold-500/60 text-[9px] uppercase tracking-[0.4em] mb-1">
                    Convite Oficial
                </p>

                <h1 className="font-script text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-100 to-gold-300 drop-shadow-sm mb-2 leading-tight py-2">
                    Dra. Laís Moreira
                </h1>

                <div className="flex items-center gap-3 mb-3 opacity-80">
                    <div className="w-6 h-[1px] bg-gold-600"></div>
                    <h2 className="font-serif text-white text-xs tracking-[0.2em] uppercase">
                        Medicina • 2026
                    </h2>
                    <div className="w-6 h-[1px] bg-gold-600"></div>
                </div>
                
                <p className="font-serif text-gray-500 italic text-[11px] leading-relaxed max-w-[90%] mx-auto">
                    "É com muita alegria que convido você para celebrar essa conquista comigo."
                </p>
            </div>

            {/* Rodapé com instrução final (Agora com margem segura) */}
            <div className="relative z-10 mt-auto pt-4 border-t border-gray-800/50">
                <p className="text-[10px] font-sans font-semibold text-gray-400 uppercase tracking-widest">
                    Toque no selo dourado para acessar o site
                </p>
            </div>
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