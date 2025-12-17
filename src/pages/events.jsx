import React from "react";

const projects = [
  {
    title: "Chat App using GoLang",
    year: "2025",
    desc: "Real-time messenger app with authentication and authorization.",
    tech: "GoLang • React • Tailwind • PostgreSQL • JWT • WebSocket",
  },
  {
    title: "Electricity Demand Prediction",
    year: "2024",
    desc: "ML-based system to predict electricity peak demand.",
    tech: "LightGBM • Python • Flask • Scikit-learn",
  },
  {
    title: "AI Chatbot with File Integration",
    year: "2025",
    desc: "Floating chatbot that analyzes PDF and Excel files.",
    tech: "Python • Flask • GenAI API • JavaScript",
  },
  {
    title: "Finance Tracker",
    year: "2025",
    desc: "Finance Tracker to add and set transactions",
    tech: "HTML • React • Mongo DB • JavaScript",
  },
];

const Events = () => {
  return (
    <div className="min-h-auto w-full  px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fadeInDown">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 blur-2xl rounded-full"></div>
            <h2 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 px-6 sm:px-10 md:px-12 py-4 sm:py-6">
              Projects
            </h2>
          </div>
          <div className="mt-4 w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-yellow-500/0 group-hover:from-amber-500/20 group-hover:to-yellow-500/20 rounded-2xl sm:rounded-3xl blur-xl transition-all duration-500"></div>
              
              <div className="relative h-full min-h-[320px] sm:min-h-[360px] bg-black/60 backdrop-blur-lg border border-amber-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 transition-all duration-500 hover:border-amber-400/40 hover:scale-[1.03] hover:shadow-2xl hover:shadow-amber-500/10">
                
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-400/30 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                    <span className="text-amber-300 text-xs sm:text-sm font-semibold">
                      {project.year}
                    </span>
                  </div>
                  
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-400/20 to-yellow-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 leading-tight group-hover:text-amber-200 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
                  {project.desc}
                </p>

                <div className="pt-4 sm:pt-5 border-t border-amber-500/20">
                  <p className="text-xs sm:text-sm text-amber-200/90 leading-relaxed font-medium">
                    {project.tech}
                  </p>
                </div>

                <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-amber-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-tr from-yellow-500/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 sm:mt-16 md:mt-20 flex justify-center animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

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

        .animate-fadeInDown {
          animation: fadeInDown 1s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out both;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default Events;