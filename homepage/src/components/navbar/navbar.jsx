import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <header className="header">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <h1 className="logo">Tourest</h1>

        {/* Navigation */}
        <nav className="navbar">
          <ul className="navbar-list d-flex flex-column flex-lg-row">
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#AboutUs">AboutUs</a>
            </li>
            <li>
              <a href="#Tours">Tours</a>
            </li>
            <li>
              <a href="#Destinations">Destinations</a>
            </li>
            <li>
              <a href="#Blog">Blog</a>
            </li>
            <li>
              <a href="#ContactUs">Contact Us</a>
            </li>
          </ul>
        </nav>

        {/* Booking Button */}
        <button className="btn-primary">Booking Now</button>
      </div>
    </header>
  );
}

export default Navbar;
