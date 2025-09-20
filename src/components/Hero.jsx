import React, { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = () => {
    if (!location || type === "Select Property" || category === "Property Category") {
      alert("❌ Please fill all fields before submitting.");
    } else {
      alert("✅ Search Submitted! You can now navigate to results or filter listings.");
    }
  };

  return (
    <div
      id="home"
      className="relative h-[690px] w-[95%] m-auto px-10 gap-7 z-20 rounded-xl bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center h-screen flex items-center"
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center px-8 lg:px-32 text-white">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Find your next Home with <br />  RealEstate
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl max-w-2xl"
        >
          Through our proprietary platform, WpResidence is changing how agents and clients navigate the process of finding or selling a home.
        </motion.p>
      </div>

      {/* Search Box */}
      <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] bg-white shadow-lg rounded-lg p-4 md:p-6 flex flex-col md:flex-row items-center gap-4 md:gap-6 z-10">
        {/* Location Input */}
        <div className="w-full md:w-1/4">
          <label className="text-[16px] font-semibold mb-1 text-black">LOCATION</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter an address, state, city or..."
            className="rounded-md px-4 py-2 p-2 w-full border-b-[1px] border-[#83817c] focus:outline-none"
          />
        </div>

        {/* Type Dropdown */}
        <div className="flex flex-col w-full md:w-1/4">
          <label className="text-[16px] font-semibold mb-1 text-black">TYPE</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border-b-[1px] border-[#c9c7c1] text-[#83817c] rounded-md px-4 py-2 focus:outline-none"
          >
            <option>Select Property</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Villa</option>
          </select>
        </div>

        {/* Category Dropdown */}
        <div className="flex flex-col w-full md:w-1/4">
          <label className="text-[16px] font-semibold mb-1 text-black">CATEGORY</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border-b-[1px] border-[#83817c] text-[#83817c] rounded-md px-4 py-2 focus:outline-none"
          >
            <option>Property Category</option>
            <option>Rent</option>
            <option>Sale</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="w-full md:w-1/4 flex justify-center md:justify-end">
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md w-full"
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
