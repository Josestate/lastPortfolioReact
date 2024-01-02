import React from "react";
import "../CardProyect/CardProyect.css";
import img from "../../assets/pngtree-no-image.jpg";

export default function CardProyect({ name }) {
  return (
    <div className="cardProyect__container">
      <img src={img} alt="" className="cardProyect__img" />
      <h3>{name}</h3>
    </div>
  );
}
