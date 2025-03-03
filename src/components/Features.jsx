import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const featureRef = useRef(null);

  useEffect(() => {
    const elements = featureRef.current.querySelectorAll(".feature-item");

    elements.forEach((element, index) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%", // Starts animation when element is in view
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-gray-900 text-white py-20 px-4" id="features">
      <div className="container mx-auto text-center">
      
        <h2 className="text-4xl font-bold mb-8">Why Choose Luna?</h2>
        <p className="text-gray-400 mb-12">
          Luna is packed with powerful features to make your study sessions productive and enjoyable.
        </p>

        
        <div
          ref={featureRef}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
        
          <div className="feature-item bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Focus Timer</h3>
            <p className="text-gray-400">
              Stay focused and productive with our customizable Pomodoro timer.
            </p>
          </div>

         
          <div className="feature-item bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Progress Reports</h3>
            <p className="text-gray-400">
              Track your study sessions and analyze your performance with ease.
            </p>
          </div>

         
          <div className="feature-item bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Motion Detection</h3>
            <p className="text-gray-400">
              Ensure consistent focus with motion detection alerts.
            </p>
          </div>

        
          <div className="feature-item bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Task Management</h3>
            <p className="text-gray-400">
              Organize your tasks and prioritize effectively with our planner.
            </p>
          </div>

       
          <div className="feature-item bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Cross-Platform</h3>
            <p className="text-gray-400">
              Use Luna on any device with seamless integration across platforms.
            </p>
          </div>

     
          <div className="feature-item bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Interactive Insights</h3>
            <p className="text-gray-400">
              Get actionable insights to improve your study habits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
