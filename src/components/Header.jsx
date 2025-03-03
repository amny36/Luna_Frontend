import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
       
          <div>
            <h4 className="text-2xl font-semibold mb-4">Luna</h4>
            <p className="text-gray-300 mb-4">
              Luna is your interactive study assistant designed to help you stay focused, track progress, and achieve your goals effortlessly. Stay productive and take control of your study routine with Luna.
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-gray-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#docs" className="hover:text-gray-300">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#downloads" className="hover:text-gray-300">
                  Downloads
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-semibold mb-4">Contact</h4>
            <p className="text-gray-300 mb-4">
              Have questions or need assistance? Reach out to us, and we'll be happy to help you get started with Luna.
            </p>
            <a
              href="#contact"
              className="text-white hover:text-accent transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} Luna. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
