import React, { useEffect, useRef } from 'react';
import Lightfall from './Lightfall';
import { ArrowDown, Instagram, Linkedin, Mail, MessageSquare } from 'lucide-react';
import { gsap } from 'gsap';

export default function Hero() {
  const nameRef = useRef(null);

  useEffect(() => {
    if (!nameRef.current) return;
    
    const chars = nameRef.current.querySelectorAll('.gsap-char');
    
    // Stagger entrance animation
    gsap.fromTo(chars, 
      {
        opacity: 0,
        y: 60,
        rotateX: -60,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.06,
        duration: 1.0,
        ease: 'back.out(1.5)',
        delay: 0.2
      }
    );
    
    // Interactive hover scaling/glow effect
    const cleanups = [];
    chars.forEach(char => {
      const onEnter = () => {
        gsap.to(char, {
          scale: 1.25,
          color: '#c084fc', // purple accent matching Lightfall colors
          textShadow: '0 0 20px rgba(192, 132, 252, 0.8)',
          y: -8,
          duration: 0.3,
          ease: 'power2.out'
        });
      };
      const onLeave = () => {
        gsap.to(char, {
          scale: 1.0,
          color: '#ffffff',
          textShadow: 'none',
          y: 0,
          duration: 0.4,
          ease: 'power2.out'
        });
      };
      char.addEventListener('mouseenter', onEnter);
      char.addEventListener('mouseleave', onLeave);
      cleanups.push(() => {
        char.removeEventListener('mouseenter', onEnter);
        char.removeEventListener('mouseleave', onLeave);
      });
    });

    return () => {
      cleanups.forEach(fn => fn());
    };
  }, []);

  return (
    <section id="home" className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-[#03000a]">
      {/* WebGL Lightfall Background Layer */}
      <div className="hero-bg-wrapper absolute inset-0 z-0 w-full h-full">
        <Lightfall
          colors={['#c084fc', '#8b5cf6', '#a78bfa', '#d8b4fe', '#ffffff']}
          backgroundColor="#03000a"
          speed={0.5}
          streakCount={5}
          streakWidth={1.5}
          streakLength={1.5}
          glow={1.2}
          density={0.6}
          twinkle={0.8}
          zoom={2.2}
          backgroundGlow={0.25}
          opacity={0.85}
          mouseInteraction={true}
          mouseStrength={0.6}
          mouseRadius={0.7}
        />
      </div>

      {/* Cinematic Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#03000a]/20 to-[#03000a] pointer-events-none z-10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primaryPurp/10 rounded-full blur-[130px] pointer-events-none z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accentPurp/10 rounded-full blur-[130px] pointer-events-none z-10" />

      {/* Content Container */}
      <div className="hero-content-wrapper relative z-20 max-w-5xl mx-auto px-6 text-center select-none flex flex-col items-center pt-24 md:pt-0">


        {/* Name and Title */}
        <h1 ref={nameRef} className="text-5xl md:text-8xl font-extrabold tracking-tight text-white mb-6 select-none py-2" style={{ perspective: '1000px' }}>
          {"Gopinath R".split("").map((char, idx) => (
            <span
              key={idx}
              className="gsap-char inline-block origin-bottom transform-gpu cursor-default"
              style={{ minWidth: char === ' ' ? '0.25em' : 'auto' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        
        <h2 className="text-xl md:text-3xl font-medium tracking-wide text-gray-300 mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentPurp via-purple-400 to-indigo-300 font-semibold">
            Branding & Graphic Designer | Photography Studio Operations
          </span>
        </h2>

        {/* Short Bio */}
        <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-200 font-medium leading-relaxed mb-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          Branding and Graphic Designer specializing in brand identity, corporate branding, and visual design systems. Proficient in Canva Pro, Adobe Photoshop, and Figma, with experience using AI tools to enhance creative workflows.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full sm:w-auto">
          <a
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-primaryPurp to-accentPurp text-white font-medium hover:text-glow glow-btn transition-all text-center magnetic"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-gray-600 bg-transparent text-gray-200 font-medium hover:bg-white/5 hover:text-white hover:border-gray-400 transition-all text-center flex items-center justify-center gap-2 magnetic"
          >
            Let's Talk <MessageSquare className="w-4 h-4 text-accentPurp" />
          </a>
        </div>

        {/* Quick Contacts & Socials */}
        <div className="flex items-center justify-center gap-6 text-gray-300">
          <a
            href="https://www.linkedin.com/in/gopi8/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-gray-800 bg-[#090514]/40 hover:border-accentPurp hover:text-white hover:text-glow transition-all magnetic"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/best_grade_photography?igsh=MWNhb2t6ZXlubng0OA=="
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-gray-800 bg-[#090514]/40 hover:border-accentPurp hover:text-white hover:text-glow transition-all magnetic"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="mailto:gopiwork08@gmail.com"
            className="p-2 rounded-full border border-gray-800 bg-[#090514]/40 hover:border-accentPurp hover:text-white hover:text-glow transition-all magnetic"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="hero-scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-accentPurp transition-colors pointer-events-none select-none z-20">
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
