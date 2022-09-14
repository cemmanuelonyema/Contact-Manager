import React from "react";
import { Link } from "react-router-dom";
import "./landing.scss";

export const Hero = () => {
  return (
    <section className="hero" id="section--hero">
      <div className="container hero__container">
        <div className="hero__content">
          <h1>An efficient simple way to manage your contacts</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            nulla corrupti facere dicta illum nihil illo minus ratione aperiam
            velit! Accusantium
          </p>
          <Link to="/contact">Lunch app</Link>
        </div>
        <div>
          <img src="" alt="image" />
        </div>
      </div>
    </section>
  );
};
