import React from 'react';
import { Calendar, FileText, DollarSign, Clock } from 'lucide-react';

const Admissions = () => {
  const steps = [
    {
      step: 1,
      title: "Submit Application",
      description: "Complete our online application form with all required documents"
    },
    {
      step: 2,
      title: "Academic Review",
      description: "Our admissions team reviews transcripts and academic records"
    },
    {
      step: 3,
      title: "Interview Process",
      description: "Meet with our admissions counselors and tour the campus"
    },
    {
      step: 4,
      title: "Decision & Enrollment",
      description: "Receive admission decision and complete enrollment process"
    }
  ];

  const requirements = [
    "Completed application form",
    "Official transcripts from previous school",
    "Two letters of recommendation",
    "Personal statement or essay",
    "Standardized test scores (if applicable)",
    "Interview with admissions committee"
  ];

  return (
    <section id="admissions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Admissions</h2>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join our community of learners. Our admissions process is designed to identify 
            students who will thrive in our challenging and supportive environment.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-blue-50 p-8 rounded-xl text-center">
            <Calendar className="h-12 w-12 text-blue-800 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Application Deadline</h3>
            <p className="text-gray-600">Early Decision: December 15</p>
            <p className="text-gray-600">Regular Decision: March 1</p>
          </div>
          <div className="bg-green-50 p-8 rounded-xl text-center">
            <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Tuition & Fees</h3>
            <p className="text-gray-600">Annual Tuition: $28,500</p>
            <p className="text-gray-600">Financial Aid Available</p>
          </div>
          <div className="bg-amber-50 p-8 rounded-xl text-center">
            <Clock className="h-12 w-12 text-amber-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Decision Timeline</h3>
            <p className="text-gray-600">Early Decision: January 15</p>
            <p className="text-gray-600">Regular Decision: April 1</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Application Process</h3>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-blue-800 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Requirements</h3>
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <FileText className="h-6 w-6 text-blue-800 mr-3" />
                <h4 className="text-xl font-semibold text-gray-900">Application Checklist</h4>
              </div>
              <ul className="space-y-3">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 flex-shrink-0"></div>
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 space-y-4">
              <button className="w-full bg-blue-800 text-white py-4 rounded-lg font-semibold hover:bg-blue-900 transition-colors duration-300">
                Start Application
              </button>
              <button className="w-full border-2 border-blue-800 text-blue-800 py-4 rounded-lg font-semibold hover:bg-blue-800 hover:text-white transition-colors duration-300">
                Request Information
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;