// src/components/ui/TeamCard.tsx
import { Globe, MapPin } from 'lucide-react';
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import type { TeamMember, SocialLink } from '../../types';

interface TeamCardProps {
  member: TeamMember;
}

// Función auxiliar para renderizar iconos dinámicamente
const renderSocialIcon = (platform: SocialLink['platform']) => {
  switch (platform) {
    case 'GitHub': return <FaGithub size={18} />;
    case 'LinkedIn': return <FaLinkedin size={18} />;
    case 'Twitter': return <FaTwitter size={18} />;
    case 'Website': return <Globe size={18} />;
    default: return <Globe size={18} />;
  }
};

export const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <div className="group relative flex flex-col rounded-2xl border border-slate-700/50 bg-slate-800/30 p-6 transition-all hover:border-[#38BDF8]/40 hover:bg-slate-800/50">
      
      {/* Encabezado: Avatar y Datos Básicos */}
      <div className="flex items-center gap-4">
        <img 
          src={member.avatarUrl} 
          alt={`Avatar de ${member.name}`} 
          className="h-16 w-16 rounded-full border-2 border-slate-700 object-cover transition-colors group-hover:border-[#38BDF8]"
        />
        <div>
          <h3 className="text-xl font-bold text-white">{member.name}</h3>
          <p className="text-sm font-medium text-[#34D399]">{member.role}</p>
          <div className="mt-1 flex items-center gap-1 text-xs text-slate-400">
            <MapPin size={12} />
            <span>{member.location}</span>
          </div>
        </div>
      </div>

      {/* Pitch / Descripción */}
      <p className="mt-4 flex-grow text-sm leading-relaxed text-slate-300">
        {member.pitch}
      </p>

      {/* Badges de Skills */}
      <div className="mt-6 flex flex-wrap gap-2">
        {member.skills.map((skill) => (
          <span 
            key={skill} 
            className="rounded-md bg-slate-700/40 px-2 py-1 text-xs font-medium text-slate-300"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Footer: Redes Sociales */}
      <div className="mt-6 flex items-center gap-3 border-t border-slate-700/50 pt-4">
        {member.socials.map((social) => (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition-colors hover:text-[#38BDF8]"
            title={`${member.name} en ${social.platform}`}
          >
            {renderSocialIcon(social.platform)}
          </a>
        ))}
      </div>
      
    </div>
  );
};