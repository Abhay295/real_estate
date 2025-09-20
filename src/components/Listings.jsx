import React from "react";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const properties = [
  {
    id: 1,
    title: "Luxury Villa in Goa",
    price: "₹75,00,000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    beds: 4,
    baths: 3,
    size: "2500 sqft",
  },
  {
    id: 2,
    title: "Modern Apartment in Delhi",
    price: "₹50,00,000",
    image:
      "https://media.istockphoto.com/id/454347445/photo/modern-villa-with-pool.jpg?s=612x612&w=0&k=20&c=lJB1IfaXttlWNUDRVvLA-VkhRpnGWaydq9UjC7qn35g=",
    beds: 3,
    baths: 2,
    size: "1600 sqft",
  },
  {
    id: 3,
    title: "Hilltop Cottage in Manali",
    price: "₹35,00,000",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    beds: 2,
    baths: 2,
    size: "1200 sqft",
  },
  {
    id: 4,
    title: "Modern Family Home",
    price: "₹4,50,000",
    image:
      "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8fDA%3D",
    beds: 3,
    baths: 2,
    size: "1500 sqft",
  },
  {
    id: 5,
    title: "Luxury Villa",
    price: "₹35,00,000",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    beds: 5,
    baths: 4,
    size: "3500 sqft",
  },
  {
    id: 6,
    title: "City Apartment",
    price: "₹3,00,000",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    beds: 2,
    baths: 2,
    size: "900 sqft",
  },
];

const Listings = () => {
  return (
    <section id="featured" className="py-12 px-6 mt-16 bg-gray-100">
      <h5 className="text-[25px] font-bold text-center mb-4 text-red-600">
        Properties
      </h5>
      <h2 className="text-4xl font-bold text-center mb-12">
        Explore the latest properties available
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {properties.map((property, index) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <Link
              to={`/property/${property.id}`}
              className="block bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105 duration-300 hover:shadow-xl"
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-60 object-cover transform hover:scale-110 transition duration-500"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">
                  {property.title}
                </h3>
                <p className="text-red-600 font-bold text-lg">
                  {property.price}
                </p>
                <div className="flex justify-between text-sm text-gray-600 mt-4">
                  <div className="flex items-center gap-1 text-[17px]">
                    <FaBed /> {property.beds} Beds
                  </div>
                  <div className="flex items-center gap-1 text-[17px]">
                    <FaBath /> {property.baths} Baths
                  </div>
                  <div className="flex items-center gap-1 text-[17px]">
                    <FaRulerCombined /> {property.size}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Listings;
