// src/pages/SinglePost.tsx
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Satellite } from 'lucide-react';
import { blogPosts } from '../data/BlogPosts';

export const SinglePost = () => {
  // Extraemos el 'id' directamente de la URL
  const { id } = useParams<{ id: string }>();
  
  // Buscamos el post que coincida con ese id
  const post = blogPosts.find((p) => p.id === id);

  // Manejo de errores: Si el post no existe (URL inválida)
  if (!post) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#0F172A] px-6">
        <Satellite size={64} className="mb-6 text-slate-700" />
        <h1 className="text-3xl font-bold text-white">Entrada no encontrada</h1>
        <p className="mt-4 text-slate-400">Parece que este registro se perdió en órbita.</p>
        <Link to="/avances" className="mt-8 flex items-center gap-2 font-medium text-[#38BDF8] hover:underline">
          <ArrowLeft size={18} /> Volver a la bitácora
        </Link>
      </div>
    );
  }

  // Renderizado del post completo
  return (
    <article className="min-h-screen bg-[#0F172A] px-6 pt-32 pb-20">
      <div className="mx-auto max-w-3xl">
        
        {/* Botón de regreso */}
        <Link 
          to="/avances"
          className="group mb-10 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-[#38BDF8]"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Volver a todos los avances
        </Link>

        {/* Cabecera del Artículo */}
        <header className="mb-12 border-b border-slate-800 pb-10">
          <div className="mb-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-md bg-[#38BDF8]/10 px-3 py-1 text-xs font-semibold text-[#38BDF8]">
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:leading-[1.1]">
            {post.title}
          </h1>
          
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm font-medium text-slate-400">
            <span className="flex items-center gap-2">
              <Calendar size={18} className="text-[#34D399]" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <User size={18} className="text-[#38BDF8]" />
              {post.author}
            </span>
          </div>
        </header>

        {/* Cuerpo del Artículo */}
        <div className="prose prose-invert prose-lg max-w-none text-slate-300 prose-p:leading-relaxed prose-a:text-[#38BDF8] hover:prose-a:text-[#7DD3FC]">
          {post.content.map((paragraph, index) => (
            <p key={index} className="mb-6">
              {paragraph}
            </p>
          ))}
        </div>

      </div>
    </article>
  );
};