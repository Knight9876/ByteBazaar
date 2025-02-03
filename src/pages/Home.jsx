import React from "react";
import Hero from "../components/Hero"; // Adjust the import path as needed
import About from "../components/About"; // Adjust the import path as needed
import Testimonials from "../components/Testimonials";
import FeaturedProducts from "../components/FeaturedProducts";
import PremiumSubscription from "../components/PremiumSubscription";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <About />
      <Testimonials />
      <PremiumSubscription />
    </div>
  );
};

export default Home;
