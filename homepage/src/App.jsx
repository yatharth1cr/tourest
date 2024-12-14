import "./App.css";
import About from "./components/About/About";
import Destination from "./components/destination/Destination";
import Featured from "./components/featured/Featured";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Hero />
        <Destination />
        <Featured />
        <About />
      </div>
    </>
  );
}

export default App;
