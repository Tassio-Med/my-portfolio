// import About from "./Components/About";
import Nav from "./Components/Navbar"
import Hero from "./Components/Hero";
import Carousel from "./Components/Carousel";
// import Contact from "./Components/Contact";
// import { BrowserRouter } from "react-router-dom";

function App() {
  return (
      <div className="app">
        <Nav/>
        <Hero/>
        <Carousel/>
        {/* <About/> */}
        {/* <Contact/> */}
      </div>
  );
}

export default App;