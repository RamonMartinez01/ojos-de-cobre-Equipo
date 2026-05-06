// src/components/layout/Navbar.tsx
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  // Si estamos en otra página, los hash links deben apuntar a la raíz primero (ej: /#team)
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

  return (
    <nav ref={navRef} className="fixed top-0 z-50 w-full border-b border-[#38BDF8]/15 bg-[#0F172A]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-tight text-[#38BDF8] hover:text-[#7DD3FC] transition-colors">
         Nombre del <span className="text-slate-100">Equipo</span>
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
            
            {/* Dropdown Menu */}
            <div className="relative">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-[#38BDF8] transition-colors"
              >
                Recursos <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {dropdownOpen && (
                <div className="absolute top-full right-0 mt-4 w-48 rounded-xl border border-slate-700 bg-[#0F172A] py-2 shadow-xl shadow-black/50">
                  <Link 
                    to="/avances" 
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-[#38BDF8]"
                  >
                    Blog de Avances
                  </Link>
                  <a 
                    href="/Documentacion-Esp.pdf" 
                    target="_blank"
                    className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-[#38BDF8]"
                  >
                    Ver Propuesta (PDF)
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3 border-l border-slate-700 pl-6">
            <a href="https://github.com/RamonMartinez01" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#38BDF8]"><FaGithub size={20} /></a>
            <a href="https://linkedin.com/in/ramon-martinez-full-stack-developer/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#38BDF8]"><FaLinkedin size={20} /></a>
          </div>
        </div>

        {/* Mobile Toggle... (Keep your existing mobile button logic here) */}
      </div>
    </nav>
  );
};