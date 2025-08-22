import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const News = () => {
  const news = [
    {
      title: "Oakwood Students Win National Science Competition",
      excerpt: "Our STEM team took first place at the National High School Science Bowl, demonstrating excellence in scientific knowledge and teamwork.",
      date: "March 15, 2024",
      image: "https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg",
      category: "Achievement"
    },
    {
      title: "New Arts Center Opens This Fall",
      excerpt: "The state-of-the-art performing arts center will provide students with professional-grade facilities for music, theater, and visual arts.",
      date: "March 12, 2024",
      image: "https://images.pexels.com/photos/159213/hall-congress-library-architecture-159213.jpeg",
      category: "Campus News"
    },
    {
      title: "100% College Acceptance Rate for Class of 2024",
      excerpt: "We're proud to announce that every graduate from this year's senior class has been accepted to their college of choice.",
      date: "March 8, 2024",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg",
      category: "Achievement"
    }
  ];

  const events = [
    { date: "Mar 25", title: "Spring Concert", time: "7:00 PM" },
    { date: "Apr 2", title: "Parent-Teacher Conference", time: "6:00 PM" },
    { date: "Apr 15", title: "Science Fair", time: "10:00 AM" },
    { date: "Apr 22", title: "Spring Break Begins", time: "All Day" }
  ];

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News & Events</h2>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest happenings at Oakwood Academy, from student achievements 
            to campus events and important announcements.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Recent News</h3>
            <div className="space-y-8">
              {news.map((article, index) => (
                <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-8 md:w-2/3">
                      <div className="flex items-center mb-3">
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                          {article.category}
                        </span>
                        <div className="flex items-center ml-4 text-gray-500 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {article.date}
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h4>
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
                      <button className="text-blue-800 font-semibold hover:text-blue-900 flex items-center">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Upcoming Events</h3>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div key={index} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                    <div className="text-center mr-4 flex-shrink-0">
                      <div className="bg-blue-800 text-white px-3 py-2 rounded-lg">
                        <div className="text-sm font-bold">{event.date}</div>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h5 className="font-semibold text-gray-900">{event.title}</h5>
                      <p className="text-sm text-gray-600">{event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 bg-blue-800 text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors duration-300">
                View All Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;