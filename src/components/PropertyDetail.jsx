import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const properties = [
  {
    id: 1,
    title: "Luxury Villa in Goa",
    price: "₹75,00,000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    beds: 4,
    baths: 3,
    size: "2500 sqft",
    description:
      "Beautiful villa in Goa with private pool and sea view. Perfect for family vacations and luxury living.",
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
  description:
    "Spacious apartment located in central Delhi. Close to markets, metro stations, and city hotspots.",
},
{
  id: 3,
  title: "Hilltop Cottage in Manali",
  price: "₹35,00,000",
  image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
  beds: 2,
  baths: 2,
  size: "1200 sqft",
  description:
    "Cozy hilltop cottage in Manali surrounded by lush greenery and scenic mountain views. Ideal for vacation homes or peaceful retirement living.",
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
  description:
    "Stylish family home with spacious interiors, a modern kitchen, and a private backyard. Perfect for families seeking comfort and convenience.",
},
{
  id: 5,
  title: "Luxury Villa",
  price: "₹35,00,000",
  image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  beds: 5,
  baths: 4,
  size: "3500 sqft",
  description:
    "Elegant luxury villa featuring premium interiors, landscaped gardens, and a swimming pool. Designed for high-end living with ample space for family and guests.",
},
{
  id: 6,
  title: "City Apartment",
  price: "₹3,00,000",
  image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
  beds: 2,
  baths: 2,
  size: "900 sqft",
  description:
    "Compact city apartment with modern amenities and excellent connectivity. An affordable choice for young professionals or small families.",
},

];

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find((p) => p.id === parseInt(id));

  const [showPopup, setShowPopup] = useState(false);
  const [option, setOption] = useState("");
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState("");

  if (!property) {
    return <h2 className="text-center mt-10">Property not found</h2>;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = () => {
    if (!formData.name || !formData.email) {
      setMessage("❌ Please fill all required fields.");
      return;
    }

    if (option === "buy" && !formData.amount) {
      setMessage("❌ Please enter advance amount.");
      return;
    }

    if (option === "rent" && (!formData.duration || !formData.rent)) {
      setMessage("❌ Please enter duration and rent.");
      return;
    }

    if (option === "buy") {
      setMessage(
        `✅ Purchase successful for ${property.price}! We will contact you with documents.`
      );
    } else {
      setMessage(`✅ Rental Request confirmed! We will contact you soon.`);
    }
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Property Card */}
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Image */}
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-[450px] object-cover"
        />

        {/* Details */}
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-800">
            {property.title}
          </h1>
          <p className="text-green-700 font-extrabold text-2xl mt-3">
            {property.price}
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            {property.description}
          </p>

          {/* Property Info */}
          <div className="flex gap-6 mt-6 text-gray-700 font-medium">
            <span>🛏 {property.beds} Beds</span>
            <span>🛁 {property.baths} Baths</span>
            <span>📐 {property.size}</span>
          </div>

          {/* Actions */}
          <div className="mt-8 flex gap-6">
            <button
              onClick={() => {
                setOption("buy");
                setShowPopup(true);
                setMessage("");
              }}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md font-semibold transition"
            >
              Buy
            </button>
            <button
              onClick={() => {
                setOption("rent");
                setShowPopup(true);
                setMessage("");
              }}
              className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-md font-semibold transition"
            >
              Rent
            </button>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-[520px] relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-2xl"
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
              {option === "buy" ? "Buy Property" : "Rent Property"}
            </h2>

            {/* Form */}
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {/* Personal Info */}
              <h3 className="text-lg font-semibold text-gray-700">
                Personal Info
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name || ""}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email || ""}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Buy Fields */}
              {option === "buy" && (
                <>
                  <h3 className="text-lg font-semibold text-gray-700">
                    Purchase Details
                  </h3>

                  <input
                    type="text"
                    name="price"
                    value={property.price}
                    readOnly
                    className="w-full p-3 border-2 border-green-600 rounded-lg bg-green-50 text-green-700 font-bold cursor-not-allowed"
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone || ""}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="number"
                      name="amount"
                      placeholder="Advance Amount (₹)"
                      value={formData.amount || ""}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="number"
                      name="budget"
                      placeholder="Total Budget (₹)"
                      value={formData.budget || ""}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                    <select
                      name="finance"
                      value={formData.finance || ""}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Financing Option</option>
                      <option value="Loan">Loan</option>
                      <option value="Cash">Cash</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <select
                      name="purpose"
                      value={formData.purpose || ""}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Purpose</option>
                      <option value="Investment">Investment</option>
                      <option value="Self-use">Self-use</option>
                      <option value="Business">Business</option>
                    </select>

                    <select
                      name="possession"
                      value={formData.possession || ""}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Possession</option>
                      <option value="Immediate">Immediate</option>
                      <option value="6 months">Within 6 months</option>
                      <option value="1 year">Within 1 year</option>
                    </select>
                  </div>
                </>
              )}

              {/* Rent Fields */}
              {option === "rent" && (
                <>
                  <h3 className="text-lg font-semibold text-gray-700">
                    Rental Details
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone || ""}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                    <input
                      type="text"
                      name="occupation"
                      placeholder="Occupation"
                      value={formData.occupation || ""}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="number"
                      name="tenants"
                      placeholder="No. of Tenants"
                      value={formData.tenants || ""}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                    <select
                      name="furnishing"
                      value={formData.furnishing || ""}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Furnishing</option>
                      <option value="Furnished">Furnished</option>
                      <option value="Semi-Furnished">Semi-Furnished</option>
                      <option value="Unfurnished">Unfurnished</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <select
                      name="parking"
                      value={formData.parking || ""}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Parking</option>
                      <option value="Car">Car</option>
                      <option value="Bike">Bike</option>
                      <option value="None">None</option>
                    </select>
                    <input
                      type="number"
                      name="duration"
                      placeholder="Duration (Months)"
                      value={formData.duration || ""}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  <input
                    type="number"
                    name="rent"
                    placeholder="Expected Rent (₹)"
                    value={formData.rent || ""}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                  />
                </>
              )}

              {/* Confirm Button */}
              <button
                type="button"
                onClick={handleBooking}
                className="w-full bg-red-600 text-white py-3 rounded-xl hover:bg-red-700 transition text-lg font-semibold shadow-md"
              >
                Confirm
              </button>
            </form>

            {/* Message */}
            {message && (
              <div className="mt-6 text-center">
                <p className="font-medium text-lg text-gray-700">{message}</p>
                <button
                  onClick={() => navigate("/")}
                  className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
                >
                  Go Home
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Back Button */}
      <Link
        to="/"
        className="inline-block mt-6 bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
      >
        ← Back to Properties
      </Link>
    </div>
  );
};

export default PropertyDetail;
