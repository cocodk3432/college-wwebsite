import React from 'react';
import { BookOpen, Beaker, Palette, Calculator, Globe, Music } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Liberal Arts",
      description: "Comprehensive humanities program focusing on literature, history, and critical thinking skills.",
      features: ["Advanced Placement courses", "Debate and speech programs", "Creative writing workshops"]
    },
    {
      icon: Beaker,
      title: "STEM",
      description: "Cutting-edge science, technology, engineering, and mathematics curriculum.",
      features: ["State-of-the-art laboratories", "Robotics and coding clubs", "Science fair competitions"]
    },
    {
      icon: Palette,
      title: "Fine Arts",
      description: "Creative programs in visual arts, performing arts, and digital media.",
      features: ["Professional art studios", "Theater productions", "Digital media lab"]
    },
    {
      icon: Calculator,
      title: "Business",
      description: "Entrepreneurship and business fundamentals program for future leaders.",
      features: ["Mock business competitions", "Internship opportunities", "Financial literacy courses"]
    },
    {
      icon: Globe,
      title: "International Studies",
      description: "Global perspective through language learning and cultural exchange programs.",
      features: ["Multiple language options", "Study abroad programs", "Cultural immersion activities"]
    },
    {
      icon: Music,
      title: "Music & Arts",
      description: "Comprehensive music education with performance opportunities.",
      features: ["Orchestra and band programs", "Individual lessons", "Recording studio access"]
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Programs</h2>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our diverse range of academic programs designed to challenge and inspire 
            every student to achieve their personal best.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:transform hover:scale-105">
              <div className="p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-lg mb-6 flex items-center justify-center group-hover:bg-blue-800 transition-colors duration-300">
                  <program.icon className="h-8 w-8 text-blue-800 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors duration-300">
            View All Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Programs;