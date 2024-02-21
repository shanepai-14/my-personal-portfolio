import { useState, useEffect } from "react";
import NavBar from "./components/navbar1";
import Hero from "./components/hero";
import About from "./components/about";
import Project from "./components/projects";
import Education from "./components/education";
import TechStack from "./components/techstack";
import Footer from "./components/footer";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Loading from "./components/loader/loading.jsx";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(async () => {
        setIsLoading(false);
      }, 2000);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <NavBar />
          <Hero />
          <About />
          <Education />
          <TechStack />
          <Project />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
