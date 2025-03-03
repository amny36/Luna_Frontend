import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="bg-primary text-gray-900 py-20" id="contact">
    
      <div className="bg-primary text-white py-20 w-full flex items-center justify-center">
        <div className="text-center px-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Get in Touch with <span className="text-accent">Luna</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            We’re here to assist you. Reach out for any questions, feedback, or support.
          </p>
        </div>
      </div>

  
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-accent">Contact Us</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border bg-white  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full bg-white  px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-secondary hover:bg-secondary-light text-white px-6 py-3 rounded-md text-lg shadow-lg transition duration-300 hover:shadow-xl hover:bg-accent"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>


      <div className="bg-light py-12">
        <div className="text-center px-4 max-w-3xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6">Other Ways to Reach Us</h3>
          <p className="text-lg mb-6">
            You can also reach us by email or through our customer support system for more urgent inquiries.
          </p>
          <p className="text-lg text-gray-700">
            <strong>Email:</strong> support@ameny.online
          </p>
          <p className="text-lg text-gray-700 mt-2">
            <strong>Phone:</strong> +216 28 613 001
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
