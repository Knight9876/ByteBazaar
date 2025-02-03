import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Brand Section */}
          <div>
            <h2 className="text-lg font-bold">sutta.com</h2>
            <p className="text-sm">Your one-stop shop for premium cigarettes.</p>
          </div>

          {/* Navigation Links */}
          <div>
            <nav className="flex flex-col gap-2 items-center md:flex-row md:justify-center">
              <a href="/privacy" className="text-gray-300 hover:text-white mx-2">Privacy Policy</a>
              <a href="/terms" className="text-gray-300 hover:text-white mx-2">Terms of Service</a>
              <a href="/contactus" className="text-gray-300 hover:text-white mx-2">Contact Us</a>
            </nav>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm">© {new Date().getFullYear()} sutta.com. All rights reserved.</p>
          <p className="text-sm">Contact: support@sutta.com | Phone: (123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
