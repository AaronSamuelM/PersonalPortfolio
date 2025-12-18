import React, { useState } from "react";

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python" },
      { name: "C" },
      { name: "C++" },
      { name: "Java"},
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind"},
      { name: "JavaScript" },
      { name: "React" },
    ],
  },
  {
    category: "AI & ML",
    items: [
      { name: "Machine Learning" },
      { name: "Neural Networks" },
      { name: "Deep Learning" },
    ],
  },
  {
    category: "Backend & Database",
    items: [
      { name: "MongoDB"},
      { name: "PostgreSQL" },
      { name: "REST API"},
      { name: "Golang"},
      { name: "ExpressJS" },
    ],
  },
];

const AnnualReport = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="min-h-auto w-full relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="relative inline-block">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 mb-2 glitch-text" data-text="SKILLS">
              SKILLS
            </h1>
          </div>
          <div className="mt-4 sm:mt-6 flex justify-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping delay-150"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping delay-300"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {skills.map((category, catIndex) => (
            <div
              key={catIndex}
              className="animate-fadeInUp"
              style={{ animationDelay: `${catIndex * 0.15}s` }}
            >
              <div className="h-full bg-black/30 backdrop-blur-sm border-2 border-green-500/30 rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover:border-green-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent animate-scan pointer-events-none"></div>
       
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-400"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-green-400"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green-400"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-400"></div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-400 mb-5 sm:mb-6 uppercase tracking-wider relative">
                  <span className="relative z-10">{category.category}</span>
                  <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-green-500 to-transparent"></div>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {category.items.map((skill, index) => {
                    const globalIndex = `${catIndex}-${index}`;
                    const isHovered = hoveredIndex === globalIndex;
                    
                    return (
                      <div
                        key={index}
                        onMouseEnter={() => setHoveredIndex(globalIndex)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="relative group/item"
                      >
                        <div className={`
                          flex items-center gap-3 sm:gap-4 p-3 sm:p-4 
                          bg-green-950/30 border border-green-500/20 rounded-lg
                          transition-all duration-300 cursor-pointer
                          ${isHovered ? 'border-green-400/80 bg-green-900/40 scale-105 shadow-lg shadow-green-500/30' : 'hover:border-green-400/40'}
                        `}>
                          
                          <span className={`
                            text-sm sm:text-base lg:text-lg font-semibold
                            transition-all duration-300
                            ${isHovered ? 'text-green-300 tracking-wider' : 'text-green-400'}
                          `}>
                            {skill.name}
                          </span>
                          {isHovered && (
                            <div className="ml-auto flex gap-1">
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping"></div>
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping delay-75"></div>
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping delay-150"></div>
                            </div>
                          )}
                        </div>
                        {isHovered && (
                          <div className="absolute inset-0 bg-green-500/10 rounded-lg blur-xl -z-10 animate-pulse"></div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glitch {
          0%, 100% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
        }

        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out both;
        }

        .animate-glitch {
          animation: glitch 3s infinite;
        }

        .animate-scan {
          animation: scan 8s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .delay-75 {
          animation-delay: 75ms;
        }

        .delay-150 {
          animation-delay: 150ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .glitch-text {
          position: relative;
          text-shadow: 
            0 0 10px rgba(0, 255, 65, 0.8),
            0 0 20px rgba(0, 255, 65, 0.6),
            0 0 30px rgba(0, 255, 65, 0.4);
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};
export default AnnualReport;