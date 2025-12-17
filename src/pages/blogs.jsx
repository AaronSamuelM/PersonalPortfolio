import React from 'react';
import { Users, MessageCircle, Globe, Gamepad2, Sparkles, Rocket, Star,Laptop } from 'lucide-react';

const Extra = () => {
  const skills = [
    {
      icon: <Users className="w-10 h-10" />,
      title: "Leadership",
      description: "Leading teams with vision and strategic thinking",
      year: "2023 - 2027",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Team Management",
      description: "Coordinating and empowering team members",
      year: "2023 - 2027",
      color: "from-gray-700 to-gray-900"
    }
  ];

  const languages = [
    { name: "English", flag: "🇬🇧", proficiency: "Fluent" },
    { name: "Tamil", flag: "🇮🇳", proficiency: "Native" }
  ];

  const hobbies = [
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      name: "Gaming",
      description: "Exploring virtual worlds and strategic gameplay",
      gradient: "from-gray-600 to-gray-800"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      name: "Unreal Game Design",
      description: "Creating immersive game experiences",
      gradient: "from-gray-600 to-gray-800"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      name: "3D Designing",
      description: "Crafting detailed 3D models and environments",
      gradient: "from-gray-600 to-gray-800"
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      name: "Editing",
      description: "Well versed in image and video editing",
      gradient: "from-gray-600 to-gray-800"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden ">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 2.5 + 0.5 + 'px',
              height: Math.random() * 2.5 + 0.5 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.7 + 0.3,
              animation: `twinkle ${Math.random() * 3 + 2}s infinite ease-in-out`,
              animationDelay: Math.random() * 3 + 's'
            }}
          />
        ))}
      </div>
      <div className="absolute top-20 right-1/4 w-1 h-1 bg-white rounded-full animate-ping opacity-75"></div>
      <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-white rounded-full animate-ping opacity-75" style={{animationDelay: '3s'}}></div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>

      <div className="relative z-10 container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <Star className="w-8 h-8 sm:w-10 sm:h-10 text-white mr-3 animate-spin" style={{animationDuration: '8s'}} />
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white">
              Beyond the Code
            </h1>
            <Star className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-3 animate-spin" style={{animationDuration: '8s', animationDirection: 'reverse'}} />
          </div>
          <p className="text-gray-300 text-lg sm:text-xl font-light tracking-wide">
            Exploring the universe of skills and passions
          </p>
        </div>
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center justify-center mb-8">
            <Rocket className="w-6 h-6 text-white mr-2" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Soft Skills</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative bg-black/30 bg-opacity-5 backdrop-blur-xl rounded-3xl p-8 border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-500 hover:scale-105 hover:bg-opacity-10"
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 rounded-3xl blur-xl transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${skill.color} border border-white border-opacity-30 text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  
                  <div className="text-gray-400 text-sm font-semibold mb-2 tracking-wider">
                    {skill.year}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {skill.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-16 sm:mb-20 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Globe className="w-6 h-6 text-white mr-2" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Languages</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="bg-black/30 bg-opacity-5 backdrop-blur-xl rounded-2xl p-6 border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-5xl mr-4">{lang.flag}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {lang.name}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {lang.proficiency}
                      </p>
                    </div>
                  </div>
                  <MessageCircle className="w-8 h-8 text-white opacity-30" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Sparkles className="w-6 h-6 text-white mr-2" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Hobbies & Passions</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className="group relative bg-black/30 bg-opacity-5 backdrop-blur-xl rounded-3xl p-8 border border-white border-opacity-20 hover:border-opacity-50 transition-all duration-500 hover:scale-105"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500"></div>
                
                <div className="relative z-10 text-center">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${hobby.gradient} border border-white border-opacity-30 text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    {hobby.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {hobby.name}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {hobby.description}
                  </p>
                </div>
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white to-transparent opacity-10 rounded-bl-full rounded-tr-3xl"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extra;