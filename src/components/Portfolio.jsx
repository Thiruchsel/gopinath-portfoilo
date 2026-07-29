import { ExternalLink, Tag, Code, Palette } from 'lucide-react';
import AOS from 'aos';
import brandKitImg from '../assets/b2b_brand_kit.png';
import stationeryImg from '../assets/stationery_suite.png';
import businessCardsImg from '../assets/business_cards.png';
import linkedinPackImg from '../assets/linkedin_pack.png';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "B2B Rebranding & Corporate Brand Kit",
      category: "design",
      type: "Branding Kit",
      tool: "Canva Pro, Photoshop, Figma",
      description: "A complete visual identity system built for B2B scale. Standardized logo layouts, color guides, typography guidelines, and media rules.",
      role: "DATAILLAM Private Limited",
      image: brandKitImg
    },
    {
      id: 3,
      title: "B2B Corporate Stationery Suite",
      category: "design",
      type: "Stationery Design",
      tool: "Canva Pro, Figma",
      description: "Clean, consistent layouts for essential corporate items, including letterheads, employee ID cards, and ID lanyards.",
      role: "DATAILLAM Private Limited",
      image: stationeryImg
    },
    {
      id: 5,
      title: "Corporate Identity Business Cards",
      category: "design",
      type: "Identity Design",
      tool: "Canva, Photoshop",
      description: "Premium business card designs carrying the newly established brand patterns and color systems for executive networking.",
      role: "DATAILLAM Private Limited",
      image: businessCardsImg
    },
    {
      id: 6,
      title: "LinkedIn Brand Identity Pack",
      category: "design",
      type: "Digital Marketing Graphics",
      tool: "Canva Pro, Photoshop",
      description: "B2B hiring posters, LinkedIn banners, and social layouts designed to maintain digital identity alignment.",
      role: "DATAILLAM Private Limited",
      image: linkedinPackImg
    }
  ];

  return (
    <section id="portfolio" className="relative py-24 bg-[#05020c] overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primaryPurp/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accentPurp/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-xs uppercase tracking-[0.25em] text-accentPurp font-semibold mb-3">Portfolio</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Featured Creative & Technical Works
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-primaryPurp to-accentPurp mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="electrical-card rounded-2xl overflow-hidden flex flex-col h-full group"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              data-aos-duration="700"
            >
              {/* Card Image */}
              <div className="relative aspect-video w-full overflow-hidden border-b border-primaryPurp/10 bg-darkBg/50">
                {/* Subtle top light bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primaryPurp/30 to-transparent group-hover:via-accentPurp/80 transition-all duration-500 z-10" />
                
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:brightness-110"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-grow relative overflow-hidden">
                {/* Radial Glow on Hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.06),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-primaryPurp/10 text-accentPurp border border-primaryPurp/10 flex items-center gap-1">
                      {project.category === 'design' ? <Palette className="w-3 h-3" /> : <Code className="w-3 h-3" />}
                      {project.type}
                    </span>
                    <span className="text-[10px] text-gray-400 font-semibold">{project.role}</span>
                  </div>

                  <h4 className="text-xl font-bold text-white tracking-wide mb-3 group-hover:text-accentPurp transition-colors duration-300">
                    {project.title}
                  </h4>
                  
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-primaryPurp/10 mt-auto">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                    <Tag className="w-3.5 h-3.5 text-accentPurp" />
                    <span>{project.tool}</span>
                  </div>
                  <span className="p-1.5 rounded-full border border-gray-800 bg-[#090514]/40 hover:border-accentPurp hover:text-white transition-all text-gray-400 group-hover:text-white">
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
