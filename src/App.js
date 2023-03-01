import React from "react";
import "./App.css";
import "./components/styles/Trailer.css"

import LandingPage from "./components/LandingPage";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer.jsx";

import DarkMode from "./components/ThemeToggle/DarkMode";

function App() {
  return (
    <div className="App">

        <DarkMode />

        <LandingPage />
        <AboutMe />
        <Projects />
        <Footer />

    </div>
  );
};

export default App;
