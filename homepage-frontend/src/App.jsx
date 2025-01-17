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
        <section id="Home">
          <Hero />
        </section>
        <section id="Destinations">
          <Destination />
        </section>
        <section id="Tours">
          <Featured />
        </section>
        <section id="AboutUs">
          <About />
        </section>
        <section id="Blog">
          <Blog />
        </section>
        <section id="ContactUs">
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
