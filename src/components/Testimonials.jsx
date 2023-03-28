import React from "react";
import quote from "../images/quote.svg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { testimonials } from "../data.js";
const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="slides">
          <OwlCarousel
            className="owl-carousel"
            items="1"
            loop="true"
            nav="true"
          >
            {testimonials.map((testi) => {
              const { id, name, img, text, job } = testi;
              return (
                <div className="testi" key={id}>
                  <img src={quote} className="quote"></img>
                  <p className="text">{text}</p>
                  <img src={img} className="testiImg" />

                  <p className="testiWritter">{name}</p>
                  <p className="testiJob">{job}</p>
                </div>
              );
            })}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
