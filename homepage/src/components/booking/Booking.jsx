import React from "react";
import "./booking.css";

function Booking() {
  return (
    <div class="center-wrapper">
      <div class="form-container">
        <h1 class="form-title">Contact Us</h1>
        <p class="form-description">
          Please fill out the form below to get in touch.
        </p>
        <form>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Your name" />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Your email" />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Your message"
            ></textarea>
          </div>
          <button class="form-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
