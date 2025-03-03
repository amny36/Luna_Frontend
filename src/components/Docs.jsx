import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DocumentationPage = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="w-full m-w-screen-xl mx-auto p-10 bg-primary flex flex-col items-center justify-center " id="docs">
     
      <section
        id="overview"
        ref={(el) => (sectionsRef.current[0] = el)}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">Overview</h2>
        <p className="text-gray-400">
          Luna is an Arduino ESP32-based interactive study assistant designed
          to boost productivity and track study habits.
        </p>
      </section>

    
      <section
        id="hardware-setup"
        ref={(el) => (sectionsRef.current[1] = el)}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">Hardware Setup</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li>Connect the ESP32 to your computer using a USB cable.</li>
          <li>Ensure the device is powered on with the LED indicator active.</li>
          <li>Attach sensors like ultrasonic or infrared distance sensors to enable posture tracking.</li>
        </ul>
      </section>

 
      <section
        id="software-setup"
        ref={(el) => (sectionsRef.current[2] = el)}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">Software Setup</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li>Install the Arduino IDE from the official website.</li>
          <li>
            Add the ESP32 board to your IDE under Preferences &gt; Additional
            Board URLs.
          </li>
          <li>Ensure necessary libraries for the sensors(e.g.,VL53L0X for distance tracking) are installed in the Arduino IDE. </li>
          <li>Upload the Luna firmware to the ESP32 device.</li>
        </ul>
      </section>

   
      <section
        id="connectivity"
        ref={(el) => (sectionsRef.current[3] = el)}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">Connectivity</h2>
        <p className="text-gray-400">
          Luna connects to your network using Wi-Fi. Follow these steps to
          ensure seamless connectivity:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li>Configure Wi-Fi settings in the firmware.</li>
          <li>
            Use the accompanying mobile app to verify the connection status.
          </li>
          <li>Check for signal strength and ensure a stable network.</li>
          <li>Verify connectivity using the Luna website or mobile app to check sensor data and adjust study settings </li>
        </ul>
      </section>

  
      <section
        id="troubleshooting"
        ref={(el) => (sectionsRef.current[4] = el)}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">Troubleshooting</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li>Ensure the device is powered on and properly connected.</li>
          <li>Check the serial monitor for debugging information.</li>
          <li>
            Reset the ESP32 if connectivity issues persist and re-upload the
            firmware.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default DocumentationPage;
