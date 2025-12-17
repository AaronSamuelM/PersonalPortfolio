import React, { useRef } from "react";
const About = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const educationRef = useRef(null);
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aaron-samuel-b94899359/"
    },
    {
      name: "GitHub",
      url: "https://github.com/AaronSamuelM"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/Aaron_Samuel_M/"
    },
    {
      name: "Codeforces",
      url: "https://codeforces.com/profile/Aaron_Samuel_M"
    },
    {
      name: "CodeChef",
      url: "https://www.codechef.com/users/aaron_samuel_m"
    }
  ];
  return (
    <div className="min-h-auto w-full px-4 sm:px-6 lg:px-8">
      <div className="mx-auto relative z-10">
        <div ref={headingRef} className="text-center mb-8 sm:mb-12 md:mb-16 animate-fadeInDown">
          <p className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider uppercase mb-2">
            Aaron Samuel M
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4">
            Overview
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div 
            ref={paragraphRef}
            className="md:col-span-2 xl:col-span-2 group"
          >
            <div className="h-full bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/20 shadow-2xl transition-all duration-500 hover:bg-white/15 hover:scale-[1.02] hover:shadow-purple-500/20">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">About Me</h3>
              </div>
              <p className="text-gray-200 text-base sm:text-lg lg:text-xl leading-relaxed">
                I am an enthusiastic student currently pursuing a Bachelor's degree
                in <span className="text-purple-300 font-semibold">Electrical and Electronics Engineering (EEE)</span> at 
                Kongu Engineering College. I am eager to pursue a challenging career in the IT industry,
                where I can apply my software development skills and innovative
                thinking to contribute to impactful projects in <span className="text-blue-300 font-semibold">AI, web development,
                or general tech solutions</span>.
              </p>
            </div>
          </div>
          <div 
            ref={educationRef}
            className="md:col-span-2 xl:col-span-1 group"
          >
            <div className="h-full bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl transition-all duration-500 hover:bg-white/15 hover:scale-[1.02] hover:shadow-blue-500/20">
              <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">Education</h3>
              </div>

              <div className="space-y-5 sm:space-y-6">
                <div className="relative pl-5 sm:pl-6 border-l-2 border-purple-400">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-400 rounded-full"></div>
                  <h4 className="text-white text-lg sm:text-xl font-semibold mb-2">
                    Kongu Engineering College
                  </h4>
                  <p className="text-gray-300 text-sm sm:text-base mb-1">
                    B.E – Electrical and Electronics Engineering
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm mb-2">
                    Up to 5th Semester
                  </p>
                  <div className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    CGPA: 8.70
                  </div>
                </div>
                <div className="relative pl-5 sm:pl-6 border-l-2 border-blue-400">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
                  <h4 className="text-white text-lg sm:text-xl font-semibold mb-2">
                    St. Thomas Mat. Hr. Sec. School
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm mb-2">HSLC</p>
                  <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    89%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-8 sm:mb-12 animate-fadeInUp">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">Connect With Me</h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gradient-to-r bg-black text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <br />
            <div className="flex justify-center">
              <a
                href="./AaronSamuelMResume.pdf"
                download="Aaron_Samuel_Resume.pdf"
                className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center animate-fadeInUp">
          <div className="max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-white/20 shadow-2xl transition-all duration-500 hover:bg-white/15 hover:scale-[1.02]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="w-full">
                <h4 className="text-white text-lg sm:text-xl font-semibold mb-2">Location</h4>
                <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
                  160/9E/2, Kurinji Nagar 2nd Street, Polpettai West,
                  Tuticorin, India - 628002
                </p>
              </div>
            </div>
          </div>
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
          animation: fadeInUp 1s ease-out 0.5s both;
        }
      `}</style>
    </div>
  );
};
export default About;