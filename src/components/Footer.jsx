import React from 'react';
import { ArrowUp, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#020008] border-t border-primaryPurp/10 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Branding Logo */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-wider text-white">
            GOPI<span className="text-accentPurp">.DESIGN</span>
          </span>
          <span className="w-1 h-1 rounded-full bg-accentPurp"></span>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 text-center md:text-left">
          &copy; {new Date().getFullYear()} Gopinath R. All Rights Reserved. Crafted with React & Tailwind CSS.
        </p>

        {/* Socials & Top Scroll */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/gopi8/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-gray-800 bg-[#090514]/40 hover:border-accentPurp hover:text-white transition-all text-gray-400"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/best_grade_photography?igsh=MWNhb2t6ZXlubng0OA=="
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-gray-800 bg-[#090514]/40 hover:border-accentPurp hover:text-white transition-all text-gray-400"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="mailto:gopiwork08@gmail.com"
            className="p-2 rounded-full border border-gray-800 bg-[#090514]/40 hover:border-accentPurp hover:text-white transition-all text-gray-400"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full border border-primaryPurp/20 bg-primaryPurp/10 text-accentPurp hover:bg-primaryPurp hover:text-white transition-all glow-btn"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
