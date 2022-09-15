import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../../lottie/103094-contact.json";
import "./landing.scss";

export const Hero = () => {
  const defaultSetting = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
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
        <div className="hero__img">
          <Lottie
            options={defaultSetting}
            // height={400}
            // width={400}
            // className="lottieFile"
          />
        </div>
      </div>
    </section>
  );
};
