import React, { Fragment } from "react";
import { About } from "../../components/landing/About";
import { CaseStudy } from "../../components/landing/CaseStudy";
import { Features } from "../../components/landing/Features";
import { Hero } from "../../components/landing/Hero";
import { Footer } from "../../components/layout/footer/Footer";
import { NavHeader } from "../../components/layout/nav/Nav";

export const Landing = () => {
  return (
    <Fragment>
      Landing
      <header>
        <NavHeader />
      </header>
      <main>
        <Hero />
        <About />
        <Features />
        <CaseStudy />
        <Footer />
      </main>
    </Fragment>
  );
};
