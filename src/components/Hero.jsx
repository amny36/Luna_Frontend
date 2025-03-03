import React from "react";
const Hero = () => {
  return (
    <div className="bg-primary text-white py-20 w-full h-screen flex items-center justify-center mt-[80px]">
      <div className="text-center px-4 max-w-3xl">
     
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Master Your Study Routine with <span className="text-accent">Luna</span>
        </h1>

       
        <p className="text-lg md:text-xl text-gray-800 mb-8">
          Luna : Learning Utility For Next-Gen Acheivers
        </p>
<h5 className="text-lg md:text-xl font-semibold text-gray-300 p-2 rounded mb-6 leading-relaxed">
  Luna is your interactive study assistant, designed to help you stay focused, track progress, and achieve your goals effortlessly.
</h5>

        <div className="flex justify-center space-x-4 mb-8">
          <a
            href="#features"
            className="bg-secondary hover:bg-secondary-light text-white px-6 py-3 rounded-md text-lg shadow-lg transition duration-300 hover:shadow-xl hover:bg-accent"
          >
            Join
          </a>
          <a
            href="/signup"
            className="bg-white text-primary hover:text-secondary px-6 py-3 rounded-md text-lg shadow-lg transition duration-300 hover:bg-light"
          >
            Get Started
          </a>
        </div>

        <div className="text-gray-300 mt-12">
          <p className="text-md font-semibold">
            Freshman Project for SMU MedTech University
          </p>
          <p className="text-sm mt-2">
            Created by: <span className="font-semibold">Mariem Turki, Ahmed Ridha Hamza, Sarra Saghdene, Emna Ben Dhiab and Ameny Dhouib</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
