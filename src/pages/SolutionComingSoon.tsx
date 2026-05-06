// src/pages/SolutionComingSoon.tsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Satellite } from 'lucide-react';

export const SolutionComingSoon = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Tus imágenes en la carpeta public/. 
  // Al estar en public, la ruta comienza con '/' y React sabrá dónde encontrarlas.
  const images = [
    '/pusheen-cat-frame-site-001.png', // Reemplaza con tus nombres reales
    '/pusheen-cat-frame-site-002.png',
    '/pusheen-cat-frame-site-003.png'
  ];
  
// Efecto para rotar el índice a alta velocidad
  useEffect(() => {
    // 800ms es menos de un segundo. Ajusta a 500ms si lo quieres aún más agresivo.
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 600); 

    return () => clearInterval(timer); // Cleanup vital
  }, [images.length]);

 return (
    <div className="min-h-screen bg-[#0F172A] flex flex-col items-center justify-center px-6 pt-20 pb-32">
      
      {/* Contenedor Principal */}
      <div className="max-w-2xl w-full text-center">
        
        {/* Icono animado superior */}
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#38BDF8]/10 animate-pulse">
          <Satellite size={40} className="text-[#38BDF8]" />
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-4">
          Proyecto en  <span className="bg-gradient-to-r from-[#38BDF8] to-[#34D399] bg-clip-text text-transparent">Construcción</span>.
        </h1>
        
        <p className="text-lg text-slate-400 mb-12">
          Nuestro modelo está analizando la telemetría de Copernicus. La solución final estará disponible muy pronto.
        </p>

       {/* Contenedor del Carrusel de Alta Velocidad */}
        {/* Se eliminó 'aspect-video' y se agregó 'h-96' (aprox 384px de alto) */}
        <div className="relative mx-auto w-full max-w-md h-126 rounded-xl overflow-hidden border-2 border-slate-700/50 bg-slate-800/30 shadow-[0_0_40px_rgba(56,189,248,0.1)]">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Procesamiento de imagen ${index + 1}`}
              // object-cover asegura que la imagen llene el nuevo espacio sin deformarse
              className={`absolute top-0 left-0 w-full h-full object-cover ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          
          {/* Overlay opcional para darle un tinte azulado estilo "satélite" a las imágenes */}
          <div className="absolute inset-0 bg-[#38BDF8]/15 mix-blend-overlay pointer-events-none"></div>
        </div>

        {/* CTA para regresar */}
        <div className="mt-12">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-800/50 px-6 py-3 font-medium text-slate-300 transition-all hover:bg-slate-700 hover:text-white"
          >
            <ArrowLeft size={18} />
            Volver a la base
          </Link>
        </div>

      </div>
    </div>
  );
};