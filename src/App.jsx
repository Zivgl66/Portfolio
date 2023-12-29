import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
