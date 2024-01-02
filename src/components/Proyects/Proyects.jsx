import React from "react";
import "../Proyects/Proyects.css";
import CardProyect from "../CardProyect/CardProyect";
import { useEffect } from "react";
import gsap from "gsap";

export default function Proyects() {
  useEffect(() => {
    gsap.to(".proyects__container", { duration: 1, opacity: 1 });
  }, []);
  return (
    <div className="proyects__container">
      <CardProyect name="Rolex Pr" />
      <CardProyect name="Mundial Api" />
      <CardProyect name="Poke page" />
      <CardProyect name="Eat & Laugh" />
    </div>
  );
}
