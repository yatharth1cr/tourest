import React, { useState } from "react";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

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
        <h1 className="logo ">
          <a href="/">Tourest</a>
        </h1>

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation */}
        <nav className={`navbar ${isOpen ? "open" : ""}`}>
          <ul className="navbar-list">
            <li>
              <a href="/" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#AboutUs" onClick={closeMenu}>
                About Us
              </a>
            </li>
            <li>
              <a href="#Tours" onClick={closeMenu}>
                Tours
              </a>
            </li>
            <li>
              <a href="#Destinations" onClick={closeMenu}>
                Destinations
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

          {/* Booking Button */}
          <button className="btn-primary" onClick={closeMenu}>
            <Link to="/booking" className="booking-button">
              Booking Now
            </Link>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
