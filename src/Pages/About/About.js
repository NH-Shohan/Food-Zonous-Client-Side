import React from "react";
import image from "../../images/about.png";

const About = () => {
  return (
    <div className="container">
      <section>
        <h1 className="mt-5 pt-5">About Us</h1>
        <hr className="border border-4 border-dark rounded-pill w-25 m-auto" />
        <div className="row g-5">
          <img className="col-md-5" src={image} alt="" />
          <div className="col-md-7 mt-5 pt-5">
            <h2>
              WE ARE NOT JUST A TEAM
              <br />
              <span className="text-warning">WE ARE FAMILY</span>
            </h2>
            <hr className="border border-4 border-warning rounded-pill w-25 m-auto" />
            <h5 className="text-secondary text-wrap lh-base w-75 m-auto">
              Seasonality and support of our local community are central to our
              philosophy at food zonous. We’re passionate about cooking with
              local, seasonal ingredients and love how they can inspire new
              dishes. Not only do fresh, in-season ingredients enhance flavour,
              they are also great for you and their consumption minimises impact
              on the environment.
            </h5>
          </div>
        </div>
      </section>

      {/* BRANCHES */}

      <section>
        <h1 className="fs-1 mt-5 ">BRANCHES</h1>
        <hr className="border border-4 border-dark rounded-pill w-25 m-auto" />
        <div className="row mb-5 mt-5">
          <div className="col-md-6">
            <i className="fas fa-map-marked-alt mb-4"></i>
            <h5>FOOD ZONOUS RESTAURANT CENTER</h5>
            <p>
              103 North Loundoun Street., Winchester, VA
              <br />
              +63 9202740366
            </p>
          </div>
          <div className="col-md-6">
            <i className="fas fa-map-marked-alt mb-4"></i>
            <h5>FOOD ZONOUS RESTAURANT SQUARE</h5>
            <p>
              Lake House, 13 Hanway Square, London, England
              <br />
              +38 7648592568
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
