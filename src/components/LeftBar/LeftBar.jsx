import { React, useEffect } from "react";
import "../LeftBar/LeftBar.css";
import homeIcon from "../../assets/homeIcon.png";
import infoIcon from "../../assets/infoIcon.png";
import contactIcon from "../../assets/contacticon.png";
import gsap from "gsap";

export default function LeftBar({
  setDisplayLeftBar,
  displayLeftBar,
  setDisplayProyects,
  setDisplayHome,
  setDisplayInfo,
  setDisplayContact,
}) {
  useEffect(() => {
    displayLeftBar
      ? gsap.to(".leftBar__Container", { duration: 1, opacity: 1 })
      : gsap.to(".leftBar__Container", { duration: 1, opacity: 0 });
  }, []);
  return (
    <div className={"leftBar__Container"}>
      <img
        src={homeIcon}
        alt=""
        className="leftBar-images"
        onClick={(e) => (
          window.screen.width < 600 && setDisplayLeftBar(false),
          setDisplayProyects(false),
          setDisplayHome(true),
          setDisplayInfo(false),
          setDisplayContact(false)
        )}
      />
      <img
        src={infoIcon}
        alt=""
        className="leftBar-images"
        onClick={(e) => (
          window.screen.width < 600 && setDisplayLeftBar(false),
          setDisplayProyects(false),
          setDisplayHome(false),
          setDisplayInfo(true),
          setDisplayContact(false)
        )}
      />
      <img
        src={contactIcon}
        alt=""
        className="leftBar-images"
        onClick={(e) => (
          window.screen.width < 600 && setDisplayLeftBar(false),
          setDisplayProyects(false),
          setDisplayHome(false),
          setDisplayInfo(false),
          setDisplayContact(true)
        )}
      />
    </div>
  );
}
