import React, { useState, useRef, forwardRef } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import LeftBar from "./components/LeftBar/LeftBar";
import Proyects from "./components/Proyects/Proyects";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";

function App() {
  const [displayHome, setDisplayHome] = useState(true);
  const [displayProyects, setDisplayProyects] = useState(false);
  const [displayInfo, setDisplayInfo] = useState(false);
  const [displayContact, setDisplayContact] = useState(false);

  return (
    <>
      <LeftBar
        setDisplayProyects={setDisplayProyects}
        setDisplayHome={setDisplayHome}
        setDisplayInfo={setDisplayInfo}
        setDisplayContact={setDisplayContact}
      />
      {displayProyects && <Proyects displayProyects={displayProyects} />}
      {displayHome && (
        <Home
          setDisplayProyects={setDisplayProyects}
          setDisplayHome={setDisplayHome}
        />
      )}
      {displayInfo && <AboutMe />}
      {displayContact && <Contact />}
    </>
  );
}

export default App;
