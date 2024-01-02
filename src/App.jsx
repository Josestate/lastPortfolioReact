import React, { useState, useRef, forwardRef } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import LeftBar from "./components/LeftBar/LeftBar";
import Proyects from "./components/Proyects/Proyects";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";

import closemenuImg from "../../lastPortfolioReact/src/assets/closeMenu.png";
import menuImg from "../../lastPortfolioReact/src/assets/hamburger_menu.png";

function App() {
  const [displayHome, setDisplayHome] = useState(true);
  const [displayProyects, setDisplayProyects] = useState(false);
  const [displayInfo, setDisplayInfo] = useState(false);
  const [displayContact, setDisplayContact] = useState(false);
  let [displayLeftBar, setDisplayLeftBar] = useState(true);

  return (
    <>
      {window.screen.width < 600 &&
        (displayLeftBar ? (
          <img
            className="menuImgs"
            src={closemenuImg}
            alt="closeMenu"
            onClick={() => setDisplayLeftBar(false)}
          />
        ) : (
          <img
            className="menuImgs"
            src={menuImg}
            alt="menu"
            onClick={() => setDisplayLeftBar(true)}
          />
        ))}
      {displayLeftBar && (
        <LeftBar
          displayLeftBar={displayLeftBar}
          setDisplayLeftBar={setDisplayLeftBar}
          setDisplayProyects={setDisplayProyects}
          setDisplayHome={setDisplayHome}
          setDisplayInfo={setDisplayInfo}
          setDisplayContact={setDisplayContact}
        />
      )}
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
