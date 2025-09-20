import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Aarav Patel",
    role: "Home Buyer",
    text: "This platform made finding our dream home so easy. The listings were accurate and the agent was super helpful!",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Priya Sharma",
    role: "Investor",
    text: "Very user-friendly interface. I could easily compare properties and filter what I needed.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Rahul Mehta",
    role: "Seller",
    text: "I listed my property and found genuine buyers in just a few days. Highly recommended!",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-20 px-6" id="testimonials">
      <div className="max-w-6xl mx-auto text-center">
        <h5 className="text-lg font-semibold text-red-600 tracking-wide uppercase">
          Our Happy Clients
        </h5>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
          What People Say About Us
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-t-4 border-red-500"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-red-500 text-3xl absolute -top-5 left-5 bg-white p-2 rounded-full shadow-md" />

              {/* Profile Image */}
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-red-100 shadow"
              />

              {/* Client Info */}
              <h3 className="text-xl font-bold text-gray-800">{t.name}</h3>
              <p className="text-sm text-red-600 font-medium mb-3">{t.role}</p>

              {/* Testimonial Text */}
              <p className="text-gray-600 italic leading-relaxed">“{t.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
