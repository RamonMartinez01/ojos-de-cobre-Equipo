// src/data/BlogPosts.ts
import type { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Día 1: Integración de Sentinel-2',
    date: '2026-05-15',
    author: 'Elena Soto',
    summary: 'Logramos conectar la API de Copernicus para descargar las primeras imágenes multiespectrales de las zonas agrícolas objetivo en nuestra región.',
    tags: ['Copernicus', 'Sentinel-2', 'Setup'],
    content: [
      'Hoy marcamos un hito importante en el proyecto. Después de revisar la documentación oficial de Copernicus, logramos establecer una conexión estable con su API de datos abiertos.',
      'Nuestro enfoque principal está en las imágenes del satélite Sentinel-2, ya que su resolución espacial y sus bandas multiespectrales son ideales para el monitoreo de la salud de la vegetación.',
      'El siguiente paso será automatizar la descarga de estas imágenes y pasarlas por nuestro pipeline de procesamiento inicial para limpiar la nubosidad.'
    ]
  },
  {
    id: 'post-2',
    title: 'Definiendo el Modelo Agroecológico',
    date: '2026-05-16',
    author: 'Osiris Estrella',
    summary: 'Establecimos los parámetros clave para medir el estrés hídrico en los cultivos utilizando el índice NDVI. La base científica y conceptual está lista para el equipo de desarrollo.',
    tags: ['Agroecología', 'Investigación'],
    content: [
      'Hoy marcamos un hito importante en el proyecto. Después de revisar la documentación oficial de Copernicus, logramos establecer una conexión estable con su API de datos abiertos.',
      'Nuestro enfoque principal está en las imágenes del satélite Sentinel-2, ya que su resolución espacial y sus bandas multiespectrales son ideales para el monitoreo de la salud de la vegetación.',
      'El siguiente paso será automatizar la descarga de estas imágenes y pasarlas por nuestro pipeline de procesamiento inicial para limpiar la nubosidad.'
    ]
  },
  {
    id: 'post-3',
    title: 'Diseño de la Arquitectura UI/UX',
    date: '2026-05-17',
    author: 'Ramón Martínez',
    summary: 'Estructuramos el flujo de la aplicación. Los agricultores podrán ver alertas tempranas directamente en sus dispositivos móviles sin consumir muchos datos.',
    tags: ['React', 'UI/UX', 'Frontend'],
    content: [
      'Hoy marcamos un hito importante en el proyecto. Después de revisar la documentación oficial de Copernicus, logramos establecer una conexión estable con su API de datos abiertos.',
      'Nuestro enfoque principal está en las imágenes del satélite Sentinel-2, ya que su resolución espacial y sus bandas multiespectrales son ideales para el monitoreo de la salud de la vegetación.',
      'El siguiente paso será automatizar la descarga de estas imágenes y pasarlas por nuestro pipeline de procesamiento inicial para limpiar la nubosidad.'
    ]
  }
];