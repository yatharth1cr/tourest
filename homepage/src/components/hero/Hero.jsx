import "./hero.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Hero() {
  return (
    <section className="hero container d-flex align-items-center">
      {/* Decorative Shapes */}
      {[1, 2, 3].map((index) => (
        <img
          key={index}
          className={`shape shape-${index}`}
          src={`https://codewithsadee.github.io/tourest/assets/images/shape-${index}.png`}
          alt={`shape-${index}`}
        />
      ))}

      {/* Hero Content */}
      <div className="hero-content">
        <p className="hero-subtitle">Explore Your Travel</p>
        <h2 className="hero-title">Trusted Travel Agency</h2>
        <p className="hero-text">
          I travel not to go anywhere, but to go. I travel for travel's sake;
          the great affair is to move.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <a href="#" className="btn btn-one">
            Contact Us
          </a>
          <a href="#" className="btn btn-two">
            Learn More
          </a>
        </div>
      </div>

      {/* Hero Banner */}
      <figure className="hero-banner">
        <img
          className="w-100"
          src="https://codewithsadee.github.io/tourest/assets/images/hero-banner.png"
          alt="Hero Banner"
        />
      </figure>
    </section>
  );
}

export default Hero;
