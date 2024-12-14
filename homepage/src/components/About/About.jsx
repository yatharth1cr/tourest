import React from "react";
import "./about.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function About() {
  return (
    <section className="about-us py-5">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="row gy-4">
          {/* Text Section */}
          <div className="col-lg-6">
            <p className="text-warning custom-ff2 fs-1">About Us</p>
            <h2 className=" mb-4 custom-ff fs-1">
              Explore all tour of the world with us.
            </h2>
            <p className="text-muted mb-4">
              Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words.
            </p>
            <div className="feature-item mb-3">
              <h5 className="fw-bold">
                <span className=" custom-bg p-3 me-2">
                  <i class="fa-solid fa-compass"></i>
                </span>
                Tour guide
              </h5>
              <p className="text-muted mb-0">
                Lorem Ipsum available, but the majority have suffered
                alteration.
              </p>
            </div>
            <div className="feature-item mb-3">
              <h5 className="fw-bold">
                <span className=" custom-bg p-3 me-2">
                  <i class="fa-solid fa-briefcase"></i>
                </span>
                Friendly price
              </h5>
              <p className="text-muted mb-0">
                Lorem Ipsum available, but the majority have suffered
                alteration.
              </p>
            </div>
            <div className="feature-item mb-3">
              <h5 className="fw-bold">
                <span className=" custom-bg p-3 me-2">
                  <i class="fa-solid fa-umbrella"></i>
                </span>
                Reliable tour
              </h5>
              <p className="text-muted mb-0">
                Lorem Ipsum available, but the majority have suffered
                alteration.
              </p>
            </div>
            <a href="#" class="btn btn-one">
              Booking Now
            </a>
          </div>

          {/* Images Section */}
          <div className="col-lg-6">
            <div className="position-relative d-flex justify-content-center">
              <img
                src="	https://codewithsadee.github.io/tourest/assets/images/about-banner.png"
                className="top-0 w-100"
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
