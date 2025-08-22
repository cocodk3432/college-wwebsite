import React from 'react';
import { Mail, Award } from 'lucide-react';

const Faculty = () => {
  const faculty = [
    {
      name: "Dr. Sarah Johnson",
      position: "Head of Mathematics",
      image: "https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg",
      credentials: "Ph.D. Mathematics, MIT",
      experience: "15 years",
      specialties: ["Calculus", "Statistics", "AP Mathematics"]
    },
    {
      name: "Prof. Michael Chen",
      position: "Science Department Head",
      image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg",
      credentials: "Ph.D. Chemistry, Stanford",
      experience: "12 years",
      specialties: ["Organic Chemistry", "Research Methods", "Laboratory Sciences"]
    },
    {
      name: "Ms. Emily Rodriguez",
      position: "English Literature",
      image: "https://images.pexels.com/photos/3779432/pexels-photo-3779432.jpeg",
      credentials: "M.A. English Literature, Harvard",
      experience: "8 years",
      specialties: ["Creative Writing", "Literary Analysis", "Public Speaking"]
    },
    {
      name: "Mr. David Thompson",
      position: "History & Social Studies",
      image: "https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg",
      credentials: "M.A. History, Yale",
      experience: "10 years",
      specialties: ["World History", "Government", "Debate Coaching"]
    }
  ];

  return (
    <section id="faculty" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Faculty</h2>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our dedicated educators bring passion, expertise, and innovation to the classroom, 
            inspiring students to achieve excellence in all their endeavors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:transform hover:scale-105 overflow-hidden">
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-blue-800 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-800 font-semibold mb-3">{member.position}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Award className="h-4 w-4 mr-2 text-green-600" />
                    {member.credentials}
                  </div>
                  <p className="text-sm text-gray-600">Experience: {member.experience}</p>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-800 mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-1">
                    {member.specialties.map((specialty, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300 flex items-center justify-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;