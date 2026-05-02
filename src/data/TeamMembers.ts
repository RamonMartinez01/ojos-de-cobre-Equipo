// src/data/TeamMembers.ts
import type { TeamMember } from '../types';

export const teamMembers: TeamMember[] = [
  {
    id: 'm1',
    name: 'Ramón Martínez',
    slug: 'ramon-martinez',
    role: 'Desarrollador Full-Stack',
    pitch: 'Estructurando la arquitectura de la plataforma y conectando los modelos de datos espaciales con la interfaz de usuario.',
    skills: ['React', 'TypeScript', 'Tailwind', 'Node.js'],
    avatarUrl: 'https://ui-avatars.com/api/?name=Ramon+Martinez&background=0F172A&color=38BDF8&size=256',
    socials: [
      { platform: 'GitHub', url: 'https://github.com/RamonMartinez01' },
      { platform: 'LinkedIn', url: 'https://linkedin.com/in/ramon-martinez-full-stack-developer/' }
    ],
    location: 'México',
    isLead: true,
  },
   {
    id: 'm2',
    name: 'Elena Soto',
    slug: 'elena-soto',
    role: 'Científico de Datos',
    pitch: 'Procesando imágenes de Sentinel-2 para el cálculo de índices de vegetación (NDVI) y estrés hídrico.',
    skills: ['Python', 'Google Earth Engine', 'Jupyter'],
    avatarUrl: 'https://ui-avatars.com/api/?name=Elena+Soto&background=0F172A&color=34D399&size=256',
    socials: [
      { platform: 'GitHub', url: '#' },
      { platform: 'LinkedIn', url: '#' }
    ],
    location: 'Colombia',
  },
  {
    id: 'm3',
    name: 'Osiris Estrella',
    slug: 'osiris-estrella',
    role: 'Bióloga',
    pitch: 'Directora conceptual, asegurando que las directrices del proyecto se enfoquen en las necesidades actuales de la industria agroalimentaria.',
    skills: ['Agroecología', 'Teledetección', 'Copernicus Data', 'QGIS'],
    avatarUrl: 'https://ui-avatars.com/api/?name=Osiris+Estrella&background=0F172A&color=34D399&size=256',
    socials: [
      { platform: 'LinkedIn', url: '#' },
      { platform: 'Website', url: '#' }
    ],
    location: 'México', 
    isLead: true,
  },
  {
    id: 'm4',
    name: 'Carlos Mendoza',
    slug: 'carlos-mendoza',
    role: 'Ingeniero Agrónomo',
    pitch: 'Traduciendo la telemetría satelital en insights accionables para pequeños agricultores locales.',
    skills: ['QGIS', 'PostGIS'],
    avatarUrl: 'https://ui-avatars.com/api/?name=Carlos+Mendoza&background=0F172A&color=38BDF8&size=256',
    socials: [
      { platform: 'LinkedIn', url: '#' }
    ],
    location: 'Argentina',
  }
];