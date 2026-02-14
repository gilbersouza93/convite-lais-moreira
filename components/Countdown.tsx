import React, { useState, useEffect } from 'react';
import { TimeLeft } from '../types';
import { TARGET_DATE } from '../constants';
import { motion } from 'framer-motion';

const Countdown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(TARGET_DATE) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!hasMounted) return null;

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4">
      <div className="bg-black/30 backdrop-blur-md rounded-lg p-3 w-20 md:w-28 h-20 md:h-28 flex items-center justify-center border border-white/10 shadow-lg">
        <span className="text-2xl md:text-5xl font-serif font-bold text-white">
          {value < 10 ? `0${value}` : value}
        </span>
      </div>
      <span className="text-xs uppercase tracking-widest mt-2 text-white/90 font-medium">{label}</span>
    </div>
  );

  return (
    <div className="py-20 bg-gold-500 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
            <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="font-sans text-sm md:text-lg tracking-[0.3em] uppercase mb-10 text-white font-semibold"
            >
                Contagem Regressiva para o Grande Dia
            </motion.h3>
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-2 md:gap-4"
            >
                <TimeUnit value={timeLeft.days} label="Dias" />
                <TimeUnit value={timeLeft.hours} label="Horas" />
                <TimeUnit value={timeLeft.minutes} label="Min" />
                <TimeUnit value={timeLeft.seconds} label="Seg" />
            </motion.div>
        </div>
    </div>
  );
};

export default Countdown;