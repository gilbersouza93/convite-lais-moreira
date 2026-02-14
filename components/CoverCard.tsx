import React from 'react';
import { IMAGES } from '../constants';
import { MousePointerClick, Download, Share2 } from 'lucide-react';

const CoverCard: React.FC = () => {
  const siteUrl = "https://convite-lais-moreira.vercel.app/";

  return (
    <div className="min-h-screen bg-[#111] flex flex-col items-center justify-center p-0 md:p-8 overflow-y-auto">
      
      {/* 
        Container PRINCIPAL (Onde vai virar o PDF/Imagem)
        Aspect Ratio ajustado para celular (9:16)
      */}
      <div id="pdf-content" className="relative w-full max-w-[400px] aspect-[9/16] bg-[#050505] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col border border-gray-800 md:rounded-xl">
        
        {/* Fundo Texturizado */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] z-0"></div>

        {/* Borda Decorativa Externa */}
        <div className="absolute top-3 left-3 right-3 bottom-3 border border-gold-500/20 rounded-lg pointer-events-none z-20"></div>

        <div className="relative z-10 flex flex-col h-full items-center">
            
            {/* 1. Header (Logo) */}
            <div className="pt-8 pb-4 text-center w-full">
                <img src={IMAGES.LOGO} alt="Logo" className="h-14 mx-auto logo-white-filter opacity-80" />
                <p className="text-gold-500/60 uppercase tracking-[0.4em] text-[8px] mt-2 font-sans">Convite Oficial</p>
            </div>

            {/* 2. A IMAGEM DESTAQUE (HERO) */}
            <div className="relative w-full flex-grow px-6 py-2 flex items-center justify-center">
                <div className="relative w-full h-full max-h-[55vh]">
                    
                    {/* Moldura Dourada da Foto */}
                    <div className="absolute -inset-1 border border-gold-500/40 rounded-sm transform rotate-1 translate-y-1"></div>
                    <div className="absolute inset-0 border border-gold-300/20 rounded-sm z-20 pointer-events-none"></div>
                    
                    {/* A Foto */}
                    <img 
                        src={IMAGES.COVER_DISPLAY} 
                        alt="Dra Laís com Diploma" 
                        className="w-full h-full object-cover object-top rounded-sm shadow-2xl filter brightness-110 contrast-105"
                    />

                    {/* Gradiente na base da foto para suavizar transição */}
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#050505] to-transparent z-10"></div>
                </div>
            </div>

            {/* 3. Rodapé com Texto e Botão */}
            <div className="w-full px-8 pb-10 pt-2 text-center relative z-20">
                <h1 className="font-serif text-3xl md:text-4xl text-white mb-2 drop-shadow-lg tracking-wide">
                    Dra. Laís Moreira
                </h1>
                
                <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="h-[1px] w-8 bg-gold-500/50"></div>
                    <p className="font-sans text-gold-400 tracking-[0.2em] text-xs font-semibold uppercase">
                        Medicina • 2026
                    </p>
                    <div className="h-[1px] w-8 bg-gold-500/50"></div>
                </div>

                <p className="font-serif text-gray-400 italic text-xs leading-relaxed mb-6 opacity-80 max-w-xs mx-auto">
                    "É com muita alegria que convido você para celebrar essa conquista comigo."
                </p>
                
                {/* Botão de Ação (Estilo Premium) */}
                <a 
                    href={siteUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative block w-full bg-gold-600 overflow-hidden rounded-sm shadow-[0_5px_15px_rgba(212,175,55,0.2)] transition-all hover:scale-[1.02] active:scale-95"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-700 opacity-100 group-hover:opacity-90 transition-opacity"></div>
                    {/* Brilho animado */}
                    <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] animate-[shimmer_3s_infinite]"></div>
                    
                    <div className="relative py-4 flex items-center justify-center gap-2 text-white font-sans font-bold text-sm tracking-[0.2em] uppercase">
                        <MousePointerClick size={16} />
                        <span>Abrir Convite</span>
                    </div>
                </a>
                
                <p className="text-[9px] text-gray-600 mt-3 tracking-widest uppercase">Toque no botão para acessar</p>
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
                <p className="text-gray-400 text-xs">Tire um Print Screen (Captura de Tela) desta página ou use a função "Imprimir como PDF" do seu navegador.</p>
            </div>
         </div>

         <div className="bg-dark-800/50 border border-gray-700 rounded-lg p-4 flex items-start gap-4 backdrop-blur-sm">
            <div className="p-2 bg-gold-500/10 rounded-full text-gold-500">
                <Share2 size={20} />
            </div>
            <div>
                <h3 className="text-white font-bold text-sm mb-1">Passo 2: Enviar</h3>
                <p className="text-gray-400 text-xs">Envie a imagem ou PDF para seus convidados via WhatsApp. O link no botão funcionará quando clicarem.</p>
            </div>
         </div>
      </div>

    </div>
  );
};

export default CoverCard;