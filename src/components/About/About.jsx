import React from "react";
import "./About.style.css";
import profile_image from "../../assets/images/profile_image.jpeg";
import { Fade, Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <div id="about">
      <div className="title">
        <Fade direction="up" triggerOnce={true}>
          <h3>
            <span className="numbered_header">01. </span>
            About Me
          </h3>
        </Fade>
      </div>
      <div className="content">
        <Slide direction="left" triggerOnce={true}>
          <div className="left_side">
            <div className="paragraph">
              <p>
                Hello! My name is <span className="numbered_header">Ziv</span>{" "}
                and I enjoy creating things that live on the internet. My
                interest in web development started back in 2020 when I decided
                to try and become a{" "}
                <span className="numbered_header"> web developer </span> — turns
                out I fell in love with it right from the start!
              </p>
              <p>
                Fast-forward to today, and I’ve had the privilege of completing
                a Full-Stack Development course from{" "}
                <span className="numbered_header"> HackerU College. </span>{" "}
                After the course I really started my self taught joureny, I've
                learned so much this past year.
              </p>
              <p>
                Started working on all kinds of different technologies, I
                sharpened my skills and stayed ready for my first job
                opportunity!
              </p>
              <p>
                Here are a few{" "}
                <span className="numbered_header"> technologies</span> I’ve been
                working with recently:
              </p>
              <ul>
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Python</li>
                <li>C</li>
                <li>Angular</li>
              </ul>
            </div>
          </div>
        </Slide>
        <div className="right_side">
          <Slide direction="right" triggerOnce={true}>
            <div className="image_container">
              <img src={profile_image} alt="my profile image" />
              <div className="border"></div>
              <div className="overlay"></div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default About;
