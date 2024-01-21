import React from "react";
import NavBar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Project from "./components/projects";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Hero/>
      <About/>
      <Project/>
    </div>
  );
};

export default App;
