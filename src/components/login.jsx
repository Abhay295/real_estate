import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("⚠️ All fields are required");
      return;
    }

    // Dummy login validation
    if (email === "isha@gmail.com" && password === "12345") {
      alert("✅ Login successful!");
      navigate("/");
    } else {
      setError("❌ Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-2">
          Welcome Back 👋
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Login to <span className="font-semibold text-red-600">RealEstate</span>
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          {error && (
            <p className="text-red-600 text-sm bg-red-100 p-2 rounded-md text-center">
              {error}
            </p>
          )}

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            <div className="flex justify-end mt-2">
              <a
                href="#"
                className="text-sm text-red-600 hover:underline"
              >
                Forgot Password?
              </a>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold text-lg shadow-md transition-transform transform hover:scale-105"
          >
            Login
          </button>

          {/* Sign Up Link */}
          <p className="text-sm text-center text-gray-700 mt-4">
            Don’t have an account?{" "}
            <a href="/signup" className="text-red-600 font-semibold hover:underline">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default login;
