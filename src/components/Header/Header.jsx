import React from "react";
import "./Header.style.css";
import Navbar from "../Navbar/Navbar";


const Header = () => {
  return (
    <div id="main" className="section">
      <Navbar />
      <div className="left contact_info">
        <div className="content">
          <img src="" alt="" />
        </div>
      </div>
      <div className="right contact_info">
        <div className="content"></div>
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
