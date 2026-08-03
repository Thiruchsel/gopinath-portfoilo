import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // custom ease out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    // Connect Lenis to ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const tickerFn = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    // Smooth scroll for all anchor links using Lenis
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (!target) return;
      
      const href = target.getAttribute('href');
      // Only smooth scroll if it's an on-page hash link
      if (href && href.startsWith('#')) {
        e.preventDefault();
        // Special case: if the target is "#home", we scroll to top (0)
        if (href === '#home') {
          lenis.scrollTo(0, { duration: 1.2 });
        } else {
          const element = document.querySelector(href);
          if (element) {
            lenis.scrollTo(element, { offset: -60, duration: 1.2 });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick, { passive: false });

    // Explicitly register ScrollTrigger inside component mount
    gsap.registerPlugin(ScrollTrigger);

    // Initialize AOS (Animate on Scroll)
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });

    // Force ScrollTrigger to calculate correct layout offsets after mounting
    ScrollTrigger.refresh();

    // GSAP Magnetic Hover Effect for elements with class '.magnetic'
    const magnets = document.querySelectorAll('.magnetic');
    const magnetCleanups = [];

    magnets.forEach((magnet) => {
      const boundScale = 0.35; // Strength of the magnetic pull
      
      const onMouseMove = (e) => {
        const bound = magnet.getBoundingClientRect();
        const x = e.clientX - bound.left - bound.width / 2;
        const y = e.clientY - bound.top - bound.height / 2;
        
        gsap.to(magnet, {
          x: x * boundScale,
          y: y * boundScale,
          duration: 0.3,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      };
      
      const onMouseLeave = () => {
        gsap.to(magnet, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: 'elastic.out(1, 0.4)',
          overwrite: 'auto'
        });
      };
      
      magnet.addEventListener('mousemove', onMouseMove);
      magnet.addEventListener('mouseleave', onMouseLeave);
      
      magnetCleanups.push(() => {
        magnet.removeEventListener('mousemove', onMouseMove);
        magnet.removeEventListener('mouseleave', onMouseLeave);
      });
    });

    return () => {
      magnetCleanups.forEach((cleanup) => cleanup()); // Cleanup magnetic event listeners
      lenis.destroy();
      gsap.ticker.remove(tickerFn);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#03000a] text-gray-200 overflow-x-hidden">
      {/* Background Decorative Glow Panels */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8b5cf6]/5 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute top-[30%] left-[-200px] w-[500px] h-[500px] bg-[#c084fc]/5 rounded-full blur-[160px] pointer-events-none z-0" />
      
      {/* Main Layout Wrapping */}
      <div className="relative z-10">
        {/* Fixed Navbar */}
        <Header />

        <Hero />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
