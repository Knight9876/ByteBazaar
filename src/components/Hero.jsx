import React from "react";
import heroImage from "../assets/hero1.webp"; // Adjust the path to your background image

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          Welcome to sutta.com
        </h1>
        <p className="mt-4 text-lg md:text-xl text-center">
          Your one-stop shop for premium cigarettes.
        </p>
      </div>
    </div>
  );
};

export default Hero;
