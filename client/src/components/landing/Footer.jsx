import React from "react";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./landing.scss";

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container footer__container">
        <div className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          quae cum pariatur dolorum qui ut, voluptatum aliquam iure totam et
          fuga quasi, ab porro neque commodi optio. Obcaecati nostrum totam
          numquam, tempore fuga in quia laudantium harum fugiat! Ipsum, ipsam.
        </div>
        <div className="projects">
          <ul>
            <li>Contact</li>
            <li>commerce</li>
            <li>gotube</li>
          </ul>
        </div>
        <div className="socials">
          <ul>
            <li>
              <FaGithub />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaLinkedinIn />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
