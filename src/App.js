import About from "./Components/About";
import Nav from "./Components/Navbar"
import Hero from "./Components/Hero";
import Slider from "./Components/Slider";
import ContactMe from "./Components/ContactMe";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Nav/>
        <Hero/>
        <Slider/>
        <About/>
        <ContactMe/>
      </div>
    </BrowserRouter>
  );
}

export default App;