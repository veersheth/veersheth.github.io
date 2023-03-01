import React from "react";
import "./App.css";
import "./components/styles/Trailer.css"

import LandingPage from "./components/LandingPage";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer.jsx";

import ColorThemeToggle from "./components/ColorThemeToggle";

function App() {
  return (
    <div className="App">

        <ColorThemeToggle />

        <LandingPage />
        <AboutMe />
        <Projects />
        <Footer />

    </div>
  );
};

export default App;
