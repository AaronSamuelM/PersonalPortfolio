import React from 'react';
import { Award, Trophy, Code, Users, BookOpen, Star } from 'lucide-react';

const Teams = () => {
  const achievements = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "NPTEL - Privacy and Security in Online Social Media",
      description: "Successfully completed with 80% score",
      category: "Online Course",
      color: "from-emerald-400 to-teal-500"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "NPTEL - Machine Learning and Deep Learning",
      description: "Fundamentals and Applications - 65%",
      category: "Online Course",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Maximum Marks in Coding Contest",
      description: "Institutional level coding contest for SuperPacc selection",
      category: "Competition",
      color: "from-lime-400 to-green-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "SIH'24 Recognition",
      description: "Led team to pre-finals, recognized by the college",
      category: "Hackathon",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Second Prize - Project Prism",
      description: "Government College of Technology, Coimbatore",
      category: "Project Competition",
      color: "from-amber-400 to-orange-500"
    }
  ];

  return (
    <div className="min-h-auto relative overflow-hidden ">

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex transition duration-300 hover:scale-110 hover:bg-black/50 rounded-3xl px-2 py-2 items-center justify-center mb-4">
            <Star className="w-8 h-8 sm:w-10 sm:h-10 text-amber-500 mr-2" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Achievements
            </h1>
            <Star className="w-8 h-8 sm:w-10 sm:h-10 text-amber-500 ml-2" />
          </div>
          <p className="text-green-700 text-lg transition duration-300 hover:scale-110 hover:bg-black/50 rounded-3xl px-2 py-2 sm:text-xl mt-4 font-medium">
            A journey of growth and excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative bg-white/30 bg-opacity-40 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white border-opacity-50"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${achievement.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {achievement.icon}
              </div>

              <div className="inline-block px-3 py-1 bg-green-100 bg-opacity-60 backdrop-blur-sm text-green-700 text-xs font-semibold rounded-full mb-3">
                {achievement.category}
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">
                {achievement.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {achievement.description}
              </p>

              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${achievement.color} opacity-10 rounded-bl-full rounded-tr-2xl`}></div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default Teams;