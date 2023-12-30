import React from "react";
import "./Contact.style.css";
import icon_star from "../../assets/icons/star.svg";
import icon_repository from "../../assets/icons/repository.svg";
import { Fade, Zoom } from "react-awesome-reveal";

const Contact = () => {
  return (
    <div id="contact" className="section">
      <div className="margin">
        <Fade direction="up" triggerOnce={true}>
          <div className="title">
            <h3>
              <span className="numbered_header">04. </span>
              What's next?
            </h3>
          </div>{" "}
        </Fade>
      </div>
      <Zoom direction="up" triggerOnce={true}>
        <div className="contact_content">
          <h3>Get In Touch</h3>
          <p>
            I'm currently looking for new opportunities and my inbox is always
            open. Whether you have a job proposition, a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
          <button className="header_btn">
            <a href="mailto:zivgl66@gmail.com">Say hello</a>
          </button>
        </div>
      </Zoom>
      <Fade direction="up" triggerOnce={true}>
        <div className="contact_footer">
          <div className="footer_link">
            <a href="https://github.com/Zivgl66/Portfolio" target="_blank">
              <p>Desinged & Built by Ziv Gliser</p>
              <p>
                <span>
                  <img src={icon_star} alt="star icon" />8
                </span>{" "}
                <span>
                  <img src={icon_repository} alt="reposirtory icon" />
                  21
                </span>
              </p>
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Contact;
