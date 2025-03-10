import React, { useState } from "react";

const ContactUs = () => {
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
    // Handle form submission logic (e.g., send data to an API)
    
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-xl mx-auto p-10 mt-24 bg-gradient-to-br from-cyan-400 via-violet-500 to-pink-600 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center text-white">
        Get in Touch
      </h2>
      <p className="text-lg text-white mb-8 text-center">
        We'd love to hear from you! Please fill out the form below.
      </p>
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-br from-cyan-500 via-violet-600 to-pink-700 text-white py-3 rounded-lg shadow-lg hover:from-cyan-600 hover:via-violet-700 hover:to-pink-800 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
