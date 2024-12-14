import React from "react";
import "./featured.css"; // Add necessary styling
import "bootstrap/dist/css/bootstrap.min.css";

const tours = [
  {
    id: 1,
    image:
      "https://codewithsadee.github.io/tourest/assets/images/popular-1.jpg", // Replace with real image
    days: "12 Days",
    price: "$50.00",
    rating: "★★★★☆",
    reviews: 2,
    description:
      "A good traveler has no fixed plans and is not intent on arriving.",
    location: "Kuala Lumpur, Malaysia",
  },
  {
    id: 2,
    image:
      "https://codewithsadee.github.io/tourest/assets/images/popular-2.jpg",
    days: "12 Days",
    price: "$50.00",
    rating: "★★★★☆",
    reviews: 2,
    description:
      "A good traveler has no fixed plans and is not intent on arriving.",
    location: "Kuala Lumpur, Malaysia",
  },
  {
    id: 3,
    image:
      "https://codewithsadee.github.io/tourest/assets/images/popular-3.jpg",
    days: "12 Days",
    price: "$50.00",
    rating: "★★★★☆",
    reviews: 2,
    description:
      "A good traveler has no fixed plans and is not intent on arriving.",
    location: "Kuala Lumpur, Malaysia",
  },
];

function Featured() {
  return (
    <section className="featured-tours py-5">
      <div className="container text-center">
        <p className="text-warning custom-ff2 fs-1">Featured Tours</p>
        <h2 className="mb-4 custom-ff">Most Popular Tours</h2>
        <div className="row gy-4">
          {tours.map((tour) => (
            <div key={tour.id} className="col-md-4">
              <div className="card border-0 shadow-sm rounded">
                <img
                  src={tour.image}
                  alt="Tour"
                  className="card-img-top rounded-top"
                />
                <div className="card-body text-start">
                  <span className="badge bg-warning text-dark ml-2 p-2 fw-semibold">
                    ⏱{tour.days}
                  </span>
                  <span className="badge custom-bg m-2 p-2 fw-semibold">
                    From {tour.price}
                  </span>
                  <div>
                    <span className="text-warning">{tour.rating}</span>
                    <small className="text-muted"> ({tour.reviews})</small>
                  </div>
                  <p className="card-text fw-bold">{tour.description}</p>
                  <p className="text-muted small mb-2 ">{tour.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Featured;
