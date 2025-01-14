import "./App.css";
import About from "./components/About/About";
import Blog from "./components/blog/Blog";
import Destination from "./components/destination/Destination";
import Featured from "./components/featured/Featured";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Nav";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Booking from "./components/booking/Booking";
import Error from "./components/error/Error";

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <section id="Home" className="section home-section">
          <Hero />
        </section>
        <section id="Destinations" className="section destinations-section">
          <Destination />
        </section>
        <section id="Tours" className="section tours-section">
          <Featured />
        </section>
        <section id="AboutUs" className="section about-section">
          <About />
        </section>
        <section id="Blog" className="section blog-section">
          <Blog />
        </section>
        <section id="ContactUs" className="section contact-section">
          <Footer />
        </section>
      </>
    ),
    errorElement: (
      <>
        <Navbar />
        <Error />
      </>
    ),
  },
  {
    path: "/booking",
    element: (
      <>
        <Navbar />
        <Booking />
      </>
    ),
    errorElement: (
      <>
        <Navbar />
        <Error />
      </>
    ),
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
