import React from 'react';
import { FaMapMarkerAlt, FaHome, FaPhone } from 'react-icons/fa';

const steps = [
  {
    id: 1,
    icon: <FaMapMarkerAlt size={28} className="text-white" />,
    title: 'Find Location',
    description: 'Browse properties based on the city, area, or neighborhood you want.',
  },
  {
    id: 2,
    icon: <FaHome size={28} className="text-white" />,
    title: 'View Listings',
    description: 'Get detailed information and high-quality images for each listing.',
  },
  {
    id: 3,
    icon: <FaPhone size={28} className="text-white" />,
    title: 'Contact Agent',
    description: 'Easily reach out to verified agents for more details or to schedule a visit.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-6 bg-amber-50 mb-16 mt-16" id="howitworks">
      <div className="max-w-6xl mx-auto text-center">
        <h5 className="text-red-600 font-semibold uppercase tracking-wide">
          How It Works
        </h5>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-16">
          Get Started in 3 Easy Steps
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            >
              {/* Step Number Badge */}
              <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-sm font-bold w-10 h-10 flex items-center justify-center rounded-full shadow-md">
                {step.id}
              </span>

              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-red-700 shadow-md">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
