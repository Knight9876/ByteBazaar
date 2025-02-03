// src/App.js
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import { CartProvider } from "./context/CartContext"; // Import CartProvider
import { WishlistProvider } from "./context/WishlistContext"; // Import WishlistProvider
import ScrollToTop from "./components/ScrollToTop";
import FAQButton from "./components/FAQButton";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import FAQs from "./pages/FAQs";
import SignUpLogIn from "./pages/SignUpLogIn";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Checkout from "./pages/Checkout";
import PaymentOptions from "./pages/PaymentOptions";
import Profile from "./pages/Profile";

import "./App.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen scrollbar">
      <main className="flex-grow">
        <div className="app">
          <WishlistProvider>
            {/* Wrap with WishlistProvider */}
            <CartProvider>
              {/* Wrap with CartProvider */}
              <ScrollToTop />
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route
                  path="/products/:productName"
                  element={<ProductDetail />}
                />
                <Route path="/FAQs" element={<FAQs />} />
                <Route path="/login" element={<SignUpLogIn />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/payment-options" element={<PaymentOptions />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </CartProvider>
          </WishlistProvider>
        </div>
      </main>
      <FAQButton />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
