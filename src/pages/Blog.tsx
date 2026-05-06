// src/pages/Blog.tsx
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/BlogPosts';

export const Blog = () => {
  return (
    <div className="min-h-screen bg-[#0F172A] px-6 pt-32 pb-20">
      <div className="mx-auto max-w-4xl">
        
        {/* Encabezado de la página */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Portal de <span className="bg-gradient-to-r from-[#38BDF8] to-[#34D399] bg-clip-text text-transparent">Avances</span>
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            Documentando nuestro progreso técnico y conceptual en el HackathonLAC 2026.
          </p>
        </div>

        {/* Feed de Artículos */}
        <div className="flex flex-col gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="group relative flex flex-col items-start justify-between rounded-2xl border border-slate-700/50 bg-slate-800/30 p-8 transition-all hover:border-[#38BDF8]/40 hover:bg-slate-800/50 sm:flex-row sm:items-center"
            >
              <div className="flex-1">
                {/* Metadatos (Fecha y Autor) */}
                <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={16} className="text-[#38BDF8]" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User size={16} className="text-[#34D399]" />
                    {post.author}
                  </span>
                </div>
                
                {/* Título y Resumen */}
                <h2 className="mt-4 text-2xl font-bold text-white transition-colors group-hover:text-[#38BDF8]">
                  {post.title}
                </h2>
                <p className="mt-3 text-slate-300 leading-relaxed">
                  {post.summary}
                </p>

                <p className="mt-3 text-slate-300 leading-relaxed">
                   * Puedes acceder a este avance en nuestro Github
                </p>

                {/* Etiquetas (Tags) */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="rounded-md border border-slate-700 bg-[#0F172A] px-2.5 py-1 text-xs font-medium text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Botón CTA */}
              <div className="mt-6 sm:mt-0 sm:ml-8">
                <Link 
                  to={`/avances/${post.id}`}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-700/40 text-slate-300 transition-all group-hover:bg-[#38BDF8] group-hover:text-[#0F172A]"
                  aria-label={`Leer más sobre ${post.title}`}
                >
                  <ArrowRight size={20} className="transition-transform group-hover:-rotate-45" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        {/* Link para regresar al inicio */}
        <div className="mt-16 text-center">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-[#38BDF8]"
          >
            <ArrowRight size={16} className="rotate-180" />
            Volver a la página principal
          </Link>
        </div>

      </div>
    </div>
  );
};