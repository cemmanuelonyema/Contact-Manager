import React from "react";
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
          Content
          <h1>Manage your contacts efficiently</h1>
          <p></p>
          <a href="">Launch app</a>
        </div>
        <div>
          <Lottie options={defaultSetting} height={500} width={500} />
        </div>
      </div>
    </section>
  );
};
