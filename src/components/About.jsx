import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-pink-50 py-20 px-6 md:px-12 lg:px-24 mt-16"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://media.istockphoto.com/id/1492313721/photo/modern-luxury-villa-with-private-pool-at-night.jpg?s=612x612&w=0&k=20&c=edyOwSOmXGZvRpUmWIVDgCqbiKpKKMebllHG1LWagR4="
            alt="Luxury Villa"
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
        </div>

        {/* Right Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <p className="text-red-600 text-sm md:text-base font-semibold uppercase tracking-widest mb-3">
            Who We Are
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-snug">
            We’ve been helping clients buy and sell houses since 2015
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Our mission is to connect people with their dream homes and trusted buyers. 
            With years of expertise, we ensure every step of your real estate journey is 
            smooth, transparent, and tailored to your needs.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
