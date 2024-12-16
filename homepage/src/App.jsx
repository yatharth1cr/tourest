import "./App.css";
import About from "./components/About/About";
import Blog from "./components/blog/Blog";
import Destination from "./components/destination/Destination";
import Featured from "./components/featured/Featured";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Nav";

function App() {
  return (
    <>
      <div className="App">
        <section id="Home" className="section home-section">
          <Navbar />
        </section>

        <Hero />
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
      </div>
    </>
  );
}

export default App;
