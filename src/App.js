import "./App.css";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <div className="intro">
        <h1>
          Hi, I'm <span>Remu</span>
        </h1>
        <p>an aspiring web developer based in Helsinki, Finland</p>
      </div>
      <Projects />
    </div>
  );
}

export default App;
