import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setError('Please fill out all fields.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="bg-gray-100 py-20 px-6 md:px-16 mt-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Info */}
        <div className="space-y-6">
          <h4 className="text-red-600 font-semibold uppercase tracking-wide text-lg">
            Contact Us
          </h4>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            We're here to help you with all your real estate needs
          </h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Our experts are ready to answer your questions and guide you through buying, 
            selling, or investing in properties. Reach out to us today — let’s make your 
            dream home a reality.
          </p>
          <div className="space-y-2 text-gray-700">
            <p>📍 123 Real Estate Street, Mumbai, India</p>
            <p>📞 +91 98765 43210</p>
            <p>📧 support@realestate.com</p>
          </div>
        </div>

        {/* Right Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl p-8 shadow-xl space-y-5 border border-gray-200"
        >
          {error && <p className="text-red-500">{error}</p>}
          {submitted && <p className="text-green-600">Thanks for contacting us!</p>}
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Send us a message</h3>
          
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
