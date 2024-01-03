import React, { useState } from "react";
import gsap from "gsap";
import "../AboutMe/AboutMe.css";
import htmlImg from "../../assets/htmlLogo.png";
import cssImg from "../../assets/logocss.png";
import javascriptImg from "../../assets/JavaScriptlogo.png";
import ReactImg from "../../assets/Reacticon.png";
import bootstrapImg from "../../assets/bootstraplogo.png";
import gsapImg from "../../assets/greensocklogo.png";
import gitHubImg from "../../assets/GitHubLogo.png";
import { useEffect } from "react";

export default function AboutMe() {
  const [htmlVisible, setHtmlVisible] = useState(true);
  const [cssVisible, setCssVisible] = useState(true);
  const [reactVisible, setReactVisible] = useState(true);
  const [bootstrapVisible, setBootstrapVisible] = useState(true);
  const [gitHubVisible, setGitHubVisible] = useState(true);
  const [gsapVisible, setGsapVisible] = useState(true);
  const [visiblehtmlDom, setVisiblehtmlDom] = useState(true);
  const [visibleCssDom, setVisibleCssDom] = useState(true);
  const [visibleReactDom, setVisibleReactDom] = useState(true);
  const [visibleBootstrapDom, setVisibleBootstrapDom] = useState(true);
  const [visibleGsapDom, setVisibleGsapDom] = useState(true);
  const [visibleGithubDom, setVisibleGithubDom] = useState(true);
  useEffect(() => {
    gsap.to(".aboutMe__container", { duration: 1, opacity: 1 });
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setHtmlVisible(!htmlVisible);
    }, 2000);
    setTimeout(() => {
      setVisiblehtmlDom(!visiblehtmlDom);
    }, 3000);
    setTimeout(() => {
      setCssVisible(!cssVisible);
    }, 2000);
    setTimeout(() => {
      setVisibleCssDom(!visibleCssDom);
    }, 3000);
    setTimeout(() => {
      setReactVisible(!reactVisible);
    }, 2000);
    setTimeout(() => {
      setVisibleReactDom(!visibleReactDom);
    }, 3000);
    setTimeout(() => {
      setBootstrapVisible(!bootstrapVisible);
    }, 2000);
    setTimeout(() => {
      setVisibleBootstrapDom(!visibleBootstrapDom);
    }, 3000);

    setTimeout(() => {
      setGitHubVisible(!gitHubVisible);
    }, 2000);
    setTimeout(() => {
      setVisibleGithubDom(!visibleGithubDom);
    }, 3000);

    setTimeout(() => {
      setGsapVisible(!gsapVisible);
    }, 2000);
    setTimeout(() => {
      setVisibleGsapDom(!visibleGsapDom);
    }, 3000);

    htmlVisible
      ? gsap.to(".imgHtml", { duration: 1, opacity: 1 })
      : gsap.to(".imgHtml", { duration: 1, opacity: 0 });
    cssVisible
      ? gsap.to(".imgCss", { duration: 1, opacity: 1 })
      : gsap.to(".imgCss", { duration: 1, opacity: 0 });
    reactVisible
      ? gsap.to(".imgReact", { duration: 1, opacity: 1 })
      : gsap.to(".imgReact", { duration: 1, opacity: 0 });
    bootstrapVisible
      ? gsap.to(".imgBootstrap", { duration: 1, opacity: 1 })
      : gsap.to(".imgBootstrap", { duration: 1, opacity: 0 });
    gsapVisible
      ? gsap.to(".imgGsap", { duration: 1, opacity: 1 })
      : gsap.to(".imgGsap", { duration: 1, opacity: 0 });
    gitHubVisible
      ? gsap.to(".imgGithub", { duration: 1, opacity: 1 })
      : gsap.to(".imgGithub", { duration: 1, opacity: 0 });
  }, [htmlVisible, reactVisible, gitHubVisible]);
  return (
    <div className="aboutMe__container">
      <div className="aboutMe__textContainer">
        <h2>Hi there! it's Jose Castillo</h2>
        <p className="aboutMe__text">
          I transform ideas into captivating digital experiences. My passion for
          front-end development translates into intuitive and visually stunning
          interfaces that not only meet technical requirements but also elevate
          the user experience to an extraordinary level. Ready to contribute
          innovation and excellence to your team, combining cutting-edge
          technical skills with an unwavering commitment to quality and
          creativity
        </p>
        <h3>Born Date: 19/04/2005</h3>
      </div>
      <div>
        <h2>Skills</h2>
        <section className="aboutMe__imagesSection">
          <img
            className="imageTechnologie imgHtml"
            src={visiblehtmlDom ? htmlImg : cssImg}
            alt=""
          />
          <img
            className="imageTechnologie imgCss"
            src={visibleCssDom ? cssImg : htmlImg}
            alt=""
          />
          <img className="imageTechnologie imgJs" src={javascriptImg} alt="" />
          <img
            className="imageTechnologie imgReact"
            src={visibleReactDom ? ReactImg : bootstrapImg}
            alt=""
          />
          <img
            className="imageTechnologie imgBootstrap"
            src={visibleBootstrapDom ? bootstrapImg : ReactImg}
            alt=""
          />
          <img
            className={`imageTechnologie imgGsap ${
              !visibleGsapDom && "imgGitHubOnGsap"
            }`}
            src={visibleGsapDom ? gsapImg : gitHubImg}
            alt=""
          />
          <img
            className="imageTechnologie imgGithub"
            src={visibleGithubDom ? gitHubImg : gsapImg}
            alt=""
          />
        </section>
      </div>
    </div>
  );
}
