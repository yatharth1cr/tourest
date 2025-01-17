import React from "react";
import "./booking.css";

function Booking() {
  return (
    <div className="center-wrapper">
      <div className="form-container">
        <h1 className="form-title">Contact Us</h1>
        <p className="form-description">
          Please fill out the form below to get in touch.
        </p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Your message"
            ></textarea>
          </div>
          <button className="form-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
