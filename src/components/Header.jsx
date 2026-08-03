import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" onClick={handleLogoClick} className="flex items-center gap-2.5 group">
            <img 
              src={logoImg} 
              alt="GOPI.DESIGN Logo" 
              className="w-8 h-8 object-contain rounded-lg border border-primaryPurp/20 group-hover:border-accentPurp transition-all duration-300 shadow-[0_0_10px_rgba(139,92,246,0.2)] group-hover:shadow-[0_0_15px_rgba(192,132,252,0.4)]"
            />
            <span className="text-xl font-bold tracking-wider text-white">
              GOPI<span className="text-accentPurp transition-all group-hover:text-white">.DESIGN</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-white hover:text-glow transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex">
            <a
              href="#contact"
              className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full border border-primaryPurp bg-primaryPurp/10 hover:bg-primaryPurp hover:text-white text-accentPurp glow-btn transition-all magnetic"
            >
              Hire Me <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg border border-primaryPurp/20 bg-primaryPurp/10 text-gray-200 hover:text-white hover:border-accentPurp transition-colors"
            aria-label="Toggle Menu"
            type="button"
          >
            {isOpen ? <X className="w-6 h-6 text-accentPurp" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </nav>

      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-[70] md:hidden transition-opacity duration-300"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Panel */}
      <div
        className={`fixed inset-y-0 right-0 w-[280px] max-w-[85vw] bg-[#090514] border-l border-primaryPurp/20 z-[80] p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out md:hidden shadow-[0_0_50px_rgba(0,0,0,0.9)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        <div>
          {/* Drawer Top Bar with explicit Close button */}
          <div className="flex items-center justify-between pb-6 border-b border-primaryPurp/15">
            <div className="flex items-center gap-2">
              <img src={logoImg} alt="Logo" className="w-7 h-7 object-contain" />
              <span className="text-base font-bold text-white tracking-wider">
                GOPI<span className="text-accentPurp">.DESIGN</span>
              </span>
            </div>
            <button
              onClick={closeMenu}
              className="p-2 rounded-full border border-gray-800 bg-[#120d26] text-gray-300 hover:text-white hover:border-accentPurp transition-all"
              aria-label="Close menu"
              type="button"
            >
              <X className="w-5 h-5 text-accentPurp" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-2 mt-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="text-base font-semibold text-gray-300 hover:text-accentPurp hover:bg-primaryPurp/10 px-4 py-3 rounded-xl transition-all flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-accentPurp/60">&rarr;</span>
              </a>
            ))}
          </div>
        </div>

        {/* Drawer Bottom CTA */}
        <div className="pt-6 border-t border-primaryPurp/15">
          <a
            href="#contact"
            onClick={closeMenu}
            className="flex items-center justify-center gap-2 w-full text-center text-xs font-bold uppercase tracking-wider px-4 py-3.5 rounded-xl border border-primaryPurp bg-gradient-to-r from-primaryPurp to-accentPurp text-white shadow-lg shadow-primaryPurp/30 transition-all"
          >
            Hire Me <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </>
  );
}
