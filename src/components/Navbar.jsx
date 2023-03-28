import React, { useState, useRef } from "react";
import { navbarLinks } from "../data.js";
const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const navbarRef = useRef(null);
  const menuRef = useRef(null);
  const linksRef = useRef(null);

  const showLinks = () => {
    if (openNavbar) {
      setOpenNavbar(false);
      linksRef.current.style.maxHeight = null;
      linksRef.current.style.padding = "0";
    } else {
      setOpenNavbar(true);
      linksRef.current.style.maxHeight =
        linksRef.current.scrollHeight + 20 + "px";
      linksRef.current.style.padding = "10px";
    }
  };

  window.addEventListener("scroll", (e) => {
    if (window.scrollY >= 400) {
      navbarRef.current.classList.add("fixed");
    } else {
      navbarRef.current.classList.remove("fixed");
    }
  });

  return (
    <nav ref={navbarRef}>
      <div className="container">
        <div className="nav">
          <a href="#home" className="logo">
            designer
          </a>
          <ul>
            {navbarLinks.map((linkEl) => {
              const { id, link } = linkEl;
              const linkC = link.charAt(0).toUpperCase() + link.slice(1);
              return (
                <li key={id}>
                  <a href={`#${link}`}>{linkC}</a>
                </li>
              );
            })}
          </ul>
          <button className="contactBtn">Contact Me</button>
        </div>
      </div>
      <div className="media">
        <a href="#home" className="logo">
          designer
        </a>
        <div className="menu" ref={menuRef} onClick={showLinks}>
          <div className="content">
            <p>Menu</p>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
        <ul ref={linksRef}>
          {navbarLinks.map((linkEl) => {
            const { id, link } = linkEl;
            const linkC = link.charAt(0).toUpperCase() + link.slice(1);

            return (
              <li key={id}>
                <a href={`#${link}`}>{linkC}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
