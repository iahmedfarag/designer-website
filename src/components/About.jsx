import React, { useRef } from "react";
import img from "../images/about.png";
import grid from "../images/color_grid.png";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="aboutContent">
          <h2 className="aboutHeader">About me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida Risus com odo viverra maecenas.
          </p>
          <button className="aboutDownload">Download CV</button>
        </div>
        <div className="aboutImg">
          <img src={img} />
        </div>
        <div className="aboutBack">
          <h2 className="aboutTitle">About</h2>
          <img src={grid} className="aboutGrid" />
        </div>
      </div>
    </section>
  );
};

export default About;
