import React from "react";

const DownloadsPage = () => {
  return (
    <div className=" bg-primary  text-gray-900 py-20 w-full" id="downloads">
    
      <div className="bg-primary text-white py-20 w-full flex items-center justify-center">
        <div className="text-center px-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Download <span className="text-accent">Luna</span> and Get Started
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Download the Luna app, firmware, and guides to begin enhancing your study sessions with our interactive assistant.
          </p>
        </div>
      </div>

     
      <div className="container mx-auto px-4 py-12 bg-gray-100   ">
        <h2 className="text-3xl font-bold text-center mb-8">
          Choose Your Download
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Luna Mobile App</h3>
            <p className="text-gray-700 mb-4">
              Download the Luna app to manage your study sessions, set timers, and track progress.
            </p>
            <a
              href="#"
              className="bg-secondary hover:bg-secondary-light text-white px-6 py-3 rounded-md text-lg shadow-lg transition duration-300 hover:shadow-xl hover:bg-accent"
            >
              Download for iOS
            </a>

          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Luna Firmware</h3>
            <p className="text-gray-700 mb-4">
              Download the latest Luna firmware for your ESP32 device to get started with hardware integration.
            </p>
            <a
              href="#"
              className="bg-secondary hover:bg-secondary-light text-white px-6 py-3 rounded-md text-lg shadow-lg transition duration-300 hover:shadow-xl hover:bg-accent"
            >
              Download Firmware
            </a>
          </div>

         
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">User Documentation</h3>
            <p className="text-gray-700 mb-4">
              Access detailed documentation to set up, use, and troubleshoot Luna effectively.
            </p>
            <a
              href="#"
              className="bg-secondary hover:bg-secondary-light text-white px-6 py-3 rounded-md text-lg shadow-lg transition duration-300 hover:shadow-xl hover:bg-accent"
            >
              Download PDF Guide
            </a>
          </div>
        </div>
      </div>

    
      <div className="bg-secondary text-white py-12">
        <div className="text-center px-4 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Need Support?</h2>
          <p className="text-lg mb-6">
            If you have any questions or encounter issues, our team is here to help. Check out the FAQs or reach out to us directly.
          </p>
          <a
            href="#contact"
            className="bg-white text-primary hover:text-secondary px-6 py-3 rounded-md text-lg shadow-lg transition duration-300 hover:bg-light"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadsPage;
