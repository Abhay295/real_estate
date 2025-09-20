import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#16202c] text-white px-6 py-12 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Us */}
        <div>
          <h3 className="text-2xl font-bold mb-4">About Us</h3>
          <p className="text-gray-300 text-sm mb-4">
            We are dedicated to connecting people with their dream properties. With years of experience, we help you buy, sell, or rent in the most efficient and trustworthy way.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-red-700 text-xl"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-red-700 text-xl"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-red-700 text-xl"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-red-700 text-xl"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><i className="fas fa-building mr-2 text-red-700"></i> 10845 Griffith Peak Dr, Las Vegas</li>
            <li><i className="fas fa-phone-alt mr-2 text-red-700"></i> +91 879 098 8901</li>
            <li><i className="fas fa-phone mr-2 text-red-700"></i> +91 123 678 0912</li>
            <li><i className="fas fa-envelope mr-2 text-red-700"></i> office23@gmail.com</li>
          </ul>
        </div>

        {/* Latest Properties */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Latest Properties</h3>
          <div className="flex items-center mb-4">
            <img
              src="https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=600&auto=format&fit=crop&q=60"
              alt="Property"
              className="w-16 h-16 object-cover rounded mr-4"
            />
            <div>
              <p className="text-sm font-medium text-white">Villa with amazing view</p>
              <p className="text-xs text-gray-400">$278.98</p>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="https://media.istockphoto.com/id/1321598038/photo/modern-luxury-holiday-villa-at-seaside.webp?a=1&b=1&s=612x612&w=0&k=20&c=RgS2vqPDCwD9nKUdG-JyncwRVuKkAwfIhuZmMLqCbFI="
              alt="Property"
              className="w-16 h-16 object-cover rounded mr-4"
            />
            <div>
              <p className="text-sm font-medium text-white">Sea View Villa</p>
              <p className="text-xs text-gray-400">$789.23</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center mt-10 text-sm text-gray-400">
        © {new Date().getFullYear()} Real Estate. All rights reserved.
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-6 bg-red-600 z-50 text-white p-3 rounded-full h-12 w-12 shadow-lg hover:bg-red-700 transition"
        aria-label="Scroll to top"
      >
      <i class="fa-solid fa-arrow-up"></i>
      </button>
    </footer>
  );
};

export default Footer;
