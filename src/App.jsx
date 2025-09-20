import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Listings from './components/Listings';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Login from './components/login';
import Signup from './components/Signup';
import PropertyDetail from './components/PropertyDetail'; 
import { Element } from 'react-scroll';

// ✅ Home Page (with scrolling sections)
const HomePage = () => (
  <>
    <Navbar />
    <Element name="home">
      <Hero />
    </Element>
    <Element name="about">
      <About />
    </Element>
    <Element name="listings">
      <Listings />
    </Element>
    <Element name="howitworks">
      <HowItWorks />
    </Element>
    <Element name="testimonials">
      <Testimonials />
    </Element>
    <Element name="contact">
      <Contact />
    </Element>
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Separate Pages */}
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <Login />
              <Footer />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Navbar />
              <Signup />
              <Footer />
            </>
          }
        />

        {/* ✅ Property Details Page */}
        <Route
          path="/property/:id"
          element={
            <>
              <Navbar />
              <PropertyDetail />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
