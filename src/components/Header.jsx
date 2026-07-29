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

  return (
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
          className="md:hidden p-1.5 text-gray-400 hover:text-white transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed inset-y-0 right-0 w-64 bg-[#06030e]/95 border-l border-primaryPurp/20 z-40 p-8 transform transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0 shadow-[0_0_50px_rgba(0,0,0,0.8)]' : 'translate-x-full'}`}>
        <div className="flex flex-col gap-6 h-full justify-between pt-16">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-300 hover:text-accentPurp transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-1.5 w-full text-center text-xs font-semibold uppercase tracking-wider px-4 py-3 rounded-full border border-primaryPurp bg-primaryPurp/20 text-accentPurp glow-btn magnetic"
            >
              Hire Me <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
