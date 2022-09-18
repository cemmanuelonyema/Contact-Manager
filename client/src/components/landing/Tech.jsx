import React from "react";
import {
  FaHtml5,
  FaSass,
  FaReact,
  FaGit,
  FaGithub,
  FaDeploydog,
} from "react-icons/fa";

import "./landing.scss";

export const Tech = () => {
  return (
    <section className="tech" id="section--tech">
      <h2>Technology</h2>
      <div className="container tech__container">
        <div className="box">
          <FaHtml5 />
          <div>
            <h3>Html5</h3>
          </div>
        </div>
        <div className="box">
          <FaSass />
          <h3>Css (sass)</h3>
        </div>
        <div className="box">
          <FaReact />
          <h3>React</h3>
        </div>
        <div className="box">
          <FaGit />
          <h3>Git version control</h3>
        </div>
        <div className="box">
          <FaGithub />
          <h3>Github </h3>
        </div>

        <div className="box">
          <FaDeploydog />
          <h3>Deployment</h3>
        </div>
      </div>
    </section>
  );
};
