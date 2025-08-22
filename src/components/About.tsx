import React from 'react';
import { Target, Heart, Star, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, pushing students to reach their full potential."
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "We foster a caring community where every student feels valued, supported, and understood."
    },
    {
      icon: Star,
      title: "Innovation",
      description: "We embrace new technologies and teaching methods to prepare students for the future."
    },
    {
      icon: Lightbulb,
      title: "Growth",
      description: "We believe in continuous learning and development for both students and educators."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Oakwood Academy</h2>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded in 1998, Oakwood Academy has been committed to providing exceptional education 
            that prepares students for success in college, career, and life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              To provide a comprehensive, innovative education that develops critical thinking, 
              creativity, and character in our students. We create an environment where every 
              student can discover their passions and reach their highest potential.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Through rigorous academics, diverse extracurricular activities, and a supportive 
              community, we prepare our students to become confident, capable, and caring citizens 
              of the world.
            </p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg"
              alt="Students collaborating"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-blue-100 w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-blue-800 transition-colors duration-300">
                  <value.icon className="h-10 w-10 text-blue-800 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;