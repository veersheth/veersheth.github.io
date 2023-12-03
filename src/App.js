import React, { useEffect, useRef } from "react";
import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap';
import "./App.scss";
import "./components/styles/Trailer.scss"

import LandingPage from "./components/LandingPage";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer.jsx";

import ColorThemeToggle from "./components/ColorThemeToggle";
import "./components/styles/mobile-styles.scss"

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      direction: 'vertical',
    });

    scroll.on('scroll', (instance) => {
      // Use GSAP to animate your elements based on the scroll position
      gsap.to('.your-element-class', {
        y: instance.scroll.y * -0.5,
        ease: 'none',
        delay: 0.5, // Add delay for staggering effect
      });
    });

    // Cleanup event listener
    return () => {
      if (scroll) scroll.destroy();
      window.removeEventListener('resize', scroll.update);
    };
  }, []);

  return (
    <div className="App" data-theme="light">
      <ColorThemeToggle />
      <div id="scrollable" ref={containerRef}>
        <LandingPage />
        <AboutMe />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default App;