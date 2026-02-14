import React from 'react';
import { EventDetails } from '../types';
import { MapPin, Clock, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface EventCardProps {
  event: EventDetails;
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  const isGala = event.isGala;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative p-8 md:p-10 border shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-2 overflow-hidden group flex flex-col h-full ${
        isGala 
          ? 'bg-dark-900 border-gold-500/50' 
          : 'bg-white border-gray-100'
      }`}
    >
      {/* Decorative Side Bar */}
      <div className={`absolute top-0 left-0 w-1 h-full ${isGala ? 'bg-gold-300' : 'bg-gold-500'}`}></div>

      {/* Date Badge */}
      <div className="mb-6">
        <span className={`inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-sm ${
            isGala ? 'bg-gold-500 text-white' : 'bg-gold-100 text-gold-900'
        }`}>
          {event.date}
        </span>
      </div>

      {/* Title */}
      <h3 className={`font-serif text-2xl md:text-3xl mb-3 transition-colors ${
          isGala ? 'text-gold-300 group-hover:text-white' : 'text-gray-800 group-hover:text-gold-600'
      }`}>
        {event.title}
      </h3>

      {/* Time */}
      <div className={`flex items-center text-sm tracking-wide uppercase mb-6 pb-4 border-b ${
          isGala ? 'text-gray-400 border-gray-700' : 'text-gray-500 border-gray-100'
      }`}>
        <Clock size={16} className={`mr-2 ${isGala ? 'text-gold-500' : 'text-gold-600'}`} />
        {event.time}
      </div>

      {/* Location Details */}
      <div className="mb-8 flex-grow">
        <p className={`font-bold mb-1 flex items-start ${isGala ? 'text-white' : 'text-gray-700'}`}>
           <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-gold-500" />
           {event.location}
        </p>
        <p className={`text-sm ml-6 ${isGala ? 'text-gray-400' : 'text-gray-500'}`}>
            {event.address.split('\n').map((line, i) => (
                <span key={i} className="block">{line}</span>
            ))}
        </p>
      </div>

      {/* CTA */}
      <div className="mt-auto">
        <a
          href={event.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center font-bold uppercase text-xs tracking-widest transition-all group-hover:translate-x-1 ${
              isGala ? 'text-gold-300 hover:text-white' : 'text-gold-600 hover:text-gold-800'
          }`}
        >
          Ver Localização <ExternalLink size={14} className="ml-2" />
        </a>
      </div>
    </motion.div>
  );
};

export default EventCard;