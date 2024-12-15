import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./blog.css";
const blogData = [
  {
    image:
      "https://codewithsadee.github.io/tourest/assets/images/popular-1.jpg",
    date: "04 Dec",
    author: "Jony Bristow",
    time: "10:30 AM",
    content:
      "A good traveler has no fixed plans and is not intent on arriving.",
    link: "#",
    image2:
      "https://codewithsadee.github.io/tourest/assets/images/author-avatar.png",
  },
  {
    image:
      "https://codewithsadee.github.io/tourest/assets/images/popular-2.jpg",
    date: "04 Dec",
    author: "Jony Bristow",
    time: "10:30 AM",
    content:
      "A good traveler has no fixed plans and is not intent on arriving.",
    link: "#",
    image2:
      "https://codewithsadee.github.io/tourest/assets/images/author-avatar.png",
  },
  {
    image:
      "https://codewithsadee.github.io/tourest/assets/images/popular-3.jpg",
    date: "04 Dec",
    author: "Jony Bristow",
    time: "10:30 AM",
    content:
      "A good traveler has no fixed plans and is not intent on arriving.",
    link: "#",
    image2:
      "https://codewithsadee.github.io/tourest/assets/images/author-avatar.png",
  },
];

function Blog() {
  return (
    <div className="container py-5">
      <p className="text-center fs-1 custom-ff2 custom-color2">
        From The Blog Post
      </p>
      <h3 className="text-center fs-1 mb-5 custom-ff">
        Latest News & Articles
      </h3>
      <div className="row g-4">
        {blogData.map((blog, index) => (
          <div className="col-md-4" key={index}>
            <div
              className="card shadow-sm border-0"
              style={{ borderRadius: "12px", overflow: "hidden" }}
            >
              <div className="position-relative">
                <img
                  src={blog.image}
                  alt="Blog Post"
                  className="w-100"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div
                  className="position-absolute top-0 start-0 bg-warning text-white px-3 py-1 fw-bold"
                  style={{ borderBottomRightRadius: "8px" }}
                >
                  <i className="fa-solid fa-clock me-1"></i> {blog.date}
                </div>
              </div>

              <div className="p-3">
                <div className="d-flex align-items-center mb-2">
                  <img
                    src={blog.image2}
                    alt="Author"
                    className="me-2"
                    style={{ width: "2rem" }}
                  />
                  <div>
                    <p className="mb-0">{blog.author}</p>
                    <p
                      className="mb-0 text-muted"
                      style={{ fontSize: "0.8rem" }}
                    >
                      {blog.time}
                    </p>
                  </div>
                </div>
                <p
                  className="mb-3 fw-bold text-secondary"
                  style={{ fontSize: "0.9rem" }}
                >
                  {blog.content}
                </p>

                <a
                  href={blog.link}
                  className="fw-bold text-decoration-none custom-color"
                >
                  Read More <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
