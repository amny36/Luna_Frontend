import React from "react";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary text-white">

      <h1 className="text-6xl md:text-8xl font-bold mb-6 text-accent">
        404
      </h1>

    
      <p className="text-lg md:text-2xl text-gray-300 mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>

      
      <div className="space-x-4">
        <Link
          to="/"
          className="bg-secondary hover:bg-secondary-light text-white px-6 py-3 rounded-md text-lg shadow-lg transition duration-300"
        >
          Go Home
        </Link>
        <Link
          to="/contact"
          className="bg-light hover:bg-accent text-primary hover:text-white px-6 py-3 rounded-md text-lg shadow-lg transition duration-300"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default NoPage;
