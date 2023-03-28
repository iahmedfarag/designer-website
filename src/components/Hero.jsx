import React from "react";
import Navbar from "./Navbar.jsx";
import img from "../images/man.png.webp";
const Hero = () => {
  return (
    <div className="hero" id="home">
      <Navbar />
      <div className="heroContent">
        <h1>Hello This Is Des</h1>
        <h2>
          <span></span> Creative Designer
        </h2>
      </div>
      <div className="heroSocial">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-instagram"></i>
      </div>
      <div className="heroImg"></div>
    </div>
  );
};

export default Hero;
