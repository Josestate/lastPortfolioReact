import React, { useState, useEffect } from "react";
import img from "../../assets/io.jpg";
import "../Home/Home.css";
import { gsap } from "gsap";

export default function Home({ setDisplayProyects, setDisplayHome }) {
  const [displayNoneName, setDisplayNoneName] = useState(true);
  const [displayerDomName, setDisplayerDomName] = useState(true);
  const [lineText, setLineText] = useState(false);
  useEffect(() => {
    gsap.to(".home__container", { duration: 1, opacity: 1 });
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setDisplayNoneName(!displayNoneName);
    }, 2000);
    setTimeout(() => {
      setDisplayerDomName(!displayerDomName);
    }, 3000);
    displayNoneName
      ? window.screen.width > 480
        ? gsap.to(".home__name", { width: 254 })
        : gsap.to(".home__name", { width: 200 })
      : gsap.to(".home__name", { width: 0 });
  }, [displayNoneName]);
  useEffect(() => {
    setTimeout(() => {
      setLineText(!lineText);
    }, 500);
    lineText
      ? gsap.to(".home__line", { opacity: 0 })
      : gsap.to(".home__line", { opacity: 1 });
  }, [lineText]);
  return (
    <div className="home__container">
      <img src={img} alt="" className="home__image" />
      <section>
        <div className="home__nameContainer">
          {displayerDomName ? (
            <h1 className="home__name name_realName">Jose Pablo</h1>
          ) : (
            <h1 className="home__name name_profession">Front-end</h1>
          )}
          <span className="home__line"></span>
        </div>
        <button
          className="home__button"
          onClick={() => (setDisplayProyects(true), setDisplayHome(false))}
        >
          Watch Projects
        </button>
      </section>
    </div>
  );
}
