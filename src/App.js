import React from "react";
import NavBar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Project from "./components/projects";
import Education from "./components/education";
import TechStack from "./components/techstack";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <TechStack />
      {/* <Education /> */}
      <Project />
    </div>
  );
};

export default App;
