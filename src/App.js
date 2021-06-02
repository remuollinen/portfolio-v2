import "./App.css";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
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
