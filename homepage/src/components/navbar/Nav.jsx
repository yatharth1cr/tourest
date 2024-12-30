import React, { useState } from "react";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode");
  };

  // Determine whether to show full navbar content
  const showNavbarContent = location.pathname === "/";

  return (
    <header className="header">
      <div className="container d-flex justify-content-between align-items-center">
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />

        {/* Logo */}
        <h1 className="logo">
          <Link to="/" onClick={closeMenu}>
            Tourest
          </Link>
        </h1>

        {/* Hamburger Menu (only on home page) */}
        {showNavbarContent && (
          <div className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}

        {/* Navigation (only on home page) */}
        {showNavbarContent && (
          <nav className={`navbar ${isOpen ? "open" : ""}`}>
            <ul className="navbar-list">
              <li>
                <a href="#Home" onClick={closeMenu}>
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

        {/* Booking Button (only on home page) */}
        <div className="d-flex  align-items-center justify-content-betweenx`x`">
          {showNavbarContent && (
            <Link to="/booking" className="booking-button">
              <button className="btn-primary" onClick={closeMenu}>
                Booking Now
              </button>
            </Link>
          )}

          {/* Dark Mode Toggle */}
          <button id="toggle-dark-mode" onClick={toggleDarkMode}>
            <span id="theme-icon" className="material-icons">
              {isDarkMode ? "wb_sunny" : "nights_stay"}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Nav;
