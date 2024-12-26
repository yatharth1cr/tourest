import React, { useState } from "react";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current location

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <h1 className="logo">
          <a href="/" onClick={closeMenu}>
            Tourest
          </a>
        </h1>

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation */}
        {location.pathname !== "/booking" && (
          <nav className={`navbar ${isOpen ? "open" : ""}`}>
            <ul className="navbar-list">
              <li>
                <a href="/" onClick={closeMenu}>
                  Home
                </a>
              </li>
              <li>
                <a href="#Destinations" onClick={closeMenu}>
                  Destinations
                </a>
              </li>
              <li>
                <a href="#Tours" onClick={closeMenu}>
                  Tours
                </a>
              </li>
              <li>
                <a href="#AboutUs" onClick={closeMenu}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#Blog" onClick={closeMenu}>
                  Blog
                </a>
              </li>
              <li>
                <a href="#ContactUs" onClick={closeMenu}>
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        )}

        {/* Booking Button */}
        {location.pathname !== "/booking" && (
          <Link to="/booking" className="booking-button">
            <button className="btn-primary" onClick={closeMenu}>
              Booking Now
            </button>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Nav;
