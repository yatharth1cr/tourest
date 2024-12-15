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
        <Navbar />
        <Hero />
        <Destination />
        <Featured />
        <About />
        <Blog />
        <Footer />
      </div>
    </>
  );
}

export default App;
