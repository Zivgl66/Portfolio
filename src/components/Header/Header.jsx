import React from "react";
import "./Header.style.css";
import Navbar from "../Navbar/Navbar";
import { icons } from "../../constants";

const Header = () => {
  return (
    <div id="main" className="section">
      <Navbar />
      <div className="left contact_info">
        <div className="content">
          <ul>
            <li>
              <a href="https://github.com/Zivgl66" target="_blank">
                <img src={icons.github} alt="github link icon" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/zivgalitzer/" target="_blank">
                <img src={icons.instagram} alt="instagram link icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ziv-gliser-b0734022b/"
                target="_blank"
              >
                <img src={icons.linkedin} alt="linkedin link icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="right contact_info">
        <div className="email">
          <a href="mailto:zivgl66@gmail.com">zivgl66@gmail.com</a>
        </div>
      </div>
      <div className="header">
        <p className="top_header">Hi, my name is</p>
        <h1>Ziv Gliser.</h1>
        <h1>
          <span className="center_header">I build things for the web.</span>
        </h1>
        <p className="bottom_header">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Upstatement.
        </p>
        <button className="header_btn">Check me out</button>
      </div>
    </div>
  );
};

export default Header;
