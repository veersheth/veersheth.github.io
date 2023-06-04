import React from "react";
import "./App.scss";
import "./components/styles/Trailer.scss"

import LandingPage from "./components/LandingPage";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer.jsx";

import ColorThemeToggle from "./components/ColorThemeToggle";
import "./components/styles/mobile-styles.scss"

function App() {
  return (
    <div className="App" data-theme="light">
        <ColorThemeToggle />
        <div id="butter">
          <LandingPage />
          <AboutMe />
          <Projects />
          <Footer />
        </div>

    </div>
  );
};

export default App;
