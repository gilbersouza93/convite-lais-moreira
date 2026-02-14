import React from 'react';
import { IMAGES } from '../constants';
import { MousePointerClick, Download } from 'lucide-react';

const CoverCard: React.FC = () => {
  const siteUrl = "https://convite-lais-moreira.vercel.app/";

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-0 md:p-4 overflow-hidden">
      
      {/* 
        Container com proporção de tela de celular (9:16 approx)
        Projetado para ser "impresso" como PDF
      */}
      <div id="pdf-content" className="relative w-full max-w-md aspect-[9/16] bg-black shadow-2xl overflow-hidden flex flex-col text-center border-4 border-gray-800 md:rounded-3xl">
        
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gold-900/20 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 z-0"></div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col h-full p-8 items-center justify-between">
            
            {/* Top: Logo & Header */}
            <div className="mt-8">
                <p className="text-gold-300 uppercase tracking-[0.4em] text-[10px] mb-4">Convite Oficial</p>
                <img src={IMAGES.LOGO} alt="Logo" className="h-20 mx-auto logo-white-filter opacity-90" />
            </div>

            {/* Middle: Photo & Main Text */}
            <div className="flex-grow flex flex-col items-center justify-center -mt-10">
                <div className="relative w-64 h-64 mb-8">
                    {/* Glowing Circle */}
                    <div className="absolute inset-0 rounded-full border border-gold-500/30 animate-pulse"></div>
                    <div className="absolute -inset-2 rounded-full border border-gold-300/10"></div>
                    
                    <img 
                        src={IMAGES.PORTRAIT} 
                        alt="Dra Laís" 
                        className="w-full h-full object-cover rounded-full border-2 border-gold-500 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                    />
                </div>

                <h1 className="font-serif text-4xl text-white mb-2">Dra. Laís Moreira</h1>
                <p className="font-sans text-gold-500 tracking-[0.3em] text-sm uppercase mb-6">Medicina • 2026</p>
                
                <p className="font-serif text-gray-300 italic text-sm max-w-xs leading-relaxed opacity-80">
                    "É com muita alegria que convido você para celebrar essa conquista comigo."
                </p>
            </div>

            {/* Bottom: The Button */}
            <div className="mb-12 w-full">
                <p className="text-white/50 text-[10px] uppercase tracking-widest mb-3 animate-pulse">Clique abaixo para acessar</p>
                
                {/* 
                   IMPORTANTE: Este link funciona dentro do PDF gerado.
                   Quando salvo como PDF, o navegador converte a tag <a> em um link clicável.
                */}
                <a 
                    href={siteUrl} 
                    target="_blank" // Garante que abra no navegador do celular
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-gold-600 to-gold-400 text-white font-bold py-4 px-6 rounded-sm shadow-[0_10px_20px_rgba(0,0,0,0.5)] uppercase tracking-[0.2em] text-sm hover:from-gold-500 hover:to-gold-300 transition-all transform active:scale-95 border border-gold-300/30"
                >
                    <span className="flex items-center justify-center gap-2">
                        <MousePointerClick size={18} />
                        Abrir Convite
                    </span>
                </a>
            </div>
        </div>

        {/* Decorative Borders */}
        <div className="absolute top-4 left-4 w-16 h-16 border-t border-l border-gold-500/30 rounded-tl-xl pointer-events-none"></div>
        <div className="absolute top-4 right-4 w-16 h-16 border-t border-r border-gold-500/30 rounded-tr-xl pointer-events-none"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 border-b border-l border-gold-500/30 rounded-bl-xl pointer-events-none"></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 border-b border-r border-gold-500/30 rounded-br-xl pointer-events-none"></div>

      </div>

      {/* Instructions for the User (Visible only on Web, usually hidden in print but good for helper) */}
      <div className="mt-8 text-center bg-white/10 p-6 rounded-lg backdrop-blur-md max-w-md border border-white/10 print:hidden">
         <h3 className="text-white font-bold mb-2 flex items-center justify-center gap-2">
            <Download size={18} className="text-gold-500" />
            Como salvar o PDF?
         </h3>
         <ol className="text-left text-gray-300 text-sm space-y-2 list-decimal list-inside">
            <li>No computador: Pressione <strong>Ctrl + P</strong>.</li>
            <li>No celular (Chrome): Menu &gt; Compartilhar &gt; Imprimir.</li>
            <li>Escolha <strong>"Salvar como PDF"</strong>.</li>
            <li>Certifique-se de remover cabeçalhos/rodapés se possível.</li>
            <li>Envie esse arquivo PDF no WhatsApp!</li>
         </ol>
      </div>

    </div>
  );
};

export default CoverCard;