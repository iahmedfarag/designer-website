import React from "react";
import { navbarLinks } from "./../data";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="links">
          {navbarLinks.map((linkEl) => {
            const { id, link } = linkEl;
            const linkC = link.charAt(0).toUpperCase() + link.slice(1);

            return (
              <a href={`#${link}`} key={id}>
                {linkC}
              </a>
            );
          })}
        </div>
        <div className="social">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
