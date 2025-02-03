import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWebAwesome, faTimes } from "@fortawesome/free-solid-svg-icons"; // Import user icon
import CartDrawer from "./CartDrawer";
import WishlistDrawer from "./WishlistDrawer";
import PremiumSubscription from "./PremiumSubscription";
import { useCartContext } from "../context/CartContext";
import { useWishlistContext } from "../context/WishlistContext";
import NavLinks from "./NavLinks";
import CartIcon from "./CartIcon";
import MenuButton from "./MenuButton";
import WishlistIcon from "./WishlistIcon";
import { auth } from "../firebaseConfig"; // Import Firebase auth
import { onAuthStateChanged } from "firebase/auth";
import UserDropdown from "./UserDropdown";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [premiumOpen, setPremiumOpen] = useState(false);
  const [bgColor, setBgColor] = useState("bg-transparent");
  const [user, setUser] = useState(null); // State to track logged-in user

  const location = useLocation();
  const { cartItems } = useCartContext();
  const { wishlistItems } = useWishlistContext();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleCart = () => setCartOpen(!cartOpen);
  const toggleWishlist = () => setWishlistOpen(!wishlistOpen);
  const togglePremium = () => setPremiumOpen(!premiumOpen);

  useEffect(() => {
    const handleScroll = () => {
      setBgColor(
        window.scrollY > window.innerHeight - 25 ? "bg-black" : "bg-transparent"
      );
    };

    if (location.pathname === "/" || location.pathname === "/aboutus") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setBgColor("bg-black");
    }
  }, [location.pathname]);

  useEffect(() => {
    setIsOpen(false); // Close menu on route change
  }, [location.pathname]);

  useEffect(() => {
    // Firebase auth state listener
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set the user state
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = wishlistItems.length;

  return (
    <header
      className={`fixed top-0 left-0 w-full shadow-sm z-20 transition-all duration-300 ${bgColor}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-3xl text-white font-bold">sutta.com</h1>
          </div>

          <div className="hidden sm:flex items-center space-x-3.5">
            <NavLinks />
            <CartIcon totalItems={totalItems} onClick={toggleCart} />
            <WishlistIcon
              onClick={toggleWishlist}
              wishlistCount={wishlistCount}
            />
            <FontAwesomeIcon
              icon={faWebAwesome}
              className="text-yellow-500 cursor-pointer hover:text-yellow-600"
              onClick={togglePremium}
              title="Premium Membership"
            />
            <UserDropdown />
          </div>

          <div className="sm:hidden flex items-center gap-4">
            <CartIcon totalItems={totalItems} onClick={toggleCart} />
            <WishlistIcon
              onClick={toggleWishlist}
              wishlistCount={wishlistCount}
            />
            <FontAwesomeIcon
              icon={faWebAwesome}
              className="text-yellow-500 cursor-pointer"
              onClick={togglePremium}
              title="Premium Membership"
            />
            <UserDropdown />
            <MenuButton onClick={toggleMenu} />
          </div>
        </div>

        {isOpen && (
          <div className="sm:hidden py-4">
            <NavLinks isMobile={true} />
          </div>
        )}

        {/* Cart Drawer */}
        <CartDrawer isOpen={cartOpen} toggleCart={toggleCart} />
        {/* Wishlist Drawer */}
        <WishlistDrawer isOpen={wishlistOpen} toggleWishlist={toggleWishlist} />

        {/* Premium Subscription Popup */}
        {premiumOpen && (
          <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-7xl">
              <button
                onClick={togglePremium}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                aria-label="Close"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <PremiumSubscription />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
