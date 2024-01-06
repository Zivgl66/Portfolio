import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Cursor from "./components/common/Cursor/Cursor";

function App() {
  const [light, setLight] = useState(false);
  return (
    <div className="App">
      <Cursor light={light} />
      <Header setLight={setLight} />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
