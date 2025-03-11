import React from "react";
import heroImage from "../assets/hero1.jpeg"; // Adjust the path to your background image

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
          Welcome to{" "}
          <span className="bg-gradient-to-r from-pink-600 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
            ByteBazaar{" "}
          </span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-center">
          Big on{" "}
          <span className="bg-gradient-to-r from-pink-600 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
            Tech
          </span>
          , Bigger on{" "}
          <span className="bg-gradient-to-r from-pink-600 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
            Bytes!
          </span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
