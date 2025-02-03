import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSignOutAlt,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleLogout = async () => {
    try {
      await signOut(auth); // Logs out the user
      console.log("User logged out");
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  const handleOptionClick = (path) => {
    setIsOpen(false); // Close dropdown before navigation
    navigate(path); // Redirect to the specified path
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {user ? (
        <button
          className="relative border-2 rounded-full w-8 h-8 flex text-center items-center justify-center text-white cursor-pointer hover:text-blue-500 hover:border-blue-500"
          onClick={toggleDropdown}
        >
          <FontAwesomeIcon icon={faUser} title="User Profile" />
        </button>
      ) : (
        <button
          onClick={() =>
            navigate("/login", { state: { from: location.pathname } })
          }
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>
      )}
      {isOpen && user && (
        <div className="absolute right-0 top-10 w-48 bg-white rounded-lg shadow-lg py-2">
          <button
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={() => handleOptionClick("/profile")}
          >
            <FontAwesomeIcon icon={faCog} className="mr-2" />
            Account Settings
          </button>
          <button
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={handleLogout}
          >
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
