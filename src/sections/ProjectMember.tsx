import { TeamCard } from '../components/ui/TeamCard';
import { teamMembers } from '../data/TeamMembers';

export const ProjectMember = () => {
  return (
    <section id="team" className="bg-[#0F172A] py-20 px-6">
      {/* Contenedor central alineado con el Navbar y Hero */}
      <div className="mx-auto max-w-5xl">
        
        {/* Encabezado de la sección */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            El <span className="text-[#38BDF8]">Equipo</span>
          </h2>
          {/* Nuevo gradiente temático */}
          <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-[#38BDF8] to-[#34D399]" />
          <p className="mt-4 max-w-2xl text-slate-300">
            Estos son Miembros falsos, es solo un ejemplo de cómo luciría.
          </p>
        </div>

        {/* Grid Responsivo: Funciona perfecto para 4 miembros (2x2 en desktop) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

        {/* Mensaje / CTA */}
        <div className="mt-16 rounded-xl border border-dashed border-[#38BDF8]/30 bg-slate-800/20 p-8 text-center transition-colors hover:border-[#38BDF8]/50 hover:bg-slate-800/40">
          <p className="text-sm text-slate-400">
            Aquí una frase para<br className="sm:hidden" />
            <a href="#contact" className="ml-1 font-semibold text-[#38BDF8] transition-colors hover:text-[#7DD3FC] hover:underline">
              Dar ánimo al equipo
            </a>
          </p>
        </div>
        
      </div>
    </section>
  );
};