import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !fullname || !password || !confirmPass) {
      setError("⚠️ All fields are required");
      return;
    }

    if (password !== confirmPass) {
      setError("❌ Passwords do not match");
      return;
    }

    alert("✅ Signup successful!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white shadow-2xl rounded-2xl p-8 transition hover:shadow-xl">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-2">
          Create Account ✨
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Sign up to <span className="font-semibold text-red-600">RealEstate</span>
        </p>

        <form onSubmit={handleSignup} className="space-y-5">
          {error && (
            <p className="text-red-600 text-sm bg-red-100 p-2 rounded-md text-center">
              {error}
            </p>
          )}

          {/* Full Name */}
          <div className="relative">
            <FaUser className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type="text"
              className="w-full pl-10 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Your full name"
              required
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type="email"
              className="w-full pl-10 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type="password"
              className="w-full pl-10 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <FaLock className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type="password"
              className="w-full pl-10 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
              placeholder="Confirm password"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white py-3 rounded-lg font-semibold text-lg shadow-md transition-transform transform hover:scale-105"
          >
            Sign Up
          </button>

          {/* Login Redirect */}
          <p className="text-sm text-center text-gray-700 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-red-600 font-semibold hover:underline">
              Log In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
