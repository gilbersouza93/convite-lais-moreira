export interface EventDetails {
  date: string;
  title: string;
  time: string;
  location: string;
  address: string;
  mapLink: string;
  isGala?: boolean;
}

export interface GalleryItem {
  image: string;
  title: string;
  description: string;
  reverse?: boolean;
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}