import React, { useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    // GSAP ScrollTrigger for drawing the timeline center line
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 30%',
        end: 'bottom 85%',
        scrub: 0.5,
      }
    });

    tl.fromTo(lineRef.current, 
      { scaleY: 0 },
      { scaleY: 1, ease: 'none', transformOrigin: 'top center' }
    );

    // Timeline center line is animated with GSAP, blocks are animated with AOS
  }, []);

  const experiences = [
    {
      role: "Co-Founder & Managing Director (MD)",
      company: "Best Grade Photography Studio",
      location: "Chennai",
      duration: "Jan 2024 - Present",
      type: "Full-Time / Partner",
      description: "Leading overall studio operations and photography teams while directing creative shoots and storytelling production.",
      achievements: [
        "Managing Director: Oversee client bookings, manage shoots, handle client relations, coordinate studio operations, and lead the photography team.",
        "Videography: Conceptualize and shoot creative storytelling videographies, promotional shoots, and commercial projects."
      ],
      tags: ["Studio Operations", "Creative Videography", "Client Relations", "Team Leadership", "Project Management"]
    },
    {
      role: "Rebranding for B2B and Graphic Designer",
      company: "DATAILLAM Private Limited",
      location: "Chennai",
      duration: "March 2025 - July 2026",
      type: "Full-Time",
      description: "Directed visual rebranding packages for B2B corporate assets and digital marketing collateral.",
      achievements: [
        "Branding: Designed complete corporate branding kits and custom rebranding packages to standardize corporate identity.",
        "Canva: Standardized and generated business cards, employee letterheads, ID cards, ID lanyards, hiring posters, and LinkedIn cover photos.",
        "Photoshop: Structured logo rebranding projects and rendered realistic client product mockups.",
        "Figma: Developed UX wireframes, vector assets, layouts, and custom logo layouts."
      ],
      tags: ["Canva Pro", "Adobe Photoshop", "Figma", "Corporate Identity", "B2B Design"]
    }
  ];

  return (
    <section id="experience" className="relative py-24 bg-[#03000a] overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primaryPurp/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-accentPurp/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={containerRef}>
        {/* Section Title */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-xs uppercase tracking-[0.25em] text-accentPurp font-semibold mb-3">Work History</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            My Professional Timeline
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-primaryPurp to-accentPurp mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline Path */}
        <div className="relative mt-12">
          {/* Vertical Line */}
          <div
            ref={lineRef}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primaryPurp via-accentPurp to-transparent origin-top md:-translate-x-1/2"
            style={{ minHeight: '100%' }}
          />

          {/* Timeline Blocks */}
          <div className="flex flex-col gap-12 md:gap-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`timeline-block flex flex-col md:flex-row items-stretch w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Left Side (for even) / Right Side (for odd) empty spacer in desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Icon Indicator */}
                  <div className="absolute left-1.5 md:left-1/2 w-7 h-7 rounded-full bg-[#090514] border-2 border-accentPurp flex items-center justify-center md:-translate-x-1/2 z-20 shadow-[0_0_10px_rgba(192,132,252,0.5)]">
                    <Briefcase className="w-3.5 h-3.5 text-accentPurp" />
                  </div>

                  {/* Card Container */}
                  <div 
                    className="w-full md:w-1/2 pl-10 md:pl-0 md:px-8"
                    data-aos={isEven ? "fade-left" : "fade-right"}
                    data-aos-duration="800"
                  >
                    <div className="electrical-card p-6 md:p-8 rounded-2xl relative">
                      {/* Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-white tracking-wide">{exp.role}</h4>
                          <h5 className="text-sm font-semibold text-accentPurp">{exp.company}</h5>
                        </div>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded bg-primaryPurp/15 text-accentPurp border border-primaryPurp/10">
                          {exp.type}
                        </span>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-5 border-b border-primaryPurp/10 pb-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-primaryPurp" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-primaryPurp" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Summary */}
                      <p className="text-sm text-gray-400 mb-4 font-medium leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Bullet points */}
                      <ul className="text-sm text-gray-400 space-y-2 mb-6 list-disc list-inside leading-relaxed">
                        {exp.achievements.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, tIndex) => (
                          <span
                            key={tIndex}
                            className="text-xs px-2.5 py-1 rounded-full bg-[#120d26] text-gray-300 border border-primaryPurp/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-28">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-xs uppercase tracking-[0.25em] text-accentPurp font-semibold mb-3">Academic Background</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Education
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-primaryPurp to-accentPurp mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="electrical-card p-6 rounded-2xl flex flex-col justify-between" data-aos="fade-up" data-aos-duration="800">
              <div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-primaryPurp/15 text-accentPurp border border-primaryPurp/10 mb-4 inline-block">
                  June 2020 - April 2023
                </span>
                <h4 className="text-lg font-bold text-white tracking-wide mb-1">BCA</h4>
                <h5 className="text-sm font-semibold text-gray-400 mb-2">Hindustan College of Arts and Science</h5>
                <p className="text-xs text-gray-500">Chennai</p>
              </div>
              <div className="mt-6 pt-4 border-t border-primaryPurp/10 flex justify-between items-center">
                <span className="text-xs text-gray-500 font-semibold uppercase">Result</span>
                <span className="text-sm font-bold text-accentPurp">6.6 CGPA</span>
              </div>
            </div>

            <div className="electrical-card p-6 rounded-2xl flex flex-col justify-between" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
              <div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-primaryPurp/15 text-accentPurp border border-primaryPurp/10 mb-4 inline-block">
                  June 2019 - April 2020
                </span>
                <h4 className="text-lg font-bold text-white tracking-wide mb-1">H.S.C</h4>
                <h5 className="text-sm font-semibold text-gray-400 mb-2">Kumara Raja Muthaiah Higher Secondary School</h5>
                <p className="text-xs text-gray-500">Chennai</p>
              </div>
              <div className="mt-6 pt-4 border-t border-primaryPurp/10 flex justify-between items-center">
                <span className="text-xs text-gray-500 font-semibold uppercase">Result</span>
                <span className="text-sm font-bold text-accentPurp">55%</span>
              </div>
            </div>

            <div className="electrical-card p-6 rounded-2xl flex flex-col justify-between" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              <div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-primaryPurp/15 text-accentPurp border border-primaryPurp/10 mb-4 inline-block">
                  June 2017 - April 2018
                </span>
                <h4 className="text-lg font-bold text-white tracking-wide mb-1">S.S.L.C</h4>
                <h5 className="text-sm font-semibold text-gray-400 mb-2">Ramaniyam Sankara Matriculation Higher Secondary School</h5>
                <p className="text-xs text-gray-500">Chennai</p>
              </div>
              <div className="mt-6 pt-4 border-t border-primaryPurp/10 flex justify-between items-center">
                <span className="text-xs text-gray-500 font-semibold uppercase">Result</span>
                <span className="text-sm font-bold text-accentPurp">67%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
