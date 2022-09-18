import React from "react";

export const Features = () => {
  return (
    <section className="features" id="section--features">
      <h2>App Features</h2>
      <div className="container features__container">
        <div className="box">
          <h3>Feature 1</h3>
          <p>Full stack application</p>
        </div>
        <div className="box">
          <h3>Feature 1</h3>
          <p>Accessibility and ux</p>
        </div>
        <div className="box">
          <h3>Feature 2</h3>
          <p>Secure sign in, login and logout feature</p>
        </div>
        <div className="box">
          <h3>Feature 3</h3>
          <p>Custom database that stores users secure encrypted passwords</p>
        </div>
        <div className="box">
          <h3>feature 4</h3>
          <p>Directly open up, email and phone app from the app</p>
        </div>
        <div className="box">
          <h3>feature 5</h3>
          <p>Add contact social links in addition to email, phone no</p>
        </div>
        <div className="box">
          <h3>feature 6</h3>
          <p>label your contacts and easy search functionality</p>
        </div>
      </div>
    </section>
  );
};
