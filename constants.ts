import { EventDetails, GalleryItem } from './types';

export const TARGET_DATE = "2026-06-16T16:00:00";

export const IMAGES = {
  HERO_PORTRAIT: "https://i.postimg.cc/Sstv7FJ8/IMG-20260211-WA0041.png",
  LOGO: "https://i.postimg.cc/7LQt3nTG/1000172547-removebg-preview.png",
  PORTRAIT: "https://i.postimg.cc/kXSF0pvn/ela.png",
  FAMILY_BG: "https://i.postimg.cc/N0HWFXWw/1000173584.jpg",
  FAMILY_2: "https://i.postimg.cc/MTJgQT8L/familia.jpg",
  FAITH: "https://i.postimg.cc/FKL2zS2X/1000173600.jpg",
  REFLECTION: "https://i.postimg.cc/FKL2zS2t/1000173592.jpg", // Foto solene movida para cá
  GALLERY_1: "https://i.postimg.cc/wBmSMNnC/1000173596.jpg",
  GALLERY_2: "https://i.postimg.cc/CL8ycfJH/12341.jpg", // Nova foto com as amigas
  GALLERY_3: "https://i.postimg.cc/fb96yd6s/1000173608.jpg",
  COVER_DISPLAY: "https://i.postimg.cc/fb96yd6s/1000173608.jpg"
};

export const EVENTS: EventDetails[] = [
  {
    date: "16 JUN 2026",
    title: "Colação de Grau",
    time: "16:00 Horas",
    location: "Teatro Santander",
    address: "Av. Pres. Juscelino Kubitschek, 2041\nItaim Bibi | São Paulo - SP",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Teatro+Santander+Shopping+JK+Iguatemi"
  },
  {
    date: "17 JUN 2026",
    title: "Culto Ecumênico",
    time: "15:00 Horas",
    location: "Catedral Metropolitana da Sé",
    address: "Praça da Sé\nSé | São Paulo - SP",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Catedral+Metropolitana+de+São+Paulo"
  },
  {
    date: "18 JUN 2026",
    title: "Jantar de Formatura",
    time: "21:00 Horas",
    location: "PRO MAGNO Centro de Eventos",
    address: "Av. Pfa. Ida Kolb, 513\nJardim das Laranjeiras | São Paulo - SP",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Pro+Magno+Centro+de+Eventos"
  },
  {
    date: "20 JUN 2026",
    title: "Baile de Gala",
    time: "22:00 Horas",
    location: "PRO MAGNO Centro de Eventos",
    address: "Av. Pfa. Ida Kolb, 513\nJardim das Laranjeiras | São Paulo - SP",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Pro+Magno+Centro+de+Eventos",
    isGala: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    image: IMAGES.GALLERY_1,
    title: "A Prática",
    description: "Cada momento no hospital, cada paciente atendido e cada lição aprendida moldaram a médica que me tornei. A prática da medicina vai além da técnica; é sobre cuidado e empatia.",
    reverse: false
  },
  {
    image: IMAGES.GALLERY_2,
    title: "Amizades para a Vida",
    description: "Ninguém caminha sozinho. Aos amigos que fiz durante a graduação, meu muito obrigada por compartilharem os sorrisos, as angústias e essa grande conquista.",
    reverse: true
  },
  {
    image: IMAGES.GALLERY_3,
    title: "O Futuro",
    description: "O fim de um ciclo é apenas o começo de outro. Com o diploma em mãos, sigo pronta para novos desafios, honrando o juramento que fiz e a profissão que escolhi.",
    reverse: false
  }
];