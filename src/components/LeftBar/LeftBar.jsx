import React from "react";
import "../LeftBar/LeftBar.css";
import homeIcon from "../../assets/homeIcon.png";
import infoIcon from "../../assets/infoIcon.png";
import contactIcon from "../../assets/contacticon.png";

export default function LeftBar({
  setDisplayProyects,
  setDisplayHome,
  setDisplayInfo,
}) {
  return (
    <div className="leftBar__Container">
      <img
        src={homeIcon}
        alt=""
        className="leftBar-images"
        onClick={(e) => (
          setDisplayProyects(false), setDisplayHome(true), setDisplayInfo(false)
        )}
      />
      <img
        src={infoIcon}
        alt=""
        className="leftBar-images"
        onClick={(e) => (
          setDisplayProyects(false), setDisplayHome(false), setDisplayInfo(true)
        )}
      />
      <img src={contactIcon} alt="" className="leftBar-images" />
    </div>
  );
}
