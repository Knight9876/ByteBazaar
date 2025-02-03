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
          isActive("/") ? "text-blue-500 font-bold" : "text-white"
        } hover:text-blue-500`}
        onClick={onClick}
      >
        Home
      </Link>
      <br />
      <Link
        to="/products"
        className={`block ${
          isActive("/products") ? "text-blue-500 font-bold" : "text-white"
        } hover:text-blue-500`}
        onClick={onClick}
      >
        Products
      </Link>
      <br />
      <Link
        to="/aboutus"
        className={`block ${
          isActive("/aboutus") ? "text-blue-500 font-bold" : "text-white"
        } hover:text-blue-500`}
        onClick={onClick}
      >
        About
      </Link>
      <br />
      <Link
        to="/contactus"
        className={`block ${
          isActive("/contactus") ? "text-blue-500 font-bold" : "text-white"
        } hover:text-blue-500`}
        onClick={onClick}
      >
        Contact
      </Link>
      <br />
    </>
  );
};

export default NavLinks;
