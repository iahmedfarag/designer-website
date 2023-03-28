import React, { useRef, useState } from "react";
import { projects } from "../data.js";
import img from "../images/1.png";
const Portfolio = () => {
  const singleProjectRef = useRef(null);
  const [portfolioProjects, setPortfolioProjects] = useState(projects);
  const [singleProject, setSingleProject] = useState({});
  const closeSingleProject = () => {
    singleProjectRef.current.classList.remove("active");
    document.body.style.overflow = "auto";
  };
  const openSingleProject = (id) => {
    singleProjectRef.current.classList.add("active");
    document.body.style.overflow = "hidden";
    const theProject = portfolioProjects.filter((proj) => proj.id == id);
    setSingleProject(theProject[0]);
  };
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="sectionHeader portfolioHeader">
          <p className="portfolioTitle sectionTitle">PORTFOLIO</p>
          <h2 className="portfolioTitleText sectionTitleText">
            Some of my awesome <br /> stuffs here
          </h2>
        </div>
        <div className="portfolioImgs">
          {portfolioProjects.map((proj, index) => {
            const { id, img } = proj;
            return (
              <div
                className="portfolioImg"
                key={id}
                onClick={() => {
                  openSingleProject(id);
                }}
              >
                <img src={img} alt="proj img" />
                <div className="overlay">
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            );
          })}
        </div>
        <button className="portfolioMoreBtn">More</button>
      </div>
      <div className="singleProject" ref={singleProjectRef}>
        <div className="content">
          <img src={singleProject.img} alt="" />
          <h2>{singleProject.title}</h2>
          <p>{singleProject.text}</p>
        </div>
        <i className="fa-solid fa-xmark" onClick={closeSingleProject}></i>
      </div>
    </section>
  );
};

export default Portfolio;
