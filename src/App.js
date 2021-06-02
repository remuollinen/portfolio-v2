import React, { useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1700, once: true });
  });

  return (
    <div className="App" data-aos="fade-down" data-aos-easing="ease-in-sine">
      <div className="intro">
        <h1>
          Hi, I'm <span>Remu</span>
        </h1>
        <p>an aspiring web developer based in Helsinki, Finland</p>
      </div>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
