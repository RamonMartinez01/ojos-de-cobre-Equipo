// src/components/layout/Navbar.tsx
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'Inicio', href: isHome ? '#home' : '/#home' },
    { name: 'El Reto', href: isHome ? '#challenge' : '/#challenge' },
    { name: 'Equipo', href: isHome ? '#team' : '/#team' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
      if (dropdownOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, dropdownOpen]);

  // Cerrar menús al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  return (
    <nav ref={navRef} className="fixed top-0 z-50 w-full border-b border-[#38BDF8]/15 bg-[#0F172A]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-tight text-[#38BDF8] hover:text-[#7DD3FC] transition-colors">
         Equipo <span className="text-slate-100">Copernicus</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-[#38BDF8] transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            {/* Dropdown Menu Desktop */}
            <div className="relative">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-[#38BDF8] transition-colors"
              >
                Recursos <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {dropdownOpen && (
                <div className="absolute top-full right-0 mt-4 w-56 rounded-xl border border-slate-700 bg-[#0F172A] py-2 shadow-xl shadow-black/50">
                  <Link 
                    to="/avances" 
                    className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-[#38BDF8]"
                  >
                    Blog de Avances
                  </Link>
                  <a 
                    href="/Documentacion-Esp.pdf" 
                    target="_blank"
                    rel="noreferrer"
                    className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-[#38BDF8]"
                  >
                    Ver Propuesta (PDF)
                  </a>
                  {/* El enlace a la solución en modo texto para mantener la limpieza */}
                  <Link 
                    to="/solucion" 
                    className="block px-4 py-2 text-sm font-semibold text-[#38BDF8] hover:bg-slate-800 hover:text-[#7DD3FC]"
                  >
                    Ver Solución en Vivo
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Socials Desktop */}
          <div className="flex items-center gap-3 border-l border-slate-700 pl-6">
            <a href="https://github.com/RamonMartinez01" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#38BDF8]"><FaGithub size={20} /></a>
            <a href="https://linkedin.com/in/ramon-martinez-full-stack-developer/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#38BDF8]"><FaLinkedin size={20} /></a>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="text-slate-200 md:hidden hover:text-[#38BDF8] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full border-b border-[#38BDF8]/15 bg-[#0F172A] px-6 py-6 md:hidden shadow-xl">
          <div className="flex flex-col gap-6">
            
            {/* Links principales */}
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

            <hr className="border-slate-700" />

            {/* Links de Recursos */}
            <Link 
              to="/avances" 
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-slate-300 hover:text-[#38BDF8] transition-colors"
            >
              Blog de Avances
            </Link>
            <a 
              href="/Documentacion-Esp.pdf" 
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-slate-300 hover:text-[#38BDF8] transition-colors"
            >
              Propuesta (PDF)
            </a>

            {/* Redes Sociales Mobile */}
            <div className="flex items-center gap-4 py-2">
              <a href="https://github.com/RamonMartinez01" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#38BDF8]"><FaGithub size={24} /></a>
              <a href="https://linkedin.com/in/ramon-martinez-full-stack-developer/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#38BDF8]"><FaLinkedin size={24} /></a>
            </div>

            {/* CTA de la Solución (Tu botón, perfecto para el ancho de mobile) */}
            <Link
              to="/solucion"
              onClick={() => setIsOpen(false)}
              className="group mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#38BDF8] px-6 py-4 font-semibold text-[#0F172A] transition-all hover:bg-[#7DD3FC] shadow-[0_0_15px_rgba(56,189,248,0.2)]"
            >
              Conoce la Solución
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
};