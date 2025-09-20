import React, { useState } from "react";
import logo from "/logo.png";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = {
    Home: "home",
    About: "about",
    Properties: "listings",
    Testimonials: "testimonials",
    Contact: "contact",
  };

  const handleScroll = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isHomePage = location.pathname === "/";

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-lg">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <RouterLink to="/">
            <img src={logo} alt="Logo" className="h-10" />
          </RouterLink>
          <span className="font-bold text-2xl text-red-600 tracking-wide">
            RealEstate
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 text-gray-800 font-medium text-[16px]">
          {isHomePage &&
            Object.entries(navItems).map(([label, targetId]) => (
              <li key={label} className="relative group">
                <ScrollLink
                  to={targetId}
                  smooth={true}
                  duration={500}
                  onClick={() => handleScroll(targetId)}
                  className="cursor-pointer transition-colors duration-300 hover:text-red-600"
                >
                  {label}
                </ScrollLink>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}

          {!isHomePage && (
            <li>
              <RouterLink
                to="/"
                className="px-4 py-2 font-medium text-gray-800 transition-all duration-300 hover:text-red-600"
              >
                Back to Home
              </RouterLink>
            </li>
          )}
        </ul>

        {/* Right Section (Desktop Only) */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Phone */}
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 text-gray-800 hover:text-red-600 transition"
          >
            <i className="fas fa-phone text-red-600"></i>
            <span className="font-semibold">+91 98765 43210</span>
          </a>

          {/* Auth Buttons */}
          <div className="flex gap-3">
            <RouterLink
              to="/login"
              className="px-5 py-2 border border-red-600 text-red-600 rounded-lg font-medium hover:bg-red-600 hover:text-white transition"
            >
              Login
            </RouterLink>
            <RouterLink
              to="/signup"
              className="px-5 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition"
            >
              SignUp
            </RouterLink>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-gray-800 text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden w-full bg-white shadow-md border-t border-gray-200 animate-slideDown">
          <ul className="flex flex-col text-gray-800 font-medium text-base px-6 py-4 space-y-4">
            {isHomePage &&
              Object.entries(navItems).map(([label, targetId]) => (
                <li key={label}>
                  <ScrollLink
                    to={targetId}
                    smooth={true}
                    duration={500}
                    onClick={() => handleScroll(targetId)}
                    className="block w-full px-4 py-2 rounded-md transition-all duration-300 hover:bg-red-600 hover:text-white"
                  >
                    {label}
                  </ScrollLink>
                </li>
              ))}

            {!isHomePage && (
              <li>
                <RouterLink
                  to="/"
                  className="block px-4 py-2 transition-all duration-300 hover:text-red-600"
                >
                  Back to Home
                </RouterLink>
              </li>
            )}

            {/* Auth Buttons */}
            <li>
              <RouterLink
                to="/login"
                className="block text-center w-full px-5 py-2 border border-red-600 text-red-600 rounded-lg font-medium hover:bg-red-600 hover:text-white transition"
              >
                Login
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/signup"
                className="block text-center w-full px-5 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition"
              >
                Sign Up
              </RouterLink>
            </li>

            {/* Phone */}
            <li className="flex items-center justify-center gap-2 pt-3 border-t border-gray-200">
              <i className="fas fa-phone text-red-600"></i>
              <span className="font-semibold">+91 98765 43210</span>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
