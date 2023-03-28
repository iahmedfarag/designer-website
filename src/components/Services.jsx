import React from "react";
import SingleService from "./SingleService.jsx";
import { servicesList } from "../data.js";
const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="sectionheader">
          <div className="servicesLine"></div>
          <p className="sectionTitle">SERVICE PROVIDED</p>
          <h2 className="sectionTitleText">
            Build brands campaigns <br /> & digital projects
          </h2>
        </div>

        <div className="servicesWrapper">
          {servicesList.map((serv, index) => {
            return <SingleService serv={serv} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
