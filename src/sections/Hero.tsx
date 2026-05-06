// src/sections/Hero.tsx
import { ArrowRight, Eye, FileText, Satellite } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center px-6 pt-20 bg-[#0F172A] overflow-hidden"
    >
      {/* Decoración de fondo suave y amigable a la vista */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-80 w-80 rounded-full bg-[#38BDF8]/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-80 w-80 rounded-full bg-[#34D399]/10 blur-[120px]" />

      <div className="mx-auto max-w-5xl">
        {/* Badge Hackathon */}
        <div className="mb-6 flex items-center gap-2 w-fit rounded-full border border-[#38BDF8]/20 bg-[#38BDF8]/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#38BDF8]">
          <Satellite size={14} />
          <span>HackathonLAC 2026</span>
        </div>

        {/* Título Principal con Gradiente Orgánico/Tecnológico */}
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
          Innovación Espacial para la <br />
          <span className="bg-gradient-to-r from-[#38BDF8] via-[#2DD4BF] to-[#34D399] bg-clip-text text-transparent">
            Seguridad Alimentaria.
          </span>
        </h1>

        {/* Descripción corta (Pitch) */}
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
          Utilizamos datos de observación de la Tierra de <span className="text-slate-100 font-semibold">Copernicus</span> para predecir, analizar y proteger nuestras cadenas de suministro agrícola. <br />
          <span className="text-slate-100 font-medium">Tecnología en órbita, impacto en la tierra.</span>
        </p>

        {/* Botones de Acción (CTAs) */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          {/* Bot+on hacia la página en construcción */}
          <Link
            to="/solucion"
            className="group flex items-center justify-center gap-2 rounded-lg bg-[#38BDF8] px-6 py-3 font-semibold text-[#0F172A] transition-all hover:bg-[#7DD3FC] hover:shadow-[0_0_20px_rgba(56,189,248,0.25)]"
          >
            Conoce la Solución
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href="#team"
            className="flex items-center justify-center rounded-lg border border-slate-600 px-6 py-3 font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
          >
            Conocer al Equipo
          </a>
        </div>
        
        {/* PDF Viewers */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-700/50 pt-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">Recursos del Proyecto</p>

          <div className="flex flex-wrap gap-3">
            {/* Botón Español */}
            <a
              href="/Documentacion-Esp.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm font-medium text-slate-300 transition-all hover:border-[#38BDF8] hover:text-[#38BDF8]"
            >
              <FileText size={18} />
              Propuesta (ES)
              <Eye size={14} className="opacity-70 ml-1" />
            </a>

            {/* Botón Inglés */}
            <a
              href="/Documentation-Eng.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm font-medium text-slate-300 transition-all hover:border-[#38BDF8] hover:text-[#38BDF8]"
            >
              <FileText size={18} />
              Proposal (EN)
              <Eye size={14} className="opacity-70 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};