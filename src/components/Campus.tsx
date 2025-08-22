import React from 'react';
import { MapPin, Wifi, Car, Utensils } from 'lucide-react';

const Campus = () => {
  const facilities = [
    {
      icon: Wifi,
      title: "Technology Center",
      description: "Modern computer labs and high-speed internet throughout campus"
    },
    {
      icon: Car,
      title: "Transportation",
      description: "Safe and reliable bus service covering the entire metropolitan area"
    },
    {
      icon: Utensils,
      title: "Dining Services",
      description: "Nutritious meals prepared fresh daily in our modern cafeteria"
    },
    {
      icon: MapPin,
      title: "Sports Complex",
      description: "State-of-the-art gymnasium, track, and athletic facilities"
    }
  ];

  const images = [
    "https://images.pexels.com/photos/159213/hall-congress-library-architecture-159213.jpeg",
    "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg",
    "https://images.pexels.com/photos/5212419/pexels-photo-5212419.jpeg",
    "https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg"
  ];

  return (
    <section id="campus" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Beautiful Campus</h2>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our 50-acre campus featuring modern facilities, green spaces, 
            and state-of-the-art learning environments designed to inspire and educate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Campus Facilities</h3>
            <div className="space-y-6">
              {facilities.map((facility, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <facility.icon className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{facility.title}</h4>
                    <p className="text-gray-600">{facility.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={image}
                  alt={`Campus view ${index + 1}`}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Schedule a Campus Tour</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Experience our campus firsthand and see why Oakwood Academy is the perfect place 
            for your child's educational journey. Tours available Monday through Friday.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Book a Tour
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors duration-300">
              Virtual Tour
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campus;