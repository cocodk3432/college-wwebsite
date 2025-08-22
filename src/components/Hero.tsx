import React from 'react';
import { ArrowRight, Users, Award, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Shaping Tomorrow's
                <span className="text-blue-800 block">Leaders Today</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                At Oakwood Academy, we provide world-class education that nurtures creativity, 
                critical thinking, and character development in every student.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-blue-800 text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 hover:text-white transition-all duration-300">
                Schedule Tour
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-3 shadow-md flex items-center justify-center">
                  <Users className="h-8 w-8 text-blue-800" />
                </div>
                <div className="text-2xl font-bold text-gray-900">1,200+</div>
                <div className="text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-3 shadow-md flex items-center justify-center">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-gray-600">College Acceptance</div>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-3 shadow-md flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-amber-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600">Programs</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-6 rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg"
                alt="Students learning"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="absolute -top-4 -left-4 bg-green-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">A+</div>
              <div className="text-sm">Rating</div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">25</div>
              <div className="text-sm">Years</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;