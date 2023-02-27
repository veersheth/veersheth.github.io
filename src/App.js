import React from "react";
import "./App.css";

import LandingPage from "./components/LandingPage";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";


function App() {
  return (
    <div className="App">

        <LandingPage />
        <AboutMe />
        <Projects />

    </div>
  );
};

export default App;
