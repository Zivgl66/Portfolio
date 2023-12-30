import React, { useState, useEffect, useCallback } from "react";
import "./Navbar.style.css";
import CVpdf from "../../assets/Ziv Gliser CV Full Stack Developer.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [y, setY] = useState(window.scrollY);
  const [isHSection, setIsHSection] = useState(true);

  //Check if user is scrolling down or up (if down, show the navbar)
  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setNav(false);
      } else if (y < window.scrollY && window.scrollY >= 50) {
        setNav(true);
      }
      if (window.scrollY > 550) setIsHSection(false);
      if (window.scrollY < 550) setIsHSection(true);
      setY(window.scrollY);
    },
    [y]
  );

  // listen for scroll event
  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <a href="#main" className="logo">
        {/* <img src={logo} alt="logo of the app" /> */}
        <span className="nav-title">Ziv</span>
      </a>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <a href="#about" className={isHSection ? "active" : ""}>
            <span className="numbered_header">01.</span> About
          </a>
        </li>
        <li>
          <a href="#experience">
            <span className="numbered_header">02. </span> Experience
          </a>
        </li>
        <li>
          <a href="#projects">
            <span className="numbered_header">03.</span> Projects
          </a>
        </li>
        <li>
          <a href="#contact">
            <span className="numbered_header">04.</span> Contact
          </a>
        </li>
        <li>
          <button className="nav_btn">
            <a href={CVpdf} target="_blank">
              Resume
            </a>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
