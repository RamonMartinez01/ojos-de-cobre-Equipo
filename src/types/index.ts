// src/types/index.ts

// Expandimos para incluir herramientas geoespaciales y de datos
export type TechStack = 
  | 'React' | 'TypeScript' | 'Tailwind' | 'Node.js' | 'Python' | 'FastAPI'
  | 'QGIS' | 'Google Earth Engine' | 'Jupyter' | 'PostGIS'
  | 'Teledetección' | 'Agroecología' | 'Copernicus Data';

// Expandimos para incluir los perfiles reales de este hackathon
export type ProStack = 
  | 'Desarrollador Full-Stack' 
  | 'Científico de Datos' 
  | 'Especialista GIS' 
  | 'Ingeniero Agrónomo' 
  | 'Bióloga'
  | 'Biólogo';

export interface SocialLink {
  platform: 'GitHub' | 'LinkedIn' | 'Twitter' | 'Website';
  url: string;
}

export interface TeamMember {
  id: string;
  name: string;
  slug: string;
  role: ProStack;
  pitch: string;          // Descripción corta
  bio?: string;           // Descripción extendida para el futuro modal
  skills: TechStack[];
  avatarUrl: string;      // Reemplazado imageUrl por avatarUrl (convención común)
  socials: SocialLink[];  // Agrupamos las redes en un array para mapearlas dinámicamente
  location?: string;       // Relevante para HackathonLAC (equipos distribuidos)
  isLead?: boolean;       // Reemplaza 'active'. Marca si es líder de equipo/área.
}