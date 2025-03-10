import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLinks = ({ onClick }) => {
  const location = useLocation();

  // Check if the current path matches the link's path
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <Link
        to="/"
        className={`block ${
          isActive("/") ? "bg-gradient-to-r from-pink-600 via-violet-500 to-cyan-400 bg-clip-text text-transparent font-black" : "text-white"
        } hover:bg-gradient-to-r hover:from-pink-400 hover:via-violet-300 hover:to-cyan-200 hover:bg-clip-text hover:text-transparent hover:font-black`}
        onClick={onClick}
      >
        Home
      </Link>
      <br />
      <Link
        to="/products"
        className={`block ${
          isActive("/products") ? "bg-gradient-to-r from-pink-600 via-violet-500 to-cyan-400 bg-clip-text text-transparent font-black" : "text-white"
        } hover:bg-gradient-to-r hover:from-pink-400 hover:via-violet-300 hover:to-cyan-200 hover:bg-clip-text hover:text-transparent hover:font-black`}
        onClick={onClick}
      >
        Products
      </Link>
      <br />
      <Link
        to="/aboutus"
        className={`block ${
          isActive("/aboutus") ? "bg-gradient-to-r from-pink-600 via-violet-500 to-cyan-400 bg-clip-text text-transparent font-black" : "text-white"
        } hover:bg-gradient-to-r hover:from-pink-400 hover:via-violet-300 hover:to-cyan-200 hover:bg-clip-text hover:text-transparent hover:font-black`}
        onClick={onClick}
      >
        About
      </Link>
      <br />
      <Link
        to="/contactus"
        className={`block ${
          isActive("/contactus") ? "bg-gradient-to-r from-pink-600 via-violet-500 to-cyan-400 bg-clip-text text-transparent font-black" : "text-white"
        } hover:bg-gradient-to-r hover:from-pink-400 hover:via-violet-300 hover:to-cyan-200 hover:bg-clip-text hover:text-transparent hover:font-black`}
        onClick={onClick}
      >
        Contact
      </Link>
      <br />
    </>
  );
};

export default NavLinks;
