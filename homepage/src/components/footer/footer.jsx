import React from "react";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="custom-bg text-white py-5">
      <div className="container ">
        <div className="row">
          {/* Top Destination */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Top destination</h5>
            <ul className="list-unstyled text-secondary">
              <li>Indonesia, Jakarta</li>
              <li>Maldives, Malé</li>
              <li>Australia, Canberra</li>
              <li>Thailand, Bangkok</li>
              <li>Morocco, Rabat</li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Categories</h5>
            <ul className="list-unstyled text-secondary">
              <li>Travel</li>
              <li>Lifestyle</li>
              <li>Fashion</li>
              <li>Education</li>
              <li>Food & Drink</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Quick links</h5>
            <ul className="list-unstyled text-secondary">
              <li>About</li>
              <li>Contact</li>
              <li>Tours</li>
              <li>Booking</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Get a newsletter</h5>
            <p className="text-secondary">
              For the latest deals and tips, travel no further than your inbox.
            </p>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email address"
                aria-label="Email address"
              />
              <button
                className="btn custom-bg2 text-white fw-bold"
                type="button"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4 d-flex justify-content-between align-items-center">
          <h3 className="fw-bold">Tourest</h3>
          <p className="text-secondary mb-1">
            © 2022{" "}
            <a href="yatharth1cr" className="text-white">
              yatharth1cr
            </a>{" "}
            All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="d-flex justify-content-center">
            <a href="#facebook" className="text-white me-3 fs-5">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#twitter" className="text-white me-3 fs-5">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#instagram" className="text-white me-3 fs-5">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#linkedin" className="text-white me-3 fs-5">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#google" className="text-white fs-5">
              <i className="fab fa-google"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
