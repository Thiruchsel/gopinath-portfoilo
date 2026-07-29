import React from 'react';
import { CheckCircle } from 'lucide-react';
import TiltedCard from './TiltedCard';
import gopinathImg from '../assets/gopinath.jpg';

export default function About() {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative py-24 bg-[#03000a] overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-primaryPurp/5 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-xs uppercase tracking-[0.25em] text-accentPurp font-semibold mb-3">About Me</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Bridging Artistry & Creative Logic
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-primaryPurp to-accentPurp mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text/Bio Panel */}
          <div className="lg:col-span-7 flex flex-col gap-6" data-aos="fade-right" data-aos-duration="1000">
            <h4 className="text-xl md:text-3xl font-bold text-gray-200 tracking-wide">
              Specialized in Branding, Corporate Graphic Design & Photography Studio Operations
            </h4>
            
            <p className="text-gray-400 leading-relaxed">
              I am a branding and graphic designer who specializes in brand identity, corporate branding, and visual design systems. I design professional corporate assets—from letterheads and ID cards to business cards, logo rebrandings, and LinkedIn layout assets—to present business identities cleanly.
            </p>

            <p className="text-gray-400 leading-relaxed">
              My proficiency lies in **Canva Pro**, **Adobe Photoshop**, and **Figma**. I actively leverage AI tools (ChatGPT, Gemini, Claude) to accelerate ideation, create detailed assets, and structure design processes. Additionally, I have extensive experience in **managing photography shoots**, client relationships, overall studio operations, and leading photography teams.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accentPurp flex-shrink-0" />
                <span className="text-gray-300 text-sm font-medium">B2B Branding & Identity</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accentPurp flex-shrink-0" />
                <span className="text-gray-300 text-sm font-medium">Logo Rebranding & Design</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accentPurp flex-shrink-0" />
                <span className="text-gray-300 text-sm font-medium">Studio Operations & Shoot Management</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accentPurp flex-shrink-0" />
                <span className="text-gray-300 text-sm font-medium">Team Leadership & Coordination</span>
              </div>
            </div>
          </div>

          {/* TiltedCard Component Panel */}
          <div className="lg:col-span-5 flex justify-center relative z-10" data-aos="fade-up" data-aos-duration="1000">
            {/* Ambient behind-glow to match theme */}
            <div className="absolute w-[300px] h-[400px] bg-[#8b5cf6]/10 rounded-[15px] blur-3xl opacity-50 pointer-events-none -z-10" />
            
            <TiltedCard
              imageSrc={gopinathImg}
              altText="Gopinath R - Profile"
              captionText="Gopinath R"
              containerHeight="400px"
              containerWidth="300px"
              imageHeight="400px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.03}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={
                <div className="w-full p-5 bg-gradient-to-t from-[#03000a] via-[#03000a]/90 to-transparent rounded-b-[15px] text-center pointer-events-auto">
                  <h4 className="text-lg font-bold text-white tracking-wide">Gopinath R</h4>
                  <p className="text-xs text-accentPurp mt-0.5 font-medium">Branding & Studio Operations</p>
                  <button
                    onClick={handleContactClick}
                    className="mt-3.5 px-6 py-2 rounded-full bg-gradient-to-r from-primaryPurp to-accentPurp text-xs font-semibold uppercase tracking-wider text-white hover:text-glow glow-btn transition-all"
                    type="button"
                  >
                    Hire Me
                  </button>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
