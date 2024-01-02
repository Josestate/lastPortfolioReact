import React, { useEffect } from "react";
import "../Contact/Contact.css";

import { gsap } from "gsap";
import faceImg from "../../assets/FacebookBlackIcon.png";
import instaImg from "../../assets/instaBlack.png";
import whatssImg from "../../assets/whatsappblacklogo.png";
import linkelnImg from "../../assets/LinkedinBlack.png";
import gitHubImg from "../../assets/GitHubLogo.png";

export default function Contact() {
  useEffect(() => {
    gsap.to(".contact__container", { duration: 1, opacity: 1 });
  }, []);
  return (
    <div className="contact__container">
      <div className="contact__textContainer">
        <h2>Contact</h2>
        <h3>
          Email:{" "}
          <a href="mailto:josestate19@gmail.com" className="contact__span">
            josestate19@gmail.com
          </a>
        </h3>
        <h3>
          Number: <span className="contact__span">+506 6000-6824</span>
        </h3>
        <h3>
          Direction:{" "}
          <span className="contact__span">Costa Rica, San Jose, Pavas</span>
        </h3>
      </div>
      <section className="contact__sectionImgs">
        <div className="imgsContainer">
          <a href="https://www.facebook.com/jose.cj.127648" target="_blank">
            <img src={faceImg} className="contact__imgs" alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com/invites/contact/?i=tpo4mk7flr&utm_content=r9hik5i"
            target="_blank"
          >
            <img
              src={instaImg}
              className="contact__imgs_insta"
              alt="instagram"
            />
          </a>
        </div>
        <div className="imgsContainer">
          <a href="https://wa.link/qo8ph2" target="_blank">
            <img src={whatssImg} className="contact__imgs" alt="whatsapp" />
          </a>
          <a
            href="https://www.linkedin.com/in/jos%C3%A9-castillo-a1463526b/"
            target="_blank"
          >
            <img src={linkelnImg} className="contact__imgs" alt="linkedin" />
          </a>
          <a href="https://github.com/Josestate" target="_blank">
            <img src={gitHubImg} className="contact__imgs_insta" alt="gitHub" />
          </a>
        </div>
      </section>
    </div>
  );
}
