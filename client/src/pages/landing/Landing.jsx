import React, { Fragment } from "react";
//sections
import { About } from "../../components/landing/About";
import { Tech } from "../../components/landing/Tech";
import { Features } from "../../components/landing/Features";
import { Hero } from "../../components/landing/Hero";
import { Footer } from "../../components/landing/Footer";
import { Nav } from "../../components/landing/Nav";

export const Landing = () => {
  return (
    <Fragment>
      <header>
        <Nav />
      </header>
      <main>
        <Hero />
        <About />
        <Features />
        <Tech />
        <Footer />
      </main>
    </Fragment>
  );
};
