import React from "react";
import "./about.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about-us py-5">
      <div className="container">
        <div className="row gy-4 align-items-center">
          {/* Text Section */}
          <div className="col-lg-6">
            <p className="text-warning custom-ff2 fs-1">About Us</p>
            <h2 className="mb-4 custom-ff fs-1">
              Explore all tour of the world with us.
            </h2>
            <p className="dark-white text-muted mb-4">
              Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words.
            </p>

            {/* Feature Items */}
            {[
              { icon: "fa-compass", title: "Tour guide" },
              { icon: "fa-briefcase", title: "Friendly price" },
              { icon: "fa-umbrella", title: "Reliable tour" },
            ].map((feature, index) => (
              <div className="feature-item mb-3" key={index}>
                <h5 className="fw-bold">
                  <span className="custom-bgs p-3 me-2">
                    <i className={`fa-solid ${feature.icon}`}></i>
                  </span>
                  {feature.title}
                </h5>
                <p className="dark-white text-muted mb-0">
                  Lorem Ipsum available, but the majority have suffered
                  alteration.
                </p>
              </div>
            ))}

            <Link to="/booking" className="btn btn-one">
              Booking Now
            </Link>
          </div>

          {/* Images Section */}
          <div className="col-lg-6">
            <div className="position-relative">
              <img
                src="../../assets/about-banner.png"
                className="w-100"
                alt="Traveler 1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
