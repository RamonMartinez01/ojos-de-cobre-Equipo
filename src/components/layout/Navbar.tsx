// src/components/layout/Navbar.tsx
import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'El Reto', href: '#challenge' },
    { name: 'Nuestro Enfoque', href: '#approach' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  return (
    <nav ref={navRef} className="fixed top-0 z-50 w-full border-b border-[#38BDF8]/15 bg-[#0F172A]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">

        {/* Logo / Nombre */}
        <a href="#home" className="text-xl font-bold tracking-tight text-[#38BDF8] hover:text-[#7DD3FC] transition-colors">
         Nombre del <span className="text-slate-100">Equipo</span>
        </a>

        {/* Iconos de Redes Sociales en Desktop */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/RamonMartinez01"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#38BDF8]/10 p-2 text-slate-300 hover:bg-[#38BDF8]/20 hover:text-[#38BDF8] transition-all"
            title="Visitar mi GitHub"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/ramon-martinez-full-stack-developer/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#38BDF8]/10 p-2 text-slate-300 hover:bg-[#38BDF8]/20 hover:text-[#38BDF8] transition-all"
            title="Visitar mi LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-slate-200 md:hidden hover:text-[#38BDF8] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute w-full border-b border-[#38BDF8]/15 bg-[#0F172A] px-6 py-6 md:hidden shadow-xl">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-300 hover:text-[#38BDF8] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};