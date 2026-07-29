import React, { useState, useEffect } from 'react';
import { Palette, Code, Film } from 'lucide-react';
import AOS from 'aos';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('design');

  useEffect(() => {
    // Refresh AOS animations so elements rebuild transitions when switching tabs
    AOS.refresh();
  }, [activeTab]);

  const categories = [
    { id: 'design', name: 'Creative Design', icon: <Palette className="w-4 h-4" /> },
    { id: 'studio', name: 'Studio & Operations', icon: <Film className="w-4 h-4" /> },
    { id: 'certs', name: 'Certifications', icon: <Code className="w-4 h-4" /> },
  ];

  const skillLists = {
    design: [
      { name: "Canva Pro", level: "Expert", percent: 95, desc: "Corporate branding kits, business cards, letterheads, B2B hiring posters, and LinkedIn cover visuals." },
      { name: "Adobe Photoshop", level: "Advanced", percent: 85, desc: "Logo rebranding, realistic product mockups, advanced photo editing and design composites." },
      { name: "Figma", level: "Basic", percent: 55, desc: "Wireframing, initial layouts, letterhead configurations, and basic vector drafts." },
      { name: "Branding & Visual Identity", level: "Advanced", percent: 90, desc: "Creating standard brand asset suites, comprehensive typography guidelines, and design systems." }
    ],
    studio: [
      { name: "Photography", level: "Advanced", percent: 85, desc: "Setting up studio/client shoots, composition, lighting, camera operations, and raw photo edits." },
      { name: "Videography", level: "Advanced", percent: 80, desc: "Storyboarding, camera angles, directing video shoots." },
      { name: "Client Management", level: "Proficient", percent: 80, desc: "Fostering client relationships, managing expectations, requirements gathering, and feedback." },
      { name: "Team Leadership", level: "Proficient", percent: 80, desc: "Leading photography shoots, allocating schedules, and coordinating team activities." },
      { name: "Project Coordination", level: "Advanced", percent: 85, desc: "Tracking production deliverables, managing deadlines, and ensuring successful delivery." }
    ],
    certs: [
      { name: "Graphic Designing (HCAS)", level: "Certified", percent: 100, desc: "Completed certification course in GRAPHIC DESIGNING at HINDUSTAN COLLEGE OF ARTS & SCIENCE, Chennai." }
    ]
  };

  return (
    <section id="skills" className="relative py-24 bg-[#05020c]">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-accentPurp/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-xs uppercase tracking-[0.25em] text-accentPurp font-semibold mb-3">Skills & Toolkit</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Design Proficiency & Development Tools
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-primaryPurp to-accentPurp mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-12" data-aos="fade-up">
          <div className="flex flex-wrap justify-center gap-2 md:gap-1.5 p-1.5 rounded-2xl md:rounded-full border border-primaryPurp/20 bg-darkCard/60 glass-panel max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center justify-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${activeTab === cat.id ? 'bg-primaryPurp text-white shadow-lg shadow-primaryPurp/30' : 'text-gray-400 hover:text-white'}`}
              >
                {cat.icon}
                <span className="whitespace-nowrap">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillLists[activeTab].map((skill, index) => (
            <div
              key={`${activeTab}-${index}`}
              className="electrical-card p-6 rounded-2xl flex flex-col justify-between skill-card-animate"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-bold text-white tracking-wide">{skill.name}</h4>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-primaryPurp/15 text-accentPurp border border-primaryPurp/20">
                    {skill.level}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                  {skill.desc}
                </p>
              </div>

              {/* Progress Bar */}
              <div>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1.5 font-medium">
                  <span>Proficiency</span>
                  <span>{skill.percent}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#120d26]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primaryPurp to-accentPurp shadow-[0_0_10px_rgba(168,85,247,0.4)] transition-all duration-1000 ease-out"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
